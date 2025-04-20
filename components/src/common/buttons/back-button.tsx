'use client';

import {ArrowLeftIcon} from "@heroicons/react/24/outline";
import {Language} from "../../../../context/src/types/Language";
import React from "react";
import {router} from "next/client";
import {useLanguage} from "../../../../context/src/LanguageContext";

export default function BackButton() {
    const {language} = useLanguage();

    return (
        <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-xl border
            border-blue-300 bg-white/80 hover:bg-blue-50 text-[var(--main-color)] font-semibold
            shadow transition-all duration-150 text-lg focus:outline-none focus:ring-[var(--main-color-secondary)]
            focus:ring-[var(--main-color-secondary)] focus:border-[var(--main-color-secondary)]
            hover:-translate-y-0.5 z-10"
        >
            <ArrowLeftIcon
                className="h-5 w-5 text-[var(--main-color)] group-hover:text-[var(--main-color)]
                transition-colors duration-200"/>
            {language === Language.PLN ? "Wróć" : "Back"}
        </button>
    )
}