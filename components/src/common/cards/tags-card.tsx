import {Language, Tag} from "../../types";
import Link from "next/link";
import React from "react";

type TagsCardProps = {
    tags: Tag[];
    lang: Language;
}

export default function TagsCard({ tags, lang }: TagsCardProps) {
    return (
        <>
            {tags.length > 0 && (
                <div className="mb-2">
                    <p
                        className="font-semibold text-gray-700 mr-2"
                    >
                        {lang === Language.PL ? "Tagi:" : "Tags:"}
                    </p>
                    {tags
                        .filter(((tag: Tag | undefined): tag is Tag => !!tag))
                        .map((tag: Tag) => (
                        <Link
                            href={tag.link}
                            key={tag.link}
                            className="inline-block bg-blue-100 text-blue-700 px-2 py-1 rounded mr-2 sm:mr-4 mt-2 text-sm sm:text-base hover:bg-blue-200"
                        >
                            {lang === Language.PL ? tag.namePL : tag.nameENG}
                        </Link>
                    ))}
                </div>
            )}
        </>
    )
}