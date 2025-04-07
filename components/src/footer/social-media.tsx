'use client';

import {FaLinkedin} from "react-icons/fa6";
import {FaFacebookSquare} from "react-icons/fa";
import {useLanguage} from "../../../context/src/LanguageContext";

export default function SocialMedia() {
    const {language} = useLanguage();
    return (
        <div>
            <h3 className="font-bold mb-2">
                {
                    language === "PLN"
                        ? "Media społecznościowe"
                        : "Social Media"
                }
            </h3>
            <ul className="space-y-2 flex gap-4">
                <li>
                    <a className="hover:underline"
                       href="https://pl.linkedin.com/company/else-technical-and-research-service-co-ltd-sp-z-o-o"
                       target="_blank"
                       rel="noopener noreferrer">
                        <FaLinkedin size={26}/>
                    </a>
                </li>
                <li>
                    <a className="hover:underline"
                       href="https://www.facebook.com/p/ELSE-Technical-and-Research-Service-61556574954977/"
                       target="_blank"
                       rel="noopener noreferrer">
                        <FaFacebookSquare size={26}/>
                    </a>
                </li>
            </ul>
        </div>
    )
}