'use client';

import {Language} from "../../../context/src/types/Language";
import {useLanguage} from "../../../context/src/LanguageContext";

export default function HeroCamerasTitle() {
    const { language } = useLanguage();
    return (
        <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold drop-shadow-2xl leading-tight">
            {
                language === Language.PL
                    ? "Kamery inspekcyjne do kanalizacji i sieci wodno-kanalizacyjnych"
                    : "Inspection Cameras for Sewers and Water Networks"
            }
        </h1>
    );
}