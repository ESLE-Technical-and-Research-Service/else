'use client';

import { motion, useInView } from "framer-motion";
import Image, {StaticImageData} from "next/image";
import {ReactElement, useEffect, useRef, useState} from "react";

type HeroImageProps = {
    heroSlides: StaticImageData[],
    heroTitle: ReactElement | null
    heroHeight?: number
}

export default function HeroImage({ heroSlides, heroTitle, heroHeight }: HeroImageProps): ReactElement {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const heroImageRef = useRef(null);
    const isOutOfView = useInView(heroImageRef, { amount: 0.1, margin: "-20% 0px -20% 0px" });

    const goToNextSlide = (): void => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % heroSlides.length);
    }

    useEffect(() => {
        const intervalId = setInterval(goToNextSlide, 5000);

        return () => clearInterval(intervalId);
    });

    let scaleValue = 0.90;
    if (typeof window !== 'undefined') {
        if (window.innerWidth < 768) {
            scaleValue = 0.95;
        } else if (window.innerWidth < 1024) {
            scaleValue = 0.85;
        }
    }

    return (
        <motion.div
            ref={heroImageRef}
            data-testid="hero-image-container"
            initial={{ scale: 1 }}
            animate={{ scale: isOutOfView ? 1 : scaleValue }}
            transition={{ duration: 1.2, ease: "easeOut", type: "spring", stiffness: 80, damping: 30}}
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
            <div className="absolute inset-0 text-8xl md:text-5xl lg:text-8xl flex flex-col items-center justify-center
            text-center text-[var(--font-color-light)] z-10 px-4">
                {heroTitle}
            </div>

        </motion.div>
    )
}
