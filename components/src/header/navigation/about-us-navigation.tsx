import classes from "./main-navigation.module.css";
import Link from "next/link";
import {Language} from "../../types";
import {useIsTouchTablet} from "../../../../hooks/src/useIsTouchTablet";
import React from "react";
import {useRouter} from "next/navigation";
import {renderDropdownItems} from "./render-dropdown-items";
import {aboutUsDropdownItems} from "./config/about-us-dropdown-items";
import {GetLocalizedText} from "../../utils";

type ProductNavigationProps = {
    handleClickAction: (e: React.MouseEvent | React.TouchEvent, menu: string) => void;
    isMobile?: boolean;
    openDropdown: string | null;
};

export default function AboutUsNavigation({ handleClickAction, isMobile, openDropdown }: ProductNavigationProps) {
    const isTouchTablet = useIsTouchTablet();
    const router = useRouter();

    const onDropdownItemActivate = (href: string) => (e: React.MouseEvent | React.TouchEvent) => {
        e.preventDefault();
        handleClickAction(e as React.MouseEvent, 'products');
        router.push(href);
    }

    const aboutUsHeaderText = {
        [Language.PL]: "O nas",
        [Language.ENG]: "About Us"
    };

    return (
        <li data-testid="about-us-menu" className={`${classes.navItem} ${classes.hasDropdown}`}>
            <Link
                data-testid="about-us-menu-link"
                className="hover:underline cursor-pointer flex items-center"
                href="/about"
                onClick={(e) => handleClickAction(e, 'about')}
            >
                {GetLocalizedText(aboutUsHeaderText)}
            </Link>

            {/* Mobile Dropdown */}
            {isMobile && openDropdown === 'about' && (
                <ul className={`mt-2 bg-[var(--background)] border border-gray-200 rounded-lg`}>
                    {renderDropdownItems(aboutUsDropdownItems, onDropdownItemActivate)}
                </ul>
            )}

            {/* Tablet Dropdown */}
            {!isMobile && isTouchTablet && openDropdown === 'about' && (
                <ul
                    data-testid="about-us-tablet-items"
                    className={
                    `${classes.dropdownMenu} ${classes.tabletDropdown} 
                    mt-2 bg-[var(--background)] border border-gray-200 rounded-lg`
                }
                >
                    {renderDropdownItems(aboutUsDropdownItems, onDropdownItemActivate)}
                </ul>
            )}

            {/* Desktop Dropdown – always visible on hover, handled by CSS */}
            {!isMobile && !isTouchTablet && (
                <ul data-testid="about-us-items" className={`${classes.dropdownMenu} ${classes.absoluteDropdown} a
                bsolute left-0 mt-2 w-48 rounded-lg shadow-lg bg-[var(--background)] border border-gray-200`}>
                    {renderDropdownItems(aboutUsDropdownItems)}
                </ul>
            )}
        </li>
    );
}
