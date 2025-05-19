import React, {RefObject} from "react";
import {Language} from "../../types";
import {Service} from "../../types/Service";
import HeroImage from "../../hero/hero-image";
import Breadcrumbs from "../../common/breadcrumbs/breadcrumbs";
import HeaderDivider from "../../common/dividers/header-divider";
import ImagesGridCard from "../../common/cards/images-grid-card";
import {motion} from "framer-motion";
import Image from "next/image";
import {CheckBadgeIcon} from "@heroicons/react/24/outline";
import ContactUsCard from "../../common/cards/contact-us-card";
import BackButton from "../../common/buttons/back-button";
import {ImagesGridLayout} from "../../types/ImagesGridLayout";

type DefaultLayoutProps = {
    service: Service;
    language: Language;
    isInCenter1: boolean;
    isInCenter2: boolean;
    isBadgeInCenter: boolean;
    articleImagesRef1: RefObject<HTMLDivElement | null>;
    articleImagesRef2: RefObject<HTMLDivElement | null>;
    badgeRef: RefObject<HTMLDivElement | null>;
    scaleValue: number;
    imagesStyle: {
        imagesLayout: ImagesGridLayout;
        columns: number;
        limit: number;
        startIndex: number;
    };
};

export default function DefaultLayout({
                                          service,
                                          language,
                                          isInCenter1,
                                          isInCenter2,
                                          isBadgeInCenter,
                                          articleImagesRef1,
                                          articleImagesRef2,
                                          badgeRef,
                                          scaleValue,
                                          imagesStyle,
                                      }: DefaultLayoutProps) {
    return (
        <main className="w-full bg-[var(--background)]">
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
                className="hidden md:flex w-full max-w-4xl mx-auto pt-4 pb-2"
            >
                <Breadcrumbs/>
            </div>

            {service && (
                <section className="max-w-4xl mx-auto px-4 py-16 mt-6">
                    <HeaderDivider
                        title={{
                            labelPL: service.title.titlePL,
                            labelENG: service.title.titleENG,
                        }}
                        isVisible={true}
                    />
                    <p className="mt-18 mb-18 text-[var(--font-color)] text-center md:text-2xl text-base leading-10">
                        {
                            language === Language.PL
                                ? service.description.textPL
                                : service.description.textENG
                        }
                    </p>

                    {service.images.length > 0 && (
                        <ImagesGridCard
                            service={service}
                            language={language}
                            isInCenter={isInCenter1}
                            layoutType={imagesStyle.imagesLayout}
                            articleRef={articleImagesRef1}
                            scaleValue={scaleValue}
                            columns={imagesStyle.columns}
                            limit={imagesStyle.limit}
                            startIndex={imagesStyle.startIndex}
                        />
                    )}

                    <div className="mt-24 md:mt-48">
                        <div
                            data-testid="product-detailed-description"
                            className="prose prose-blue max-w-none text-base sm:text-lg md:text-xl leading-10
                        !text-gray-800 [&_ul]:!list-disc [&_ul]:!mt-6 [&_ul]:!mb-20 [&_ul]:!pl-6 [&_li]:!marker:text-blue-600
                        [&_li]:!text-gray-900 [&_li]:mb-4 sm:[&_li]:mb-6 [&_strong]:block [&_strong]:mb-2
                        [&_p]:mb-2 sm:[&_p]:mb-3 [&_h2]:mb-2 sm:[&_h2]:mb-6 [&_h2]:mt-4 sm:[&_h2]:mt-8 px-4
                        [&_h3]:mb-2 sm:[&_h3]:mb-4 [&_h3]:mt-4 sm:[&_h3]:mt-8"
                        >
                            {
                                language === Language.PL
                                    ? service.detailedDescription.textPL
                                    : service.detailedDescription.textENG
                            }
                        </div>
                    </div>

                    {service.images.length > 2 && (
                        <motion.div
                            ref={articleImagesRef2}
                            animate={{scale: isInCenter2 ? scaleValue : 1}}
                            initial={{scale: 1}}
                            transition={{duration: 1.2, ease: "easeOut", type: "spring", stiffness: 80, damping: 30}}
                            className="mt-4 md:mt-32 mb-2 md:mb-32 flex flex-col items-center justify-center relative min-h-[320px]"
                        >
                            <Image
                                src={service.images[2]}
                                alt={`${language === Language.PL ? service.name.namePL : service.name.nameENG} image`}
                                className="rounded-2xl shadow-xl max-w-2xl hover:scale-105 transition-all duration-300 w-3/3"
                            />
                        </motion.div>
                    )}

                    {service.summary && (
                        <div className="mt-24 md:mt-48 mb-24 md:mb-32">
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
                                className="prose prose-blue max-w-none text-base sm:text-lg md:text-xl leading-10
                        !text-gray-800 [&_ul]:!list-disc [&_ul]:!mt-6 [&_ul]:!mb-20 [&_ul]:!pl-6 [&_li]:!marker:text-blue-600
                        [&_li]:!text-gray-900 [&_li]:mb-4 sm:[&_li]:mb-6 [&_strong]:block [&_strong]:mb-2
                        [&_p]:mb-2 sm:[&_p]:mb-3 [&_h2]:mb-2 sm:[&_h2]:mb-6 [&_h2]:mt-4 sm:[&_h2]:mt-8 px-4
                        [&_h3]:mb-2 sm:[&_h3]:mb-4 [&_h3]:mt-4 sm:[&_h3]:mt-8"
                            >
                                {
                                    language === Language.PL
                                        ? service.summary.summaryPL
                                        : service.summary.summaryENG
                                }
                            </div>
                        </div>
                    )}

                    <div className="flex justify-center mt-10 mb-10 mx-auto">
                        <ContactUsCard
                            lang={language}
                            text={{
                                textPL: "Masz pytania odnośnie uslugi?",
                                textENG: "Do you have questions about this service?"
                            }}
                        />
                    </div>

                    <div
                        className="flex md:flex w-full max-w-screen-2xl mx-auto pt-4 pb-2 md:mt-20 mt-4 mb-10 justify-center">
                        <BackButton/>
                    </div>
                </section>
            )}
        </main>
    );
}