'use client';

import classes from "../main-navigation.module.css";
import Link from "next/link";
import React from "react";
import {servicesDropdownItems} from "../config/services-dropdown-items";
import {useRouter} from "next/navigation";
import {GetLocalizedText} from "../../../utils";
import {DropdownItem, Language} from "../../../types";

type ServicesMobileSubmenuProps = {
    handleClickAction: (e: React.MouseEvent | React.TouchEvent, menu: string) => void;
};

export default function ServicesMobileSubmenu({
    handleClickAction,
}: ServicesMobileSubmenuProps) {
    const router = useRouter();

    const onDropdownItemActivate = (href: string) => (e: React.MouseEvent | React.TouchEvent) => {
        e.preventDefault();
        handleClickAction(e as React.TouchEvent, 'services');
        router.push(href);
    };

    return (
        <ul
            data-testid="products-mobile-menu-container"
            className={
                `mt-2 bg-[var(--background)] border-b border-t border-gray-300`
            }
        >
            {servicesDropdownItems.map((item: DropdownItem, idx: number) => (
                <li
                    key={idx}
                    className={classes.navItem}
                >
                    <Link
                        key={idx + 1}
                        data-testid={`products-${item.label[Language.ENG]}-mobile-submenu-link`}
                        className="hover:underline cursor-pointer flex items-center"
                        href={item.href}
                        onClick={onDropdownItemActivate(item.href)}
                    >
                        {GetLocalizedText(item.label)}
                    </Link>
                </li>
            ))}
        </ul>
    );
}