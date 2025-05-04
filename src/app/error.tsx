'use client';

import {useLanguage} from "../../context/src/LanguageContext";
import {Language} from "../../components/src/types";
import BackButton from "../../components/src/common/buttons/back-button";
import {useEffect} from "react";
import logo from "../../assets/images/logoElse.webp";
import Image from "next/image";

type ErrorPageProps = {
    error: Error & { digest?: string };
    reset: () => void;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function ErrorPage({ error, reset }: ErrorPageProps) {
    const { language } = useLanguage();

    useEffect(() => {
        console.log(error);
    }, [error]);

    return (
        <main>
            <Image src={logo} alt="ELSE logo"/>
            <h2 className="text-2xl font-bold mt-8 text-center text-gray-800">
                {language === Language.PL ? "Coś poszło nie tak" : "Something went wrong"}
            </h2>
            <div className="mt-4">
                <BackButton />
            </div>
        </main>
    );
}