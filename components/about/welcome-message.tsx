'use client';

import {useLanguage} from "../../context/LanguageContext";
import {Language} from "../../context/types/Language";

export default function WelcomeMessage() {
    const {language} = useLanguage();
    return (
        <>
            <article className="w-full overflow-y-auto mt-6">
                <h1 className="text-4xl font-bold text-center text-[var(--font-color)] mt-6">
                    {
                        language === Language.PLN
                            ? "Czym się zajmujemy?"
                            : "What do we do?"
                    }
                </h1>
                <div style={{height: '500px'}}></div>
            </article>
        </>
    )
}