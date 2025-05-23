'use client';

import {ArrowLeftIcon} from "@heroicons/react/24/outline";
import {Language} from "../../types";
import React from "react";
import {useRouter} from "next/navigation";
import {GetLocalizedText} from "../../utils";

export default function BackButton() {
    const router = useRouter();

    const backButtonText = {
        [Language.PL]: "Wróć",
        [Language.ENG]: "Back"
    };

    return (
        <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-xl border
            border-[var(--background-gradient-end)] bg-[var(--background)]/80 hover:bg-blue-50
            text-[var(--main-color)] font-semibold shadow transition-all duration-150 text-lg
            focus:outline-none focus:ring-[var(--main-color-secondary)] focus:border-[var(--main-color-secondary)]
            hover:-translate-y-0.5 z-10"
        >
            <ArrowLeftIcon
                className="h-5 w-5 text-[var(--main-color)] hover:text-[var(--font-color-accent)]
                transition-colors duration-200"/>
            {GetLocalizedText(backButtonText)}
        </button>
    )
}