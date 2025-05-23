import React, {RefObject} from "react";
import {Language, Service} from "../../types";
import HeroImage from "../../hero/hero-image";
import Breadcrumbs from "../../common/breadcrumbs/breadcrumbs";
import HeaderDivider from "../../common/dividers/header-divider";
import BackButton from "../../common/buttons/back-button";
import Image from "next/image";
import {motion, useInView} from "framer-motion";
import {CheckBadgeIcon} from "@heroicons/react/24/outline";
import ContactUsServiceCard from "../../common/cards/contact-us-service-card";
import {GetLocalizedJSX, GetLocalizedText} from "../../utils";

type MasonryLayoutProps = {
    service: Service;
    badgeRef: RefObject<HTMLDivElement | null>;
};

export default function MasonryLayout({service, badgeRef}: MasonryLayoutProps) {
    const isBadgeInCenter = useInView(badgeRef, {amount: 0.5, margin: "-20% 0px -20% 0px"});

    const specializationHeaderText = {
        [Language.PL]: "Nasza specjalizacja",
        [Language.ENG]: "Our Specialization",
    };

    return (
        <main className="w-full bg-[var(--background)]">
            {/* Hero Section with Parallax Effect */}
            <div className="relative overflow-hidden">
                <HeroImage
                    heroSlides={[service.heroImage]}
                    heroTitle={GetLocalizedText(service.name)}
                    heroHeight={70}
                    description={GetLocalizedText(service.description)}
                />
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
                        title={GetLocalizedText(service.title)}
                        isVisible={true}
                    />

                    {/* Masonry Layout - Simplified with more breathing space */}
                    <div className="mt-24">
                        {/* First row - 2 columns on desktop, 1 on mobile */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
                            {/* Detailed Description Card - Spans full width on mobile */}
                            <motion.div
                                className="bg-white rounded-xl shadow-md p-10 md:col-span-1 h-full"
                                initial={{opacity: 0, y: 30}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true, amount: 0.3}}
                                transition={{duration: 0.6}}
                            >
                                <div
                                    data-testid="product-detailed-description"
                                    className="prose prose-blue max-w-none text-base leading-relaxed
                                    !text-gray-800 [&_ul]:!list-disc [&_ul]:!mt-6 [&_ul]:!mb-10 [&_ul]:!pl-6 [&_li]:!marker:text-blue-600
                                    [&_li]:!text-gray-900 [&_li]:mb-4 [&_strong]:block [&_strong]:mb-2
                                    [&_p]:mb-4 [&_h2]:mb-4 [&_h2]:mt-6 
                                    [&_h3]:mb-4 [&_h3]:mt-6"
                                >
                                    {GetLocalizedText(service.description)}
                                </div>
                            </motion.div>

                            {/* Image Gallery - Simplified grid with more spacing */}
                            {service.images.length > 0 && (
                                <motion.div
                                    className="grid grid-cols-2 gap-6 h-full"
                                    initial={{opacity: 0, y: 30}}
                                    whileInView={{opacity: 1, y: 0}}
                                    viewport={{once: true, amount: 0.3}}
                                    transition={{duration: 0.6, delay: 0.2}}
                                >
                                    {service.images.slice(0, Math.min(4, service.images.length)).map((image, index) => (
                                        <motion.div
                                            key={index}
                                            className={`relative overflow-hidden rounded-lg ${
                                                index === 0 ? 'col-span-2 h-56' :
                                                    index === 3 ? 'col-span-2 h-48' : 'h-48'
                                            }`}
                                            whileHover={{scale: 1.03}}
                                            transition={{duration: 0.3}}
                                        >
                                            <Image
                                                src={image}
                                                alt={`${GetLocalizedText(service.name)} image ${index + 1}`}
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
                                initial={{opacity: 0, y: 30}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true, amount: 0.3}}
                                transition={{duration: 0.6}}
                            >
                                <ContactUsServiceCard />
                            </motion.div>

                            {/* Featured Image with Overlay */}
                            {service.images.length > 0 && (
                                <motion.div
                                    className="relative h-72 md:h-auto md:col-span-2 rounded-xl overflow-hidden"
                                    initial={{opacity: 0, y: 30}}
                                    whileInView={{opacity: 1, y: 0}}
                                    viewport={{once: true, amount: 0.3}}
                                    transition={{duration: 0.6, delay: 0.2}}
                                    whileHover={{scale: 1.02}}
                                >
                                    <Image
                                        src={service.images[0]}
                                        alt={`${GetLocalizedText(service.name)} featured image`}
                                        className="object-cover"
                                        fill
                                    />
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                                        <h3 className="text-white text-xl font-semibold">
                                            {GetLocalizedText(specializationHeaderText)}
                                        </h3>
                                    </div>
                                </motion.div>
                            )}
                        </div>

                        {/* Summary Section */}
                        {service.summary && (
                            <motion.div
                                className="mt-16 bg-white rounded-xl shadow-md p-10"
                                initial={{opacity: 0, y: 30}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true, amount: 0.3}}
                                transition={{duration: 0.6}}
                            >
                                <motion.div
                                    ref={badgeRef}
                                    initial={{color: "var(--font-color)", opacity: 0}}
                                    animate={{
                                        color: isBadgeInCenter ? "var(--main-color-secondary)" : "var(--font-color)",
                                        opacity: isBadgeInCenter ? 1 : 0
                                    }}
                                    transition={{
                                        duration: 1.2,
                                        delay: 1,
                                        ease: "easeInOut",
                                        type: "tween",
                                        stiffness: 80,
                                        damping: 30
                                    }}
                                    viewport={{once: true, amount: 0.7}}
                                    className="flex justify-center mb-12"
                                >
                                    <CheckBadgeIcon className="w-24 h-24" style={{color: "inherit"}}/>
                                </motion.div>
                                <div
                                    data-testid="product-summary"
                                    className="prose prose-blue max-w-none text-base leading-relaxed
                                    !text-gray-800 [&_ul]:!list-disc [&_ul]:!mt-6 [&_ul]:!mb-10 [&_ul]:!pl-6 [&_li]:!marker:text-blue-600
                                    [&_li]:!text-gray-900 [&_li]:mb-4 [&_strong]:block [&_strong]:mb-2
                                    [&_p]:mb-4 [&_h2]:mb-4 [&_h2]:mt-6 
                                    [&_h3]:mb-4 [&_h3]:mt-6"
                                >
                                    {GetLocalizedJSX(service.summary)}
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
