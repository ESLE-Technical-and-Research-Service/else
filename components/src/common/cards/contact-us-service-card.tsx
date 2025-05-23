import ContactUsProductCard from "./contact-us-product-card";
import React from "react";
import {Language} from "../../types";
import {PhoneIcon} from "@heroicons/react/24/outline";
import {GetLocalizedText} from "../../utils";

export default function ContactUsServiceCard() {
    const contactHeaderText = {
        [Language.PL]: "Kontakt",
        [Language.ENG]: "Contact",
    };

    const contactUsServiceText = {
        [Language.PL]: "Masz pytania odnośnie uslugi?",
        [Language.ENG]: "Do you have questions about this service?",
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <PhoneIcon className="w-6 h-6 mr-2"/>
            <h2 className="text-xl font-semibold mb-4 text-[var(--main-color)]">
                {GetLocalizedText(contactHeaderText)}
            </h2>
            <ContactUsProductCard
                text={GetLocalizedText(contactUsServiceText)}
            />
        </div>
    )
}