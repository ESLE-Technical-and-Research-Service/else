import {Language} from "../../../../context/src/types/Language";
import {ShareIcon} from "@heroicons/react/24/outline";
import React from "react";

type ShareButtonProps = {
    title: string;
    lang: Language;
}

export default function ShareButton({title, lang}: ShareButtonProps) {
    return (
        <button
            type="button"
            onClick={() => {
                if (navigator.share) {
                    navigator.share({
                        title: title,
                        url: window.location.href
                    });
                } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert(lang === Language.PL ? "Link skopiowany do schowka!" : "Link copied to clipboard!");
                }
            }}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 z-20 bg-white/80 hover:bg-blue-50 border border-blue-200 rounded-full p-2 shadow transition-all focus:outline-none focus:ring-2 focus:ring-blue-300"
            aria-label={lang === Language.PL ? "Udostępnij" : "Share"}
        >
            <ShareIcon className="h-6 w-6 text-blue-500"/>
        </button>
    )
}