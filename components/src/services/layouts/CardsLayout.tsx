import React from "react";
import {Language, Service} from "../../types";
import HeroImage from "../../hero/hero-image";
import Breadcrumbs from "../../common/breadcrumbs/breadcrumbs";
import HeaderDivider from "../../common/dividers/header-divider";
import BackButton from "../../common/buttons/back-button";
import Image from "next/image";
import {motion} from "framer-motion";
import {DocumentTextIcon, InformationCircleIcon, PhoneIcon, PhotoIcon} from "@heroicons/react/24/outline";
import ContactUsServiceCard from "../../common/cards/contact-us-service-card";
import { GetLocalizedJSX, GetLocalizedText } from "../../utils";

type CardsLayoutProps = {
    service: Service;
};

export default function CardsLayout({service}: CardsLayoutProps) {
    // Animation variants for cards
    const cardVariants = {
        hidden: {opacity: 0, y: 50},
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
                ease: "easeOut"
            }
        })
    };

    const aboutServiceHeaderText = {
        [Language.PL]: "O usłudze",
        [Language.ENG]: "About the service",
    };

    const galleryHeaderText = {
        [Language.PL]: "Galeria",
        [Language.ENG]: "Gallery",
    };

    const contactHeaderText = {
        [Language.PL]: "Kontakt",
        [Language.ENG]: "Contact",
    };

    const deteailsHeaderText = {
        [Language.PL]: "Szczegóły",
        [Language.ENG]: "Details",
    };

    const summaryHeaderText = {
        [Language.PL]: "Podsumowanie",
        [Language.ENG]: "Summary"
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

                    {/* Introduction Card */}
                    <motion.div
                        className="bg-white rounded-xl shadow-lg p-8 mb-12 max-w-4xl mx-auto overflow-hidden relative"
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6, ease: "easeOut"}}
                    >
                        <div
                            className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[var(--main-color)] to-[var(--main-color-secondary)]"></div>
                        <div className="flex items-start">
                            <div className="mr-6">
                                <InformationCircleIcon className="w-12 h-12 text-[var(--main-color)]"/>
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold mb-4 text-[var(--main-color)]">
                                    {GetLocalizedText(aboutServiceHeaderText)}
                                </h2>
                                <p className="text-[var(--font-color)] text-lg leading-7">
                                    {GetLocalizedText(service.description)}
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Cards Layout */}
                    <div className="flex flex-wrap justify-center gap-8 mt-12">
                        {/* Gallery Card */}
                        <motion.div
                            className="bg-white rounded-xl shadow-lg overflow-hidden w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] flex flex-col"
                            custom={0}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: true, amount: 0.2}}
                            variants={cardVariants}
                        >
                            <div className="bg-[var(--main-color)] text-white p-4 flex items-center">
                                <PhotoIcon className="w-6 h-6 mr-2"/>
                                <h3 className="text-xl font-medium">
                                    {GetLocalizedText(galleryHeaderText)}
                                </h3>
                            </div>
                            <div className="p-6 flex-grow">
                                <div className="grid grid-cols-2 gap-3">
                                    {service.images.slice(0, 4).map((image, index) => (
                                        <div key={index} className="relative h-32 overflow-hidden rounded-md">
                                            <Image
                                                src={image}
                                                alt={`${GetLocalizedText(service.name)} image ${index + 1}`}
                                                className="object-cover hover:scale-110 transition-transform duration-500"
                                                fill
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Card */}
                        <motion.div
                            className="bg-white rounded-xl shadow-lg overflow-hidden w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] flex flex-col"
                            custom={1}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: true, amount: 0.2}}
                            variants={cardVariants}
                        >
                            <div className="bg-[var(--main-color-secondary)] text-white p-4 flex items-center">
                                <PhoneIcon className="w-6 h-6 mr-2"/>
                                <h3 className="text-xl font-medium">
                                    {GetLocalizedText(contactHeaderText)}
                                </h3>
                            </div>
                            <div className="p-6 flex-grow flex items-center justify-center">
                                <ContactUsServiceCard />
                            </div>
                        </motion.div>

                        {/* Details Card */}
                        <motion.div
                            className="bg-white rounded-xl shadow-lg overflow-hidden w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] flex flex-col"
                            custom={2}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: true, amount: 0.2}}
                            variants={cardVariants}
                        >
                            <div className="bg-[var(--main-color)] text-white p-4 flex items-center">
                                <DocumentTextIcon className="w-6 h-6 mr-2"/>
                                <h3 className="text-xl font-medium">
                                    {GetLocalizedText(deteailsHeaderText)}
                                </h3>
                            </div>
                            <div className="p-6 flex-grow max-h-[400px] overflow-y-auto custom-scrollbar">
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
                        </motion.div>
                    </div>

                    {/* Summary section - full width */}
                    {service.summary && (
                        <motion.div
                            className="mt-12 mb-12 bg-gradient-to-r from-[var(--main-color-secondary)] to-[var(--main-color)] rounded-xl shadow-lg p-1"
                            initial={{opacity: 0, y: 30}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.6, ease: "easeOut", delay: 0.3}}
                            viewport={{once: true, amount: 0.2}}
                        >
                            <div className="bg-white rounded-lg p-8">
                                <h2 className="text-2xl font-semibold mb-6 text-[var(--main-color)] text-center">
                                    {GetLocalizedText(summaryHeaderText)}
                                </h2>
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
                        </motion.div>
                    )}

                    <div className="flex justify-center mt-8 mb-6">
                        <BackButton/>
                    </div>
                </section>
            )}
        </main>
    );
}