'use client';

import {motion, useInView} from "framer-motion";
import Image, {StaticImageData} from "next/image";
import React, {ReactElement, useEffect, useRef, useState} from "react";

type HeroImageProps = {
    heroSlides: StaticImageData[],
    heroTitle: ReactElement | string | null
    heroHeight?: number
    description?: string
}

export default function HeroImage({heroSlides, heroTitle, heroHeight, description}: HeroImageProps): ReactElement {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const heroImageRef = useRef(null);
    const isOutOfView = useInView(heroImageRef, {amount: 0.1, margin: "-20% 0px -20% 0px"});

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
            id="hero-image-container"
            ref={heroImageRef}
            data-testid="hero-image-container"
            initial={{scale: 1}}
            animate={{scale: isOutOfView ? 1 : scaleValue}}
            transition={{duration: 1.2, ease: "easeOut", type: "spring", stiffness: 80, damping: 30}}
            className={`relative w-full overflow-hidden `}
            style={{height: `${heroHeight ? heroHeight : 60}vh`}}
        >
            {/* Hero Image Slides */}
            {heroSlides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-2000 ease-in-out 
                    ${currentIndex === index ? "opacity-100" : "opacity-0"}`
                    }
                >
                    <Image
                        data-testid={`hero-image-${index}`}
                        src={slide}
                        alt={`ELSE Hero Image ${index + 1}`}
                        fill
                        priority
                        style={{objectPosition: "center 50%", objectFit: "cover"}}
                    />
                </div>
            ))}

            {/* Dark Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-0"></div>

            <div
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end items-center pb-20">
                <motion.h1
                    className="text-5xl md:text-7xl font-bold text-white mb-6 text-center px-4"
                    initial={{opacity: 0, y: 30}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1, ease: "easeOut"}}
                >
                    {heroTitle}
                </motion.h1>
                <motion.p
                    className="text-lg md:text-xl text-white/90 max-w-2xl text-center px-6 md:leading-10 sm:leading-4"
                    initial={{opacity: 0, y: 30}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1, delay: 0.2, ease: "easeOut"}}
                >
                    {description}
                </motion.p>
            </div>

        </motion.div>
    )
}
