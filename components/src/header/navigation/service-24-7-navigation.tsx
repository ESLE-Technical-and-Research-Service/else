import classes from "./main-navigation.module.css";
import Link from "next/link";
import {Language} from "../../types";
import React from "react";
import {GetLocalizedText} from "../../utils";

export default function Service24by7Navigation() {
    const service24by7Text = {
        [Language.PL]: "Serwis 24/7",
        [Language.ENG]: "Service 24/7",
    };
    return (
        <>
            <li className={`${classes.navItem}`}>
                <Link
                    data-testid="service-24by7-menu"
                    className="hover:underline"
                    href="https://serwis.else.pl/default/login/login?_gl=11pzg0dj_gaMjAyMDkzNTI0Ni4xNzQzNDM0OTA5_ga_J9BZ8BSPXX*MTc0NjQ2MDk2Ni41MC4wLjE3NDY0NjA5NjYuMC4wLjA"
                >
                    {GetLocalizedText(service24by7Text)}
                </Link>
            </li>
        </>
    );
}