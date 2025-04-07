'use client';

import {useLanguage} from "../../../context/src/LanguageContext";
import {Language} from "../../../context/src/types/Language";
import Image from "next/image";
import waterAndSewageDep from "../../../assets/images/waterAndSewageDep.png";
import maritimeDepImg from "../../../assets/images/meritimeDep.png";
import {useEffect, useRef, useState} from "react";
import CheckButton from "../common/buttons/check-button";

export default function Departments() {
    const {language} = useLanguage();
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },

            {threshold: 0.3}
        );

        if (sectionRef && sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const departments = [
        {
            img: waterAndSewageDep,
            alt: language === Language.PLN ? "Dział WOD-KAN" : "Water and Sewage Department",
            title: language === Language.PLN ? "DZIAŁ WOD-KAN" : "WATER AND SEWAGE DEPARTMENT",
            description: language === Language.PLN
                ? "Dostawa specjalistycznych urządzeń i systemów dla sieci wod-kan, szkolenia z obsługi, serwis gwarancyjny i pogwarancyjny."
                : "Delivery of specialized devices and systems for water and sewage networks, user training, warranty and post-warranty service.",
            link: "/about/departments/water-and-sewage"
        },
        {
            img: maritimeDepImg,
            alt: language === Language.PLN ? "Dział morski" : "Maritime Department",
            title: language === Language.PLN ? "DZIAŁ MORSKI" : "MARITIME DEPARTMENT",
            description: language === Language.PLN
                ? "Wyposażenie statków, okrętów, stacji brzegowych, statków powietrznych, śmigłowców w urządzenia radiowe i nawigacyjne."
                : "Equipping ships, vessels, coastal stations, aircraft, and helicopters with radio and navigation devices.",
            link: "/about/departments/maritime"
        }
    ];

    return (
        <article id="departments" className="w-full overflow-y-auto mt-6">
            <h1
                className={`
                text-4xl font-extrabold text-center text-[var(--font-color)] mt-6
                transition-all duration-700 ease-out
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
              `}
            >
                {language === Language.PLN ? "CZYM SIĘ ZAJMUJEMY?" : "WHAT DO WE DO?"}
            </h1>
            <div className="w-16 h-1 bg-[var(--font-color-accent)] mx-auto mt-4 rounded-full"></div>

            <div ref={sectionRef} className="flex justify-center gap-20 flex-wrap px-4 mt-4 mb-20">
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
                                language === Language.PLN
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
