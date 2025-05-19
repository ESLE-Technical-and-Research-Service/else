import React, { RefObject } from "react";
import { Language } from "../../types";
import { Service } from "../../types/Service";
import HeroImage from "../../hero/hero-image";
import Breadcrumbs from "../../common/breadcrumbs/breadcrumbs";
import HeaderDivider from "../../common/dividers/header-divider";
import ContactUsCard from "../../common/cards/contact-us-card";
import BackButton from "../../common/buttons/back-button";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";

type MasonryLayoutProps = {
    service: Service;
    language: Language;
    badgeRef: RefObject<HTMLDivElement | null>;
    isBadgeInCenter: boolean;
};

export default function MasonryLayout({
    service,
    language,
    badgeRef,
    isBadgeInCenter,
}: MasonryLayoutProps) {
    return (
        <main className="w-full bg-[var(--background)]">
            {/* Hero Section with Parallax Effect */}
            <div className="relative overflow-hidden">
                <HeroImage
                    heroSlides={[service.heroImage]}
                    heroTitle={
                        <motion.h1 
                            className="text-6xl font-bold text-[var(--font-color-light)]"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            {
                                language === Language.PL
                                    ? service.name.namePL
                                    : service.name.nameENG
                            }
                        </motion.h1>
                    }
                    heroHeight={50}
                />

                {/* Floating card with brief description */}
                <motion.div 
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white rounded-xl shadow-xl p-8 max-w-2xl w-full mx-4"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                >
                    <p className="text-[var(--font-color)] text-center text-base md:text-lg leading-relaxed">
                        {
                            language === Language.PL
                                ? service.description.textPL
                                : service.description.textENG
                        }
                    </p>
                </motion.div>
            </div>

            <div
                data-testid="water-sewage-service-details-breadcrumbs"
                className="hidden md:flex w-full max-w-7xl mx-auto pt-16 pb-2"
            >
                <Breadcrumbs/>
            </div>

            {service && (
                <section className="max-w-7xl mx-auto px-4 py-16 mt-12">
                    <HeaderDivider
                        title={{
                            labelPL: service.title.titlePL,
                            labelENG: service.title.titleENG,
                        }}
                        isVisible={true}
                    />

                    {/* Masonry Layout - Simplified with more breathing space */}
                    <div className="mt-24">
                        {/* First row - 2 columns on desktop, 1 on mobile */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
                            {/* Detailed Description Card - Spans full width on mobile */}
                            <motion.div 
                                className="bg-white rounded-xl shadow-md p-10 md:col-span-1 h-full"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6 }}
                            >
                                <div
                                    data-testid="product-detailed-description"
                                    className="prose prose-blue max-w-none text-base leading-relaxed
                                    !text-gray-800 [&_ul]:!list-disc [&_ul]:!mt-6 [&_ul]:!mb-10 [&_ul]:!pl-6 [&_li]:!marker:text-blue-600
                                    [&_li]:!text-gray-900 [&_li]:mb-4 [&_strong]:block [&_strong]:mb-2
                                    [&_p]:mb-4 [&_h2]:mb-4 [&_h2]:mt-6 
                                    [&_h3]:mb-4 [&_h3]:mt-6"
                                >
                                    {
                                        language === Language.PL
                                            ? service.detailedDescription.textPL
                                            : service.detailedDescription.textENG
                                    }
                                </div>
                            </motion.div>

                            {/* Image Gallery - Simplified grid with more spacing */}
                            {service.images.length > 0 && (
                                <motion.div 
                                    className="grid grid-cols-2 gap-6 h-full"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                >
                                    {service.images.slice(0, Math.min(4, service.images.length)).map((image, index) => (
                                        <motion.div 
                                            key={index} 
                                            className={`relative overflow-hidden rounded-lg ${
                                                index === 0 ? 'col-span-2 h-56' : 
                                                index === 3 ? 'col-span-2 h-48' : 'h-48'
                                            }`}
                                            whileHover={{ scale: 1.03 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <Image
                                                src={image}
                                                alt={`${language === Language.PL ? service.name.namePL : service.name.nameENG} image ${index + 1}`}
                                                className="object-cover"
                                                fill
                                            />
                                        </motion.div>
                                    ))}
                                </motion.div>
                            )}
                        </div>

                        {/* Second row - 3 columns on desktop, 1 on mobile */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
                            {/* Contact Card */}
                            <motion.div 
                                className="bg-white rounded-xl shadow-md p-8 flex flex-col justify-center"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6 }}
                            >
                                <ContactUsCard
                                    lang={language}
                                    text={{
                                        textPL: "Masz pytania odnośnie uslugi?",
                                        textENG: "Do you have questions about this service?"
                                    }}
                                />
                            </motion.div>

                            {/* Featured Image with Overlay */}
                            {service.images.length > 0 && (
                                <motion.div 
                                    className="relative h-72 md:h-auto md:col-span-2 rounded-xl overflow-hidden"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <Image
                                        src={service.images[0]}
                                        alt={`${language === Language.PL ? service.name.namePL : service.name.nameENG} featured image`}
                                        className="object-cover"
                                        fill
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                                        <h3 className="text-white text-xl font-semibold">
                                            {language === Language.PL ? "Nasza specjalizacja" : "Our Specialization"}
                                        </h3>
                                    </div>
                                </motion.div>
                            )}
                        </div>

                        {/* Summary Section */}
                        {service.summary && (
                            <motion.div 
                                className="mt-16 bg-white rounded-xl shadow-md p-10"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6 }}
                            >
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
                                    data-testid="product-detailed-description"
                                    className="prose prose-blue max-w-none text-base leading-relaxed
                                    !text-gray-800 [&_ul]:!list-disc [&_ul]:!mt-6 [&_ul]:!mb-10 [&_ul]:!pl-6 [&_li]:!marker:text-blue-600
                                    [&_li]:!text-gray-900 [&_li]:mb-4 [&_strong]:block [&_strong]:mb-2
                                    [&_p]:mb-4 [&_h2]:mb-4 [&_h2]:mt-6 
                                    [&_h3]:mb-4 [&_h3]:mt-6"
                                >
                                    {
                                        language === Language.PL
                                            ? service.summary.summaryPL
                                            : service.summary.summaryENG
                                    }
                                </div>
                            </motion.div>
                        )}
                    </div>

                    <div className="flex justify-center mt-16 mb-10">
                        <BackButton/>
                    </div>
                </section>
            )}
        </main>
    );
}
