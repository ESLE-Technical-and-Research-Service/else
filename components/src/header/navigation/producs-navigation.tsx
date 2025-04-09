import classes from "./main-navigation.module.css";
import Link from "next/link";
import {Language} from "../../../../context/src/types/Language";
import {IoMdArrowDropdown} from "react-icons/io";
import {useLanguage} from "../../../../context/src/LanguageContext";
import {useIsTouchTablet} from "../../../../hooks/src/useIsTouchTablet";
import React from "react";
import {useRouter} from "next/navigation";

type ProductNavigationProps = {
    handleClickAction: (e: React.MouseEvent | React.TouchEvent, menu: string) => void;
    isMobile?: boolean;
    openDropdown: string | null;
};

export default function ProductNavigation({ handleClickAction, isMobile, openDropdown }: ProductNavigationProps) {
    const { language } = useLanguage();
    const isTouchTablet = useIsTouchTablet();
    const router = useRouter();

    const onDropdownItemActivate = (href: string) => (e: React.MouseEvent | React.TouchEvent) => {
        e.preventDefault();
        handleClickAction(e as React.MouseEvent, 'products');
        router.push(href);
    }

    return (
        <>
            <li className={classes.navItem}>
                <Link
                    className="hover:underline cursor-pointer flex items-center"
                    href="/products"
                    onClick={(e) => handleClickAction(e, 'products')}
                >
                    {language === Language.PLN ? "Produkty" : "Products"} <IoMdArrowDropdown className="ml-2" />
                </Link>

                {/* Mobile Dropdown – static positioning */}
                {isMobile && openDropdown === 'products' && (
                    <ul className={`mt-2 bg-white border border-gray-200 rounded-lg`}>
                        <li className={classes.navItem}>
                            <Link
                                href="/products/camera"
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                                onClick={onDropdownItemActivate("/products/camera")}
                            >
                                {language === Language.PLN ? "Kamery" : "Cameras"}
                            </Link>
                        </li>
                        <li className={classes.navItem}>
                            <Link
                                href="/products/pressure-vehicles"
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                                onClick={onDropdownItemActivate("/products/pressure-vehicles")}
                            >
                                {language === Language.PLN ? "Samochody ciśnieniowe" : "Pressure Vehicles"}
                            </Link>
                        </li>
                        <li className={classes.navItem}>
                            <Link
                                href="/products/accessories"
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                                onClick={onDropdownItemActivate("/products/accessories")}
                            >
                                {language === Language.PLN ? "Akcesoria" : "Accessories"}
                            </Link>
                        </li>
                    </ul>
                )}

                {/* Tablet Dropdown – absolute positioning (triggered by click) */}
                {!isMobile && isTouchTablet && openDropdown === 'products' && (
                    <ul className={`${classes.dropdownMenu} ${classes.tabletDropdown} mt-2`}>
                        <li className={classes.navItem}>
                            <Link
                                href="/products/camera"
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                                onClick={onDropdownItemActivate("/products/camera")}
                            >
                                {language === Language.PLN ? "Kamery" : "Cameras"}
                            </Link>
                        </li>
                        <li className={classes.navItem}>
                            <Link
                                href="/products/pressure-vehicles"
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                                onClick={onDropdownItemActivate("/products/pressure-vehicles")}
                            >
                                {language === Language.PLN ? "Samochody ciśnieniowe" : "Pressure Vehicles"}
                            </Link>
                        </li>
                        <li className={classes.navItem}>
                            <Link
                                href="/products/accessories"
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                                onClick={onDropdownItemActivate("/products/accessories")}
                            >
                                {language === Language.PLN ? "Akcesoria" : "Accessories"}
                            </Link>
                        </li>
                    </ul>
                )}

                {/* Desktop Dropdown – absolute positioning; always rendered and controlled by CSS hover */}
                {!isMobile && !isTouchTablet && (
                    <ul className={`${classes.dropdownMenu} ${classes.absoluteDropdown} absolute left-0 mt-2 w-48 rounded-lg shadow-lg bg-white border border-gray-200`}>
                        <li className={classes.navItem}>
                            <Link href="/products/camera" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                                {language === Language.PLN ? "Kamery" : "Cameras"}
                            </Link>
                        </li>
                        <li className={classes.navItem}>
                            <Link href="/products/pressure-vehicles" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                                {language === Language.PLN ? "Samochody ciśnieniowe" : "Pressure Vehicles"}
                            </Link>
                        </li>
                        <li className={classes.navItem}>
                            <Link href="/products/accessories" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                                {language === Language.PLN ? "Akcesoria" : "Accessories"}
                            </Link>
                        </li>
                    </ul>
                )}
            </li>
        </>
    );
}
