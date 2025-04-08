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

export default function AboutUsNavigation({handleClickAction, isMobile, openDropdown}: ProductNavigationProps) {
    const {language} = useLanguage();
    return (
        <>
            <li className={`${classes.navItem} relative`}>
                <Link
                    className="hover:underline cursor-pointer flex items-center"
                    href="/about"
                    onClick={(e) => handleClickAction(e, 'about')}
                >
                    {language === Language.PLN ? "O nas" : "About Us"} <IoMdArrowDropdown className="ml-2"/>
                </Link>

                {/* Mobile Dropdown */}
                {isMobile && openDropdown === 'about' && (
                    <ul className={`mt-2 bg-white border border-gray-200 rounded-lg`}>
                        <li className={classes.navItem}>
                            <Link href="/about/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                                {language === Language.PLN ? "Opis działalności" : "Company Profile"}
                            </Link>
                        </li>
                        <li className={classes.navItem}>
                            <Link href="/about/departments"
                                  className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                                {language === Language.PLN ? "Nasze działy" : "Our Departments"}
                            </Link>
                        </li>
                        <li className={classes.navItem}>
                            <Link href="/about/management"
                                  className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                                {language === Language.PLN ? "Władze spółki" : "Management"}
                            </Link>
                        </li>
                        <li className={classes.navItem}>
                            <Link href="/about/locations"
                                  className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                                {language === Language.PLN ? "Lokalizacje" : "Locations"}
                            </Link>
                        </li>
                        <li className={classes.navItem}>
                            <Link href="/about/media"
                                  className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Media</Link>
                        </li>
                    </ul>
                )}

                {/* Desktop Dropdown */}
                {!isMobile && (
                    <ul className={`${classes.dropdownMenu} absolute left-0 mt-2 w-48 rounded-lg shadow-lg bg-white border border-gray-200`}>
                        <li className={classes.navItem}>
                            <Link href="/about/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                                {language === Language.PLN ? "Opis działalności" : "Company Profile"}
                            </Link>
                        </li>
                        <li className={classes.navItem}>
                            <Link href="/about/departments"
                                  className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                                {language === Language.PLN ? "Nasze działy" : "Our Departments"}
                            </Link>
                        </li>
                        <li className={classes.navItem}>
                            <Link href="/about/management"
                                  className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                                {language === Language.PLN ? "Władze spółki" : "Management"}
                            </Link>
                        </li>
                        <li className={classes.navItem}>
                            <Link href="/about/certificates"
                                  className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                                {language === Language.PLN ? "Certifikaty" : "Certificates"}
                            </Link>
                        </li>
                        <li className={classes.navItem}>
                            <Link href="/about/locations"
                                  className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                                {language === Language.PLN ? "Lokalizacje" : "Locations"}
                            </Link>
                        </li>
                        <li className={classes.navItem}>
                            <Link href="/about/media"
                                  className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Media</Link>
                        </li>
                    </ul>
                )}
            </li>
        </>
    );
}