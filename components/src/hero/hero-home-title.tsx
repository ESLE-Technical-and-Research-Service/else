'use client';

import {Language} from "../types";
import {useLanguage} from "../../../context/src/LanguageContext";

export default function HeroHomeTitle() {
    const {language} = useLanguage();
    return (
        <>
            <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold drop-shadow-2xl leading-tight">
                {language === Language.PL ? "WITAJ W" : "WELCOME TO"}{" "}
                <strong
                    className="inline-block bg-[var(--main-color)] text-[var(--background)] text-xl sm:text-2xl md:text-6xl px-3 sm:px-4 py-0.5 sm:py-1 rounded-md">
                    ELSE
                </strong>
            </h1>
            <h2 className="text-sm sm:text-base md:text-2xl font-bold drop-shadow-lg mt-3 sm:mt-4 leading-snug max-w-xl">
                {
                    language === Language.PL
                        ? "Innowacyjne rozwiązania dla nowoczesnego świata"
                        : "Innovative Solutions for a Modern World"
                }
            </h2>
        </>
    )
}