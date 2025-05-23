'use client';

import {LocalizedText} from "../types";
import {useLanguage} from "../../../context/src/LanguageContext";

// Helper function to get localized text based on current language
export const GetLocalizedText = (text: LocalizedText | undefined): string => {
    const {language} = useLanguage();

    if (!text) return '';

    return text[language] || '';
};