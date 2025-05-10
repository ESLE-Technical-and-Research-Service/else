'use client';

import {useLanguage} from "../../../context/src/LanguageContext";
import {Language} from "../../../components/src/types";
import {servicesItems} from "../../../components/src/services/data/services-items";
import Link from "next/link";
import ServiceCard from "../../../components/src/common/cards/service-card";

export default function ServicesPage() {
    const {language} = useLanguage();

    return (
        <main className="w-full bg-[var(--background)]">
            <section className="w-full bg-[var(--background)] py-16">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                        {language === Language.PL ? 'Nasze serwisy' : 'Our Services'}
                    </h1>
                    <div className="w-20 h-2 bg-[var(--font-color-accent)] rounded mx-auto mb-6"></div>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        {
                            language === Language.PL
                                ? "Dzięki ponad 30-letniemu doświadczeniu i współpracy z renomowanymi partnerami, zapewniamy rozwiązania, które realnie zwiększają efektywność i konkurencyjność przedsiębiorstw."
                                : "With over 30 years of experience and collaboration with renowned partners, we deliver solutions that significantly enhance business efficiency and competitiveness."
                        }
                    </p>
                </div>
            </section>

            <section className="max-w-4xl mx-auto px-4 py-16">
                {servicesItems.map((service, index) => (
                    <ServiceCard language={language} index={index} service={service} key={index}/>
                ))}
                <div className="text-center mt-16">
                    <Link
                        href="/contact"
                        className="inline-block bg-[var(--font-color-accent)] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-[var(--font-color)] transition"
                        style={{color: '#fff'}}
                    >
                        {language === 'PL' ? 'Skontaktuj się z nami' : 'Contact Us'}
                    </Link>
                </div>
            </section>
        </main>
    )
}