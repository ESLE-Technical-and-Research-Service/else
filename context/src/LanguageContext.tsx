'use client';

import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {Language} from "./types/Language";

interface LanguageContextProps {
    language: Language;
    switchLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({children}: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>(Language.ENG);

    useEffect(() => {
        const userLang = navigator.language || navigator.languages?.[0] || "en";
        const normalizedLang = userLang.toLowerCase();

        if (normalizedLang.startsWith("pl")) {
            setLanguage(Language.PL);
        } else {
            setLanguage(Language.ENG);
        }
    }, []);

    const switchLanguage = (lang: Language) => {
        setLanguage(lang);
    };


    return (
        <LanguageContext.Provider value={{language, switchLanguage}}>
            {children}
        </LanguageContext.Provider>
    );
}

export const useLanguage = () => {
    const context = useContext(LanguageContext);

    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }

    return context;
}