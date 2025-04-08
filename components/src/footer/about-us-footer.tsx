'use client';

import {useLanguage} from "../../../context/src/LanguageContext";
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
                    <Link href="/about/profile">
                        {
                            language === "PLN"
                                ? "Opis działalności"
                                : "Company Profile"
                        }
                    </Link>
                </li>
                <li>
                    <Link className="hover:underline" href="/about/departments">
                        {
                            language === "PLN"
                                ? "Nasze działy"
                                : "Our Departments"
                        }
                    </Link>
                </li>
                <li>
                    <Link className="hover:underline" href="/about/management">
                        {
                            language === "PLN"
                                ? "Władze spółki"
                                : "Management"
                        }
                    </Link>
                </li>
                <li>
                    <Link className="hover:underline" href="/about/certificates">
                        {
                            language === "PLN"
                                ? "Certyfikaty"
                                : "Certificates"
                        }
                    </Link>
                </li>
                <li>
                    <Link className="hover:underline" href="/about/locations">
                        {
                            language === "PLN"
                                ? "Lokalizacje"
                                : "Locations"
                        }
                    </Link>
                </li>
                <li>
                    <Link className="hover:underline" href="/about/media">Media</Link>
                </li>
            </ul>
        </div>
    );
}