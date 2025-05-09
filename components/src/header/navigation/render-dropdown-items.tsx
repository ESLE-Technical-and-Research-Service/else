import classes from "./main-navigation.module.css";
import Link from "next/link";
import {Language} from "../../types";
import React from "react";

export type DropDownItem = {
    href: string;
    labelPL: string;
    labelENG: string;
}

export const renderDropdownItems = (
    items: DropDownItem[],
    language: Language,
    onDropdownAction?: (href: string) => (e: React.MouseEvent | React.TouchEvent) => void,
    isSubmenu?: boolean
) => (
    items.map((item) => (
        <li key={item.href} className={isSubmenu ? classes.navItemSubmenu : classes.navItem}>
            <Link
                data-testid={`${item.href.split("/").pop()?.toLowerCase()}-dropdown-submenu-link`}
                href={item.href}
                className="block px-4 py-2 text-[var(--font-color)]  whitespace-nowrap bg-white"
                onClick={onDropdownAction ? onDropdownAction(item.href) : undefined}
            >
                {language === Language.PL ? item.labelPL : item.labelENG}
            </Link>
        </li>
    ))
);