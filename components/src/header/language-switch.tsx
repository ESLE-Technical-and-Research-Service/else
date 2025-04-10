'use client';

import classes from "./language-switch.module.css";
import {useLanguage} from "../../../context/src/LanguageContext";
import {Language} from "../../../context/src/types/Language";

export default function LanguageSwitch() {
    const {language, switchLanguage} = useLanguage();

    return (
        <div data-testid="lang-switch-container" className="flex items-center space-x-2">
            <button
                data-testid="en-lang-switch"
                className={
                    `px-4 py-2 rounded ${
                        language === Language.ENG
                            ? classes.languageSwitchOn
                            : classes.languageSwitchOff
                    }`
                }
                onClick={() => switchLanguage(Language.ENG)}
            >
                ENG
            </button>
            <button
                data-testid="pl-lang-switch"
                className={
                    `px-4 py-2 rounded ${
                        language === Language.PLN
                            ? classes.languageSwitchOn
                            : classes.languageSwitchOff
                    }`
                }
                onClick={() => switchLanguage(Language.PLN)}
            >
                PLN
            </button>
        </div>
    );
}