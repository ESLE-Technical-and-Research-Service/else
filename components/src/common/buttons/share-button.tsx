import {Language} from "../../types";
import {ShareIcon} from "@heroicons/react/24/outline";
import React from "react";
import {GetLocalizedText} from "../../utils";

type ShareButtonProps = {
    title: {
        [Language.PL]: string,
        [Language.ENG]: string,
    };
}

export default function ShareButton({title}: ShareButtonProps) {
    const shareText = {
        [Language.PL]: "Udostępnij",
        [Language.ENG]: "Share"
    };
    const successfulCopyText = {
        [Language.PL]: "Link skopiowany do schowka!",
        [Language.ENG]: "Link copied to clipboard!"
    };

    return (
        <button
            data-testid="share-button"
            type="button"
            onClick={() => {
                if (navigator.share) {
                    navigator.share({
                        title: GetLocalizedText(title),
                        url: window.location.href
                    });
                } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert(GetLocalizedText(successfulCopyText));
                }
            }}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 z-20 bg-[var(--background)]/80 hover:bg-blue-50
            border border-blue-200 rounded-full p-2 shadow transition-all focus:outline-none focus:ring-2 focus:ring-blue-300"
            aria-label={GetLocalizedText(shareText)}
        >
            <ShareIcon className="h-6 w-6 text-[var(--background-gradient-end)]"/>
        </button>
    )
}