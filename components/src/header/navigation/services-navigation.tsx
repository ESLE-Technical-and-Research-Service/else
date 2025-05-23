import classes from "./main-navigation.module.css";
import Link from "next/link";
import {Language} from "../../types";
import {useIsTouchTablet} from "../../../../hooks/src/useIsTouchTablet";
import React from "react";
import {useRouter} from "next/navigation";
import {renderDropdownItems} from "./render-dropdown-items";
import {servicesDropdownItems} from "./config/services-dropdown-items";
import ServicesMobileSubmenu from "./mobile/services-mobile-submenu";
import {GetLocalizedText} from "../../utils";

type ServicesNavigationProps = {
    handleClickAction: (e: React.MouseEvent | React.TouchEvent, menu: string) => void;
    isMobile?: boolean;
    openDropdown: string | null;
};

export default function ServicesNavigation({
                                               handleClickAction,
                                               isMobile,
                                               openDropdown,
                                           }: ServicesNavigationProps) {
    const isTouchTablet = useIsTouchTablet();
    const router = useRouter();

    const onDropdownItemActivate = (href: string) => (e: React.MouseEvent | React.TouchEvent) => {
        e.preventDefault();
        handleClickAction(e as React.MouseEvent, 'services');
        router.push(href);
    };

    const servicesLinkText = {
        [Language.PL]: "Serwisy",
        [Language.ENG]: "Services"
    };

    return (
        <li data-testid="services-menu" className={`${classes.navItem} ${classes.hasDropdown}`}>
            <Link
                data-testid="services-menu-link"
                className="hover:underline cursor-pointer flex items-center"
                href="/services"
                onClick={(e) => handleClickAction(e, 'services')}
            >
                {GetLocalizedText(servicesLinkText)}
            </Link>

            {/* Mobile Dropdown */}
            {isMobile && openDropdown === 'services' && (
                <ServicesMobileSubmenu handleClickAction={handleClickAction} />
            )}

            {/* Tablet Dropdown */}
            {!isMobile && isTouchTablet && openDropdown === 'services' && (
                <ul
                    data-testid="services-tablet-items"
                    className={
                        `${classes.dropdownMenu} ${classes.tabletDropdown} 
                    mt-2 bg-[var(--background)] border border-gray-200 rounded-lg`
                    }
                >
                    {renderDropdownItems(servicesDropdownItems, onDropdownItemActivate)}
                </ul>
            )}

            {/* Desktop Dropdown */}
            {!isMobile && !isTouchTablet && (
                <ul data-testid="services-menu-items"
                    className={`${classes.dropdownMenu} ${classes.absoluteDropdown} absolute left-0 mt-2 w-48 
                    rounded-lg shadow-lg bg-[var(--background)] border border-gray-200`}>
                    {renderDropdownItems(servicesDropdownItems)}
                </ul>
            )}
        </li>
    );
}
