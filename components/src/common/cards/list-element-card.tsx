import React from "react";

type ListElementCardProps = {
    text: string;
}

export default function ListElementCard({text}: ListElementCardProps) {
    return (
        <li
            data-testid="contact-us-card-container"
            className="mt-8 mb-20 px-6 py-6 rounded-2xl bg-[var(--background)]/60 backdrop-blur-md border
            border-gray-100 shadow-lg flex flex-col items-center text-center relative
            overflow-hidden hover:-translate-y-0.5 transition-all duration-150 z-10 hover:scale-110"
        >
            <div
                className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b
                from-[var(--main-color-secondary)] to-[var(--main-color-accent-dark)] rounded-l-2xl"
            />
            <div
                data-testid="contact-us-card-title"
                className="mb-3 mt-3 text-base md:text-xl text-gray-700 font-medivdium z-10"
            >
                {text}
            </div>
        </li>
    );
}