'use client';

import {Language} from "../../../context/src/types/Language";
import {useLanguage} from "../../../context/src/LanguageContext";

export default function HeroCamerasTitle() {
    const { language } = useLanguage();
    return (
        <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold drop-shadow-2xl leading-tight">
            {
                language === Language.PLN
                    ? "Kamery do inspekcji kanalizacji / sieci wod-kan"
                    : "Cameras for sewer inspection / water and sewage network"
            }
        </h1>
    );
}