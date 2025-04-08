import classes from "./main-navigation.module.css";
import Link from "next/link";
import {Language} from "../../../../context/src/types/Language";
import {IoMdArrowDropdown} from "react-icons/io";
import {useLanguage} from "../../../../context/src/LanguageContext";

type ProductNavigationProps = {
    handleClickAction: (e: React.MouseEvent, menu: string) => void;
    isMobile?: boolean;
    openDropdown: string | null;
}

export default function ProductNavigation({handleClickAction, isMobile, openDropdown}: ProductNavigationProps) {
    const {language} = useLanguage();

    return (
        <>
            <li className={`${classes.navItem} relative`}>
                <Link
                    className="hover:underline cursor-pointer flex items-center"
                    href="/products"
                    onClick={(e) => handleClickAction(e, 'products')}
                >
                    {language === Language.PLN ? "Produkty" : "Products"} <IoMdArrowDropdown className="ml-2"/>
                </Link>

                {/* Mobile Dropdown */}
                {isMobile && openDropdown === 'products' && (
                    <ul className={`mt-2 bg-white border border-gray-200 rounded-lg`}>
                        <li className={classes.navItem}>
                            <Link href="/products/camera"
                                  className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                                {language === Language.PLN ? "Kamery" : "Cameras"}
                            </Link>
                        </li>
                        <li className={classes.navItem}>
                            <Link href="/products/pressure-vehicles"
                                  className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                                {language === Language.PLN ? "Samochody ciśnieniowe" : "Pressure Vehicles"}
                            </Link>
                        </li>
                        <li className={classes.navItem}>
                            <Link href="/products/accessories"
                                  className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                                {language === Language.PLN ? "Akcesoria" : "Accessories"}
                            </Link>
                        </li>
                    </ul>
                )}

                {/* Desktop Dropdown */}
                {!isMobile && (
                    <ul className={`${classes.dropdownMenu} absolute left-0 mt-2 w-48 rounded-lg shadow-lg bg-white border border-gray-200`}>
                        <li className={classes.navItem}>
                            <Link href="/products/camera"
                                  className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                                {language === Language.PLN ? "Kamery" : "Cameras"}
                            </Link>
                        </li>
                        <li className={classes.navItem}>
                            <Link href="/products/pressure-vehicles"
                                  className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                                {language === Language.PLN ? "Samochody ciśnieniowe" : "Pressure Vehicles"}
                            </Link>
                        </li>
                        <li className={classes.navItem}>
                            <Link href="/products/accessories"
                                  className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                                {language === Language.PLN ? "Akcesoria" : "Accessories"}
                            </Link>
                        </li>
                    </ul>
                )}
            </li>
        </>
    )
}