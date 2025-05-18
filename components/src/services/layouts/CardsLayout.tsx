import React from "react";
import {Language} from "../../types";
import {Service} from "../../types/Service";
import HeroImage from "../../hero/hero-image";
import Breadcrumbs from "../../common/breadcrumbs/breadcrumbs";
import HeaderDivider from "../../common/dividers/header-divider";
import ContactUsCard from "../../common/cards/contact-us-card";
import BackButton from "../../common/buttons/back-button";
import Image from "next/image";
import {motion} from "framer-motion";
import {DocumentTextIcon, InformationCircleIcon, PhoneIcon, PhotoIcon} from "@heroicons/react/24/outline";

type CardsLayoutProps = {
    service: Service;
    language: Language;
};

export default function CardsLayout({
    service,
    language,
}: CardsLayoutProps) {
    // Animation variants for cards
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
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

    return (
        <main className="w-full bg-[var(--background)]">
            <HeroImage
                heroSlides={[service.heroImage]}
                heroTitle={
                    <h1 className="text-6xl font-bold text-[var(--font-color-light)]">
                        {
                            language === Language.PL
                                ? service.name.namePL
                                : service.name.nameENG
                        }
                    </h1>
                }
                heroHeight={40}
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
                        title={{
                            labelPL: service.title.titlePL,
                            labelENG: service.title.titleENG,
                        }}
                        isVisible={true}
                    />
                    
                    {/* Introduction Card */}
                    <motion.div 
                        className="bg-white rounded-xl shadow-lg p-8 mb-12 max-w-4xl mx-auto overflow-hidden relative"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[var(--main-color)] to-[var(--main-color-secondary)]"></div>
                        <div className="flex items-start">
                            <div className="mr-6">
                                <InformationCircleIcon className="w-12 h-12 text-[var(--main-color)]" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold mb-4 text-[var(--main-color)]">
                                    {language === Language.PL ? "O usłudze" : "About the service"}
                                </h2>
                                <p className="text-[var(--font-color)] text-lg leading-7">
                                    {
                                        language === Language.PL
                                            ? service.description.textPL
                                            : service.description.textENG
                                    }
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
                            viewport={{ once: true, amount: 0.2 }}
                            variants={cardVariants}
                        >
                            <div className="bg-[var(--main-color)] text-white p-4 flex items-center">
                                <PhotoIcon className="w-6 h-6 mr-2" />
                                <h3 className="text-xl font-medium">
                                    {language === Language.PL ? "Galeria" : "Gallery"}
                                </h3>
                            </div>
                            <div className="p-6 flex-grow">
                                <div className="grid grid-cols-2 gap-3">
                                    {service.images.slice(0, 4).map((image, index) => (
                                        <div key={index} className="relative h-32 overflow-hidden rounded-md">
                                            <Image
                                                src={image}
                                                alt={`${language === Language.PL ? service.name.namePL : service.name.nameENG} image ${index + 1}`}
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
                            viewport={{ once: true, amount: 0.2 }}
                            variants={cardVariants}
                        >
                            <div className="bg-[var(--main-color-secondary)] text-white p-4 flex items-center">
                                <PhoneIcon className="w-6 h-6 mr-2" />
                                <h3 className="text-xl font-medium">
                                    {language === Language.PL ? "Kontakt" : "Contact"}
                                </h3>
                            </div>
                            <div className="p-6 flex-grow flex items-center justify-center">
                                <ContactUsCard
                                    lang={language}
                                    text={{
                                        textPL: "Masz pytania odnośnie uslugi?",
                                        textENG: "Do you have questions about this service?"
                                    }}
                                />
                            </div>
                        </motion.div>
                        
                        {/* Details Card */}
                        <motion.div 
                            className="bg-white rounded-xl shadow-lg overflow-hidden w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] flex flex-col"
                            custom={2}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={cardVariants}
                        >
                            <div className="bg-[var(--main-color)] text-white p-4 flex items-center">
                                <DocumentTextIcon className="w-6 h-6 mr-2" />
                                <h3 className="text-xl font-medium">
                                    {language === Language.PL ? "Szczegóły" : "Details"}
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
                                    {
                                        language === Language.PL
                                            ? service.detailedDescription.textPL
                                            : service.detailedDescription.textENG
                                    }
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    
                    {/* Summary section - full width */}
                    {service.summary && (
                        <motion.div 
                            className="mt-12 mb-12 bg-gradient-to-r from-[var(--main-color-secondary)] to-[var(--main-color)] rounded-xl shadow-lg p-1"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <div className="bg-white rounded-lg p-8">
                                <h2 className="text-2xl font-semibold mb-6 text-[var(--main-color)] text-center">
                                    {language === Language.PL ? "Podsumowanie" : "Summary"}
                                </h2>
                                <div
                                    data-testid="product-detailed-description"
                                    className="prose prose-blue max-w-none text-base leading-7
                                    !text-gray-800 [&_ul]:!list-disc [&_ul]:!mt-4 [&_ul]:!mb-8 [&_ul]:!pl-6 [&_li]:!marker:text-blue-600
                                    [&_li]:!text-gray-900 [&_li]:mb-2 [&_strong]:block [&_strong]:mb-1
                                    [&_p]:mb-2 [&_h2]:mb-2 [&_h2]:mt-4 
                                    [&_h3]:mb-2 [&_h3]:mt-4"
                                >
                                    {
                                        language === Language.PL
                                            ? service.summary.summaryPL
                                            : service.summary.summaryENG
                                    }
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