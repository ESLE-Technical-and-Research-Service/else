import {useLanguage} from "../../../../context/src/LanguageContext";
import classes from "./main-navigation.module.css";
import Link from "next/link";
import {Language} from "../../types/Language";
import React from "react";

export default function ContactNavigation() {
    const {language} = useLanguage();
    return (
        <>
            <li data-testid="contact-menu" className={`${classes.navItem}`}>
                <Link className="hover:underline" href="/contact">
                    {language === Language.PL ? "Kontakt" : "Contact"}
                </Link>
            </li>
        </>
    );
}