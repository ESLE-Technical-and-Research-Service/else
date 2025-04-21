import React, {useState} from 'react';
import ProductNavigation from "./producs-navigation";
import AboutUsNavigation from "./about-us-navigation";
import ServicesNavigation from "./services-navigation";
import Service24by7Navigation from "./service-24-7-navigation";
import ContactNavigation from "./contact-navigation";
import {useIsTouchTablet} from "../../../../hooks/src/useIsTouchTablet";

type MainNavigationProps = {
    isMobile?: boolean;
}

export default function MainNavigation({isMobile = false}: MainNavigationProps) {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [dropdownSubmenu, setDropdownSubmenu] = useState<string | null>(null);
    const isTouchTablet = useIsTouchTablet();

    const toggleDropdown = (menu: string) => {
        setOpenDropdown(openDropdown === menu ? null : menu);
    };

    const toggleDropdownSubmenu = (submenu: string) => {
        setDropdownSubmenu(dropdownSubmenu === submenu ? null : submenu);
    }

    const handleClick = (e: React.MouseEvent | React.TouchEvent, menu: string) => {
        if (isMobile || isTouchTablet) {
            e.preventDefault();

            if (menu === "water-sewage" || menu === "maritime") {
                toggleDropdownSubmenu(menu);
            } else {
                toggleDropdown(menu);
            }
        } else {
            if (menu === "water-sewage" || menu === "maritime") {
                toggleDropdownSubmenu(menu);
            }
        }
    };

    return (
        <nav data-testid="main-nav-container">
            <ul
                className={`flex text-base md:text-lg lg:text-xl font-semibold ${isMobile 
                    ? 'flex-col gap-4' 
                    : isTouchTablet 
                        ? 'relative flex-grow gap-6 flex-nowrap' 
                        : 'flex-row space-x-4 gap-4 md:gap-8 md:flex-nowrap justify-center'
                } p-6`
                }
            >
                <ProductNavigation handleClickAction={handleClick} openDropdown={openDropdown} isMobile={isMobile} dropdownSubmenu={dropdownSubmenu} />
                <AboutUsNavigation handleClickAction={handleClick} openDropdown={openDropdown} isMobile={isMobile}/>
                <ServicesNavigation handleClickAction={handleClick} openDropdown={openDropdown} isMobile={isMobile}/>
                <Service24by7Navigation/>
                <ContactNavigation/>
            </ul>
        </nav>
    );
}
