'use client';

import Image from "next/image";
import logo from "../../../../../../assets/images/logoElse.webp";
import {useLanguage} from "../../../../../../context/src/LanguageContext";
import {Language} from "../../../../../../components/src/types";
import BackButton from "../../../../../../components/src/common/buttons/back-button";

export default function NotFoundPage() {
    const {language} = useLanguage();
    return (
        <main className="flex flex-col items-center justify-center h-screen">
            <Image src={logo} alt="ELSE logo"/>
            <h2 className="text-2xl font-bold mt-8 text-center text-gray-800">
                {language === Language.PL ? "Wybrany produkt nie istnieje" : "Selected product does not exist"}
            </h2>
            <div className="mt-4">
                <BackButton/>
            </div>
        </main>
    );
}