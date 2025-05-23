'use client';

import HeaderDivider from "../../common/dividers/header-divider";
import { Language } from "../../types";
import {GetLocalizedText} from "../../utils";

type SectionHeaderProps = {
    title: {
        [Language.PL]: string;
        [Language.ENG]: string;
    };
    subtitle: {
        [Language.PL]: string;
        [Language.ENG]: string;
    };
}

export default function SectionHeader({title, subtitle}: SectionHeaderProps) {
    return (
        <section className="w-full bg-[var(--background)] py-16">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <HeaderDivider title={GetLocalizedText(title)} isVisible={true}/>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    {GetLocalizedText(subtitle)}
                </p>
            </div>
        </section>
    )
}