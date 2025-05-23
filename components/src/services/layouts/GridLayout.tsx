import React, {RefObject} from "react";
import {Language, Service} from "../../types";
import HeroImage from "../../hero/hero-image";
import Breadcrumbs from "../../common/breadcrumbs/breadcrumbs";
import HeaderDivider from "../../common/dividers/header-divider";
import BackButton from "../../common/buttons/back-button";
import Image from "next/image";
import {CheckBadgeIcon} from "@heroicons/react/24/outline";
import {motion, useInView} from "framer-motion";
import ContactUsServiceCard from "../../common/cards/contact-us-service-card";
import {GetLocalizedJSX, GetLocalizedText} from "../../utils";

type GridLayoutProps = {
    service: Service;
    language: Language;
    badgeRef: RefObject<HTMLDivElement | null>;
};

export default function GridLayout({
                                       service,
                                       language,
                                       badgeRef,
                                   }: GridLayoutProps) {
    const isBadgeInCenter = useInView(badgeRef, {amount: 0.5, margin: "-20% 0px -20% 0px"});

    const descriptionHeader = {
        [Language.PL]: "Opis",
        [Language.ENG]: "Description",
    };

    const galleryHeaderText = {
        [Language.PL]: "Galeria",
        [Language.ENG]: "Gallery",
    };

    return (
        <main className="w-full bg-[var(--background)]">
            <HeroImage
                heroSlides={[service.heroImage]}
                heroTitle={GetLocalizedText(service.name)}
                heroHeight={70}
                description={GetLocalizedText(service.description)}
            />

            <div
                data-testid="water-sewage-service-details-breadcrumbs"
                className="hidden md:flex w-full max-w-7xl mx-auto pt-4 pb-2"
            >
                <Breadcrumbs/>
            </div>

            {service && (
                <section className="max-w-7xl mx-auto px-4 py-16 mt-6">
                    <HeaderDivider
                        title={GetLocalizedText(service.title)}
                        isVisible={true}
                    />

                    {/* Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                        {/* Description Card */}
                        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                            <h2 className="text-xl font-semibold mb-4 text-[var(--main-color)]">
                                {GetLocalizedText(descriptionHeader)}
                            </h2>
                            <p className="text-[var(--font-color)] text-base leading-7">
                                {GetLocalizedText(service.description)}
                            </p>
                        </div>

                        {/* Images Card */}
                        {service.images.length > 0 && (
                            <div
                                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
                                <h2 className="text-xl font-semibold mb-4 text-[var(--main-color)]">
                                    {GetLocalizedText(galleryHeaderText)}
                                </h2>
                                <div className="grid grid-cols-2 gap-2">
                                    {service.images.slice(0, 4).map((image, index) => (
                                        <div key={index} className="relative h-32 overflow-hidden rounded-md">
                                            <Image
                                                src={image}
                                                alt={`${GetLocalizedText(service.name)} image ${index + 1}`}
                                                className="object-cover hover:scale-105 transition-transform duration-300"
                                                fill
                                            />
                                        </div>
                                    ))}
                                </div>
                                {service.images.length > 4 && (
                                    <p className="text-center mt-2 text-sm text-[var(--main-color-secondary)]">
                                        {language === Language.PL
                                            ? `+${service.images.length - 4} więcej zdjęć`
                                            : `+${service.images.length - 4} more images`}
                                    </p>
                                )}
                            </div>
                        )}

                        {/* Contact Card */}
                        <ContactUsServiceCard />

                        {/* Detailed Description Card */}
                        <div
                            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-3">
                            <div
                                data-testid="product-detailed-description"
                                className="prose prose-blue max-w-none text-base leading-7
                                !text-gray-800 [&_ul]:!list-disc [&_ul]:!mt-4 [&_ul]:!mb-8 [&_ul]:!pl-6 [&_li]:!marker:text-blue-600
                                [&_li]:!text-gray-900 [&_li]:mb-2 [&_strong]:block [&_strong]:mb-1
                                [&_p]:mb-2 [&_h2]:mb-2 [&_h2]:mt-4 
                                [&_h3]:mb-2 [&_h3]:mt-4"
                            >
                                {GetLocalizedJSX(service.detailedDescription)}
                            </div>
                        </div>

                        {/* Summary Card */}
                        {service.summary && (
                            <div
                                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-3">
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
                                    className="flex justify-center mb-10"
                                >
                                    <CheckBadgeIcon className="w-20 h-20" style={{color: "inherit"}}/>
                                </motion.div>
                                <div
                                    data-testid="product-summary"
                                    className="prose prose-blue max-w-none text-base leading-7
                                    !text-gray-800 [&_ul]:!list-disc [&_ul]:!mt-4 [&_ul]:!mb-8 [&_ul]:!pl-6 [&_li]:!marker:text-blue-600
                                    [&_li]:!text-gray-900 [&_li]:mb-2 [&_strong]:block [&_strong]:mb-1
                                    [&_p]:mb-2 [&_h2]:mb-2 [&_h2]:mt-4 
                                    [&_h3]:mb-2 [&_h3]:mt-4"
                                >
                                    {GetLocalizedJSX(service.summary)}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="flex justify-center mt-12 mb-6">
                        <BackButton/>
                    </div>
                </section>
            )}
        </main>
    );
}