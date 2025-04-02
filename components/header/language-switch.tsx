'use client';

import {useLanguage} from "../../context/LanguageContext";

export default function LanguageSwitch() {
    const { language, switchLanguage } = useLanguage();

    return (
        <div className="flex items-center space-x-2">
            <button
                className={`px-4 py-2 rounded ${language === 'ENG' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                onClick={() => switchLanguage('ENG')}
            >
                ENG
            </button>
            <button
                className={`px-4 py-2 rounded ${language === 'PLN' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                onClick={() => switchLanguage('PLN')}
            >
                PLN
            </button>
        </div>
    );
}