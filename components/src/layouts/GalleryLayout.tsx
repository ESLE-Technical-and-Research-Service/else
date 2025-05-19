import React, { RefObject, useState, useRef, useEffect } from "react";
import { Language } from "../types";
import { ContentModel, getLocalizedText, getLocalizedJSX } from "../types/ContentModel";
import HeroImage from "../hero/hero-image";
import Breadcrumbs from "../common/breadcrumbs/breadcrumbs";
import HeaderDivider from "../common/dividers/header-divider";
import ContactUsCard from "../common/cards/contact-us-card";
import BackButton from "../common/buttons/back-button";
import Image from "next/image";
import {motion, useInView, useScroll, useTransform} from "framer-motion";
import { CheckBadgeIcon, ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

type GalleryLayoutProps = {
    content: ContentModel;
    language: Language;
    badgeRef?: RefObject<HTMLDivElement | null>;
    isBadgeInCenter?: boolean;
};

export default function GalleryLayout({
    content,
    language,
    badgeRef,
    isBadgeInCenter = false,
}: GalleryLayoutProps) {
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const galleryRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(galleryRef, { amount: 0.1, margin: "-20% 0px -20% 0px" });
    // Removed scroll-based animations

    const hasImages = content.images && content.images.length > 0;

    const nextImage = () => {
        if (!hasImages) return;
        setActiveImageIndex((prev) => 
            prev === content.images!.length - 1 ? 0 : prev + 1
        );
    };

    const prevImage = () => {
        if (!hasImages) return;
        setActiveImageIndex((prev) => 
            prev === 0 ? content.images!.length - 1 : prev - 1
        );
    };

    // Auto-scroll gallery
    useEffect(() => {
        if (!hasImages || content.images!.length <= 1) return;

        const interval = setInterval(() => {
            nextImage();
        }, 5000);

        return () => clearInterval(interval);
    }, [hasImages, content.images?.length]);

    return (
        <main className="w-full bg-[var(--background)]">
            {/* Hero Section with Overlay */}
            {content.heroImage && (
                <div className="relative h-[70vh] overflow-hidden">
                    <HeroImage
                        heroSlides={[content.heroImage.src]}
                        heroTitle={null}
                        heroHeight={70}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end items-center pb-20">
                        <motion.h1 
                            className="text-5xl md:text-7xl font-bold text-white mb-6 text-center px-4"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
                            {getLocalizedText(content.title, language)}
                        </motion.h1>
                        {content.description && (
                            <motion.p
                                className="text-lg md:text-xl text-white/90 max-w-2xl text-center px-6"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                            >
                                {getLocalizedText(content.description, language)}
                            </motion.p>
                        )}
                    </div>
                </div>
            )}

            <div
                data-testid="breadcrumbs"
                className="hidden md:flex w-full max-w-7xl mx-auto pt-8 pb-2"
            >
                <Breadcrumbs/>
            </div>

            <section className="max-w-7xl mx-auto px-4 py-16">
                {content.subtitle && (
                    <HeaderDivider
                        title={{
                            labelPL: getLocalizedText(content.subtitle, Language.PL),
                            labelENG: getLocalizedText(content.subtitle, Language.ENG),
                        }}
                        isVisible={true}
                    />
                )}

                {/* Gallery Section */}
                {hasImages && (
                    <div className="mt-16 mb-24" ref={galleryRef}>
                        {/*<h2 className="text-3xl font-semibold text-center mb-12 text-[var(--font-color)]">*/}
                        {/*    {language === Language.PL ? "Galeria" : "Gallery"}*/}
                        {/*</h2>*/}

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
                                        src={content.images![activeImageIndex].src}
                                        alt={getLocalizedText(content.images![activeImageIndex].alt, language)}
                                        className="object-cover"
                                        fill
                                        priority
                                    />
                                </motion.div>
                            </div>

                            {/* Navigation Controls */}
                            {content.images!.length > 1 && (
                                <div className="absolute inset-0 flex items-center justify-between px-4">
                                    <button 
                                        onClick={prevImage}
                                        className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white hover:bg-white/30 transition-colors"
                                        aria-label="Previous image"
                                    >
                                        <ArrowLeftIcon className="w-6 h-6" />
                                    </button>
                                    <button 
                                        onClick={nextImage}
                                        className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white hover:bg-white/30 transition-colors"
                                        aria-label="Next image"
                                    >
                                        <ArrowRightIcon className="w-6 h-6" />
                                    </button>
                                </div>
                            )}

                            {/* Image Indicators */}
                            {content.images!.length > 1 && (
                                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                                    {content.images!.map((_, index) => (
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
                        {content.images!.length > 1 && (
                            <div className="mt-6 flex gap-2 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                                {content.images!.map((image, index) => (
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
                                            src={image.src}
                                            alt={getLocalizedText(image.alt, language)}
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
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-16" ref={contentRef}>
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {content.mainContent && (
                            <div
                                className="prose prose-lg max-w-none text-[var(--font-color)]"
                            >
                                <div
                                    data-testid="main-content"
                                    className="prose prose-blue max-w-none text-base md:text-lg leading-relaxed
                                    !text-gray-800 [&_ul]:!list-disc [&_ul]:!mt-6 [&_ul]:!mb-10 [&_ul]:!pl-6 [&_li]:!marker:text-blue-600
                                    [&_li]:!text-gray-900 [&_li]:mb-4 [&_strong]:block [&_strong]:mb-2
                                    [&_p]:mb-4 [&_h2]:mb-4 [&_h2]:mt-6 
                                    [&_h3]:mb-4 [&_h3]:mt-6"
                                >
                                    {getLocalizedJSX(content.mainContent, language)}
                                </div>
                            </div>
                        )}

                        {/* Summary Section */}
                        {content.summary && (
                            <div className="mt-16 bg-white rounded-xl shadow-md p-10">
                                {badgeRef && (
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
                                )}
                                <div
                                    data-testid="summary-content"
                                    className="prose prose-blue max-w-none text-base leading-relaxed
                                    !text-gray-800 [&_ul]:!list-disc [&_ul]:!mt-6 [&_ul]:!mb-10 [&_ul]:!pl-6 [&_li]:!marker:text-blue-600
                                    [&_li]:!text-gray-900 [&_li]:mb-4 [&_strong]:block [&_strong]:mb-2
                                    [&_p]:mb-4 [&_h2]:mb-4 [&_h2]:mt-6 
                                    [&_h3]:mb-4 [&_h3]:mt-6"
                                >
                                    {getLocalizedJSX(content.summary, language)}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-8 space-y-8">
                            {/* Contact Card */}
                            {content.contact && (
                                <div className="bg-white rounded-xl shadow-md p-8">
                                    <h3 className="text-xl font-semibold mb-6 text-[var(--main-color)]">
                                        {getLocalizedText(content.contact.title, language)}
                                    </h3>
                                    <ContactUsCard
                                        lang={language}
                                        text={{
                                            textPL: getLocalizedText(content.contact.message, Language.PL),
                                            textENG: getLocalizedText(content.contact.message, Language.ENG),
                                        }}
                                    />
                                </div>
                            )}

                            {/* Key Features */}
                            {content.features && content.features.items.length > 0 && (
                                <div className="bg-white rounded-xl shadow-md p-8">
                                    <h3 className="text-xl font-semibold mb-6 text-[var(--main-color)]">
                                        {content.features.title 
                                            ? getLocalizedText(content.features.title, language)
                                            : language === Language.PL ? "Kluczowe cechy" : "Key Features"}
                                    </h3>
                                    <ul className="space-y-4">
                                        {content.features.items.map((item, index) => (
                                            <li key={index} className="flex items-start">
                                                <span className="text-[var(--main-color)] mr-2">•</span>
                                                <span className="text-[var(--font-color)]">
                                                    {getLocalizedText(item, language)}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mt-16 mb-10">
                    <BackButton/>
                </div>
            </section>
        </main>
    );
}
