import classes from "../main-navigation.module.css";
import Link from "next/link";
import {renderDropdownItems} from "../render-dropdown-items";
import React from "react";
import { GetLocalizedText } from "../../../utils";
import {productsMenuItems} from "../config/products-menu-items";
import {SubmenuItem} from "../../../types";

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

    return (
        <ul
            data-testid="products-desktop-dropdown-menu"
            className={
                `${classes.dropdownMenu} ${classes.absoluteDropdown}
                absolute left-0 mt-2 w-64 bg-[var(--background)] border border-gray-300 shadow-lg rounded-lg z-10`
            }
        >
            {productsMenuItems.map((item: SubmenuItem, idx: number) => (
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
                            {GetLocalizedText(item.label)}
                        </Link>

                        <ul
                            key={idx + 3}
                            className={`absolute top-0 left-full ml-2 min-w-[200px] bg-[var(--background)] 
                                    border border-gray-300 shadow-lg rounded-lg z-10 ${
                                hoveredSubmenu === item.submenuName
                                    ? 'block'
                                    : 'hidden'
                            }`}
                            data-testid={`${item.submenuName}-submenu-desktop-items`}
                        >
                            {renderDropdownItems(item.items, onDropdownItemActivateAction)}
                        </ul>
                    </div>
                </li>
            ))}
        </ul>
    );
}