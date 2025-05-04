'use client';

import classes from "./language-switch.module.css";
import {useLanguage} from "../../../context/src/LanguageContext";
import {Language} from "../types";
import plFlag from "../../../assets/images/icons/Flag_of_Poland_Flat_Round-64x64.png";
import ukFlag from "../../../assets/images/icons/Flag_of_United_Kingdom_Flat_Round-64x64.png";
import Image from "next/image";

export default function LanguageSwitch() {
    const {language, switchLanguage} = useLanguage();

    return (
        <div
            data-testid="lang-switch-container"
            className="flex flex-row items-center space-x-2 sm:flex-col sm:space-x-0
            sm:space-y-2 md:flex-row md:space-x-2 md:space-y-0"
        >
            <button
                data-testid="en-lang-switch"
                className={
                    `px-2 py-2 rounded-4xl ${
                        language === Language.ENG
                            ? classes.languageSwitchOn
                            : classes.languageSwitchOff
                    }`
                }
                onClick={() => switchLanguage(Language.ENG)}
            >
                <Image src={ukFlag} alt={"Flag of United Kingdom"} width={24} height={24} />
            </button>
            <button
                data-testid="pl-lang-switch"
                className={
                    `px-2 py-2 rounded-4xl ${
                        language === Language.PL
                            ? classes.languageSwitchOn
                            : classes.languageSwitchOff
                    }`
                }
                onClick={() => switchLanguage(Language.PL)}
            >
                <Image src={plFlag} alt={"Flag of Poland"} width={24} height={24} />
            </button>
        </div>
    );
}