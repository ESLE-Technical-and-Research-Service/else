import classes from "./main-navigation.module.css";
import Link from "next/link";
import {Language} from "../../types";
import React from "react";
import {GetLocalizedText} from "../../utils";

export default function ContactNavigation() {
    const contactLinkText = {
        [Language.PL]: "Kontakt",
        [Language.ENG]: "Contact",
    };

    return (
        <>
            <li data-testid="contact-menu" className={`${classes.navItem}`}>
                <Link className="hover:underline" href="/contact">
                    {GetLocalizedText(contactLinkText)}
                </Link>
            </li>
        </>
    );
}