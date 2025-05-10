'use client';

import {useEffect, useMemo, useState} from "react";
import {Language, ProductItem, NavigationLinks, ProductsCategories, Tag} from "../../../../../components/src/types";
import {usePathname, useSearchParams} from "next/navigation";
import HeroImage from "../../../../../components/src/hero/hero-image";
import Breadcrumbs from "../../../../../components/src/common/breadcrumbs/breadcrumbs";
import {ArrowLeftIcon, ArrowRightIcon, FunnelIcon, XMarkIcon} from "@heroicons/react/24/outline";
import {waterSewageProductItems} from "../../../../../components/src/products/data/water-sewage-product-items";
import ProductsGrid from "../../../../../components/src/products/products-grid";
import {
    accessoriesItems,
    camerasItems,
    millingRobotsItems,
    pressureVehiclesItems
} from "../../../../../components/src/products/data/product-items";
import {useLanguage} from "../../../../../context/src/LanguageContext";
import getProductsCategoriesByPathname from "../../../../../components/src/utils/get-products-categories-by-pathname";
import getHeroImagesByPathname from "../../../../../components/src/utils/get-hero-images-by-pathname";
import HeroTitleByPathName from "../../../../../components/src/utils/get-hero-title-by-pathname";
import BackButton from "../../../../../components/src/common/buttons/back-button";
import Image, {StaticImageData} from "next/image";
import {accessoriesCategories} from "../../../../../components/src/products/data/categories";
import NextButton from "../../../../../components/src/common/buttons/next-button";
import PreviousButton from "../../../../../components/src/common/buttons/previous-button";
import logo from "../../../../../assets/images/logoElse.webp";
import TechnologyFilters from "../../../../../components/src/products/filters/technology-filters";
import CategoryFilters from "../../../../../components/src/products/filters/category-filters";

export default function WaterSewageProductLayout() {
    const {language} = useLanguage();
    const pathname = usePathname();
    const slug = pathname?.split("/").pop();
    const searchParams = useSearchParams();

    const baseProducts: ProductItem[] = useMemo(() => {
        if (slug === NavigationLinks.CAMERAS) return camerasItems;
        if (slug === NavigationLinks.PRESSURE_VEHICLES) return pressureVehiclesItems;
        if (slug === NavigationLinks.MILLING_ROBOTS) return millingRobotsItems;
        if (slug === NavigationLinks.ACCESSORIES) return accessoriesItems;
        return waterSewageProductItems;
    }, [slug]);

    const filteredProducts: ProductItem[] = useMemo(() => {
        const productName = searchParams.get("name");
        if (!productName) return baseProducts;
        return baseProducts.filter((prod: ProductItem) =>
            prod.tags?.some((tag: Tag | undefined) => tag?.link.split('?name=').pop() === productName)
        );
    }, [baseProducts, searchParams]);

    const [allProducts, setAllProducts] = useState<ProductItem[]>(filteredProducts);

    useEffect(() => {
        setAllProducts(filteredProducts);
    }, [filteredProducts]);

    const [products, setProducts] = useState<ProductItem[]>(filteredProducts);
    const [showFilters, setShowFilters] = useState<boolean>(false);

    const productImageSlides: StaticImageData[] = getHeroImagesByPathname(slug ?? '');
    const productsCategories: ProductsCategories = getProductsCategoriesByPathname(slug ?? '');

    const [currentPage, setCurrentPage] = useState(1);
    const PRODUCTS_PER_PAGE = 16;
    const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);
    const paginatedProducts = products.slice((currentPage - 1) * PRODUCTS_PER_PAGE, currentPage * PRODUCTS_PER_PAGE);

    useEffect(() => {
        setCurrentPage(1);
    }, [products]);

    if (!Object.values(NavigationLinks).includes(slug as NavigationLinks)) {
        return (
            <main className="w-full overflow-y-auto bg-[var(--foreground)]">
                <div className="hidden md:flex w-full max-w-screen-2xl mx-auto mt-8 pt-4 pb-2">
                    <Breadcrumbs/>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <Image src={logo} alt="ELSE logo"/>
                    <h2 className="text-2xl font-bold mt-8 text-center text-gray-800">
                        {language === Language.PL ? "Wybrana kategoria nie istnieje" : "Selected category does not exist"}
                    </h2>
                    <div className="w-full flex justify-center pt-4 pb-2 mb-8">
                        <BackButton/>
                    </div>
                </div>
            </main>
        )
    }
    ;

    return (
        <main
            data-testid={`water-sewage-product-container-${slug}`}
            className="w-full overflow-y-auto bg-[var(--foreground)] mb-14 mt-4"
        >
            <HeroImage
                heroSlides={productImageSlides}
                heroTitle={<HeroTitleByPathName pathname={slug ?? ''} language={language}/>}
                heroHeight={30}
            />

            <div
                data-testid={`water-sewage-product-breadcrumbs-container-${slug}`}
                className="hidden md:flex w-full max-w-screen-2xl mx-auto pt-4 pb-2"
            >
                <Breadcrumbs/>
            </div>

            {/* Mobile Filters Button */}
            <div
                data-testid="water-sewage-product-filters-button-container"
                className="md:hidden px-4 pt-4"
            >
                <button
                    data-testid="water-sewage-products-filters-open-button"
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
                        <button
                            data-testid="water-sewage-products-filters-close-button"
                            className="self-end mb-4"
                            onClick={() => setShowFilters(false)}
                        >
                            <XMarkIcon className="h-6 w-6 text-gray-800"/>
                        </button>
                        <TechnologyFilters
                            setProductsAction={setProducts}
                            allProducts={allProducts}
                            categories={productsCategories}
                        />
                    </div>
                </div>
            )}

            {/* Desktop Layout: Sidebar Filters + Products Grid (aligned with breadcrumbs, grid sizing unchanged) */}
            <div
                data-testid={`water-sewage-product-desktop-layout-container-${slug}`}
                className="hidden md:flex flex-row gap-1 justify-center items-start w-full max-w-screen-2xl mx-auto px-4 py-0"
            >
                <div className="w-80 shrink-0 mt-8">
                    {slug === NavigationLinks.ACCESSORIES && (
                        <CategoryFilters
                            setProductsAction={setProducts}
                            allProducts={allProducts}
                            categories={accessoriesCategories}
                        />
                    )}
                    <TechnologyFilters
                        setProductsAction={setProducts}
                        allProducts={allProducts}
                        categories={productsCategories}
                    />
                </div>
                <div
                    data-testid={`water-sewage-product-grid-container-${slug}`}
                    className="flex-1"
                >
                    <ProductsGrid products={paginatedProducts}/>
                    {/* Pagination Controls */}
                    {totalPages > 1 && (
                        <div
                            className="flex justify-center items-center gap-2 mt-6"
                        >
                            <PreviousButton
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                                language={language}
                            />
                            {Array.from({length: totalPages}, (_, i) => (
                                <button
                                    key={i}
                                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-blue-200 font-semibold shadow text-base transition-all duration-150 focus:outline-none focus:ring-[var(--main-color-secondary)] focus:ring-2 focus:border-[var(--main-color-secondary)] z-10 ${currentPage === i + 1 ? 'bg-blue-100 text-[var(--main-color)] border-blue-400 scale-105' : 'bg-white/80 text-gray-700 hover:bg-blue-50 hover:border-blue-300'}`}
                                    onClick={() => setCurrentPage(i + 1)}
                                >
                                    {i + 1}
                                </button>
                            ))}
                            <NextButton
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                                totalPages={totalPages}
                                language={language}
                            />
                        </div>
                    )}
                </div>
            </div>

            {/* ProductsGrid: Mobile Only */}
            <div
                data-testid={`water-sewage-product-mobile-layout-container-${slug}`}
                className="md:hidden px-4 py-8"
            >
                <ProductsGrid products={paginatedProducts}/>
                {/* Pagination Controls */}
                {totalPages > 1 && (
                    <div
                        data-testid="water-sewage-products-mobile-pagination-controls-container"
                        className="flex justify-center items-center gap-2 mt-6"
                    >
                        <button
                            className="inline-flex items-center gap-2 px-5 py-2 rounded-xl border border-blue-300 bg-white/80 hover:bg-blue-50 text-[var(--main-color)] font-semibold shadow transition-all duration-150 text-base focus:outline-none focus:ring-[var(--main-color-secondary)] focus:ring-2 focus:border-[var(--main-color-secondary)] hover:-translate-y-0.5 z-10 disabled:opacity-50 disabled:cursor-not-allowed"
                            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                            disabled={currentPage === 1}
                        >
                            <ArrowLeftIcon className="h-5 w-5 text-gray-800" />
                        </button>
                        {Array.from({length: totalPages}, (_, i) => (
                            <button
                                key={i}
                                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-blue-200 font-semibold shadow text-base transition-all duration-150 focus:outline-none focus:ring-[var(--main-color-secondary)] focus:ring-2 focus:border-[var(--main-color-secondary)] z-10 ${currentPage === i + 1 ? 'bg-blue-100 text-[var(--main-color)] border-blue-400 scale-105' : 'bg-white/80 text-gray-700 hover:bg-blue-50 hover:border-blue-300'}`}
                                onClick={() => setCurrentPage(i + 1)}
                            >
                                {i + 1}
                            </button>
                        ))}
                        <button
                            className="inline-flex items-center gap-2 px-5 py-2 rounded-xl border border-blue-300 bg-white/80 hover:bg-blue-50 text-[var(--main-color)] font-semibold shadow transition-all duration-150 text-base focus:outline-none focus:ring-[var(--main-color-secondary)] focus:ring-2 focus:border-[var(--main-color-secondary)] hover:-translate-y-0.5 z-10 disabled:opacity-50 disabled:cursor-not-allowed"
                            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                            disabled={currentPage === totalPages}
                        >
                            <ArrowRightIcon className="h-5 w-5 text-gray-800" />
                        </button>
                    </div>
                )}
            </div>

            <div className="hidden md:flex w-full max-w-screen-2xl mx-auto pt-4 pb-2 mb-4 justify-center">
                <BackButton/>
            </div>
        </main>
    );
}
