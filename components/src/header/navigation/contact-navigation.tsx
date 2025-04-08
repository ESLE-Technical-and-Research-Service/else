import {useLanguage} from "../../../../context/src/LanguageContext";
import classes from "./main-navigation.module.css";
import Link from "next/link";
import {Language} from "../../../../context/src/types/Language";
import React from "react";

export default function ContactNavigation() {
    const {language} = useLanguage();
    return (
        <>
            <li className={`${classes.navItem}`}>
                <Link className="hover:underline" href="/contact">
                    {language === Language.PLN ? "Kontakt" : "Contact"}
                </Link>
            </li>
        </>
    );
}