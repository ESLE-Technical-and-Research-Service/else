'use client';

import {Language, ProductItem, ProductsCategories, Tag} from "../../types";
import {AccessoriesTags, CamerasTags, MillingRobotsTags, PressureVehiclesTags, WaterSewageTags} from "../data/tags";
import {useLanguage} from "../../../../context/src/LanguageContext";
import {useEffect, useMemo, useState} from "react";
import FilterClearButton from "../../common/buttons/filter-clear-button";
import {useSearchParams} from "next/navigation";

type ProductsFiltersProps = {
    setProductsAction: (products: ProductItem[]) => void
    allProducts: ProductItem[],
    categories: ProductsCategories
};

export default function TechnologyFilters({
                                              setProductsAction,
                                              allProducts,
                                              categories,
                                          }: ProductsFiltersProps) {
    const {language} = useLanguage();
    const searchParams = useSearchParams();
    const nameParam = searchParams.get('name');
    const paramTags = useMemo(
        () => nameParam ? nameParam.split(',').map(s => s.trim()).filter(Boolean) : [],
        [nameParam]
    );

    const [selectedTags, setSelectedTags] = useState<string[]>(paramTags);
    const VISIBLE_COUNT_STEP = 15;
    const [visibleCount, setVisibleCount] = useState(VISIBLE_COUNT_STEP);

    useEffect(() => {
        setSelectedTags(paramTags);
    }, [nameParam, paramTags]);

    function handleSetFilter(tagName: string, checked: boolean) {
        let updatedTags: string[];
        if (checked) {
            updatedTags = [...selectedTags, tagName];
        } else {
            updatedTags = selectedTags.filter(t => t !== tagName);
        }
        setSelectedTags(updatedTags);

        if (updatedTags.length === 0) {
            setProductsAction(allProducts);
        } else {
            const filteredProducts: ProductItem[] = allProducts.filter((product: ProductItem) =>
                    product.tags && product.tags.some(
                        (tag: Tag | undefined) => tag && updatedTags.includes(tag.nameENG)
                    )
            );
            setProductsAction(filteredProducts);
        }
    }

    function handleClearFilter() {
        setSelectedTags([]);
        setProductsAction(allProducts);
    }

    const productsTags = categoryTags(categories);

    return (
        <main data-testid="technology-filters-container" className="w-full bg-white rounded shadow p-4">
            <div className="flex justify-between items-center gap-2 mb-4">
                <h2 className="text-lg text-[var(--main-color)] font-semibold mb-0 p-0">
                    {language === Language.PL ? "Technologia:" : "Technology:"}
                </h2>
                <FilterClearButton language={language} handleClearFilter={handleClearFilter}/>
            </div>
            <div data-testid="technology-filters" className="flex flex-col gap-2">
                {
                    Object.values(productsTags)
                        .sort((a: Tag, b: Tag) =>
                            (language === Language.PL ? a.namePL.localeCompare(b.namePL) : a.nameENG.localeCompare(b.nameENG))
                        )
                        .slice(0, visibleCount)
                        .map((tag: Tag, idx: number) => (
                            <div key={idx}>
                                <label key={idx} className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox h-4 w-4 text-blue-600 accent-[var(--main-color-secondary)]"
                                        checked={selectedTags.includes(tag.nameENG)}
                                        onChange={e => handleSetFilter(tag.nameENG, e.target.checked)}
                                    />
                                    <span className="text-black">
                                    {language === Language.PL ? tag.namePL : tag.nameENG}
                                </span>
                                </label>
                            </div>
                        ))
                }
                <span className="flex justify-between">
                {
                    visibleCount > VISIBLE_COUNT_STEP && (
                        <button
                            data-testid="show-less-button"
                            type="button"
                            className="mt-2 text-blue-600 hover:underline self-start text-sm mr-8"
                            onClick={() => setVisibleCount(c => c - VISIBLE_COUNT_STEP)}
                        >
                            {language === Language.PL ? 'Pokaż mniej' : 'Show less'}
                        </button>
                    )
                }
                {
                    Object.values(productsTags).length > visibleCount && (
                        <button
                            data-testid="show-more-button"
                            type="button"
                            className="mt-2 text-blue-600 hover:underline self-start text-sm"
                            onClick={() => setVisibleCount(c => c + VISIBLE_COUNT_STEP)}
                        >
                            {language === Language.PL ? "Pokaż więcej" : "Show more"}
                        </button>
                    )
                }
                </span>
            </div>
        </main>
    );
}

function categoryTags(category: ProductsCategories): Record<string, Tag> {
    switch (category) {
        case ProductsCategories.CAMERAS:
            return CamerasTags;
        case ProductsCategories.PRESSURE_VEHICLES:
            return PressureVehiclesTags;
        case ProductsCategories.MILLING_ROBOTS:
            return MillingRobotsTags;
        case ProductsCategories.ACCESSORIES:
            return AccessoriesTags;
        case ProductsCategories.WATER_SEWAGE:
            return WaterSewageTags;
        default:
            throw new Error('Invalid TAGs category');
    }
}