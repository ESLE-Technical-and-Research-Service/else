'use client';

import {useLanguage} from "../../../context/src/LanguageContext";

export default function CopyRights() {
    const {language} = useLanguage();
    return (
        <div data-testid="copy-rights" className="text-sm text-gray-600 mt-6">
            &copy; {new Date().getFullYear()} ELSE - Technical and Research Service. {
            language === "PL"
                ? "Wszelkie prawa zastrzeżone."
                : "All rights reserved."
        }
        </div>
    )
}