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

export default function ServiceDetailsPage() {
    const {language} = useLanguage();
    const pathname = usePathname();
    const slug = pathname.split("/").pop();
    const imagesRef = useRef(null);
    const isInCenter = useInView(imagesRef, {amount: 0.5, margin: "-10% 0px -10% 0px"});

    const service: Service = useMemo(() => {
        if (slug === NavigationLinks.CAM_SERVICE) return CameraService;
        return CameraService;
    }, [slug]);

    return (
        <main className="w-full bg-[var(--background)]">
            <HeroImage
                heroSlides={[service.heroImage]}
                heroTitle={
                    <h1 className="text-6xl font-bold text-white">
                        {
                            language === Language.PL
                                ? service.name.namePL
                                : service.name.nameENG
                        }
                    </h1>
                }
                heroHeight={30}
            />

            <div
                data-testid="water-sewage-departments-products-breadcrumbs"
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
                    <p className="mt-18 mb-18 text-[var(--font-color)]">
                        {
                            language === Language.PL
                                ? service.description.textPL
                                : service.description.textENG
                        }
                    </p>

                    <motion.div
                        ref={imagesRef}
                        animate={{scale: isInCenter ? 1.15 : 1}}
                        initial={{scale: 1}}
                        transition={{duration: 1.2, ease: "easeOut", type: "spring", stiffness: 80, damping: 30}}
                        className="mt-32 mb-10 flex flex-col items-center justify-center relative min-h-[520px]"
                    >

                        <div className="relative z-10 w-4/5 md:w-3/5 mb-4 md:mb-0">
                            <Image
                                src={service.images[1]}
                                alt={language === 'PL' ? service.name.namePL : service.name.nameENG}
                                className="rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300
                                object-cover w-full h-64 md:h-[26rem]"
                                style={{objectPosition: 'center'}}
                            />
                        </div>

                        <div className="relative w-4/5 md:absolute md:z-30 md:left-16 md:bottom-[-2.5rem] md:w-2/5">
                            <Image
                                src={service.images[0]}
                                alt={language === 'PL' ? service.name.namePL : service.name.nameENG}
                                className="rounded-3xl shadow-xl object-cover w-full h-40 md:h-64 border-4
                                \hover:scale-105 transition-all duration-300 border-white bg-white"
                                style={{objectPosition: 'center'}}
                            />
                        </div>
                    </motion.div>

                    <div className="mt-48">
                        <div
                            data-testid="product-detailed-description"
                            className="prose prose-blue max-w-none text-sm sm:text-base md:text-lg leading-relaxed
                        !text-gray-800 [&_ul]:!list-disc [&_ul]:!mt-6 [&_ul]:!mb-8 [&_ul]:!pl-6 [&_li]:!marker:text-blue-600
                        [&_li]:!text-gray-900 [&_li]:mb-4 sm:[&_li]:mb-6 [&_strong]:block [&_strong]:mb-2
                        [&_p]:mb-2 sm:[&_p]:mb-3 [&_h2]:mb-2 sm:[&_h2]:mb-6 [&_h2]:mt-4 sm:[&_h2]:mt-8 px-4"
                        >
                            {
                                language === Language.PL
                                    ? service.detailedDescription.textPL
                                    : service.detailedDescription.textENG
                            }
                        </div>
                    </div>

                    <div className="flex justify-center mt-16 mb-16 mx-auto">
                        <ContactUsCard
                            lang={language}
                            text={{
                                textPL: "Masz pytania odnośnie uslugi?",
                                textENG: "Do you have questions about this service?"
                            }}
                        />
                    </div>

                    <div className="flex md:flex w-full max-w-screen-2xl mx-auto pt-4 pb-2 mb-10 justify-center">
                        <BackButton/>
                    </div>
                </section>
            )}
        </main>
    )
}