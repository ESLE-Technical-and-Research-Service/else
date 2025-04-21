'use client';

import classes from "../main-navigation.module.css";
import Link from "next/link";
import {Language} from "../../../../../context/src/types/Language";
import {renderDropdownItems} from "../render-dropdown-items";
import React from "react";
import {useLanguage} from "../../../../../context/src/LanguageContext";
import {MenuItem, productsMenuItems} from "../config/products-menu-items";

type ProductNavigationProps = {
    handleClickAction: (e: React.MouseEvent | React.TouchEvent, dropdown: string) => void;
    dropdownSubmenu: string | null;
    onDropdownItemActivate: (href: string) => (e: React.MouseEvent | React.TouchEvent) => void;
}

export default function ProductsMobileSubmenu({
                                                  handleClickAction,
                                                  dropdownSubmenu,
                                                  onDropdownItemActivate
                                              }: ProductNavigationProps) {
    const {language} = useLanguage();
    const productsItems: MenuItem[] = productsMenuItems;

    return (
        <ul
            data-testid="products-mobile-menu"
            className={
                `mt-2 bg-white border-b border-t border-gray-300`
            }
        >
            {productsItems.map((item: MenuItem) => (
                <li
                    key={item.submenuName}
                    className={classes.navItem}
                >
                    <Link
                        key={item.submenuName}
                        data-testid={`products-${item.submenuName}-mobile-submenu-link`}
                        className="hover:underline cursor-pointer flex items-center"
                        href={item.href}
                        onClick={(e) => handleClickAction(e, item.submenuName)}
                    >
                        {
                            language === Language.PL
                                ? item.labelPL
                                : item.labelENG
                        }
                    </Link>
                    {
                        dropdownSubmenu === item.submenuName && (
                            <ul
                                key={item.submenuName}
                                data-testid={`${item.submenuName}-mobile-submenu-items`}
                                className={`mt-2 bg-white border-b border-t border-gray-300`}
                            >
                                {renderDropdownItems(item.items, language, onDropdownItemActivate, true)}
                            </ul>
                        )
                    }
                </li>
            ))}
        </ul>
    );
}