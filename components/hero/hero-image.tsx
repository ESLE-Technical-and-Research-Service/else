'use client';

import Image from "next/image";
import heroImage1 from "../../assets/images/heroImage_01.jpg";
import heroImage2 from "../../assets/images/heroImage_02.jpg";
import heroImage3 from "../../assets/images/heroImage_03.jpg";
import {useEffect, useState} from "react";
import {useLanguage} from "../../context/LanguageContext";
import {Language} from "../../context/types/Language";

const heroSlides = [heroImage1, heroImage2, heroImage3];

export default function HeroImage() {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const {language} = useLanguage();

    const goToNextSlide = (): void => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % heroSlides.length);
    }

    useEffect(() => {
        const intervalId = setInterval(goToNextSlide, 5000);

        return () => clearInterval(intervalId);
    });

    return (
        <div className="relative w-full h-[60vh] overflow-hidden rounded-md">
            {/* Hero Image Slides */}
            {heroSlides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-2000 ease-in-out ${currentIndex === index ? "opacity-100" : "opacity-0"}`}
                >
                    <Image
                        src={slide}
                        alt={`ELSE Hero Image ${index + 1}`}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center 55%"
                    />
                </div>
            ))}

            {/* Dark Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-0"></div>

            {/* Title Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-4">
                <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold drop-shadow-2xl leading-tight">
                    {language === Language.PLN ? "WITAJ W" : "WELCOME TO"}{" "}
                    <strong className="inline-block bg-[var(--main-color)] text-[var(--background)] text-xl sm:text-2xl md:text-4xl px-3 sm:px-4 py-0.5 sm:py-1 rounded-md">
                        ELSE
                    </strong>
                </h1>
                <h2 className="text-sm sm:text-base md:text-2xl font-bold drop-shadow-lg mt-3 sm:mt-4 leading-snug max-w-xl">
                    {language === Language.PLN
                        ? "Innowacyjne rozwiązania dla nowoczesnego świata"
                        : "Innovative Solutions for a Modern World"}
                </h2>
            </div>

        </div>
    )
}
