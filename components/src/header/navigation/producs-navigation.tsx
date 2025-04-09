import classes from "./main-navigation.module.css";
import Link from "next/link";
import {Language} from "../../../../context/src/types/Language";
import {IoMdArrowDropdown} from "react-icons/io";
import {useLanguage} from "../../../../context/src/LanguageContext";
import {useIsTouchTablet} from "../../../../hooks/src/useIsTouchTablet";
import React from "react";
import {useRouter} from "next/navigation";
import {renderDropdownItems} from "./render-dropdown-items";
import {waterSewageItems} from "./dropdownItems/water-sewage-items";
import {maritimeItems} from "./dropdownItems/maritime-items";
import { useState, useEffect } from "react";

type ProductNavigationProps = {
    handleClickAction: (e: React.MouseEvent | React.TouchEvent, menu: string) => void;
    isMobile?: boolean;
    openDropdown: string | null;
    dropdownSubmenu: string | null;
};

export default function ProductNavigation({ handleClickAction, isMobile, openDropdown, dropdownSubmenu }: ProductNavigationProps) {
    const { language } = useLanguage();
    const isTouchTablet = useIsTouchTablet();
    const router = useRouter();
    const [hoveredSubmenu, setHoveredSubmenu] = useState<string | null>(null); // Track hovered submenu

    useEffect(() => {
        if (!isMobile && !isTouchTablet) {
            // Clear hovered submenu when on mobile or tablet
            setHoveredSubmenu(null);
        }
    }, [isMobile, isTouchTablet]);

    const onDropdownItemActivate = (href: string) => (e: React.MouseEvent | React.TouchEvent) => {
        e.preventDefault();
        handleClickAction(e as React.MouseEvent, 'products');
        router.push(href);
    };

    const handleMouseEnter = (submenu: string) => {
        if (!isMobile && !isTouchTablet) {
            setHoveredSubmenu(submenu);
        }
    };

    const handleMouseLeave = () => {
        if (!isMobile && !isTouchTablet) {
            setHoveredSubmenu(null);
        }
    };

    return (
        <>
            <li className={classes.navItem}>
                <Link
                    className="hover:underline cursor-pointer flex items-center"
                    href="/products"
                    onClick={(e) => handleClickAction(e, 'products')}
                >
                    {language === Language.PLN ? "Produkty" : "Products"} <IoMdArrowDropdown className="ml-2" />
                </Link>

                {/* Mobile Dropdown – static positioning */}
                {isMobile && openDropdown === 'products' && (
                    <ul className={`mt-2 bg-white border-b border-t border-gray-300`}>
                        <li className={classes.navItem}>
                            <Link
                                className="hover:underline cursor-pointer flex items-center"
                                href="/products/water-sewage"
                                onClick={(e) => handleClickAction(e, 'water-sewage')}
                            >
                                {language === Language.PLN ? "Dział WOD-KAN" : "Water-Sewage Department"}
                            </Link>
                            {isMobile && dropdownSubmenu === "water-sewage" && (
                                <ul className={`mt-2 bg-white border-b border-t border-gray-300`}>
                                    {renderDropdownItems(waterSewageItems, language, onDropdownItemActivate, true)}
                                </ul>
                            )}
                        </li>
                        <li className={classes.navItem}>
                            <Link
                                className="hover:underline cursor-pointer flex items-center"
                                href="/products/maritime"
                                onClick={(e) => handleClickAction(e, 'maritime')}
                            >
                                {language === Language.PLN ? "Dział Morski" : "Maritime Department"}
                            </Link>
                            {
                                isMobile && dropdownSubmenu === "maritime" && (
                                    <ul className={`mt-2 bg-white border-b border-t border-gray-300 rounded-lg`}>
                                        {renderDropdownItems(maritimeItems, language, onDropdownItemActivate)}
                                    </ul>
                                )
                            }
                        </li>
                    </ul>
                )}

                {/* Tablet Dropdown – absolute positioning (triggered by click) */}
                {!isMobile && isTouchTablet && openDropdown === 'products' && (
                    <ul className={`${classes.dropdownMenu} ${classes.tabletDropdown} mt-2 rounded-lg`}>
                        <li className={classes.navItem}>
                            <Link
                                className="hover:underline cursor-pointer flex items-center"
                                href="/products/water-sewage"
                                onClick={(e) => handleClickAction(e, 'water-sewage')}
                            >
                                {language === Language.PLN ? "Dział WOD-KAN" : "Water-Sewage Department"}
                            </Link>
                            {!isMobile && isTouchTablet && dropdownSubmenu === "water-sewage" && (
                                <ul className={`mt-2 bg-[var(--foreground)] border-b border-t border-gray-300`}>
                                    {renderDropdownItems(waterSewageItems, language, onDropdownItemActivate, true)}
                                </ul>
                            )}
                        </li>
                        <li className={classes.navItem}>
                            <Link
                                className="hover:underline cursor-pointer flex items-center"
                                href="/products/maritime"
                                onClick={(e) => handleClickAction(e, 'maritime')}
                            >
                                {language === Language.PLN ? "Dział Morski" : "Maritime Department"}
                            </Link>
                            {
                                !isMobile && isTouchTablet && dropdownSubmenu === "maritime" && (
                                    <ul className={`mt-2 bg-[var(--foreground)] border-b border-t border-gray-300`}>
                                        {renderDropdownItems(maritimeItems, language, onDropdownItemActivate)}
                                    </ul>
                                )
                            }
                        </li>
                    </ul>
                )}

                {/* Desktop Dropdown – absolute positioning; always rendered and controlled by CSS hover */}
                {!isMobile && !isTouchTablet && (
                    <ul className={`${classes.dropdownMenu} ${classes.absoluteDropdown} absolute left-0 mt-2 w-48 border-b border-t border-gray-300 shadow-lg bg-white rounded-lg`}>
                        <li
                            className={classes.navItem}
                            onMouseEnter={() => handleMouseEnter('water-sewage')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Link
                                className="hover:underline cursor-pointer flex items-center"
                                href="/products/water-sewage"
                                onClick={(e) => handleClickAction(e, 'water-sewage')}
                            >
                                {language === Language.PLN ? "Dział WOD-KAN" : "Water-Sewage Department"}
                            </Link>
                            {/* Desktop hover submenu */}
                            <ul className={`mt-2 bg-[var(--foreground)] border-b border-t border-gray-300 ${hoveredSubmenu === "water-sewage" ? 'visible' : 'hidden'}`}>
                                {renderDropdownItems(waterSewageItems, language, onDropdownItemActivate, true)}
                            </ul>
                        </li>
                        <li
                            className={classes.navItem}
                            onMouseEnter={() => handleMouseEnter('maritime')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Link
                                className="hover:underline cursor-pointer flex items-center"
                                href="/products/maritime"
                                onClick={(e) => handleClickAction(e, 'maritime')}
                            >
                                {language === Language.PLN ? "Dział Morski" : "Maritime Department"}
                            </Link>
                            {/* Desktop hover submenu */}
                            <ul className={`mt-2 bg-[var(--foreground)] border-b border-t border-gray-300 ${hoveredSubmenu === "maritime" ? 'visible' : 'hidden'}`}>
                                {renderDropdownItems(maritimeItems, language, onDropdownItemActivate)}
                            </ul>
                        </li>
                    </ul>
                )}

            </li>
        </>
    );
}

