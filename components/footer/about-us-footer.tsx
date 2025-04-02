'use client';

import {useLanguage} from "../../context/LanguageContext";
import Link from "next/link";

export default function AboutUsFooter() {
    const {language} = useLanguage();

    return (
        <div>
            <h3 className="font-bold mb-2">
                {
                    language === "PLN"
                        ? "O Nas"
                        : "About Us"
                }
            </h3>
            <ul className="space-y-2">
                <li>
                    <Link href="/profile">
                        {
                            language === "PLN"
                                ? "Opis działalności"
                                : "Company Profile"
                        }
                    </Link>
                </li>
                <li>
                    <Link className="hover:underline" href="/departments">
                        {
                            language === "PLN"
                                ? "Nasze działy"
                                : "Our Departments"
                        }
                    </Link>
                </li>
                <li>
                    <Link className="hover:underline" href="/management">
                        {
                            language === "PLN"
                                ? "Władze spółki"
                                : "Management"
                        }
                    </Link>
                </li>
                <li>
                    <Link className="hover:underline" href="/locations">
                        {
                            language === "PLN"
                                ? "Lokalizacje"
                                : "Locations"
                        }
                    </Link>
                </li>
                <li>
                    <Link className="hover:underline" href="/media">
                        {
                            language === "PLN"
                                ? "Media"
                                : "Media"
                        }
                    </Link>
                </li>
            </ul>
        </div>
    );
}