'use client';

import classes from "../main-navigation.module.css";
import Link from "next/link";
import {Language} from "../../../types";
import {renderDropdownItems} from "../render-dropdown-items";
import React from "react";
import {useLanguage} from "../../../../../context/src/LanguageContext";
import {MenuItem, productsMenuItems} from "../config/products-menu-items";

type ProductNavigationProps = {
    handleClickAction: (e: React.MouseEvent | React.TouchEvent, submenu: string) => void;
    dropdownSubmenu: string | null;
    onDropdownItemActivateAction: (href: string) => (e: React.MouseEvent | React.TouchEvent) => void
}

export default function ProductsTabletSubmenu({
                                                  handleClickAction,
                                                  dropdownSubmenu,
                                                  onDropdownItemActivateAction
                                              }: ProductNavigationProps) {
    const {language} = useLanguage();

    return (
        <ul data-testid="products-tablet-dropdown-menu"
            className={`${classes.dropdownMenu} ${classes.tabletDropdown} mt-2 rounded-lg`}>
            {productsMenuItems.map((item: MenuItem) => (
                <>
                    <li className={classes.navItem} key={item.submenuName}>
                        <Link
                            key={item.submenuName}
                            data-testid={`products-${item.submenuName}-submenu-link`}
                            className="hover:underline cursor-pointer flex items-center"
                            href={item.href}
                            onClick={(e) => handleClickAction(e, item.submenuName)}
                        >
                            {language === Language.PL ? item.labelPL : item.labelENG}
                        </Link>
                    </li>
                    {
                        dropdownSubmenu === item.submenuName && (
                            <ul
                                key={item.submenuName}
                                data-testid={`${item.submenuName}-submenu-tablet-items`}
                                className={`mt-2 bg-[var(--foreground)] border-b border-t border-gray-300`}
                            >
                                {renderDropdownItems(item.items, language, onDropdownItemActivateAction, true)}
                            </ul>
                        )
                    }
                </>
            ))}
        </ul>
    )
}