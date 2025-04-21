'use client';

import {useLanguage} from "../../../context/src/LanguageContext";
import {Language} from "../../../context/src/types/Language";
import Image from "next/image";
import waterAndSewageDep from "../../../assets/images/waterAndSewageDep.png";
import maritimeDepImg from "../../../assets/images/meritimeDep.png";
import {useState} from "react";
import CheckButton from "../common/buttons/check-button";
import HeaderDivider from "../common/header-divider";
import { useIntersectionObserver } from "../../../hooks/useIntersectionObserver";

export default function Departments() {
    const {language} = useLanguage();
    const { elementRef, isVisible } = useIntersectionObserver();
    const [departments] = useState([
        {
            img: waterAndSewageDep,
            alt: language === Language.PL ? "Dział WOD-KAN" : "Water and Sewage Department",
            title: language === Language.PL ? "DZIAŁ WOD-KAN" : "WATER AND SEWAGE DEPARTMENT",
            description: language === Language.PL
                ? "Dostawa specjalistycznych urządzeń i systemów dla sieci wod-kan, szkolenia z obsługi, serwis gwarancyjny i pogwarancyjny."
                : "Delivery of specialized devices and systems for water and sewage networks, user training, warranty and post-warranty service.",
            link: "/about/departments/water-and-sewage"
        },
        {
            img: maritimeDepImg,
            alt: language === Language.PL ? "Dział morski" : "Maritime Department",
            title: language === Language.PL ? "DZIAŁ MORSKI" : "MARITIME DEPARTMENT",
            description: language === Language.PL
                ? "Wyposażenie statków, okrętów, stacji brzegowych, statków powietrznych, śmigłowców w urządzenia radiowe i nawigacyjne."
                : "Equipping ships, vessels, coastal stations, aircraft, and helicopters with radio and navigation devices.",
            link: "/about/departments/maritime"
        }
    ]);

    return (
        <article id="departments" className="w-full overflow-y-auto mt-6">
            <HeaderDivider title={{ labelPL: "CZYM SIĘ ZAJMUJEMY?", labelENG:"WHAT DO WE DO?"}} isVisible={isVisible}/>

            <div ref={elementRef} className="flex justify-center gap-20 flex-wrap px-4 mt-4 mb-20">
                {departments.map((dep, index) => (
                    <div
                        key={index}
                        className={`
                        w-[500px] rounded-2xl shadow-xl text-center p-6 mt-10
                        transform transition-all duration-700 ease-out
                        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                        hover:scale-105 transition duration-300 ease-in-out
                        `}
                    >
                        <Image
                            src={dep.img}
                            alt={dep.alt}
                            width={200}
                            height={200}
                            className="mx-auto rounded-lg"
                        />
                        <h2 className="mt-4 text-xl font-semibold text-[var(--font-color-accent)]">
                            {dep.title}
                        </h2>
                        <p className="mt-3 mb-6 text-sm text-[var(--font-color)] leading-relaxed">
                            {dep.description}
                        </p>
                        <CheckButton href={dep.link}>
                            {isVisible && (
                                language === Language.PL
                                    ? "Dowiedz się więcej"
                                    : "Explore more"
                            )}
                        </CheckButton>
                    </div>
                ))}
            </div>
        </article>
    );
}
