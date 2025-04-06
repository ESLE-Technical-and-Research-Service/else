import {useState} from 'react';
import classes from "./main-navigation.module.css";
import Link from "next/link";
import {useLanguage} from "../../context/LanguageContext";
import {Language} from "../../context/types/Language";
import {IoMdArrowDropdown} from "react-icons/io";

type MainNavigationProps = {
    isMobile?: boolean;
}

export default function MainNavigation({isMobile = false}: MainNavigationProps) {
    const {language} = useLanguage();
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const toggleDropdown = (menu: string) => {
        setOpenDropdown(openDropdown === menu ? null : menu);
    };

    const handleClick = (e: React.MouseEvent, menu: string) => {
        if (isMobile) {
            e.preventDefault();
            toggleDropdown(menu);
        }
    };

    return (
        <nav>
            <ul className={`flex ${isMobile ? 'flex-col gap-4' : 'space-x-8 gap-4'} p-4`}>
                {/* Products Menu */}
                <li className={`${classes.navItem} relative`}>
                    <Link
                        className="hover:underline cursor-pointer flex items-center"
                        href="/products"
                        onClick={(e) => handleClick(e, 'products')}
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

                {/* About Us Menu */}
                <li className={`${classes.navItem} relative`}>
                    <Link
                        className="hover:underline cursor-pointer flex items-center"
                        href="/about"
                        onClick={(e) => handleClick(e, 'about')}
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

                {/* Services Menu */}
                <li className={`${classes.navItem} relative`}>
                    <Link
                        className="hover:underline cursor-pointer flex items-center"
                        href="/services"
                        onClick={(e) => handleClick(e, 'services')}
                    >
                        {language === Language.PLN ? "Serwisy" : "Services"} <IoMdArrowDropdown className="ml-2"/>
                    </Link>

                    {/* Mobile Dropdown */}
                    {isMobile && openDropdown === 'services' && (
                        <ul className={`mt-2 bg-white border border-gray-200 rounded-lg`}>
                            <li className={classes.navItem}>
                                <Link href="/services/cam-service"
                                      className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                                    {language === Language.PLN ? "Serwis kamer" : "Cameras Service"}
                                </Link>
                            </li>
                            <li className={classes.navItem}>
                                <Link href="/services/pressure-vehicles"
                                      className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                                    {language === Language.PLN ? "Serwis samochodów ciśnieniowych" : "Pressure Vehicles Service"}
                                </Link>
                            </li>
                            <li className={classes.navItem}>
                                <Link href="/services/tech-support"
                                      className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                                    {language === Language.PLN ? "Wsparcie techniczne" : "Technical Support"}
                                </Link>
                            </li>
                            <li className={classes.navItem}>
                                <Link href="/services/trainings"
                                      className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                                    {language === Language.PLN ? "Szkolenia" : "Trainings"}
                                </Link>
                            </li>
                        </ul>
                    )}

                    {/* Desktop Dropdown */}
                    {!isMobile && (
                        <ul className={`${classes.dropdownMenu} absolute left-0 mt-2 w-48 rounded-lg shadow-lg bg-white border border-gray-200`}>
                            <li className={classes.navItem}>
                                <Link href="/services/cam-service"
                                      className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                                    {language === Language.PLN ? "Serwis kamer" : "Cameras Service"}
                                </Link>
                            </li>
                            <li className={classes.navItem}>
                                <Link href="/services/pressure-vehicles"
                                      className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                                    {language === Language.PLN ? "Serwis samochodów ciśnieniowych" : "Pressure Vehicles Service"}
                                </Link>
                            </li>
                            <li className={classes.navItem}>
                                <Link href="/services/tech-support"
                                      className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                                    {language === Language.PLN ? "Wsparcie techniczne" : "Technical Support"}
                                </Link>
                            </li>
                            <li className={classes.navItem}>
                                <Link href="/services/trainings"
                                      className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                                    {language === Language.PLN ? "Szkolenia" : "Trainings"}
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>

                {/* Service 24/7 */}
                <li className={`${classes.navItem}`}>
                    <Link className="hover:underline" href="/service-24-7">
                        {language === Language.PLN ? "Serwis 24/7" : "Service 24/7"}
                    </Link>
                </li>

                {/* Contact */}
                <li className={`${classes.navItem}`}>
                    <Link className="hover:underline" href="/contact">
                        {language === Language.PLN ? "Kontakt" : "Contact"}
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
