import {Language, Tag} from "../../types";
import Link from "next/link";
import React from "react";
import {GetLocalizedText} from "../../utils";

type TagsCardProps = {
    tags: Tag[];
}

export default function TagsCard({ tags }: TagsCardProps) {
    const tagsHeaderText = {
        [Language.PL]: "Tagi",
        [Language.ENG]: "Tags",
    };

    return (
        <>
            {tags.length > 0 && (
                <div data-testid="tags-card-container" className="mb-2">
                    <p
                        data-testid="tags-card-title"
                        className="font-semibold text-gray-700 mr-2"
                    >
                        {GetLocalizedText(tagsHeaderText)}
                    </p>
                    {tags
                        .filter(((tag: Tag | undefined): tag is Tag => !!tag))
                        .map((tag: Tag) => (
                        <Link
                            data-testid="tags-card-link"
                            href={tag.link}
                            key={tag.link}
                            className="inline-block bg-blue-100 text-blue-700 px-2 py-1 rounded mr-2 sm:mr-4 mt-2 text-sm sm:text-base hover:bg-blue-200"
                        >
                            {GetLocalizedText(tag.name)}
                        </Link>
                    ))}
                </div>
            )}
        </>
    )
}