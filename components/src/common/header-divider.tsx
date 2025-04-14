'use client';

import {Language} from "../../../context/src/types/Language";
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
                className={`
                text-4xl font-extrabold text-center text-[var(--font-color)] mt-6
                transition-all duration-700 ease-out
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
              `}
            >
                {language === Language.PLN ? title.labelPL : title.labelENG}
            </h1>
            <div className="w-16 h-1 bg-[var(--font-color-accent)] mx-auto mt-4 rounded-full"></div>
        </>
    );
}