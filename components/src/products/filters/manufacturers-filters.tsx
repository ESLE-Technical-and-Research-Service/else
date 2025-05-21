'use client';

import {Language, Manufacturer, ProductItem, ProductsCategories} from "../../types";
import {useState} from "react";
import FilterClearButton from "../../common/buttons/filter-clear-button";
import {GetLocalizedText, getManufacturersByCategory} from "../../utils";

type ManufacturersFiltersProps = {
    setProductsAction: (products: ProductItem[]) => void,
    allProducts: ProductItem[],
    category: ProductsCategories,
};

export default function ManufacturersFilters({
                                                 setProductsAction,
                                                 allProducts,
                                                 category,
                                             }: ManufacturersFiltersProps) {
    const [selectedManufacturers, setSelectedManufacturers] = useState<string[]>([]);

    const manufacturersHeaderText = {
        [Language.PL]: "Producenci:",
        [Language.ENG]: "Manufacturers:",
    };

    function handleSetFilter(manufacturerName: string, checked: boolean) {
        let updatedManufacturers: string[];
        if (checked) {
            updatedManufacturers = [...selectedManufacturers, manufacturerName];
        } else {
            updatedManufacturers = selectedManufacturers.filter(t => t !== manufacturerName);
        }
        setSelectedManufacturers(updatedManufacturers);

        if (updatedManufacturers.length === 0) {
            setProductsAction(allProducts);
        } else {
            const filteredProducts: ProductItem[] = allProducts.filter((product: ProductItem) =>
                    product.manufacturers && product.manufacturers.some(
                        (
                            manufacturer: Manufacturer | undefined) =>
                            manufacturer && updatedManufacturers.includes(manufacturer.name
                            )
                    )
            );
            setProductsAction(filteredProducts);
        }
    }

    function handleClearFilter() {
        setSelectedManufacturers([]);
        setProductsAction(allProducts);
    }

    const manufacturersForProductsByCategory: Manufacturer[] = getManufacturersByCategory(category);

    return (
        <main data-testid="manufacturers-filters-container" className="w-full bg-[var(--background)] rounded shadow p-4">
            <div className="flex justify-between items-center gap-2 mb-4">
                <h2 className="text-lg text-[var(--main-color)] font-semibold mb-0 p-0">
                    {GetLocalizedText(manufacturersHeaderText)}
                </h2>
                <FilterClearButton handleClearFilter={handleClearFilter}/>
            </div>
            <div data-testid="manufacturers-filters" className="flex flex-col gap-2">
                {
                    Object.values(manufacturersForProductsByCategory)
                        .sort((a: Manufacturer, b: Manufacturer) => a.name.localeCompare(b.name))
                        .map((manufacturer: Manufacturer, idx: number) => (
                            <div key={idx}>
                                <label key={idx} className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={selectedManufacturers.includes(manufacturer.name)}
                                        onChange={(e) => handleSetFilter(manufacturer.name, e.target.checked)}
                                    />
                                    <span className="text-black">
                                    {manufacturer.name}
                                </span>
                                </label>
                            </div>
                        ))
                }
            </div>
        </main>
    );
}