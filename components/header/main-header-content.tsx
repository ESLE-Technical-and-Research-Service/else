'use client';

import { useState } from 'react';
import LanguageSwitch from "./language-switch";
import MainNavigation from "./main-navigation";

export default function MainHeaderContent() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center w-full">
                <div className="flex-none">
                    {/* The logo will be left-aligned */}
                </div>

                <div className="flex-grow flex justify-center">
                    <MainNavigation />
                </div>

                <div className="flex-none">
                    <LanguageSwitch />
                </div>
            </div>

            {/* Mobile Navigation */}
            <button
                className="md:hidden flex flex-col gap-[4px] justify-center items-center w-8 h-8 mr-4 pb-4 absolute right-4"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <span className="w-6 h-[2px] bg-black" />
                <span className="w-6 h-[2px] bg-black" />
                <span className="w-6 h-[2px] bg-black" />
            </button>

            {/* Mobile Menu */}
            <div
                className={`fixed top-0 right-0 h-full w-2/3 max-w-[300px] bg-white shadow-lg transform transition-transform duration-300 z-50
                ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}
            >
                <div className="p-4 flex flex-col gap-6">
                    <div className="flex justify-end">
                        <button className="text-2xl font-bold" onClick={() => setIsMenuOpen(false)}>
                            &times;
                        </button>
                    </div>

                    <MainNavigation isMobile />
                    <LanguageSwitch />
                </div>
            </div>
        </>
    );
}