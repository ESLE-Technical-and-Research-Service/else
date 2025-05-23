import React, {RefObject, useCallback, useEffect, useRef, useState} from "react";
import {Language, Service} from "../../types";
import HeroImage from "../../hero/hero-image";
import Breadcrumbs from "../../common/breadcrumbs/breadcrumbs";
import HeaderDivider from "../../common/dividers/header-divider";
import BackButton from "../../common/buttons/back-button";
import Image from "next/image";
import {motion, useInView, useScroll, useTransform} from "framer-motion";
import {ArrowLeftIcon, ArrowRightIcon, CheckBadgeIcon} from "@heroicons/react/24/outline";
import {GetLocalizedText} from "../../utils";
import ContactUsServiceCard from "../../common/cards/contact-us-service-card";

type GalleryLayoutProps = {
    service: Service;
    language: Language;
    badgeRef: RefObject<HTMLDivElement | null>;
};

export default function GalleryLayout({
    service,
    language,
    badgeRef,
}: GalleryLayoutProps) {
    const isBadgeInCenter = useInView(badgeRef, {amount: 0.5, margin: "-20% 0px -20% 0px"});

    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const galleryRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: galleryRef,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 1]);
    const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, 0]);

    const nextImage = useCallback(() => {
        setActiveImageIndex((prev) =>
            prev === service.images.length - 1 ? 0 : prev + 1
        );
    }, [service?.images]);

    const prevImage = () => {
        setActiveImageIndex((prev) => 
            prev === 0 ? service.images.length - 1 : prev - 1
        );
    };

    // Auto-scroll gallery
    useEffect(() => {
        if (service.images.length <= 1) return;

        const interval = setInterval(() => {
            nextImage();
        }, 5000);

        return () => clearInterval(interval);
    }, [nextImage, service.images.length]);

    const keyFeatures = [
        {
            [Language.PL]: "Profesjonalna obsługa",
            [Language.ENG]: "Professional service",
        },
        {
            [Language.PL]: "Nowoczesne rozwiązania",
            [Language.ENG]: "Modern solutions",
        },
        {
            [Language.PL]: "Indywidualne podejście",
            [Language.ENG]: "Individual approach",
        },
    ];

    return (
        <main className="w-full bg-[var(--background)]">
            {/* Hero Section with Overlay */}
            <div className="relative h-[70vh] overflow-hidden">
                <HeroImage
                    heroSlides={[service.heroImage]}
                    heroTitle={GetLocalizedText(service.name)}
                    heroHeight={70}
                    description={GetLocalizedText(service.description)}
                />
            </div>

            <div
                data-testid="water-sewage-service-details-breadcrumbs"
                className="hidden md:flex w-full max-w-7xl mx-auto pt-8 pb-2"
            >
                <Breadcrumbs/>
            </div>

            {service && (
                <>
                    <section className="max-w-7xl mx-auto px-4 py-16">
                        <HeaderDivider
                            title={GetLocalizedText(service.title)}
                            isVisible={true}
                        />

                        {/* Gallery Section */}
                        {service.images.length > 0 && (
                            <div className="mt-16 mb-24" ref={galleryRef}>
                                <div className="relative">
                                    <div className="relative h-[50vh] md:h-[60vh] overflow-hidden rounded-xl">
                                        <motion.div
                                            key={activeImageIndex}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.5 }}
                                            className="absolute inset-0"
                                        >
                                            <Image
                                                src={service.images[activeImageIndex]}
                                                alt={`${GetLocalizedText(service.name)} image ${activeImageIndex + 1}`}
                                                className="object-cover"
                                                fill
                                                priority
                                            />
                                        </motion.div>
                                    </div>

                                    {/* Navigation Controls */}
                                    {service.images.length > 1 && (
                                        <div className="absolute inset-0 flex items-center justify-between px-4">
                                            <button 
                                                onClick={prevImage}
                                                className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white
                                                hover:bg-white/30 transition-colors"
                                                aria-label="Previous image"
                                            >
                                                <ArrowLeftIcon className="w-6 h-6" />
                                            </button>
                                            <button 
                                                onClick={nextImage}
                                                className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white
                                                hover:bg-white/30 transition-colors"
                                                aria-label="Next image"
                                            >
                                                <ArrowRightIcon className="w-6 h-6" />
                                            </button>
                                        </div>
                                    )}

                                    {/* Image Indicators */}
                                    {service.images.length > 1 && (
                                        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                                            {service.images.map((_, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => setActiveImageIndex(index)}
                                                    className={`w-3 h-3 rounded-full ${
                                                        index === activeImageIndex 
                                                            ? 'bg-white' 
                                                            : 'bg-white/40'
                                                    }`}
                                                    aria-label={`Go to image ${index + 1}`}
                                                />
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Thumbnails */}
                                {service.images.length > 1 && (
                                    <div className="mt-6 flex gap-2 overflow-x-auto pb-4 scrollbar-thin
                                    scrollbar-thumb-gray-300 scrollbar-track-transparent">
                                        {service.images.map((image, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setActiveImageIndex(index)}
                                                className={`relative flex-shrink-0 w-24 h-16 rounded-md overflow-hidden ${
                                                    index === activeImageIndex 
                                                        ? 'ring-2 ring-[var(--main-color)]' 
                                                        : 'opacity-70'
                                                }`}
                                            >
                                                <Image
                                                    src={image}
                                                    alt={`Thumbnail ${index + 1}`}
                                                    className="object-cover"
                                                    fill
                                                />
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Content Section */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-16">
                            {/* Main Content */}
                            <div className="lg:col-span-2">
                                <motion.div
                                    style={{ opacity, y }}
                                    className="prose prose-lg max-w-none text-[var(--font-color)]"
                                >
                                    <div
                                        data-testid="product-detailed-description"
                                        className="prose prose-blue max-w-none text-base md:text-lg leading-relaxed
                                        !text-gray-800 [&_ul]:!list-disc [&_ul]:!mt-6 [&_ul]:!mb-10 [&_ul]:!pl-6 [&_li]:!marker:text-blue-600
                                        [&_li]:!text-gray-900 [&_li]:mb-4 [&_strong]:block [&_strong]:mb-2
                                        [&_p]:mb-4 [&_h2]:mb-4 [&_h2]:mt-6 
                                        [&_h3]:mb-4 [&_h3]:mt-6"
                                    >
                                        GetLocalizedText(service.detailedDescription)
                                    </div>
                                </motion.div>

                                {/* Summary Section */}
                                {service.summary && (
                                    <div className="mt-16 bg-white rounded-xl shadow-md p-10">
                                        <motion.div
                                            ref={badgeRef}
                                            initial={{ color: "var(--font-color)", opacity: 0 }}
                                            animate={{
                                                color: isBadgeInCenter ? "var(--main-color-secondary)" : "var(--font-color)",
                                                opacity: isBadgeInCenter ? 1 : 0
                                            }}
                                            transition={{ duration: 1.2, delay: 1, ease: "easeInOut", type: "tween", stiffness: 80, damping: 30 }}
                                            viewport={{ once: true, amount: 0.7 }}
                                            className="flex justify-center mb-12"
                                        >
                                            <CheckBadgeIcon className="w-24 h-24" style={{ color: "inherit" }} />
                                        </motion.div>
                                        <div
                                            data-testid="product-summary"
                                            className="prose prose-blue max-w-none text-base leading-relaxed
                                            !text-gray-800 [&_ul]:!list-disc [&_ul]:!mt-6 [&_ul]:!mb-10 [&_ul]:!pl-6 [&_li]:!marker:text-blue-600
                                            [&_li]:!text-gray-900 [&_li]:mb-4 [&_strong]:block [&_strong]:mb-2
                                            [&_p]:mb-4 [&_h2]:mb-4 [&_h2]:mt-6 
                                            [&_h3]:mb-4 [&_h3]:mt-6"
                                        >
                                            GetLocalizedText(service.summary)
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Sidebar */}
                            <div className="lg:col-span-1">
                                <div className="sticky top-8 space-y-8">
                                    {/* Contact Card */}
                                    <div className="bg-white rounded-xl shadow-md p-8">
                                        <ContactUsServiceCard />
                                    </div>

                                    {/* Key Features */}
                                    <div className="bg-white rounded-xl shadow-md p-8">
                                        <h3 className="text-xl font-semibold mb-6 text-[var(--main-color)]">
                                            {language === Language.PL ? "Kluczowe cechy" : "Key Features"}
                                        </h3>
                                        <ul className="space-y-4">
                                            {keyFeatures.map((feat, idx) => (
                                                <li key={idx} className="flex items-start">
                                                    <span className="text-[var(--main-color)] mr-2">•</span>
                                                    <span className="text-[var(--font-color)]">
                                                        {GetLocalizedText(feat)}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center mt-16 mb-10">
                            <BackButton/>
                        </div>
                    </section>
                </>
            )}
        </main>
    );
}
