import classes from "./main-navigation.module.css";
import Link from "next/link";
import React from "react";
import {DropdownItem} from "../../types/DropdownItem";
import {GetLocalizedText} from "../../utils";

export const renderDropdownItems = (
    items: DropdownItem[],
    onDropdownAction?: (href: string) => (e: React.MouseEvent | React.TouchEvent) => void,
    isSubmenu?: boolean
) => (
    items.map((item) => (
        <li key={item.href} className={isSubmenu ? classes.navItemSubmenu : classes.navItem}>
            <Link
                data-testid={`${item.href.split("/").pop()?.toLowerCase()}-dropdown-submenu-link`}
                href={item.href}
                className="block px-4 py-2 text-[var(--font-color)]  whitespace bg-[var(--background)]"
                onClick={onDropdownAction ? onDropdownAction(item.href) : undefined}
            >
                {GetLocalizedText(item.label)}
            </Link>
        </li>
    ))
);