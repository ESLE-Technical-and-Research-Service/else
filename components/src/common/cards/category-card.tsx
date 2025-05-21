import {Category, Language} from "../../types";
import Link from "next/link";
import React from "react";
import {GetLocalizedText} from "../../utils";

type CategoryCardProps = {
    category: Category[],
}

export default function CategoryCard({ category }: CategoryCardProps) {
    const categoriesHeaderText = {
        [Language.PL]: "Kategorie",
        [Language.ENG]: "Categories",
    };

    return (
        <>
            {category.length > 0 && (
                <div data-testid="category-card-container" className="mb-2">
                        <span
                            data-testid="category-card-title"
                            className="font-semibold text-gray-700 mr-2">
                            {GetLocalizedText(categoriesHeaderText)}
                        </span>
                    {category.map((cat, idx) => (
                        <Link
                            data-testid="category-card-link"
                            href={cat.link}
                            key={idx}
                            className="inline-block text-blue-600 hover:underline mr-2"
                        >
                            {GetLocalizedText(cat.name)}
                            {idx < category.length - 1 ? ", " : ""}
                        </Link>
                    ))}
                </div>
            )}
        </>
    )
}