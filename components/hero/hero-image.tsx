'use client';

import Image from "next/image";
import heroImage1 from "../../assets/images/heroImage_01.jpg";
import heroImage2 from "../../assets/images/heroImage_02.jpg";
import heroImage3 from "../../assets/images/heroImage_03.jpg";
import {useEffect, useState} from "react";

const heroSlides = [ heroImage1, heroImage2, heroImage3];

export default function HeroImage() {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const goToNextSlide = (): void => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % heroSlides.length);
    }

    useEffect(() => {
        const intervalId = setInterval(goToNextSlide, 5000);

        return () => clearInterval(intervalId);
    });

    return (
        <div className="relative w-full h-[60vh] overflow-hidden rounded-md">
            {heroSlides.map((slide, index) => (
                <div
                 key={index}
                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-2000 easy-in-out ${currentIndex === index ? "opacity-100" : "opacity-0"}`}
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
        </div>
    )
}