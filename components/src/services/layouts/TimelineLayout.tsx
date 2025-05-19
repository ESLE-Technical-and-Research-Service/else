import React, {RefObject, useMemo} from "react";
import {Language} from "../../types";
import {Service} from "../../types/Service";
import HeroImage from "../../hero/hero-image";
import Breadcrumbs from "../../common/breadcrumbs/breadcrumbs";
import HeaderDivider from "../../common/dividers/header-divider";
import ContactUsCard from "../../common/cards/contact-us-card";
import BackButton from "../../common/buttons/back-button";
import Image from "next/image";
import {motion} from "framer-motion";
import {CheckBadgeIcon, ClockIcon} from "@heroicons/react/24/outline";

type TimelineLayoutProps = {
    service: Service;
    language: Language;
    badgeRef: RefObject<HTMLDivElement | null>;
    isBadgeInCenter: boolean;
    articleImagesRef1: RefObject<HTMLDivElement | null>;
};

export default function TimelineLayout({
                                           service,
                                           language,
                                           badgeRef,
                                           isBadgeInCenter,
                                           articleImagesRef1,
                                       }: TimelineLayoutProps) {
    // Create timeline points based on the number of images
    const timelinePoints = useMemo(() => {
        // Create an array of timeline points based on the images
        return service.images.map((_, index) => ({
            id: index,
            title: language === Language.PL
                ? `Punkt ${index + 1}`
                : `Point ${index + 1}`,
        }));
    }, [service.images, language]);

    return (
        <main className="w-full bg-[var(--background)]" ref={articleImagesRef1}>
            <HeroImage
                heroSlides={[service.heroImage]}
                heroTitle={
                    language === Language.PL
                        ? service.name.namePL
                        : service.name.nameENG
                }
                heroHeight={70}
                description={
                    language === Language.PL
                        ? service.description.textPL
                        : service.description.textENG
                }
            />

            <div
                data-testid="water-sewage-service-details-breadcrumbs"
                className="hidden md:flex w-full max-w-6xl mx-auto pt-4 pb-2"
            >
                <Breadcrumbs/>
            </div>

            {service && (
                <section className="max-w-6xl mx-auto px-4 py-16 mt-6">
                    <HeaderDivider
                        title={{
                            labelPL: service.title.titlePL,
                            labelENG: service.title.titleENG,
                        }}
                        isVisible={true}
                    />

                    {/* Detailed Description Section */}
                    <div className="mb-16">
                        <div
                            className="prose prose-blue max-w-none text-base text-[var(--font-color)] leading-7 bg-[var(--background)] rounded-lg shadow-md p-6">
                            {/* Render the JSX.Element directly */}
                            {language === Language.PL
                                ? service.detailedDescription.textPL
                                : service.detailedDescription.textENG}
                        </div>
                    </div>

                    {/* Timeline Layout */}
                    <div className="relative">
                        {/* Timeline line - hidden on mobile, visible on larger screens */}
                        <div
                            className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[var(--main-color-secondary)] opacity-30 hidden md:block"></div>

                        {/* Timeline items */}
                        {timelinePoints.map((point, index) => (
                            <div key={point.id}
                                 className={`flex flex-col md:flex-row items-center mb-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                {/* Content - full width on mobile, half width on larger screens */}
                                <div
                                    className={`w-full md:w-5/12 mb-6 md:mb-0 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'} text-center md:text-left`}>
                                    <motion.div
                                        initial={{opacity: 0, y: 30, x: 0}}
                                        whileInView={{opacity: 1, y: 0, x: 0}}
                                        transition={{duration: 0.8, ease: "easeOut"}}
                                        viewport={{once: true, amount: 0.5}}
                                    >
                                        <h3 className="text-xl font-semibold mb-2 text-[var(--font-color)]">{point.title}</h3>
                                        <p className="text-[var(--font-color)]">
                                            {language === Language.PL
                                                ? `Etap ${index + 1} naszej usługi`
                                                : `Stage ${index + 1} of our service`}
                                        </p>
                                    </motion.div>
                                </div>

                                {/* Timeline dot - centered on mobile */}
                                <div className="w-full md:w-2/12 flex justify-center my-4 md:my-0">
                                    <motion.div
                                        className="w-10 h-10 rounded-full bg-[var(--main-color)] flex items-center justify-center z-10"
                                        initial={{scale: 0}}
                                        whileInView={{scale: 1}}
                                        transition={{duration: 0.5, ease: "easeOut", delay: 0.2}}
                                        viewport={{once: true, amount: 0.5}}
                                    >
                                        <ClockIcon className="w-5 h-5 text-white"/>
                                    </motion.div>
                                </div>

                                {/* Image */}
                                <div className="w-full md:w-5/12">
                                    <motion.div
                                        initial={{opacity: 0, y: 30, x: 0}}
                                        whileInView={{opacity: 1, y: 0, x: 0}}
                                        transition={{duration: 0.8, ease: "easeOut"}}
                                        viewport={{once: true, amount: 0.5}}
                                        className={`${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}
                                    >
                                        <div className="relative h-48 md:h-64 overflow-hidden rounded-lg shadow-md">
                                            <Image
                                                src={service.images[index]}
                                                alt={`${language === Language.PL ? service.name.namePL : service.name.nameENG} image ${index + 1}`}
                                                className="object-cover hover:scale-105 transition-transform duration-300"
                                                fill
                                            />
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Summary section */}
                    {service.summary && (
                        <div className="mt-24 mb-16 bg-[var(--background)] rounded-lg shadow-lg p-8">
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
                    )}

                    {/* Contact section */}
                    <div className="flex justify-center mt-10 mb-10 mx-auto">
                        <ContactUsCard
                            lang={language}
                            text={{
                                textPL: "Masz pytania odnośnie uslugi?",
                                textENG: "Do you have questions about this service?"
                            }}
                        />
                    </div>

                    <div className="flex justify-center mt-8 mb-6">
                        <BackButton/>
                    </div>
                </section>
            )}
        </main>
    );
}
