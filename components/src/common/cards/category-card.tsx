import {Category, Language} from "../../types";
import Link from "next/link";
import React from "react";

type CategoryCardProps = {
    category: Category[],
    lang: Language
}

export default function CategoryCard({ category, lang }: CategoryCardProps) {
    return (
        <>
            {category.length > 0 && (
                <div data-testid="category-card-container" className="mb-2">
                        <span
                            data-testid="category-card-title"
                            className="font-semibold text-gray-700 mr-2">
                            {lang === Language.PL ? "Kategorie:" : "Categories:"}
                        </span>
                    {category.map((cat, idx) => (
                        <Link
                            data-testid="category-card-link"
                            href={cat.link}
                            key={idx}
                            className="inline-block text-blue-600 hover:underline mr-2"
                        >
                            {lang === Language.PL ? cat.namePL : cat.nameENG}
                            {idx < category.length - 1 ? ", " : ""}
                        </Link>
                    ))}
                </div>
            )}
        </>
    )
}