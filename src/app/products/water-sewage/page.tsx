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

    const sortedProducts: ProductItem[] = useMemo(() => waterSewageProducts.sort((a: ProductItem, b: ProductItem) => (
        language === Language.PL
            ? a.name.namePL.localeCompare(b.name.namePL)
            : a.name.nameENG.localeCompare(b.name.nameENG)
    )), [language, waterSewageProducts])
        .sort((a: ProductItem, b: ProductItem) => a.category && b.category ? a.category[0].nameENG.localeCompare(b.category[0].nameENG) : 0);

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

    useEffect(() => {
        setCurrentPage(1);
    }, [products]);

    return (
        <main className="w-full overflow-y-auto bg-[var(--foreground)]">
            <div className=" mb-14 mt-4">
                <div className="hidden md:flex w-full max-w-screen-2xl mx-auto pt-4 pb-2">
                    <Breadcrumbs/>
                </div>

                {/*    Desktop version      */}
                <div
                    className="hidden md:flex flex-row gap-1 justify-center items-start w-full max-w-screen-2xl mx-auto px-4 py-0"
                >
                    <div className="w-80 shrink-0 mt-8">
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
                        <Suspense fallback={<div>Loading filters...</div>}>
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
                            <div className="flex justify-center items-center gap-2 mt-6">
                                <PreviousButton
                                    currentPage={currentPage}
                                    setCurrentPage={setCurrentPage}
                                    language={language}
                                />
                                {Array.from({length: totalPages}, (_, i) => (
                                    <PageButton page={i + 1} currentPage={currentPage} setCurrentPage={setCurrentPage} key={i} />
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
                <div className="hidden md:flex w-full max-w-screen-2xl mx-auto pt-4 pb-2 mb-4 justify-center">
                    <BackButton />
                </div>
            </div>
        </main>
    )
}