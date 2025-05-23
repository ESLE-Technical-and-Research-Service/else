import React, {RefObject} from "react";
import {ImagesGridLayout, Service, serviceToContentModel} from "../../types";
import HeroImage from "../../hero/hero-image";
import Breadcrumbs from "../../common/breadcrumbs/breadcrumbs";
import HeaderDivider from "../../common/dividers/header-divider";
import ImagesGridCard from "../../common/cards/images-grid-card";
import BackButton from "../../common/buttons/back-button";
import {GetLocalizedJSX, GetLocalizedText} from "../../utils";
import ContactUsServiceCard from "../../common/cards/contact-us-service-card";
import {useInView} from "framer-motion";

type CompactLayoutProps = {
    service: Service;
    articleImagesRef: RefObject<HTMLDivElement | null>;
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
                                          articleImagesRef,
                                          scaleValue,
                                          imagesStyle,
                                      }: CompactLayoutProps) {
    const isInCenter = useInView(articleImagesRef, {amount: 0.5, margin: "-10% 0px -10% 0px"});

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
                className="hidden md:flex w-full max-w-4xl mx-auto pt-2 pb-1"
            >
                <Breadcrumbs/>
            </div>

            {service && (
                <section className="max-w-3xl mx-auto px-3 py-8 mt-4">
                    <HeaderDivider
                        title={GetLocalizedText(service.title)}
                        isVisible={true}
                    />
                    <p className="mt-12 mb-12 text-[var(--font-color)] text-center md:text-xl text-base leading-8">
                        {GetLocalizedText(service.description)}
                    </p>

                    {service.images.length > 0 && (
                        <ImagesGridCard
                            content={serviceToContentModel(service)}
                            isInCenter={isInCenter}
                            layoutType={imagesStyle.imagesLayout}
                            articleRef={articleImagesRef}
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
                            {GetLocalizedJSX(service.detailedDescription)}
                        </div>
                    </div>

                    {service.summary && (
                        <div className="mt-16 md:mt-24 mb-16 md:mb-24">
                            <div
                                data-testid="product-summary"
                                className="prose prose-blue max-w-none text-base sm:text-base md:text-lg leading-8
                            !text-gray-800 [&_ul]:!list-disc [&_ul]:!mt-4 [&_ul]:!mb-12 [&_ul]:!pl-4 [&_li]:!marker:text-blue-600
                            [&_li]:!text-gray-900 [&_li]:mb-2 sm:[&_li]:mb-3 [&_strong]:block [&_strong]:mb-1
                            [&_p]:mb-2 sm:[&_p]:mb-2 [&_h2]:mb-2 sm:[&_h2]:mb-4 [&_h2]:mt-3 sm:[&_h2]:mt-6 px-3
                            [&_h3]:mb-1 sm:[&_h3]:mb-2 [&_h3]:mt-3 sm:[&_h3]:mt-6"
                            >
                                {GetLocalizedJSX(service.summary)}
                            </div>
                        </div>
                    )}

                    <div className="flex justify-center mt-6 mb-6 mx-auto">
                        <ContactUsServiceCard />
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