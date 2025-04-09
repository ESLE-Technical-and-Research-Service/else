import classes from "./main-navigation.module.css";
import Link from "next/link";
import { Language } from "../../../../context/src/types/Language";
import { IoMdArrowDropdown } from "react-icons/io";
import { useLanguage } from "../../../../context/src/LanguageContext";
import { useIsTouchTablet } from "../../../../hooks/src/useIsTouchTablet";
import React from "react";
import {useRouter} from "next/navigation";

type ProductNavigationProps = {
    handleClickAction: (e: React.MouseEvent | React.TouchEvent, menu: string) => void;
    isMobile?: boolean;
    openDropdown: string | null;
};

export default function AboutUsNavigation({ handleClickAction, isMobile, openDropdown }: ProductNavigationProps) {
    const { language } = useLanguage();
    const isTouchTablet = useIsTouchTablet();
    const router = useRouter();

    const onDropdownItemActivate = (href: string) => (e: React.MouseEvent | React.TouchEvent) => {
        e.preventDefault();
        handleClickAction(e as React.MouseEvent, 'products');
        router.push(href);
    }

    return (
        <li className={`${classes.navItem} relative`}>
            <Link
                className="hover:underline cursor-pointer flex items-center"
                href="/about"
                onClick={(e) => handleClickAction(e, 'about')}
            >
                {language === Language.PLN ? "O nas" : "About Us"} <IoMdArrowDropdown className="ml-2" />
            </Link>

            {/* Mobile Dropdown */}
            {isMobile && openDropdown === 'about' && (
                <ul className={`mt-2 bg-white border border-gray-200 rounded-lg`}>
                    <li className={classes.navItem}>
                        <Link
                            href="/about/profile"
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                            onClick={onDropdownItemActivate("/about/profile")}
                        >
                            {language === Language.PLN ? "Opis działalności" : "Company Profile"}
                        </Link>
                    </li>
                    <li className={classes.navItem}>
                        <Link
                            href="/about/departments"
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                            onClick={onDropdownItemActivate("/about/departments")}
                        >
                            {language === Language.PLN ? "Nasze działy" : "Our Departments"}
                        </Link>
                    </li>
                    <li className={classes.navItem}>
                        <Link
                            href="/about/management"
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                            onClick={onDropdownItemActivate("/about/management")}
                        >
                            {language === Language.PLN ? "Władze spółki" : "Management"}
                        </Link>
                    </li>
                    <li className={classes.navItem}>
                        <Link
                            href="/about/locations"
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                            onClick={onDropdownItemActivate("/about/locations")}
                        >
                            {language === Language.PLN ? "Lokalizacje" : "Locations"}
                        </Link>
                    </li>
                    <li className={classes.navItem}>
                        <Link
                            href="/about/media"
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                            onClick={onDropdownItemActivate("/about/media")}
                        >
                            Media
                        </Link>
                    </li>
                </ul>
            )}

            {/* Tablet Dropdown */}
            {!isMobile && isTouchTablet && openDropdown === 'about' && (
                <ul className={`${classes.dropdownMenu} ${classes.tabletDropdown} mt-2 bg-white border border-gray-200 rounded-lg`}>
                    <li className={classes.navItem}>
                        <Link
                            href="/about/profile"
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                            onClick={onDropdownItemActivate("/about/profile")}
                        >
                            {language === Language.PLN ? "Opis działalności" : "Company Profile"}
                        </Link>
                    </li>
                    <li className={classes.navItem}>
                        <Link
                            href="/about/departments"
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                            onClick={onDropdownItemActivate("/about/departments")}
                        >
                            {language === Language.PLN ? "Nasze działy" : "Our Departments"}
                        </Link>
                    </li>
                    <li className={classes.navItem}>
                        <Link
                            href="/about/management"
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                            onClick={onDropdownItemActivate("/about/management")}
                        >
                            {language === Language.PLN ? "Władze spółki" : "Management"}
                        </Link>
                    </li>
                    <li className={classes.navItem}>
                        <Link
                            href="/about/locations"
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                            onClick={onDropdownItemActivate("/about/locations")}
                        >
                            {language === Language.PLN ? "Lokalizacje" : "Locations"}
                        </Link>
                    </li>
                    <li className={classes.navItem}>
                        <Link
                            href="/about/media"
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                            onClick={onDropdownItemActivate("/about/media")}
                        >
                            Media
                        </Link>
                    </li>
                </ul>
            )}

            {/* Desktop Dropdown – always visible on hover, handled by CSS */}
            {!isMobile && !isTouchTablet && (
                <ul className={`${classes.dropdownMenu} ${classes.absoluteDropdown} absolute left-0 mt-2 w-48 rounded-lg shadow-lg bg-white border border-gray-200`}>
                    <li className={classes.navItem}>
                        <Link href="/about/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                            {language === Language.PLN ? "Opis działalności" : "Company Profile"}
                        </Link>
                    </li>
                    <li className={classes.navItem}>
                        <Link href="/about/departments" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                            {language === Language.PLN ? "Nasze działy" : "Our Departments"}
                        </Link>
                    </li>
                    <li className={classes.navItem}>
                        <Link href="/about/management" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                            {language === Language.PLN ? "Władze spółki" : "Management"}
                        </Link>
                    </li>
                    <li className={classes.navItem}>
                        <Link href="/about/certificates" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                            {language === Language.PLN ? "Certyfikaty" : "Certificates"}
                        </Link>
                    </li>
                    <li className={classes.navItem}>
                        <Link href="/about/locations" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                            {language === Language.PLN ? "Lokalizacje" : "Locations"}
                        </Link>
                    </li>
                    <li className={classes.navItem}>
                        <Link href="/about/media" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                            Media
                        </Link>
                    </li>
                </ul>
            )}
        </li>
    );
}
