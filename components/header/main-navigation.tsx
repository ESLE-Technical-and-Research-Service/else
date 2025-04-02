'use client';

import classes from "./main-header.module.css";
import Link from "next/link";
import {useLanguage} from "../../context/LanguageContext";

export default function MainNavigation() {
    const {language} = useLanguage();
    return (
        <nav className="flex justify-center w-1/3">
            <ul className="flex space-x-8">
                <li className={classes.navItem}>
                    <Link className="hover:underline" href="/products">
                        {
                            language === "PLN"
                                ? "Produkty"
                                : "Products"
                        }
                    </Link>
                    <ul className={classes.dropdownMenu}>
                        <li><Link href="/products/product1">Product 1</Link></li>
                        <li><Link href="/products/product2">Product 2</Link></li>
                    </ul>
                </li>
                <li className={classes.navItem}>
                    <Link className="hover:underline" href="/about">
                        {
                            language === "PLN"
                                ? "O nas"
                                : "About Us"
                        }
                    </Link>
                    <ul className={classes.dropdownMenu}>
                        <li><Link href="/about/team">Our Team</Link></li>
                        <li><Link href="/about/mission">Our Mission</Link></li>
                    </ul>
                </li>
                <li className={classes.navItem}>
                    <Link className="hover:underline" href="/services">
                        {
                            language === "PLN"
                                ? "Serwisy"
                                : "Services"
                        }
                    </Link>
                    <ul className={classes.dropdownMenu}>
                        <li><Link href="/services/consulting">Consulting</Link></li>
                        <li><Link href="/services/development">Development</Link></li>
                    </ul>
                </li>
                <li className={classes.navItem}>
                    <Link className="hover:underline" href="/contact">
                        {
                            language === "PLN"
                                ? "Kontakt"
                                : "Contact"
                        }
                    </Link>
                    <ul className={classes.dropdownMenu}>
                        <li><Link href="/contact/email">Email Us</Link></li>
                        <li><Link href="/contact/locations">Our Locations</Link></li>
                    </ul>
                </li>
                <li className={classes.navItem}>
                    <Link className="hover:underline" href="/service-24-7">
                        {
                            language === "PLN"
                                ? "Serwis 24/7"
                                : "Service 24/7"
                        }
                    </Link>
                </li>
            </ul>
        </nav>
    );
}