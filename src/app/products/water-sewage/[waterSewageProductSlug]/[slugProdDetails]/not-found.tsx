'use client';

import Image from "next/image";
import logo from "../../../../../../assets/images/logoElse.webp";
import {Language} from "../../../../../../components/src/types";
import BackButton from "../../../../../../components/src/common/buttons/back-button";
import {GetLocalizedText} from "../../../../../../components/src/utils";

export default function NotFoundPage() {
    const notFoundPageHeaderText = {
        [Language.PL]: "Wybrany produkt nie istnieje",
        [Language.ENG]: "Selected product does not exist",
    };

    return (
        <main className="flex flex-col items-center justify-center h-screen">
            <Image src={logo} alt="ELSE logo"/>
            <h2 className="text-2xl font-bold mt-8 text-center text-gray-800">
                {GetLocalizedText(notFoundPageHeaderText)}
            </h2>
            <div className="mt-4">
                <BackButton/>
            </div>
        </main>
    );
}