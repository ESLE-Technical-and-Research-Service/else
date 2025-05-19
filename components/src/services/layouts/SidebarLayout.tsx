import React, {RefObject} from "react";
import {Language} from "../../types";
import {Service} from "../../types/Service";
import HeroImage from "../../hero/hero-image";
import Breadcrumbs from "../../common/breadcrumbs/breadcrumbs";
import HeaderDivider from "../../common/dividers/header-divider";
import ImagesGridCard from "../../common/cards/images-grid-card";
import ContactUsCard from "../../common/cards/contact-us-card";
import BackButton from "../../common/buttons/back-button";
import Link from "next/link";
import {servicesDropdownItems} from "../../header/navigation/config/services-dropdown-items";
import {DropDownItem} from "../../header/navigation/render-dropdown-items";
import {ImagesGridLayout} from "../../types/ImagesGridLayout";

type SidebarLayoutProps = {
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

export default function SidebarLayout({
                                          service,
                                          language,
                                          isInCenter1,
                                          articleImagesRef1,
                                          scaleValue,
                                          imagesStyle,
                                      }: SidebarLayoutProps) {
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
                className="hidden md:flex w-full max-w-6xl mx-auto pt-4 pb-2"
            >
                <Breadcrumbs/>
            </div>

            {service && (
                <div className="flex flex-col md:flex-row max-w-6xl mx-auto">
                    {/* Sidebar */}
                    <aside className="w-full md:w-1/4 p-4 bg-gray-50 rounded-lg shadow-sm md:mr-6 mb-6 md:mb-0">
                        <div className="sticky top-24">
                            <h2 className="text-xl font-semibold mb-4 text-[var(--main-color)]">
                                {language === Language.PL ? "Szybka nawigacja" : "Quick Navigation"}
                            </h2>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#description"
                                       className="text-[var(--main-color-secondary)] hover:text-[var(--main-color)] transition-colors">
                                        {language === Language.PL ? "Opis" : "Description"}
                                    </a>
                                </li>
                                <li>
                                    <a href="#details"
                                       className="text-[var(--main-color-secondary)] hover:text-[var(--main-color)] transition-colors">
                                        {language === Language.PL ? "Szczegóły" : "Details"}
                                    </a>
                                </li>
                                {service.summary && (
                                    <li>
                                        <a href="#summary"
                                           className="text-[var(--main-color-secondary)] hover:text-[var(--main-color)] transition-colors">
                                            {language === Language.PL ? "Podsumowanie" : "Summary"}
                                        </a>
                                    </li>
                                )}
                                <li>
                                    <a href="#contact"
                                       className="text-[var(--main-color-secondary)] hover:text-[var(--main-color)] transition-colors">
                                        {language === Language.PL ? "Kontakt" : "Contact"}
                                    </a>
                                </li>
                            </ul>

                            <div className="mt-8">
                                <h2 className="text-xl font-semibold mb-4 text-[var(--main-color)]">
                                    {language === Language.PL ? "Powiązane usługi" : "Related Services"}
                                </h2>
                                <ul className="space-y-2">
                                    {servicesDropdownItems
                                        .filter((item: DropDownItem) =>
                                            item.href.split('/').pop() !== service.href.split('/').pop()
                                        )
                                        .map((item: DropDownItem, idx: number) => (
                                            <li key={idx}>
                                                <Link
                                                    href={item.href}
                                                    className="text-[var(--main-color-secondary)] hover:text-[var(--main-color)] transition-colors"
                                                >
                                                    {language === Language.PL ? item.labelPL : item.labelENG}
                                                </Link>
                                            </li>
                                        ))}
                                </ul>
                            </div>

                            <div className="mt-8">
                                <BackButton/>
                            </div>
                        </div>
                    </aside>

                    {/* Main content */}
                    <section className="w-full md:w-3/4 px-4 py-16">
                        <HeaderDivider
                            title={{
                                labelPL: service.title.titlePL,
                                labelENG: service.title.titleENG,
                            }}
                            isVisible={true}
                        />
                        <div id="description">
                            <p className="mt-18 mb-18 text-[var(--font-color)] text-center md:text-2xl text-base leading-10">
                                {
                                    language === Language.PL
                                        ? service.description.textPL
                                        : service.description.textENG
                                }
                            </p>
                        </div>

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

                        <div id="details" className="mt-24 md:mt-32">
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

                        {service.summary && (
                            <div id="summary" className="mt-24 md:mt-32 mb-24 md:mb-32">
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

                        <div id="contact" className="flex justify-center mt-10 mb-10 mx-auto">
                            <ContactUsCard
                                lang={language}
                                text={{
                                    textPL: "Masz pytania odnośnie uslugi?",
                                    textENG: "Do you have questions about this service?"
                                }}
                            />
                        </div>
                    </section>
                </div>
            )}
        </main>
    );
}