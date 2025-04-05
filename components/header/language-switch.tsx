'use client';

import classes from "./language-switch.module.css";
import {useLanguage} from "../../context/LanguageContext";

export default function LanguageSwitch() {
    const { language, switchLanguage } = useLanguage();

    return (
        <div className="flex items-center space-x-2">
            <button
                className={`px-4 py-2 rounded ${language === 'ENG' ? classes.languageSwitchOn : classes.languageSwitchOff}`}
                onClick={() => switchLanguage('ENG')}
            >
                ENG
            </button>
            <button
                className={`px-4 py-2 rounded ${language === 'PLN' ? classes.languageSwitchOn : classes.languageSwitchOff}`}
                onClick={() => switchLanguage('PLN')}
            >
                PLN
            </button>
        </div>
    );
}