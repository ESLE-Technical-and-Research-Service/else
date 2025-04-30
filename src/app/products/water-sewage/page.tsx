'use client';

import Breadcrumbs from "../../../../components/src/common/breadcrumbs/breadcrumbs";
import ProductsGrid from "../../../../components/src/products/products-grid";
import {ProductsCategories} from "../../../../components/src/types/ProductsCategories";
import ManufacturersFilters from "../../../../components/src/products/filters/manufacturers-filters";
import {useEffect, useState} from "react";
import {ProductItem} from "../../../../components/src/types/ProductItem";
import TechnologyFilters from "../../../../components/src/products/filters/technology-filters";
import {camerasItems, pressureVehiclesItems} from "../../../../components/src/products/data/product-items";
import CategoryFilters from "../../../../components/src/products/filters/category-filters";
import {waterSewageProductItems} from "../../../../components/src/products/data/water-sewage-product-items";
import {Category} from "../../../../components/src/types/Category";
import {waterSewageCategories} from "../../../../components/src/products/data/categories";
import BackButton from "../../../../components/src/common/buttons/back-button";
import {useLanguage} from "../../../../context/src/LanguageContext";
import {Language} from "../../../../context/src/types/Language";

export default function WaterAndSewageProducts() {
    const {language} = useLanguage();
    const [products, setProducts] = useState<ProductItem[]>([]);
    const [allProducts, setAllProducts] = useState<ProductItem[]>(waterSewageProductItems);
    const allCategories: Category[] = waterSewageCategories;

    const waterSewageProducts = [
        ...camerasItems,
        ...pressureVehiclesItems,
    ];
    const sortedProducts = waterSewageProducts.sort((a: ProductItem, b: ProductItem) => (
        language === Language.PL
            ? a.name.namePL.localeCompare(b.name.namePL)
            : a.name.nameENG.localeCompare(b.name.nameENG)
    ));

    useEffect(() => {
        function setupProducts() {
            setAllProducts(sortedProducts)
            setProducts(sortedProducts);
        }
        setupProducts()
    }, []);

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
                            setProducts={setProducts}
                            allProducts={allProducts}
                            category={ProductsCategories.CAMERAS}
                        />
                        <CategoryFilters
                            setProducts={setProducts}
                            allProducts={allProducts}
                            categories={allCategories}
                        />
                        <TechnologyFilters
                            setProducts={setProducts}
                            allProducts={allProducts}
                            categories={ProductsCategories.WATER_SEWAGE}
                        />
                    </div>
                    <div className="flex-1">
                        <ProductsGrid products={products}/>
                    </div>
                </div>
                <div className="hidden md:flex w-full max-w-screen-2xl mx-auto pt-4 pb-2 mb-4 justify-center">
                    <BackButton />
                </div>
            </div>
        </main>
    )
}