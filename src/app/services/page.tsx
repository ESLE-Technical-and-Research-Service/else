import {servicesItems} from "../../../components/src/services/data/services-items";
import ServiceCard from "../../../components/src/common/cards/service-card";
import Breadcrumbs from "../../../components/src/common/breadcrumbs/breadcrumbs";
import SectionHeader from "../../../components/src/header/section/section-header";
import BackButton from "../../../components/src/common/buttons/back-button";
import {Language} from "../../../components/src/types";

export default function ServicesPage() {
    const sectionTitle = {
        [Language.PL]: "Nasze serwisy",
        [Language.ENG]: "Our Services",
    }

    const sectionSubtitle = {
        [Language.PL]: "Dzięki ponad 30-letniemu doświadczeniu i współpracy z renomowanymi partnerami, zapewniamy rozwiązania, które realnie zwiększają efektywność i konkurencyjność przedsiębiorstw.",
        [Language.ENG]: "With over 30 years of experience and collaboration with renowned partners, we deliver solutions that significantly enhance business efficiency and competitiveness.",
    }

    return (
        <main className="w-full bg-[var(--background)]">
            <div
                data-testid="water-sewage-departments-products-breadcrumbs"
                className="hidden md:flex w-full max-w-4xl mx-auto pt-4 pb-2"
            >
                <Breadcrumbs/>
            </div>

            <SectionHeader title={sectionTitle} subtitle={sectionSubtitle}/>

            <section className="max-w-4xl mx-auto px-4 py-16 mt-10">
                {servicesItems.map((service, index) => (
                    <ServiceCard
                        index={index}
                        service={service}
                        key={index}
                    />
                ))}
            </section>

            <div className="flex md:flex w-full max-w-4xl mx-auto pt-4 pb-2 mb-20 justify-center">
                <BackButton/>
            </div>

        </main>
    )
}