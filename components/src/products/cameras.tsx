'use client';

import HeroImage from "../hero/hero-image";
import {getCamerasHeroImagesSlides} from "../hero/hero-images-list";
import HeroCamerasTitle from "../hero/hero-cameras-title";
import ProductsGrid from "./products-grid";
import {camerasItems} from "./data/camerasItems";
import {useEffect, useState} from "react";
import {ProductItem} from "../types/ProductItem";
import ProductsFilters from "./filters/products-filters";
import {ProductsCategories} from "../types/ProductsCategories";
import {FunnelIcon, XMarkIcon} from "@heroicons/react/24/outline";
import ManufacturersFilters from "./filters/manufacturers-filters";
import Breadcrumbs from "../common/breadcrumbs/breadcrumbs";
import {useSearchParams} from "next/navigation";
import {Tag} from "../types/Tag";

export default function Cameras() {
    const [camerasProducts, setCamerasProducts] = useState<ProductItem[]>(camerasItems);
    const [allCamerasProducts] = useState<ProductItem[]>(camerasItems);
    const [showFilters, setShowFilters] = useState(false);
    const searchParams = useSearchParams();

    useEffect(() => {
        const productName = searchParams.get("name");

        if (productName) {
            const filteredProducts = allCamerasProducts
                .filter(
                    (prod: ProductItem) => prod.tags?.some((tag: Tag | undefined) => tag?.link.split('?name=').pop() === productName)
                );
            setCamerasProducts(filteredProducts);
        }

    }, [allCamerasProducts, searchParams]);

    const camerasImagesSlides = getCamerasHeroImagesSlides();

    return (
        <main className="w-full overflow-y-auto bg-[var(--foreground)] mb-14 mt-4">
            <HeroImage heroSlides={camerasImagesSlides} heroTitle={<HeroCamerasTitle/>} heroHeight={30}/>
            {/* Desktop Breadcrumbs above filters/grid, aligned with columns */}
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
                        <ManufacturersFilters
                            setProducts={setCamerasProducts}
                            allProducts={allCamerasProducts}
                            category={ProductsCategories.CAMERAS}
                        />
                        <ProductsFilters
                            setProducts={setCamerasProducts}
                            allProducts={allCamerasProducts}
                            category={ProductsCategories.CAMERAS}
                        />
                    </div>
                </div>
            )}

            {/* Desktop Layout: Sidebar Filters + Products Grid (aligned with breadcrumbs, grid sizing unchanged) */}
            <div
                className="hidden md:flex flex-row gap-1 justify-center items-start w-full max-w-screen-2xl mx-auto px-4 py-0">
                <div className="w-80 shrink-0 mt-8">
                    <ProductsFilters
                        setProducts={setCamerasProducts}
                        allProducts={allCamerasProducts}
                        category={ProductsCategories.CAMERAS}
                    />
                </div>
                <div className="flex-1">
                    <ProductsGrid products={camerasProducts}/>
                </div>
            </div>
            {/* ProductsGrid: Mobile Only */}
            <div className="md:hidden px-4 py-8">
                <ProductsGrid products={camerasProducts}/>
            </div>
        </main>
    )
}