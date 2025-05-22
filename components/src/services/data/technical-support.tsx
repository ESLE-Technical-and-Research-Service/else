import {Service} from "../../types/Service";
// import technicalSupportHeroImg from "../../../../assets/images/hero/technicalSupportHero01.webp";
import technicalSupportHeroImg from "../../../../assets/images/services/tech_support_02.jpg";
import AnimatedDivider from "../../common/dividers/animated-divider";
import ListElementCard from "../../common/cards/list-element-card";
import { motion } from "framer-motion";
import techSupportImg01 from "../../../../assets/images/services/tech_support_01.webp";
import techSupportImg02 from "../../../../assets/images/services/tech_support_02.jpg";
import techSupportImg03 from "../../../../assets/images/services/tech_support_03.png";
import techSupportImg04 from "../../../../assets/images/services/tech_support_04.png";

export const TechnicalSupport: Service = {
    name: {
        namePL: "Wsparcie techniczne",
        nameENG: "Technical support",
    },
    title: {
        titlePL: "Eksperckie wsparcie techniczne zapewniające niezawodność",
        titleENG: "Expert Technical Assistance Ensuring Reliability",
    },
    href: "/services/tech-support",
    heroImage: technicalSupportHeroImg,
    images: [
        techSupportImg01,
        techSupportImg02,
        techSupportImg03,
        techSupportImg04,
    ],
    description: {
        textPL: "Nasz zespół Wsparcia Technicznego zapewnia kompleksową pomoc w zakresie obsługi systemów i aplikacji, gwarantując ich niezawodne działanie. Dzięki szybkiej reakcji i skutecznym rozwiązaniom minimalizujemy przestoje oraz zwiększamy efektywność operacyjną.",
        textENG: "Our Technical Support team is dedicated to ensuring seamless operation of your systems and applications. We provide prompt assistance to address technical issues, minimizing downtime and enhancing productivity.",
    },
    detailedDescription: {
        textPL: (
            <>
                <section>
                    <p className="text-center md:text-2xl text-base leading-10">
                        <span className="font-extrabold">ELSE</span> oferuje kompleksowe wsparcie techniczne, zapewniając niezawodne działanie i długowieczność
                        Twoich urządzeń. Nasz doświadczony zespół jest gotowy do pomocy w szerokim zakresie potrzeb
                        technicznych, <span className="font-extrabold">minimalizując przestoje i zapewniając efektywną pracę systemów</span>.
                    </p>

                    <div className="flex flex-col items-center mt-32 font-bold">
                        <h3>Nasze usługi obejmują:</h3>
                        <AnimatedDivider delay={1}/>
                    </div>

                    <ul>
                        {[
                            "Diagnostykę i rozwiązywanie problemów z urządzeniami.",
                            "Aktualizacje oprogramowania i pomoc w konfiguracji.",
                            "Doradztwo w zakresie obsługi i konserwacji sprzętu.",
                            "Dostępność części zamiennych i komponentów.",
                            "Zdalne i stacjonarne konsultacje techniczne.",
                        ].map((text, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ x: 100, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: true, amount: 0.7 }}
                                    transition={{ duration: 0.6, delay: idx * 0.25 }}
                                    style={{ listStyle: 'none', objectFit: 'cover' }}
                                >
                                    <ListElementCard text={text} key={idx} />
                                </motion.div>

                        ))}
                    </ul>

                    <p className="mt-20 md:mt-32 text-base md:text-2xl text-center leading-10">
                        Dzięki zaangażowaniu w najwyższą jakość, zespół wsparcia technicznego ELSE zapewnia klientom
                        terminowe i skuteczne rozwiązania dostosowane do ich indywidualnych potrzeb.
                    </p>
                </section>
            </>
        ),
        textENG: (
            <>
                <section>
                    <p className="text-center md:text-2xl text-base leading-10">
                        <span className="font-extrabold">ELSE</span> provides comprehensive technical support services to ensure the optimal performance and
                        longevity of your equipment. Our experienced team is dedicated to assisting clients with a wide
                        range of technical needs, <span className="font-extrabold">ensuring minimal downtime and efficient operations</span>.
                    </p>

                    <div className="flex flex-col items-center mt-32 font-bold">
                        <h3>Our Support Services Include:</h3>
                        <AnimatedDivider delay={1}/>
                    </div>

                    <ul>
                        {[
                            "Diagnostic and troubleshooting of equipment issues.",
                            "Software updates and configuration assistance.",
                            "Guidance on equipment operation and maintenance.",
                            "Provision of spare parts and replacement components.",
                            "Remote and on-site technical consultations.",
                        ].map((text, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ x: 100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true, amount: 0.7 }}
                                transition={{ duration: 0.6, delay: idx * 0.25 }}
                                style={{ listStyle: 'none', objectFit: 'cover' }}
                            >
                                <ListElementCard text={text} key={idx} />
                            </motion.div>
                        ))}
                    </ul>

                    <p className="mt-20 md:mt-32 text-base md:text-2xl text-center leading-10">
                        With a commitment to excellence, ELSE&#39;s technical support team ensures that clients receive
                        timely and effective solutions tailored to their specific requirements.
                    </p>
                </section>
            </>
        )
    },
    summary: {
        summaryPL: (
            <p className="text-center md:text-2xl text-base leading-10">
                Nasze usługi wsparcia technicznego mają na celu zapewnienie optymalnej wydajności i niezawodności Twoich systemów inspekcyjnych. Dzięki zespołowi doświadczonych specjalistów oferujemy szybką pomoc, skuteczne rozwiązywanie problemów oraz bieżące utrzymanie, aby sprostać wszelkim wyzwaniom technicznym. Nasze zaangażowanie w doskonałość gwarantuje płynność działania, minimalizując przestoje i maksymalizując produktywność.
            </p>
        ),
        summaryENG: (
            <p className="text-center md:text-2xl text-base leading-10">
                Our technical support services are designed to ensure the optimal performance and reliability of your inspection systems. With a team of experienced professionals, we provide prompt assistance, effective troubleshooting, and ongoing maintenance to address any technical challenges. Our commitment to excellence ensures that your operations run smoothly, minimizing downtime and maximizing productivity.
            </p>
        ),
    },
}