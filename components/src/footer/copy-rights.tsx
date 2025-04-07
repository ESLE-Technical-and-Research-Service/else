'use client';

import {useLanguage} from "../../../context/src/LanguageContext";

export default function CopyRights() {
    const {language} = useLanguage();
    return (
        <div className="text-sm text-gray-600 mt-6">
            © {new Date().getFullYear()} ELSE - Technical and Research Service. {
            language === "PLN"
                ? "Wszelkie prawe zastrzeżone"
                : "All rights reserved"
        }
        </div>
    )
}