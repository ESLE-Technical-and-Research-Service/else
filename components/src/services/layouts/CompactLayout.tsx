import React, {RefObject} from "react";
import {Language} from "../../types";
import {Service} from "../../types/Service";
import HeroImage from "../../hero/hero-image";
import Breadcrumbs from "../../common/breadcrumbs/breadcrumbs";
import HeaderDivider from "../../common/dividers/header-divider";
import ImagesGridCard from "../../common/cards/images-grid-card";
import ContactUsCard from "../../common/cards/contact-us-card";
import BackButton from "../../common/buttons/back-button";
import {ImagesGridLayout} from "../../types/ImagesGridLayout";

type CompactLayoutProps = {
    service: Service;
    language: Language;
    isInCenter1: boolean;
    articleImagesRef1: RefObject<HTMLDivElement | null>;
    scaleValue: number;
    imagesStyle: {
        imagesLayout: ImagesGridLayout;
        columns: number;
        limit: number;
        startIndex: number;
    };
};

export default function CompactLayout({
                                          service,
                                          language,
                                          isInCenter1,
                                          articleImagesRef1,
                                          scaleValue,
                                          imagesStyle,
                                      }: CompactLayoutProps) {
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
                className="hidden md:flex w-full max-w-4xl mx-auto pt-2 pb-1"
            >
                <Breadcrumbs/>
            </div>

            {service && (
                <section className="max-w-3xl mx-auto px-3 py-8 mt-4">
                    <HeaderDivider
                        title={{
                            labelPL: service.title.titlePL,
                            labelENG: service.title.titleENG,
                        }}
                        isVisible={true}
                    />
                    <p className="mt-12 mb-12 text-[var(--font-color)] text-center md:text-xl text-base leading-8">
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

                    <div className="mt-16 md:mt-24">
                        <div
                            data-testid="product-detailed-description"
                            className="prose prose-blue max-w-none text-base sm:text-base md:text-lg leading-8
                        !text-gray-800 [&_ul]:!list-disc [&_ul]:!mt-4 [&_ul]:!mb-12 [&_ul]:!pl-4 [&_li]:!marker:text-blue-600
                        [&_li]:!text-gray-900 [&_li]:mb-2 sm:[&_li]:mb-3 [&_strong]:block [&_strong]:mb-1
                        [&_p]:mb-2 sm:[&_p]:mb-2 [&_h2]:mb-2 sm:[&_h2]:mb-4 [&_h2]:mt-3 sm:[&_h2]:mt-6 px-3
                        [&_h3]:mb-1 sm:[&_h3]:mb-2 [&_h3]:mt-3 sm:[&_h3]:mt-6"
                        >
                            {
                                language === Language.PL
                                    ? service.detailedDescription.textPL
                                    : service.detailedDescription.textENG
                            }
                        </div>
                    </div>

                    {service.summary && (
                        <div className="mt-16 md:mt-24 mb-16 md:mb-24">
                            <div
                                data-testid="product-detailed-description"
                                className="prose prose-blue max-w-none text-base sm:text-base md:text-lg leading-8
                            !text-gray-800 [&_ul]:!list-disc [&_ul]:!mt-4 [&_ul]:!mb-12 [&_ul]:!pl-4 [&_li]:!marker:text-blue-600
                            [&_li]:!text-gray-900 [&_li]:mb-2 sm:[&_li]:mb-3 [&_strong]:block [&_strong]:mb-1
                            [&_p]:mb-2 sm:[&_p]:mb-2 [&_h2]:mb-2 sm:[&_h2]:mb-4 [&_h2]:mt-3 sm:[&_h2]:mt-6 px-3
                            [&_h3]:mb-1 sm:[&_h3]:mb-2 [&_h3]:mt-3 sm:[&_h3]:mt-6"
                            >
                                {
                                    language === Language.PL
                                        ? service.summary.summaryPL
                                        : service.summary.summaryENG
                                }
                            </div>
                        </div>
                    )}

                    <div className="flex justify-center mt-6 mb-6 mx-auto">
                        <ContactUsCard
                            lang={language}
                            text={{
                                textPL: "Masz pytania odnośnie uslugi?",
                                textENG: "Do you have questions about this service?"
                            }}
                        />
                    </div>

                    <div
                        className="flex md:flex w-full max-w-screen-xl mx-auto pt-2 pb-1 md:mt-10 mt-2 mb-6 justify-center">
                        <BackButton/>
                    </div>
                </section>
            )}
        </main>
    );
}