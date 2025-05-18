import Link from "next/link";
import {ArrowRightIcon} from "@heroicons/react/24/outline";
import React from "react";
import {Language} from "../../types";

type ContactUsCardProps = {
    lang: Language;
    text: {
        textPL: string;
        textENG: string;
    }
}

export default function ContactUsCard({lang, text}: ContactUsCardProps) {
    return (
        <div
            data-testid="contact-us-card-container"
            className="mt-8 px-6 py-5 rounded-2xl bg-[var(--background)]/60 backdrop-blur-md border
            border-blue-100 shadow-lg flex flex-col items-center text-center relative
            overflow-hidden"
        >
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[var(--main-color-secondary)]
            to-[var(--main-color-accent-dark)] rounded-l-2xl"/>
            <div
                data-testid="contact-us-card-title"
                className="mb-3 text-base md:text-xl text-gray-700 font-medivdium z-10"
            >
                {
                    lang === Language.PL
                        ? text.textPL
                        : text.textENG
                }
            </div>
            <Link
                href="/contact" legacyBehavior
            >
                <a
                    data-testid="contact-us-card-link"
                    className="inline-flex items-center gap-2 px-6 py-2 rounded-xl border
                border-[var(--background-gradient-end)] bg-[var(--background)]/80 hover:bg-blue-50 text-[var(--background-gradient-end)] font-semibold
                shadow transition-all duration-150 text-base md:text-xl focus:outline-none focus:ring-2
                focus:ring-blue-200 hover:-translate-y-0.5 z-10">
                    {lang === Language.PL ? "Skontaktuj się z nami" : "Contact Us"}
                    <ArrowRightIcon className="h-5 w-5 text-[var(--main-color)] hover:text-[var(--main-color-secondary)]
                    transition-colors duration-200"
                    />
                </a>
            </Link>
        </div>
    )
}