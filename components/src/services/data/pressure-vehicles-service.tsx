import {Service} from "../../types/Service";
import pressureVehiclesServiceHeroImg from "../../../../assets/images/products/pressure-vehicles/automatic_street_inlets_cleaning_vehicles_06.webp"
import pressureVehiclesServiceImg01 from "../../../../assets/images/heroImage_01.jpg";
import pressureVehiclesServiceImg02 from "../../../../assets/images/products/pressure-vehicles/automatic_street_inlets_cleaning_vehicles_05.webp";
import pressureVehiclesServiceImg03 from "../../../../assets/images/hero/heroImage_04.webp";
import AnimatedDivider from "../../common/dividers/animated-divider";
import { motion } from "framer-motion";
import ListElementCard from "../../common/cards/list-element-card";

export const PressureVehiclesService: Service = {
    name: {
        namePL: "Serwis samochodów ciśnieniowych",
        nameENG: "Pressure vehicles service",
    },
    title: {
      titlePL: "Zapewniamy profesjonalną obsługę i konserwację pojazdów ciśnieniowych, gwarantując ich niezawodność i długowieczność.",
      titleENG: "We offer professional maintenance and support for pressure vehicles, ensuring their reliability and longevity.",
    },
    href: "/services/pressure-vehicles",
    heroImage: pressureVehiclesServiceHeroImg,
    images: [
        pressureVehiclesServiceImg01,
        pressureVehiclesServiceImg02,
        pressureVehiclesServiceImg03,
    ],
    description: {
        textPL: "Specjalizujemy się w kompleksowej obsłudze systemów wysokociśnieniowych w pojazdach specjalistycznych, zapewniając ich bezpieczne i efektywne działanie zgodnie z obowiązującymi normami i przepisami.",
        textENG: "Our Pressure Vehicles Service specializes in the maintenance and optimization of high-pressure systems within specialized vehicles. We ensure that all pressure components operate safely and efficiently, adhering to industry standards and regulations.",
    },
    detailedDescription: {
        textPL: (
            <>
                <section>
                    <p className="text-center md:text-2xl text-base">
                        <span className="font-extrabold">ELSE</span> oferuje autoryzowany serwis kamer inspekcyjnych,
                        zapewniając ich niezawodne działanie przez długie lata. Dzięki bogatemu doświadczeniu
                        <span className="font-extrabold"> od 1989 roku</span> oraz odpowiedniemu zapleczu technicznemu,
                        gwarantujemy wysoką jakość świadczonych usług.
                    </p>

                    <div className="flex flex-col items-center mt-32 font-bold">
                        <h3 className="text-center text-4xl mb-3">Zakres naszych usług:</h3>
                        <AnimatedDivider delay={1} />
                    </div>

                    <ul>
                        {[
                            "Serwis gwarancyjny i pogwarancyjny urządzeń inspekcyjnych.",
                            "Wsparcie w zakresie części zamiennych przez okres do 10 lat po zakończeniu danej linii produktów.",
                            "Bezpośrednia dostępność części zamiennych, co skraca czas przestoju urządzeń.",
                            "Możliwość elastycznej wymiany wszystkich komponentów urządzenia, obniżając koszty eksploatacyjne.",
                            "Komponenty systemów IBAK produkowane niemal w całości w fabryce, zapewniając ciągłość dostaw.",
                        ].map((text, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ x: 100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true, amount: 0.7 }}
                                transition={{ duration: 0.6, delay: idx * 0.25 }}
                                style={{ listStyle: 'none' }}
                            >
                                <ListElementCard text={text} key={idx} />
                            </motion.div>
                        ))}
                    </ul>

                    <p className="mt-20 md:mt-32 text-base md:text-2xl text-center">
                        Dzięki naszemu autoryzowanemu serwisowi możesz być pewien, że Twoje urządzenia są w dobrych rękach. Nasze długoletnie doświadczenie będzie służyć Twoim potrzebom w serwisie kamer inspekcyjnych każdego producenta.
                    </p>
                </section>

            </>
        ),
        textENG: (
            <>
                <section>
                    <p className="text-center md:text-2xl text-base">
                        <span className="font-extrabold">ELSE</span> offers authorized servicing of inspection cameras,
                        ensuring their reliable operation for many years. With extensive experience
                        <span className="font-extrabold"> since 1989</span> and the necessary technical facilities,
                        we guarantee high-quality services.
                    </p>

                    <div className="flex flex-col items-center mt-32 font-bold">
                        <h3 className="text-center text-4xl mb-3">Our services include:</h3>
                        <AnimatedDivider delay={1} />
                    </div>

                    <ul>
                        {[
                            "Warranty and post-warranty servicing of pressure vehicles.",
                            "Diagnostics and repair of water recovery systems and filters.",
                            "Maintenance and repair of telescopic arms and high-pressure hoses.",
                            "Software and control system updates for vehicles.",
                            "Availability of original spare parts and components.",
                            "Operator training in vehicle operation and maintenance.",
                        ].map((text, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ x: 100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true, amount: 0.7 }}
                                transition={{ duration: 0.6, delay: idx * 0.25 }}
                                style={{ listStyle: 'none' }}
                            >
                                <ListElementCard text={text} key={idx} />
                            </motion.div>
                        ))}
                    </ul>

                    <p className="mt-20 md:mt-32 text-base md:text-2xl text-center">
                        Our service guarantees prompt response and professional support, minimizing the risk of failures and downtime in the operation of pressure vehicles.
                    </p>
                </section>
            </>
        ),
    },
    summary: {
        summaryPL: (
            <p className="text-center md:text-2xl text-base">
                <span className="font-extrabold">ELSE</span> zapewnia kompleksowy serwis pojazdów do czyszczenia kanalizacji, łącząc wieloletnie doświadczenie z nowoczesnym zapleczem technicznym. Nasze usługi gwarantują niezawodność i długowieczność specjalistycznych pojazdów ciśnieniowych, spełniając najwyższe standardy branżowe.
            </p>
        ),
        summaryENG: (
            <p className="text-center md:text-2xl text-base">
                <span className="font-extrabold">ELSE</span> delivers expert servicing for high-pressure sewer cleaning vehicles, ensuring optimal performance and compliance with industry standards. Our dedicated team leverages advanced technology and extensive experience to maintain the efficiency and longevity of your specialized equipment.
            </p>
        ),
    },
}