'use client';

import {Language} from "../types";
import {useLanguage} from "../../../context/src/LanguageContext";

type HeaderDividerProps = {
    title: {
        labelPL: string;
        labelENG: string;
    },
    isVisible?: boolean;
}

export default function HeaderDivider({title, isVisible}: HeaderDividerProps) {
    const {language} = useLanguage();
    return (
        <>
            <h1
                data-testid="header-title"
                className={`
                text-4xl font-extrabold text-center text-[var(--font-color)] mt-6
                transition-all duration-700 ease-out
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
              `}
            >
                {language === Language.PL ? title.labelPL : title.labelENG}
            </h1>
            <div className="w-36 h-1 bg-[var(--font-color-accent)] mx-auto mt-4 mb-6 rounded-full"></div>
        </>
    );
}