'use client';

import classes from "../main-navigation.module.css";
import Link from "next/link";
import {Language} from "../../../types";
import {renderDropdownItems} from "../render-dropdown-items";
import React from "react";
import {useLanguage} from "../../../../../context/src/LanguageContext";
import {MenuItem, productsMenuItems} from "../config/products-menu-items";

type ProductNavigationProps = {
    handleClickAction: (e: React.MouseEvent | React.TouchEvent, dropdown: string) => void;
    dropdownSubmenu: string | null;
    onDropdownItemActivateAction: (href: string) => (e: React.MouseEvent | React.TouchEvent) => void;
}

export default function ProductsMobileSubmenu({
                                                  handleClickAction,
                                                  dropdownSubmenu,
                                                  onDropdownItemActivateAction
                                              }: ProductNavigationProps) {
    const {language} = useLanguage();


    return (
        <ul
            data-testid="products-mobile-menu-container"
            className={
                `mt-2 bg-[var(--background)] border-b border-t border-gray-300`
            }
        >
            {productsMenuItems.map((item: MenuItem, indx: number) => (
                <li
                    key={indx}
                    className={classes.navItem}
                >
                    <Link
                        key={indx + 1}
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
                                key={indx + 2}
                                data-testid={`${item.submenuName}-mobile-submenu-items`}
                                className={`mt-2 bg-[var(--background)] border-b border-t border-gray-300`}
                            >
                                {renderDropdownItems(item.items, language, onDropdownItemActivateAction, true)}
                            </ul>
                        )
                    }
                </li>
            ))}
        </ul>
    );
}