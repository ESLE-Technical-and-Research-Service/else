'use client';

import {ProductItem} from "../../types/ProductItem";
import {ProductsCategories} from "../../types/ProductsCategories";
import {Tag} from "../../types/Tag";
import {CamerasTags} from "../data/tags/cameras-tags";
import {useLanguage} from "../../../../context/src/LanguageContext";
import {Language} from "../../../../context/src/types/Language";
import {useState} from "react";

type ProductsFiltersProps = {
    setProducts: (products: ProductItem[]) => void
    allProducts: ProductItem[],
    category: ProductsCategories
};

export default function ProductsFilters({
                                            setProducts,
                                            allProducts,
                                            category,
                                        }: ProductsFiltersProps) {
    const {language} = useLanguage();
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    function handleSetFilter(tagName: string, checked: boolean) {
        let updatedTags: string[];
        if (checked) {
            updatedTags = [...selectedTags, tagName];
        } else {
            updatedTags = selectedTags.filter(t => t !== tagName);
        }
        setSelectedTags(updatedTags);

        if (updatedTags.length === 0) {
            setProducts(allProducts);
        } else {
            const filteredProducts: ProductItem[] = allProducts.filter((product: ProductItem) =>
                product.tags && product.tags.some(
                    (tag: Tag | undefined) => tag && updatedTags.includes(tag.nameENG)
                    )
            );
            setProducts(filteredProducts);
        }
    }

    const productsTags = categoryTags(category);

    return (
        <main className="w-full bg-white rounded shadow p-4">
            <h2 className="text-lg text-[var(--main-color)] font-semibold mb-4">
                {language === Language.PLN ? "Filtry" : "Filters"}
            </h2>
            <div className="flex flex-col gap-2">
                {
                    Object.values(productsTags)
                        .sort((a: Tag, b: Tag) =>
                            (language === Language.PLN ? a.namePL.localeCompare(b.namePL) : a.nameENG.localeCompare(b.nameENG))
                        )
                        .map((tag: Tag, idx: number) => (
                            <label key={idx} className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="form-checkbox h-4 w-4 text-blue-600 accent-[var(--main-color-secondary)]"
                                    checked={selectedTags.includes(tag.nameENG)}
                                    onChange={e => handleSetFilter(tag.nameENG, e.target.checked)}
                                />
                                <span className="text-black">
                            {language === Language.PLN ? tag.namePL : tag.nameENG}
                        </span>
                            </label>
                        ))
                }
            </div>
        </main>
    );
}

function categoryTags(category: ProductsCategories): Record<string, Tag> {
    switch (category) {
        case ProductsCategories.CAMERAS:
            return CamerasTags;
        case ProductsCategories.PRESSURE_VEHICLES:
            return CamerasTags
        case ProductsCategories.MILLING_ROBOTS:
            return CamerasTags;
        case ProductsCategories.ACCESSORIES:
            return CamerasTags;
        default:
            throw new Error('Invalid TAGs category');
    }
}