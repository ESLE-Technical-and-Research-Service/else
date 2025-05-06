'use client';

import Image, {StaticImageData} from "next/image";
import {ReactElement, useEffect, useState} from "react";

type HeroImageProps = {
    heroSlides: StaticImageData[],
    heroTitle: ReactElement
    heroHeight?: number
}

export default function HeroImage({ heroSlides, heroTitle, heroHeight }: HeroImageProps): ReactElement {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const goToNextSlide = (): void => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % heroSlides.length);
    }

    useEffect(() => {
        const intervalId = setInterval(goToNextSlide, 5000);

        return () => clearInterval(intervalId);
    });

    return (
        <div
            data-testid="hero-image-container"
            className={`relative w-full overflow-hidden `}
            style={{ height: `${heroHeight ? heroHeight : 60}vh` }}
        >
            {/* Hero Image Slides */}
            {heroSlides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-2000 ease-in-out ${currentIndex === index ? "opacity-100" : "opacity-0"}`}
                >
                    <Image
                        data-testid={`hero-image-${index}`}
                        src={slide}
                        alt={`ELSE Hero Image ${index + 1}`}
                        fill
                        priority
                        style={{ objectPosition: "center 50%", objectFit: "cover" }}
                    />
                </div>
            ))}

            {/* Dark Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-0"></div>

            {/* Title Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-4">
                {heroTitle}
            </div>

        </div>
    )
}
