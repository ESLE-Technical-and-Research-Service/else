'use client';

import {useEffect, useState} from 'react';
import LanguageSwitch from "./language-switch";
import MainNavigation from "./navigation/main-navigation";

export default function MainHeaderContent() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showBurger, setShowBurger] = useState(true);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const scrollingUp = currentScrollY < lastScrollY;

            if (currentScrollY === 0 || scrollingUp) {
                setShowBurger(true);
            } else {
                setShowBurger(false);
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center w-full">
                {/*<div className="flex-none">/!* Logo *!/</div>*/}
                <div className="flex-grow flex justify-center">
                    <MainNavigation />
                </div>
                <div className="flex-none">
                    <LanguageSwitch />
                </div>
            </div>

            {/* Mobile Burger Button */}
            <button
                data-testid="burger-menu-button"
                className={`md:hidden fixed top-4 right-4 z-50 transition-opacity duration-300 ${
                    showBurger ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                } bg-[var(--foreground)] rounded-lg flex flex-col gap-[4px] justify-center items-center w-8 h-8`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <span className="w-6 h-[2px] bg-black" />
                <span className="w-6 h-[2px] bg-black" />
                <span className="w-6 h-[2px] bg-black" />
            </button>

            {/* Mobile Slide-in Menu */}
            <div
                data-testid="burger-menu-slide-in"
                className={`fixed top-0 right-0 h-full w-2/3 max-w-[300px] bg-white shadow-lg
                 transform transition-transform duration-300 z-40
                ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}
            >
                <div className="p-4 flex flex-col gap-6">
                    <div className="flex justify-end">
                        <button
                            data-testid="mobile-menu-close-button"
                            className="text-2xl font-bold"
                            onClick={() => setIsMenuOpen(false)}
                        >
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
