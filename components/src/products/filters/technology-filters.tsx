'use client';

import {Language, ProductItem, ProductsCategories, Tag} from "../../types";
import {useLanguage} from "../../../../context/src/LanguageContext";
import {useEffect, useMemo, useState} from "react";
import FilterClearButton from "../../common/buttons/filter-clear-button";
import {useSearchParams} from "next/navigation";
import {getCategoryTagsByCategoryName, GetLocalizedText} from "../../utils";

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
                        (tag: Tag | undefined) => tag && updatedTags.includes(tag.name[Language.ENG])
                    )
            );
            setProductsAction(filteredProducts);
        }
    }

    function handleClearFilter() {
        setSelectedTags([]);
        setProductsAction(allProducts);
    }

    const productsTags: Record<string, Tag> = getCategoryTagsByCategoryName(categories);

    const technologyFilterHeaderText = {
        [Language.PL]: "Technologia:",
        [Language.ENG]: "Technology:",
    };

    const showMoreButtonText = {
        [Language.PL]: "Pokaż więcej",
        [Language.ENG]: "Show more"
    };

    const showLessButtonText = {
        [Language.PL]: "Pokaż mniej",
        [Language.ENG]: "Show less"
    };

    return (
        <main
            data-testid="technology-filters-container"
            className="w-full bg-[var(--background)] rounded shadow p-4"
        >
            <div className="flex justify-between items-center gap-2 mb-4">
                <h2
                    data-testid="technology-filters-title"
                    className="text-lg text-[var(--main-color)] font-semibold mb-0 p-0"
                >
                    {GetLocalizedText(technologyFilterHeaderText)}
                </h2>
                <FilterClearButton handleClearFilter={handleClearFilter}/>
            </div>
            <div data-testid="technology-filters" className="flex flex-col gap-2">
                {
                    Object.values(productsTags)
                        .sort((a: Tag, b: Tag) => {
                            const nameA = language === Language.PL 
                                ? a.name?.[Language.PL] ?? a.name?.[Language.ENG] ?? '' 
                                : a.name?.[Language.ENG] ?? a.name?.[Language.PL] ?? '';
                            const nameB = language === Language.PL 
                                ? b.name?.[Language.PL] ?? b.name?.[Language.ENG] ?? '' 
                                : b.name?.[Language.ENG] ?? b.name?.[Language.PL] ?? '';
                            return nameA.localeCompare(nameB);
                        })
                        .slice(0, visibleCount)
                        .map((tag: Tag, idx: number) => (
                            <div key={idx}>
                                <label key={idx} className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox h-4 w-4 text-blue-600 accent-[var(--main-color-secondary)]"
                                        checked={tag.name?.[Language.ENG] ? selectedTags.includes(tag.name[Language.ENG]) : false}
                                        onChange={e => tag.name?.[Language.ENG] && handleSetFilter(tag.name[Language.ENG], e.target.checked)}
                                    />
                                    <span className="text-black">
                                    {GetLocalizedText(tag.name)}
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
                            {GetLocalizedText(showLessButtonText)}
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
                                {GetLocalizedText(showMoreButtonText)}
                            </button>
                        )
                    }
                </span>
            </div>
        </main>
    );
}