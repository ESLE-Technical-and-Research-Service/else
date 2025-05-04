import classes from "./main-navigation.module.css";
import Link from "next/link";
import {Language} from "../../types/Language";
import React from "react";
import {useLanguage} from "../../../../context/src/LanguageContext";

export default function Service24by7Navigation() {
    const {language} = useLanguage();
    return (
        <>
            <li data-testid="service-24by7-menu" className={`${classes.navItem}`}>
                <Link className="hover:underline" href="/service-24-7">
                    {language === Language.PL ? "Serwis 24/7" : "Service 24/7"}
                </Link>
            </li>
        </>
    );
}