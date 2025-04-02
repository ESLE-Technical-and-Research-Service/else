'use client';

import {createContext, ReactNode, useContext, useState} from "react";

type Language = "ENG" | "PLN";

interface LanguageContextProps {
    language: Language;
    switchLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({children}: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>("ENG");

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