'use client';

import {useLanguage} from "../../../../context/src/LanguageContext";
import {Category} from "../../types/Category";
import {Language} from "../../../../context/src/types/Language";
import {useState} from "react";
import {ProductItem} from "../../types/ProductItem";
import FilterClearButton from "../../common/buttons/filter-clear-button";

type CategoryFiltersProps = {
    setProducts: (products: ProductItem[]) => void,
    allProducts: ProductItem[],
    categories: Category[],
}

export default function CategoryFilters({setProducts, allProducts, categories}: CategoryFiltersProps) {
    const {language} = useLanguage();
    const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);

    function handleCategoryChange(category: Category, checked: boolean) {
        let updatedCategories: Category[];

        if (checked) {
            updatedCategories = [...selectedCategories, category];
        } else {
            updatedCategories = selectedCategories.filter((cat: Category) => cat.nameENG !== category.nameENG);
        }
        setSelectedCategories(updatedCategories);

        if (updatedCategories.length === 0) {
            setProducts(allProducts);
        } else {
            const filteredProducts: ProductItem[] = allProducts.filter((product: ProductItem) =>
                    product.category && product.category.some(
                        (cat: Category | undefined) => cat && updatedCategories.includes(cat)
                    )
            );
            setProducts(filteredProducts);
        }
    }

    function handleClearFilter() {
        setSelectedCategories([]);
        setProducts(allProducts);
    }

    return (
        <main className="w-full bg-white shadow p-4">
            <div className="flex justify-between items-center gap-2 mb-4">
                <h2 className="text-lg text-[var(--main-color)] font-semibold mb-0 p-0">
                    {
                        language === "PL"
                            ? "Kategorie"
                            : "Categories"
                    }
                </h2>
                <FilterClearButton language={language} handleClearFilter={handleClearFilter}/>
            </div>
            <div className="flex flex-col gap-2">
                {
                    Object.values(categories)
                        .sort((a: Category, b: Category) =>
                            (language === Language.PL ? a.namePL.localeCompare(b.namePL) : a.nameENG.localeCompare(b.nameENG)))
                        .map((category: Category, indx: number) => (
                            <label key={indx} className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="form-checkbox h-4 w-4 text-blue-600 accent-[var(--main-color)]"
                                    checked={selectedCategories.includes(category)}
                                    onChange={e => handleCategoryChange(category, e.target.checked)}
                                />
                                <span className="text-black">
                                  {language === Language.PL ? category.namePL : category.nameENG}
                              </span>
                            </label>
                        ))
                }
            </div>
        </main>
    )
}