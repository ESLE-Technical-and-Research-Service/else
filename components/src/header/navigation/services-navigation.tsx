import classes from "./main-navigation.module.css";
import Link from "next/link";
import { useLanguage } from "../../../../context/src/LanguageContext";
import { Language } from "../../../../context/src/types/Language";
import { IoMdArrowDropdown } from "react-icons/io";
import { useIsTouchTablet } from "../../../../hooks/src/useIsTouchTablet";
import React from "react";
import { useRouter } from "next/navigation";

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
    const { language } = useLanguage();
    const isTouchTablet = useIsTouchTablet();
    const router = useRouter();

    const onDropdownItemActivate = (href: string) => (e: React.MouseEvent | React.TouchEvent) => {
        e.preventDefault();
        handleClickAction(e as React.MouseEvent, 'services');
        router.push(href);
    };

    return (
        <li className={`${classes.navItem} relative`}>
            <Link
                className="hover:underline cursor-pointer flex items-center"
                href="/services"
                onClick={(e) => handleClickAction(e, 'services')}
            >
                {language === Language.PLN ? "Serwisy" : "Services"} <IoMdArrowDropdown className="ml-2" />
            </Link>

            {/* Mobile Dropdown */}
            {isMobile && openDropdown === 'services' && (
                <ul className={`mt-2 bg-white border border-gray-200 rounded-lg`}>
                    <li className={classes.navItem}>
                        <Link
                            href="/services/cam-service"
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                            onClick={onDropdownItemActivate("/services/cam-service")}
                        >
                            {language === Language.PLN ? "Serwis kamer" : "Cameras Service"}
                        </Link>
                    </li>
                    <li className={classes.navItem}>
                        <Link
                            href="/services/pressure-vehicles"
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                            onClick={onDropdownItemActivate("/services/pressure-vehicles")}
                        >
                            {language === Language.PLN ? "Serwis samochodów ciśnieniowych" : "Pressure Vehicles Service"}
                        </Link>
                    </li>
                    <li className={classes.navItem}>
                        <Link
                            href="/services/tech-support"
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                            onClick={onDropdownItemActivate("/services/tech-support")}
                        >
                            {language === Language.PLN ? "Wsparcie techniczne" : "Technical Support"}
                        </Link>
                    </li>
                    <li className={classes.navItem}>
                        <Link
                            href="/services/trainings"
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                            onClick={onDropdownItemActivate("/services/trainings")}
                        >
                            {language === Language.PLN ? "Szkolenia" : "Trainings"}
                        </Link>
                    </li>
                </ul>
            )}

            {/* Tablet Dropdown */}
            {!isMobile && isTouchTablet && openDropdown === 'services' && (
                <ul className={`${classes.dropdownMenu} ${classes.tabletDropdown} mt-2 bg-white border border-gray-200 rounded-lg`}>
                    <li className={classes.navItem}>
                        <Link href="/services/cam-service" className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                              onClick={onDropdownItemActivate("/services/cam-service")}>
                            {language === Language.PLN ? "Serwis kamer" : "Cameras Service"}
                        </Link>
                    </li>
                    <li className={classes.navItem}>
                        <Link href="/services/pressure-vehicles" className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                              onClick={onDropdownItemActivate("/services/pressure-vehicles")}>
                            {language === Language.PLN ? "Serwis samochodów ciśnieniowych" : "Pressure Vehicles Service"}
                        </Link>
                    </li>
                    <li className={classes.navItem}>
                        <Link href="/services/tech-support" className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                              onClick={onDropdownItemActivate("/services/tech-support")}>
                            {language === Language.PLN ? "Wsparcie techniczne" : "Technical Support"}
                        </Link>
                    </li>
                    <li className={classes.navItem}>
                        <Link href="/services/trainings" className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                              onClick={onDropdownItemActivate("/services/trainings")}>
                            {language === Language.PLN ? "Szkolenia" : "Trainings"}
                        </Link>
                    </li>
                </ul>
            )}

            {/* Desktop Dropdown */}
            {!isMobile && !isTouchTablet && (
                <ul className={`${classes.dropdownMenu} ${classes.absoluteDropdown} absolute left-0 mt-2 w-48 rounded-lg shadow-lg bg-white border border-gray-200`}>
                    <li className={classes.navItem}>
                        <Link href="/services/cam-service" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                            {language === Language.PLN ? "Serwis kamer" : "Cameras Service"}
                        </Link>
                    </li>
                    <li className={classes.navItem}>
                        <Link href="/services/pressure-vehicles" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                            {language === Language.PLN ? "Serwis samochodów ciśnieniowych" : "Pressure Vehicles Service"}
                        </Link>
                    </li>
                    <li className={classes.navItem}>
                        <Link href="/services/tech-support" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                            {language === Language.PLN ? "Wsparcie techniczne" : "Technical Support"}
                        </Link>
                    </li>
                    <li className={classes.navItem}>
                        <Link href="/services/trainings" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                            {language === Language.PLN ? "Szkolenia" : "Trainings"}
                        </Link>
                    </li>
                </ul>
            )}
        </li>
    );
}
