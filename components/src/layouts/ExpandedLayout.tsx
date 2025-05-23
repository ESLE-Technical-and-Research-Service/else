import React, {RefObject} from "react";
import Image from "next/image";
import {CheckBadgeIcon} from "@heroicons/react/24/outline";
import {ContentModel, ImagesGridLayout, Language, LocalizedText} from "../types";
import Breadcrumbs from "../common/breadcrumbs/breadcrumbs";
import HeroImage from "../hero/hero-image";
import ImagesGridCard from "../common/cards/images-grid-card";
import HeaderDivider from "../common/dividers/header-divider";
import {motion} from "framer-motion";
import BackButton from "../common/buttons/back-button";
import ContactUsServiceCard from "../common/cards/contact-us-service-card";
import {GetLocalizedJSX, GetLocalizedText} from "../utils";

type ExpandedLayoutProps = {
    content: ContentModel;
    badgeRef?: RefObject<HTMLDivElement | null>;
    isBadgeInCenter?: boolean;
    isInCenter?: boolean;
    isInCenter2?: boolean;
    articleImagesRef1: RefObject<HTMLDivElement | null>;
    articleImagesRef2: RefObject<HTMLDivElement | null>;
    scaleValue: number;
    imagesStyle: {
        imagesLayout: ImagesGridLayout;
        columns: number;
        limit: number;
        startIndex: number;
    }
};

export default function ExpandedLayout({
                                           content,
                                           badgeRef,
                                           isBadgeInCenter,
                                           isInCenter = false,
                                           isInCenter2 = false,
                                           articleImagesRef1,
                                           articleImagesRef2,
                                           scaleValue,
                                           imagesStyle
                                       }: ExpandedLayoutProps) {
    const slides = content.heroImage?.src ? [content.heroImage.src] : [];

    return (
        <main className="w-full bg-[var(--background)]">
            <HeroImage
                heroSlides={slides}
                heroTitle={GetLocalizedText(content.title)}
                heroHeight={70}
                description={GetLocalizedText(content.description || {[Language.PL]: "", [Language.ENG]: ""} as LocalizedText)}
            />

            <div
                data-testid="water-sewage-service-details-breadcrumbs"
                className="hidden md:flex w-full max-w-6xl mx-auto pt-6 pb-3"
            >
                <Breadcrumbs/>
            </div>

            {content && (
                <>
                    <section className="max-w-6xl mx-auto px-6 py-24 mt-12">
                        <HeaderDivider
                            title={GetLocalizedText(content.title)}
                            isVisible={true}
                        />
                        <p className="mt-24 mb-24 text-[var(--font-color)] text-center md:text-3xl text-xl leading-relaxed max-w-4xl mx-auto">
                            {GetLocalizedText(content.description || {
                                [Language.PL]: "",
                                [Language.ENG]: ""
                            } as LocalizedText)}
                        </p>
                    </section>

                    {content.images && content.images.length > 0 && (
                        <section className="w-full bg-gray-50 py-24">
                            <div className="max-w-7xl mx-auto">
                                <ImagesGridCard
                                    content={content}
                                    isInCenter={isInCenter}
                                    layoutType={imagesStyle.imagesLayout}
                                    articleRef={articleImagesRef1}
                                    scaleValue={scaleValue * 1.1}
                                    columns={imagesStyle.columns}
                                    limit={imagesStyle.limit}
                                    startIndex={imagesStyle.startIndex}
                                />
                            </div>
                        </section>
                    )}

                    <section className="max-w-5xl mx-auto px-6 py-24">
                        <div className="mt-12 mb-24">
                            <div
                                data-testid="product-detailed-description"
                                className="prose prose-blue max-w-none text-lg sm:text-xl md:text-2xl leading-relaxed
                            !text-gray-800 [&_ul]:!list-disc [&_ul]:!mt-8 [&_ul]:!mb-24 [&_ul]:!pl-8 [&_li]:!marker:text-blue-600
                            [&_li]:!text-gray-900 [&_li]:mb-6 sm:[&_li]:mb-8 [&_strong]:block [&_strong]:mb-3
                            [&_p]:mb-4 sm:[&_p]:mb-6 [&_h2]:mb-4 sm:[&_h2]:mb-8 [&_h2]:mt-6 sm:[&_h2]:mt-12 px-6
                            [&_h3]:mb-3 sm:[&_h3]:mb-6 [&_h3]:mt-6 sm:[&_h3]:mt-10"
                            >
                                GetLocalizedJSX(content.detailedDescription)
                            </div>
                        </div>
                    </section>

                    {content.images && content.images.length > 2 && (
                        <section className="w-full bg-gray-50 py-24">
                            <motion.div
                                ref={articleImagesRef2}
                                animate={{scale: isInCenter2 ? scaleValue : 1}}
                                initial={{scale: 1}}
                                transition={{
                                    duration: 1.5,
                                    ease: "easeOut",
                                    type: "spring",
                                    stiffness: 70,
                                    damping: 25
                                }}
                                className="max-w-5xl mx-auto flex flex-col items-center justify-center relative min-h-[420px]"
                            >
                                <Image
                                    src={content.images[2].src}
                                    alt={`${GetLocalizedText(content.title)} image`}
                                    className="rounded-2xl shadow-xl max-w-3xl hover:scale-105 transition-all duration-500 w-3/3"
                                />
                            </motion.div>
                        </section>
                    )}

                    {content.summary && (
                        <section className="max-w-5xl mx-auto px-6 py-24">
                            <motion.div
                                ref={badgeRef}
                                initial={{color: "var(--font-color)", opacity: 0}}
                                animate={{
                                    color: isBadgeInCenter ? "var(--main-color-secondary)" : "var(--font-color)",
                                    opacity: isBadgeInCenter ? 1 : 0
                                }}
                                transition={{
                                    duration: 1.5,
                                    delay: 1,
                                    ease: "easeInOut",
                                    type: "tween",
                                    stiffness: 70,
                                    damping: 25
                                }}
                                viewport={{once: true, amount: 0.7}}
                                className="flex justify-center mb-16"
                            >
                                <CheckBadgeIcon className="w-28 h-28" style={{color: "inherit"}}/>
                            </motion.div>
                            <div
                                data-testid="product-detailed-description"
                                className="prose prose-blue max-w-none text-lg sm:text-xl md:text-2xl leading-relaxed
                            !text-gray-800 [&_ul]:!list-disc [&_ul]:!mt-8 [&_ul]:!mb-24 [&_ul]:!pl-8 [&_li]:!marker:text-blue-600
                            [&_li]:!text-gray-900 [&_li]:mb-6 sm:[&_li]:mb-8 [&_strong]:block [&_strong]:mb-3
                            [&_p]:mb-4 sm:[&_p]:mb-6 [&_h2]:mb-4 sm:[&_h2]:mb-8 [&_h2]:mt-6 sm:[&_h2]:mt-12 px-6
                            [&_h3]:mb-3 sm:[&_h3]:mb-6 [&_h3]:mt-6 sm:[&_h3]:mt-10"
                            >
                                {GetLocalizedJSX(content.summary)}
                            </div>
                        </section>
                    )}

                    <section className="w-full bg-gray-50 py-16">
                        <div className="max-w-4xl mx-auto">
                            <div className="flex justify-center mb-12">
                                <ContactUsServiceCard />
                            </div>

                            <div className="flex justify-center">
                                <BackButton/>
                            </div>
                        </div>
                    </section>
                </>
            )}
        </main>
    );
}