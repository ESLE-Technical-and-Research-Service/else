'use client';

import classes from "../main-navigation.module.css";
import Link from "next/link";
import {Language} from "../../../types";
import {renderDropdownItems} from "../render-dropdown-items";
import React from "react";
import {useLanguage} from "../../../../../context/src/LanguageContext";
import {MenuItem, productsMenuItems} from "../config/products-menu-items";

type ProductsDesktopSubmenuProps = {
    handleClickAction: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, submenu: string) => void;
    onDropdownItemActivateAction: (href: string) => (e: React.MouseEvent | React.TouchEvent) => void;
    handleMouseEnterAction: (submenu: string) => void;
    handleMouseLeaveAction: () => void;
    hoveredSubmenu: string | null;
}

export default function ProductsDesktopSubmenu({
                                                   handleClickAction,
                                                   onDropdownItemActivateAction,
                                                   handleMouseEnterAction,
                                                   handleMouseLeaveAction,
                                                   hoveredSubmenu
                                               }: ProductsDesktopSubmenuProps) {
    const {language} = useLanguage();

    return (
        <ul
            data-testid="products-desktop-dropdown-menu"
            className={
                `${classes.dropdownMenu} ${classes.absoluteDropdown}
                absolute left-0 mt-2 w-64 bg-white border border-gray-300 shadow-lg rounded-lg z-10`
            }
        >
            {productsMenuItems.map((item: MenuItem, idx: number) => (
                <li
                    key={idx}
                    className={`${classes.navItem} relative`}
                    onMouseEnter={() => handleMouseEnterAction(item.submenuName)}
                    onMouseLeave={handleMouseLeaveAction}
                >
                    <div
                        key={idx + 1}
                        className={`${classes.navItem} ${classes.hasSubmenuRightArrow}`}
                    >
                        <Link
                            key={idx + 2}
                            data-testid={`products-desktop-${item.submenuName}-submenu-link`}
                            className="hover:underline cursor-pointer flex items-center px-4 py-2"
                            href={item.href}
                            onClick={(e) => handleClickAction(e, item.submenuName)}
                        >
                            {
                                language === Language.PL
                                    ? item.labelPL
                                    : item.labelENG
                            }
                        </Link>

                        <ul
                            key={idx + 3}
                            className={`absolute top-0 left-full ml-2 min-w-[200px] bg-[var(--foreground)] 
                                    border border-gray-300 shadow-lg rounded-lg z-10 ${
                                hoveredSubmenu === item.submenuName
                                    ? 'block'
                                    : 'hidden'
                            }`}
                            data-testid={`${item.submenuName}-submenu-desktop-items`}
                        >
                            {renderDropdownItems(item.items, language, onDropdownItemActivateAction)}
                        </ul>
                    </div>
                </li>
            ))}
        </ul>
    );
}