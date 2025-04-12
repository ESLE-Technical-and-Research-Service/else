import classes from "./main-navigation.module.css";
import Link from "next/link";
import {Language} from "../../../../context/src/types/Language";
import {useLanguage} from "../../../../context/src/LanguageContext";
import {useIsTouchTablet} from "../../../../hooks/src/useIsTouchTablet";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {renderDropdownItems} from "./render-dropdown-items";
import {waterSewageItems} from "./dropdownItems/water-sewage-items";
import {maritimeItems} from "./dropdownItems/maritime-items";

type ProductNavigationProps = {
    handleClickAction: (e: React.MouseEvent | React.TouchEvent, menu: string) => void;
    isMobile?: boolean;
    openDropdown: string | null;
    dropdownSubmenu: string | null;
};

export default function ProductNavigation({
                                              handleClickAction,
                                              isMobile,
                                              openDropdown,
                                              dropdownSubmenu
                                          }: ProductNavigationProps) {
    const {language} = useLanguage();
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
            <li data-testid="products-menu" className={`${classes.navItem} ${classes.hasDropdown}`}>
                <Link
                    data-testid="products-menu-link"
                    className="hover:underline cursor-pointer flex items-center"
                    href="/products"
                    onClick={(e) => handleClickAction(e, 'products')}
                >
                    {language === Language.PLN ? "Produkty" : "Products"}
                </Link>

                {/* Mobile Dropdown – static positioning */}
                {isMobile && openDropdown === 'products' && (
                    <ul
                        data-testid="products-mobile-menu"
                        className={
                            `mt-2 bg-white border-b border-t border-gray-300`
                        }
                    >
                        <li className={classes.navItem}>
                            <Link
                                data-testid="products-water-sewage-mobile-submenu-link"
                                className="hover:underline cursor-pointer flex items-center"
                                href="/products/water-sewage"
                                onClick={(e) => handleClickAction(e, 'water-sewage')}
                            >
                                {language === Language.PLN ? "Dział WOD-KAN" : "Water-Sewage Department"}
                            </Link>
                            {isMobile && dropdownSubmenu === "water-sewage" && (
                                <ul
                                    data-testid="water-sewage-mobile-submenu-items"
                                    className={`mt-2 bg-white border-b border-t border-gray-300`}
                                >
                                    {renderDropdownItems(waterSewageItems, language, onDropdownItemActivate, true)}
                                </ul>
                            )}
                        </li>
                        <li className={classes.navItem}>
                            <Link
                                data-testid="products-mairtime-mobile-submenu-link"
                                className="hover:underline cursor-pointer flex items-center"
                                href="/products/maritime"
                                onClick={(e) => handleClickAction(e, 'maritime')}
                            >
                                {language === Language.PLN ? "Dział Morski" : "Maritime Department"}
                            </Link>
                            {
                                isMobile && dropdownSubmenu === "maritime" && (
                                    <ul
                                        data-testid="maritime-mobile-submenu-items"
                                        className={`mt-2 bg-white border-b border-t border-gray-300`}>
                                        {renderDropdownItems(maritimeItems, language, onDropdownItemActivate, true)}
                                    </ul>
                                )
                            }
                        </li>
                    </ul>
                )}

                {/* Tablet Dropdown – absolute positioning (triggered by click) */}
                {!isMobile && isTouchTablet && openDropdown === 'products' && (
                    <ul data-testid="products-tablet-dropdown-menu"
                        className={`${classes.dropdownMenu} ${classes.tabletDropdown} mt-2 rounded-lg`}>
                        <li className={classes.navItem}>
                            <Link
                                data-testid="products-water-sewage-submenu-link"
                                className="hover:underline cursor-pointer flex items-center"
                                href="/products/water-sewage"
                                onClick={(e) => handleClickAction(e, 'water-sewage')}
                            >
                                {language === Language.PLN ? "Dział WOD-KAN" : "Water-Sewage Department"}
                            </Link>
                            {
                                !isMobile && isTouchTablet && dropdownSubmenu === "water-sewage" && (
                                    <ul
                                        data-testid="water-sewage-submenu-tablet-items"
                                        className={`mt-2 bg-[var(--foreground)] border-b border-t border-gray-300`}
                                    >
                                        {renderDropdownItems(waterSewageItems, language, onDropdownItemActivate, true)}
                                    </ul>
                                )
                            }
                        </li>
                        <li className={classes.navItem}>
                            <Link
                                data-testid="products-maritime-submenu-link"
                                className="hover:underline cursor-pointer flex items-center"
                                href="/products/maritime"
                                onClick={(e) => handleClickAction(e, 'maritime')}
                            >
                                {language === Language.PLN ? "Dział Morski" : "Maritime Department"}
                            </Link>
                            {
                                !isMobile && isTouchTablet && dropdownSubmenu === "maritime" && (
                                    <ul
                                        data-testid="maritime-submenu-tablet-items"
                                        className={
                                            `mt-2 bg-[var(--foreground)] border-b border-t border-gray-300`
                                        }
                                    >
                                        {renderDropdownItems(maritimeItems, language, onDropdownItemActivate, true)}
                                    </ul>
                                )
                            }
                        </li>
                    </ul>
                )}

                {/* Desktop Dropdown – absolute positioning; always rendered and controlled by CSS hover */}
                {!isMobile && !isTouchTablet && (
                    <ul
                        data-testid="products-desktop-dropdown-menu"
                        className={
                            `${classes.dropdownMenu} ${classes.absoluteDropdown}
                            absolute left-0 mt-2 w-64 bg-white border border-gray-300 shadow-lg rounded-lg z-10`
                        }
                    >
                        <li
                            className={`${classes.navItem} relative`}
                            onMouseEnter={() => handleMouseEnter('water-sewage')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className={`${classes.navItem} ${classes.hasSubmenuRightArrow}`}>
                                <Link
                                    data-testid="products-desktop-water-sewage-submenu-link"
                                    className="hover:underline cursor-pointer flex items-center px-4 py-2"
                                    href="/products/water-sewage"
                                    onClick={(e) => handleClickAction(e, 'water-sewage')}
                                >
                                    {language === Language.PLN ? "Dział WOD-KAN" : "Water-Sewage Department"}
                                </Link>

                                <ul
                                    className={`absolute top-0 left-full ml-2 min-w-[200px] bg-[var(--foreground)] 
                                    border border-gray-300 shadow-lg rounded-lg z-10 ${
                                        hoveredSubmenu === "water-sewage"
                                            ? 'block'
                                            : 'hidden'
                                    }`}
                                    data-testid="water-sewage-submenu-desktop-items"
                                >
                                    {renderDropdownItems(waterSewageItems, language, onDropdownItemActivate, true)}
                                </ul>
                            </div>
                        </li>

                        <li
                            className={`${classes.navItem} relative`}
                            onMouseEnter={() => handleMouseEnter('maritime')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className={`${classes.navItem} ${classes.hasSubmenuRightArrow}`}>
                                <Link
                                    data-testid="products-desktop-maritime-submenu-link"
                                    className="hover:underline cursor-pointer flex items-center px-4 py-2"
                                    href="/products/maritime"
                                    onClick={(e) => handleClickAction(e, 'maritime')}
                                >
                                    {language === Language.PLN ? "Dział Morski" : "Maritime Department"}
                                </Link>

                                <ul
                                    className={`absolute top-0 left-full ml-2 min-w-[200px] bg-[var(--foreground)] 
                                    border border-gray-300 shadow-lg rounded-lg z-10 ${
                                        hoveredSubmenu === "maritime"
                                            ? 'block'
                                            : 'hidden'
                                    }`}
                                    data-testid="maritime-submenu-desktop-items"
                                >
                                    {renderDropdownItems(maritimeItems, language, onDropdownItemActivate, true)}
                                </ul>
                            </div>
                        </li>
                    </ul>
                )}

            </li>
        </>
    );
}

