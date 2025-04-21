'use client';

import {useLanguage} from "../../../context/src/LanguageContext";
import Link from "next/link";

export default function FooterNavigation() {
    const {language} = useLanguage();

    return (
        <div>
            <h3 className="font-bold mb-2">
                {
                    language === "PL"
                        ? "Nawigacja"
                        : "Navigation"
                }
            </h3>
            <ul className="space-y-2">
                <li>
                    <Link className="hover:underline" href="/home">
                        {
                            language === "PL"
                                ? "Strona główna"
                                : "Home"
                        }
                    </Link>
                </li>
                <li>
                    <Link className="hover:underline" href="/services">
                        {
                            language === "PL"
                                ? "Serwisy"
                                : "Services"
                        }
                    </Link>
                </li>
                <li>
                    <Link className="hover:underline" href="/contact">
                        {
                            language === "PL"
                                ? "Kontakt"
                                : "Contact"
                        }
                    </Link>
                </li>
                <li>
                    <Link className="hover:underline" href="/service-24-7">
                        {
                            language === "PL"
                                ? "Serwis 24/7"
                                : "Service 24/7"
                        }
                    </Link>
                </li>
            </ul>
        </div>
    );
}