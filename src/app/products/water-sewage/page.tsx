'use client';

import Breadcrumbs from "../../../../components/src/common/breadcrumbs/breadcrumbs";
import ProductsGrid from "../../../../components/src/products/products-grid";
import {Category, Language, ProductItem, ProductsCategories} from "../../../../components/src/types";
import ManufacturersFilters from "../../../../components/src/products/filters/manufacturers-filters";
import {Suspense, useEffect, useMemo, useState} from "react";
import TechnologyFilters from "../../../../components/src/products/filters/technology-filters";
import {
    accessoriesItems,
    camerasItems,
    millingRobotsItems,
    pressureVehiclesItems
} from "../../../../components/src/products/data/product-items";
import CategoryFilters from "../../../../components/src/products/filters/category-filters";
import {waterSewageProductItems} from "../../../../components/src/products/data/water-sewage-product-items";
import {waterSewageCategories} from "../../../../components/src/products/data/categories";
import BackButton from "../../../../components/src/common/buttons/back-button";
import {useLanguage} from "../../../../context/src/LanguageContext";
import NextButton from "../../../../components/src/common/buttons/next-button";
import PreviousButton from "../../../../components/src/common/buttons/previous-button";
import PageButton from "../../../../components/src/common/buttons/page-button";
import {ArrowLeftIcon, ArrowRightIcon, FunnelIcon, XMarkIcon} from "@heroicons/react/24/outline";
import {GetLocalizedText} from "../../../../components/src/utils";

export default function WaterAndSewageProducts() {
    const {language} = useLanguage();
    const [products, setProducts] = useState<ProductItem[]>([]);
    const [allProducts, setAllProducts] = useState<ProductItem[]>(waterSewageProductItems);
    const allCategories: Category[] = waterSewageCategories;

    const waterSewageProducts: ProductItem[] = useMemo(() => [
        ...camerasItems,
        ...pressureVehiclesItems,
        ...millingRobotsItems,
        ...accessoriesItems,
    ], []);

    const sortedProducts: ProductItem[] = useMemo(() =>
            waterSewageProducts.sort((a: ProductItem, b: ProductItem) => {
                // Bezpieczne sprawdzanie właściwości 'name' i odpowiednich języków
                const aNamePL = a.name?.[Language.PL] || '';
                const bNamePL = b.name?.[Language.PL] || '';
                const bNameENG = b.name?.[Language.ENG] || '';

                return language === Language.PL
                    ? aNamePL.localeCompare(bNamePL)
                    : aNamePL.localeCompare(bNameENG);
            })
                .sort((a: ProductItem, b: ProductItem) => {
                    // Bezpieczne sprawdzanie właściwości 'category' i 'name'
                    const aCategory = a.category?.[0]?.name?.[Language.ENG] || '';
                    const bCategory = b.category?.[0]?.name?.[Language.ENG] || '';

                    return aCategory.localeCompare(bCategory);
                }),
        [language, waterSewageProducts]
    );

    useEffect(() => {
        function setupProducts() {
            setAllProducts(sortedProducts)
            setProducts(sortedProducts);
        }

        setupProducts()
    }, [sortedProducts]);

    const [currentPage, setCurrentPage] = useState(1);
    const PRODUCTS_PER_PAGE = 16;
    const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);
    const paginatedProducts = products.slice((currentPage - 1) * PRODUCTS_PER_PAGE, currentPage * PRODUCTS_PER_PAGE);

    const [showFilters, setShowFilters] = useState<boolean>(false);

    const filtersHeaderText = {
        [Language.PL]: "Filtry:",
        [Language.ENG]: "Filters:",
    };

    const filtersLoadingText = {
        [Language.PL]: "Ładowanie filtrów...",
        [Language.ENG]: "Loading filters...",
    };

    useEffect(() => {
        setCurrentPage(1);
    }, [products]);

    return (
        <main data-testid="water-sewage-department-products" className="w-full overflow-y-auto bg-[var(--foreground)]">
            <div className=" mb-14 mt-4">
                <div
                    data-testid="water-sewage-departments-products-breadcrumbs"
                    className="hidden md:flex w-full max-w-6xl mx-auto pt-4 pb-2"
                >
                    <Breadcrumbs/>
                </div>

                {/* Mobile Filters Button */}
                <div
                    data-testid="water-sewage-product-filters-button-container-mobile"
                    className="md:hidden px-4 pt-4"
                >
                    <button
                        data-testid="water-sewage-products-filters-open-button"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-200 rounded text-gray-800"
                        onClick={() => setShowFilters(true)}
                    >
                        <FunnelIcon className="h-5 w-5"/>
                        {GetLocalizedText(filtersHeaderText)}
                    </button>
                </div>

                {/* Mobile Filters Drawer */}
                {showFilters && (
                    <div
                        data-testid="water-sewage-departments-products-filters-drawer"
                        className="fixed inset-0 z-40 flex"
                    >
                        <div className="absolute inset-0 bg-black opacity-40"
                             onClick={() => setShowFilters(false)}></div>
                        <div
                            data-testid="water-sewage-departments-products-filters-close-button-container"
                            className="relative bg-[var(--background)] w-72 max-w-full h-full max-h-screen
                            shadow-lg z-50 p-4 flex flex-col overflow-y-auto">
                            <button
                                className="self-end mb-4"
                                onClick={() => setShowFilters(false)}
                            >
                                <XMarkIcon
                                    data-testid="water-sewage-departments-products-filters-close-button"
                                    className="h-6 w-6 text-gray-800"
                                />
                            </button>
                            <Suspense fallback={
                                <div>{GetLocalizedText(filtersLoadingText)}</div>}>
                                <ManufacturersFilters
                                    setProductsAction={setProducts}
                                    allProducts={allProducts}
                                    category={ProductsCategories.WATER_SEWAGE}
                                />
                                <CategoryFilters
                                    setProductsAction={setProducts}
                                    allProducts={allProducts}
                                    categories={allCategories}
                                />
                                <TechnologyFilters
                                    setProductsAction={setProducts}
                                    allProducts={allProducts}
                                    categories={ProductsCategories.WATER_SEWAGE}
                                />
                            </Suspense>
                        </div>
                    </div>
                )}

                {/*    Desktop version      */}
                <div
                    className="hidden md:flex flex-row gap-1 justify-center items-start w-full  max-w-6xl mx-auto px-4 py-0"
                >
                    <div data-testid="water-sewage-departments-products-filters" className="w-70 shrink-0 mt-8">
                        <ManufacturersFilters
                            setProductsAction={setProducts}
                            allProducts={allProducts}
                            category={ProductsCategories.WATER_SEWAGE}
                        />
                        <CategoryFilters
                            setProductsAction={setProducts}
                            allProducts={allProducts}
                            categories={allCategories}
                        />
                        <Suspense fallback={
                            <div>{GetLocalizedText(filtersLoadingText)}</div>}>
                            <TechnologyFilters
                                setProductsAction={setProducts}
                                allProducts={allProducts}
                                categories={ProductsCategories.WATER_SEWAGE}
                            />
                        </Suspense>
                    </div>
                    <div className="flex-1">
                        <ProductsGrid products={paginatedProducts}/>

                        {/* Pagination Controls */}
                        {totalPages > 1 && (
                            <div
                                data-testid="water-sewage-department-products-pagination-controls"
                                className="flex justify-center items-center gap-2 mt-6"
                            >
                                <PreviousButton
                                    currentPage={currentPage}
                                    setCurrentPage={setCurrentPage}
                                />
                                {Array.from({length: totalPages}, (_, i) => (
                                    <PageButton page={i + 1} currentPage={currentPage} setCurrentPage={setCurrentPage}
                                                key={i}/>
                                ))}
                                <NextButton
                                    currentPage={currentPage}
                                    setCurrentPage={setCurrentPage}
                                    totalPages={totalPages}
                                />
                            </div>
                        )}
                    </div>
                </div>

                {/* ProductsGrid: Mobile Only */}
                <div className="md:hidden px-4 py-8">
                    <ProductsGrid products={paginatedProducts}/>
                    {/* Pagination Controls */}
                    {totalPages > 1 && (
                        <div className="flex justify-center items-center gap-2 mt-6">
                            <button
                                className="inline-flex items-center gap-2 px-5 py-2 rounded-xl border
                                border-blue-300 bg-[var(--background)]/80 hover:bg-blue-50 text-[var(--main-color)]
                                font-semibold shadow transition-all duration-150 text-base focus:outline-none
                                focus:ring-[var(--main-color-secondary)] focus:ring-2
                                focus:border-[var(--main-color-secondary)] hover:-translate-y-0.5 z-10
                                disabled:opacity-50 disabled:cursor-not-allowed"
                                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                disabled={currentPage === 1}
                            >
                                <ArrowLeftIcon className="h-5 w-5 text-gray-800"/>
                            </button>
                            {Array.from({length: totalPages}, (_, i) => (
                                <button
                                    key={i}
                                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl border 
                                    border-blue-200 font-semibold shadow text-base transition-all duration-150 
                                    focus:outline-none focus:ring-[var(--main-color-secondary)] focus:ring-2 
                                    focus:border-[var(--main-color-secondary)] z-10 ${
                                        currentPage === i + 1
                                            ? 'bg-blue-100 text-[var(--main-color)] border-blue-400 scale-105'
                                            : 'bg-[var(--background)]/80 text-gray-700 hover:bg-blue-50 hover:border-blue-300'}
                                            `}
                                    onClick={() => setCurrentPage(i + 1)}
                                >
                                    {i + 1}
                                </button>
                            ))}
                            <button
                                className="inline-flex items-center gap-2 px-5 py-2 rounded-xl border border-blue-300
                                 bg-[var(--background)]/80 hover:bg-blue-50 text-[var(--main-color)] font-semibold shadow
                                 transition-all duration-150 text-base focus:outline-none
                                 focus:ring-[var(--main-color-secondary)] focus:ring-2
                                 focus:border-[var(--main-color-secondary)] hover:-translate-y-0.5 z-10
                                 disabled:opacity-50 disabled:cursor-not-allowed"
                                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                                disabled={currentPage === totalPages}
                            >
                                <ArrowRightIcon className="h-5 w-5 text-gray-800"/>
                            </button>
                        </div>
                    )}
                </div>

                <div className="flex md:flex w-full max-w-screen-2xl mx-auto pt-4 pb-2 mb-4 justify-center">
                    <BackButton/>
                </div>
            </div>
        </main>
    )
}