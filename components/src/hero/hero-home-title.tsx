'use client';

import {Language} from "../types";
import {GetLocalizedText} from "../utils";

export default function HeroHomeTitle() {
    const mainHeaderText = {
        [Language.PL]: "WITAJ W",
        [Language.ENG]: "WELCOME TO",
    };

    const subtitleHeaderText = {
        [Language.PL]: "Innowacyjne rozwiązania dla nowoczesnego świata",
        [Language.ENG]: "Innovative Solutions for a Modern World",
    };

    return (
        <>
            <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold drop-shadow-2xl leading-tight">
                {GetLocalizedText(mainHeaderText)}{" "}
                <strong
                    className="inline-block bg-[var(--main-color)] text-[var(--background)] text-xl sm:text-2xl
                    md:text-6xl px-3 sm:px-4 py-0.5 sm:py-1 rounded-md">
                    ELSE
                </strong>
            </h1>
            <h2 className="text-sm sm:text-base md:text-2xl font-bold drop-shadow-lg mt-3 sm:mt-4 leading-snug max-w-xl">
                {GetLocalizedText(subtitleHeaderText)}
            </h2>
        </>
    )
}