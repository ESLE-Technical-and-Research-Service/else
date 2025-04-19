'use client';

import {ProductItem} from "../../types/ProductItem";
import {ProductsCategories} from "../../types/ProductsCategories";
import {useLanguage} from "../../../../context/src/LanguageContext";
import {useState} from "react";
import {Manufacturer} from "../../types/Manufacturer";
import {IBAK} from "../data/manufacturers/IBAK";
import {Language} from "../../../../context/src/types/Language";
import { BECK } from "../data/manufacturers/BECK";
import {NUOVACONTEC} from "../data/manufacturers/NUOVACONTEC";

type ManufacturersFiltersProps = {
    setProducts: (products: ProductItem[]) => void,
    allProducts: ProductItem[],
    category: ProductsCategories,
};

export default function ManufacturersFilters({
                                                 setProducts,
                                                 allProducts,
                                                 category,
                                             }: ManufacturersFiltersProps) {
    const {language} = useLanguage();
    const [selectedManufacturers, setSelectedManufacturers] = useState<string[]>([]);

    function handleSetFilter(manufacturerName: string, checked: boolean) {
        let updatedManufacturers: string[];
        if (checked) {
            updatedManufacturers = [...selectedManufacturers, manufacturerName];
        } else {
            updatedManufacturers = selectedManufacturers.filter(t => t !== manufacturerName);
        }
        setSelectedManufacturers(updatedManufacturers);

        if (updatedManufacturers.length === 0) {
            setProducts(allProducts);
        } else {
            const filteredProducts: ProductItem[] = allProducts.filter((product: ProductItem) =>
                    product.manufacturers && product.manufacturers.some(
                        (
                            manufacturer: Manufacturer | undefined) =>
                            manufacturer && updatedManufacturers.includes(manufacturer.name
                            )
                    )
            );
            setProducts(filteredProducts);
        }
    }

    const manufacturersForProductsByCategory = manufacturersByCategory(category);

    return (
        <main className="w-full bg-white rounded shadow p-4">
            <h2 className="text-lg text-[var(--main-color)] font-semibold mb-4">
                {language === Language.PLN ? "Producenci:" : "Manufacturers:"}
            </h2>
            <div className="flex flex-col gap-2">
                {
                    Object.values(manufacturersForProductsByCategory)
                        .sort((a: Manufacturer, b: Manufacturer) => a.name.localeCompare(b.name))
                        .map((manufacturer: Manufacturer, idx: number) => (
                            <label key={idx} className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={selectedManufacturers.includes(manufacturer.name)}
                                    onChange={(e) => handleSetFilter(manufacturer.name, e.target.checked)}
                                />
                                <span className="text-black">
                                    {manufacturer.name.toUpperCase()}
                                </span>
                            </label>
                        ))
                }
            </div>
        </main>
    );
}

function manufacturersByCategory(category: ProductsCategories): Manufacturer[] {
    switch (category) {
        case ProductsCategories.CAMERAS:
            return [IBAK, BECK, NUOVACONTEC];
        case ProductsCategories.PRESSURE_VEHICLES:
            return [];
        case ProductsCategories.MILLING_ROBOTS:
            return [];
        case ProductsCategories.ACCESSORIES:
            return [];
    }
}