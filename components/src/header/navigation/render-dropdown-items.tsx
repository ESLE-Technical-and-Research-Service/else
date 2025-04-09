import classes from "./main-navigation.module.css";
import Link from "next/link";
import {Language} from "../../../../context/src/types/Language";
import React from "react";

export type DropDownItem = {
    href: string;
    labelPL: string;
    labelENG: string;
}

export const renderDropdownItems = (
    items: DropDownItem[],
    language: Language,
    onDropdownAction: (href: string) => (e: React.MouseEvent | React.TouchEvent) => void) => (
    items.map((item) => (
        <li key={item.href} className={classes.navItem}>
            <Link
            href={item.href}
            className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
            onClick={onDropdownAction(item.href)}
            >
                {language === Language.PLN ? item.labelPL : item.labelENG}
            </Link>
        </li>
    ))
);