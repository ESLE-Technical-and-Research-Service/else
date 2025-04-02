'use client';

import {useLanguage} from "../../context/LanguageContext";
import Link from "next/link";

export default function FooterNavigation() {
    const {language} = useLanguage();

    return (
        <div>
            <h3 className="font-bold mb-2">
                {
                    language === "PLN"
                        ? "Nawigacja"
                        : "Navigation"
                }
            </h3>
            <ul className="space-y-2">
                <li>
                    <Link className="hover:underline" href="/home">
                        {
                            language === "PLN"
                                ? "Strona główna"
                                : "Home"
                        }
                    </Link>
                </li>
                <li>
                    <Link className="hover:underline" href="/services">
                        {
                            language === "PLN"
                                ? "Serwisy"
                                : "Services"
                        }
                    </Link>
                </li>
                <li>
                    <Link className="hover:underline" href="/contact">
                        {
                            language === "PLN"
                                ? "Kontakt"
                                : "Contact"
                        }
                    </Link>
                </li>
                <li>
                    <Link className="hover:underline" href="/service-24-7">
                        {
                            language === "PLN"
                                ? "Serwis 24/7"
                                : "Service 24/7"
                        }
                    </Link>
                </li>
            </ul>
        </div>
    );
}