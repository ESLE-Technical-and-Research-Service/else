import {useLanguage} from "../../../context/src/LanguageContext";
import {LocalizedJSX} from "../types";
import {JSX} from "react";

// Helper function to get localized JSX based on current language
export const GetLocalizedJSX = (content: LocalizedJSX): JSX.Element => {
    const { language } = useLanguage();

    if (!content) return <></>;

    return content[language];
};