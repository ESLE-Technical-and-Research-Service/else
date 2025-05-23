'use client';

import {useLanguage} from "../../../../context/src/LanguageContext";
import {Category, Language, ProductItem} from "../../types";
import {useState} from "react";
import FilterClearButton from "../../common/buttons/filter-clear-button";
import {GetLocalizedText} from "../../utils";

type CategoryFiltersProps = {
    setProductsAction: (products: ProductItem[]) => void,
    allProducts: ProductItem[],
    categories: Category[],
}

export default function CategoryFilters({setProductsAction, allProducts, categories}: CategoryFiltersProps) {
    const {language} = useLanguage();
    const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);

    const categoriesHeaderText = {
        [Language.PL]: "Kategorie",
        [Language.ENG]: "Categories"
    };

    function handleCategoryChange(category: Category, checked: boolean) {
        let updatedCategories: Category[];

        if (checked) {
            updatedCategories = [...selectedCategories, category];
        } else {
            updatedCategories = selectedCategories.filter((cat: Category) => cat.name[Language.ENG] !== category.name[Language.ENG]);
        }
        setSelectedCategories(updatedCategories);

        if (updatedCategories.length === 0) {
            setProductsAction(allProducts);
        } else {
            const filteredProducts: ProductItem[] = allProducts.filter((product: ProductItem) =>
                    product.category && product.category.some(
                        (cat: Category | undefined) => cat && updatedCategories.includes(cat)
                    )
            );
            setProductsAction(filteredProducts);
        }
    }

    function handleClearFilter() {
        setSelectedCategories([]);
        setProductsAction(allProducts);
    }

    return (
        <main data-testid="category-filters-container" className="w-full bg-[var(--background)] shadow p-4">
            <div className="flex justify-between items-center gap-2 mb-4">
                <h2 className="text-lg text-[var(--main-color)] font-semibold mb-0 p-0">
                    {GetLocalizedText(categoriesHeaderText)}
                </h2>
                <FilterClearButton handleClearFilter={handleClearFilter}/>
            </div>
            <div data-testid="category-filters" className="flex flex-col gap-2">
                {
                    Object.values(categories)
                        .sort((a: Category, b: Category) => {
                            const nameA = language === Language.PL 
                                ? a.name?.[Language.PL] ?? a.name?.[Language.ENG] ?? '' 
                                : a.name?.[Language.ENG] ?? a.name?.[Language.PL] ?? '';
                            const nameB = language === Language.PL 
                                ? b.name?.[Language.PL] ?? b.name?.[Language.ENG] ?? '' 
                                : b.name?.[Language.ENG] ?? b.name?.[Language.PL] ?? '';
                            return nameA.localeCompare(nameB);
                        })
                        .map((category: Category, indx: number) => (
                            <label key={indx} className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="form-checkbox h-4 w-4 text-blue-600 accent-[var(--main-color)]"
                                    checked={selectedCategories.includes(category)}
                                    onChange={e => handleCategoryChange(category, e.target.checked)}
                                />
                                <span className="text-black">
                                  {GetLocalizedText(category.name)}
                              </span>
                            </label>
                        ))
                }
            </div>
        </main>
    )
}