'use client';

import {usePathname} from "next/navigation";
import {useLanguage} from "../../../../context/src/LanguageContext";
import Breadcrumbs from "../../../../components/src/common/breadcrumbs/breadcrumbs";
import {Service} from "../../../../components/src/types/Service";
import {useMemo, useRef} from "react";
import {Language, NavigationLinks} from "../../../../components/src/types";
import {CameraService} from "../../../../components/src/services/data/camera-service";
import HeaderDivider from "../../../../components/src/common/dividers/header-divider";
import HeroImage from "../../../../components/src/hero/hero-image";
import Image from "next/image";
import {motion, useInView} from "framer-motion";
import ContactUsCard from "../../../../components/src/common/cards/contact-us-card";
import BackButton from "../../../../components/src/common/buttons/back-button";
import {CheckBadgeIcon} from "@heroicons/react/24/outline";
import {PressureVehiclesService} from "../../../../components/src/services/data/pressure-vehicles-service";
import {Trainings} from "../../../../components/src/services/data/trainings";
import ImagesGridCard from "../../../../components/src/common/cards/images-grid-card";
import {ImagesGridLayout} from "../../../../components/src/types/ImagesGridLayout";

export default function ServiceDetailsPage() {
    const {language} = useLanguage();
    const pathname = usePathname();
    const slug = pathname.split("/").pop();
    const articleImagesRef1 = useRef<HTMLDivElement | null>(null);
    const articleImagesRef2 = useRef<HTMLDivElement | null>(null);
    const badgeRef = useRef(null);
    const isInCenter1 = useInView(articleImagesRef1, {amount: 0.5, margin: "-10% 0px -10% 0px"});
    const isInCenter2 = useInView(articleImagesRef2, {amount: 0.5, margin: "-10% 0px -10% 0px"});
    const isBadgeInCenter = useInView(badgeRef, {amount: 0.5, margin: "-20% 0px -20% 0px"});

    const service: Service = useMemo(() => {
        if (slug === NavigationLinks.CAM_SERVICE) return CameraService;
        if (slug === NavigationLinks.PRESSURE_VEHICLES_SERVICE) return PressureVehiclesService;
        if (slug === NavigationLinks.TRAININGS) return Trainings;
        return CameraService;
    }, [slug]);

    let scaleValue = 1.15;
    if (typeof window !== 'undefined') {
        if (window.innerWidth < 768) {
            scaleValue = 1.03;
        } else if (window.innerWidth < 1024) {
            scaleValue = 1.05;
        }
    }

    let imagesStyle;

    switch (slug) {
        case NavigationLinks.CAM_SERVICE:
            imagesStyle = {
                imagesLayout: ImagesGridLayout.ROW,
                columns: 3,
                limit: 4,
                startIndex: 0,
            };
            break;
            case NavigationLinks.PRESSURE_VEHICLES_SERVICE:
            imagesStyle = {
                imagesLayout: ImagesGridLayout.COLUMN,
                columns: 2,
                limit: 2,
                startIndex: 0,
            };
            break;
            case NavigationLinks.TRAININGS:
            imagesStyle = {
                imagesLayout: ImagesGridLayout.MASONRY,
                columns: 1,
                limit: 2,
                startIndex: 0,
            };
            break;
        default:
            imagesStyle = {
                imagesLayout: ImagesGridLayout.ROW,
                columns: 2,
                limit: 2,
                startIndex: 0,
            };
    }

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
                                initial={{ color: "var(--font-color)", opacity: 0 }}
                                animate={{
                                    color: isBadgeInCenter ? "var(--main-color-secondary)" : "var(--font-color)",
                                    opacity: isBadgeInCenter ? 1 : 0
                                }}
                                transition={{ duration: 1.2, delay: 1, ease: "easeInOut", type: "tween", stiffness: 80, damping: 30 }}
                                viewport={{ once: true, amount: 0.7 }}
                                className="flex justify-center mb-10"
                            >
                                <CheckBadgeIcon className="w-20 h-20" style={{ color: "inherit" }} />
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

                    <div className="flex md:flex w-full max-w-screen-2xl mx-auto pt-4 pb-2 md:mt-20 mt-4 mb-10 justify-center">
                        <BackButton/>
                    </div>
                </section>
            )}
        </main>
    )
}