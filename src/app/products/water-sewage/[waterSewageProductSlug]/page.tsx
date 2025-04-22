'use client';

import {useEffect, useState} from "react";
import {ProductItem} from "../../../../../components/src/types/ProductItem";
import {usePathname, useSearchParams} from "next/navigation";
import {Tag} from "../../../../../components/src/types/Tag";
import {ProductLinks} from "../../../../../components/src/types/products";
import HeroImage from "../../../../../components/src/hero/hero-image";
import Breadcrumbs from "../../../../../components/src/common/breadcrumbs/breadcrumbs";
import {FunnelIcon, XMarkIcon} from "@heroicons/react/24/outline";
import TechnologyFilters from "../../../../../components/src/products/filters/technology-filters";
import {waterSewageProductItems} from "../../../../../components/src/products/data/water-sewage-product-items";
import ProductsGrid from "../../../../../components/src/products/products-grid";
import {camerasItems, pressureVehiclesItems} from "../../../../../components/src/products/data/product-items";
import {useLanguage} from "../../../../../context/src/LanguageContext";
import getProductsByPathname from "../../../../../components/src/utils/get-products-by-pathname";
import getHeroImagesByPathname from "../../../../../components/src/utils/get-hero-images-by-pathname";
import HeroTitleByPathnamegetHeroTitle from "../../../../../components/src/utils/get-hero-title-by-pathname";
import BackButton from "../../../../../components/src/common/buttons/back-button";

export default function WaterSewageProductLayout() {
    const {language} = useLanguage();
    const [products, setProducts] = useState<ProductItem[]>([]);
    const [allProducts, setAllProducts] = useState<ProductItem[]>(waterSewageProductItems);
    const [showFilters, setShowFilters] = useState<boolean>(false);
    const pathname = usePathname();
    const slug = pathname?.split("/").pop();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (slug) {
            if (slug === ProductLinks.CAMERAS) {
                setProducts(camerasItems);
            } else if (slug === ProductLinks.PRESSURE_VEHICLES) {
                setProducts(pressureVehiclesItems);
            } else {
                setProducts(waterSewageProductItems);
            }
        }

        const productName = searchParams.get("name");

        if (productName) {
            const filteredProducts = allProducts
                .filter(
                    (prod: ProductItem) => prod.tags?.some((tag: Tag | undefined) => tag?.link.split('?name=').pop() === productName)
                );
            setAllProducts(filteredProducts);
        }
    }, [allProducts, searchParams, slug]);

    const productImageSlides = getHeroImagesByPathname(slug ?? '');
    const productsCategories = getProductsByPathname(slug ?? '');

    return (
        <main className="w-full overflow-y-auto bg-[var(--foreground)] mb-14 mt-4">
            <HeroImage
                heroSlides={productImageSlides}
                heroTitle={<HeroTitleByPathnamegetHeroTitle productType={slug ?? ''} language={language}/>}
                heroHeight={30}
            />

            <div className="hidden md:flex w-full max-w-screen-2xl mx-auto pt-4 pb-2">
                <Breadcrumbs/>
            </div>

            {/* Mobile Filters Button */}
            <div className="md:hidden px-4 pt-4">
                <button
                    className="flex items-center gap-2 px-4 py-2 bg-gray-200 rounded text-gray-800"
                    onClick={() => setShowFilters(true)}
                >
                    <FunnelIcon className="h-5 w-5"/>
                    Filters
                </button>
            </div>

            {/* Mobile Filters Drawer */}
            {showFilters && (
                <div className="fixed inset-0 z-40 flex">
                    <div className="absolute inset-0 bg-black opacity-40" onClick={() => setShowFilters(false)}></div>
                    <div
                        className="relative bg-white w-72 max-w-full h-full max-h-screen shadow-lg z-50 p-4 flex flex-col overflow-y-auto">
                        <button className="self-end mb-4" onClick={() => setShowFilters(false)}>
                            <XMarkIcon className="h-6 w-6 text-gray-800"/>
                        </button>
                        <TechnologyFilters
                            setProducts={setProducts}
                            allProducts={allProducts}
                            categories={productsCategories}
                        />
                    </div>
                </div>
            )}

            {/* Desktop Layout: Sidebar Filters + Products Grid (aligned with breadcrumbs, grid sizing unchanged) */}
            <div
                className="hidden md:flex flex-row gap-1 justify-center items-start w-full max-w-screen-2xl mx-auto px-4 py-0">
                <div className="w-80 shrink-0 mt-8">
                    <TechnologyFilters
                        setProducts={setProducts}
                        allProducts={allProducts}
                        categories={productsCategories}
                    />
                </div>
                <div className="flex-1">
                    <ProductsGrid products={products}/>
                </div>
            </div>
            {/* ProductsGrid: Mobile Only */}
            <div className="md:hidden px-4 py-8">
                <ProductsGrid products={products}/>
            </div>

            <div className="hidden md:flex w-full max-w-screen-2xl mx-auto pt-4 pb-2 mb-4 justify-center">
                <BackButton />
            </div>
        </main>
    );
}
