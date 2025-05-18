import {Service} from "../../types/Service";
import trainingsHeroImg from "../../../../assets/images/hero/trainingHero01.webp";
import trainingsImg01 from "../../../../assets/images/services/training_01.jpg";
import trainingsImg02 from "../../../../assets/images/services/training_02.jpg";
import trainingsImg03 from "../../../../assets/images/products/cameras/compact_portable_sys_07.webp";
import AnimatedDivider from "../../common/dividers/animated-divider";
import { motion } from "framer-motion";
import ListElementCard from "../../common/cards/list-element-card";

export const Trainings: Service = {
    name: {
        namePL: "Szkolenia",
        nameENG: "Trainings",
    },
    title: {
        titlePL: "Szkolenia z obsługi i konserwacji systemów inspekcyjnych",
        titleENG: "Training in Operation and Maintenance of Inspection Systems"
    },
    href: "/services/trainings",
    heroImage: trainingsHeroImg,
    images: [
        trainingsImg01,
        trainingsImg02,
        trainingsImg03,
    ],
    description: {
        textPL: "Oferujemy kompleksowe szkolenia z obsługi naszych specjalistycznych urządzeń i systemów dla sieci wodno-kanalizacyjnych. Nasze szkolenia są dostosowane do indywidualnych potrzeb klienta i prowadzone przez doświadczonych specjalistów, co zapewnia efektywne wdrożenie i użytkowanie oferowanych produktów.",
        textENG: "We provide comprehensive training programs focused on the operation of our specialized equipment and systems designed for water and sewage network management. Our training sessions are tailored to meet the specific needs of each client and are conducted by experienced professionals, ensuring effective implementation and utilization of our products..",
    },
    detailedDescription: {
        textPL: (
            <section>
                <p className="text-center md:text-2xl text-base leading-10">
                    <span className="font-extrabold">ELSE</span> oferuje kompleksowe szkolenia z zakresu obsługi i konserwacji specjalistycznych urządzeń oraz
                    systemów do zarządzania sieciami wodno-kanalizacyjnymi. Nasze programy szkoleniowe są dostosowane do
                    indywidualnych potrzeb klientów i prowadzone przez doświadczonych specjalistów, co zapewnia
                    efektywne wdrożenie i wykorzystanie naszych produktów.
                </p>

                <div className="flex flex-col items-center mt-32 font-bold">
                    <h3 className="text-center text-4xl mb-3">Zakres naszych szkoleń obejmuje:</h3>
                    <AnimatedDivider delay={1}/>
                </div>

                <ul>
                    {[
                        "Praktyczne szkolenia z obsługi kamer inspekcyjnych, pojazdów ciśnieniowych oraz systemów do\n" +
                        "                        regulacji włazów.",
                        "Konserwację i diagnostykę urządzeń w warunkach zbliżonych do codziennej eksploatacji.",
                        "Indywidualne dostosowanie programu szkoleniowego do specyfiki działalności klienta.",
                        "Szkolenia prowadzone w siedzibie klienta lub w naszym centrum szkoleniowym.",
                        "Wsparcie poszkoleniowe oraz dostęp do materiałów edukacyjnych.",
                    ].map((text, idx) => (
                        <motion.li
                            key={idx}
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.7 }}
                            transition={{ duration: 0.6, delay: idx * 0.25 }}
                            style={{ listStyle: 'none' }}
                        >
                            <ListElementCard text={text} key={idx} />
                        </motion.li>
                    ))}
                </ul>

                <p className="mt-20 md:mt-32 text-base md:text-2xl text-center leading-10">
                    Dzięki naszym szkoleniom pracownicy zdobywają nie tylko wiedzę teoretyczną, ale przede wszystkim
                    praktyczne umiejętności, które przekładają się na efektywne wykorzystanie urządzeń i systemów w
                    codziennej pracy.
                </p>
            </section>
        ),
        textENG: (
            <>
                <section>
                    <p className="text-center md:text-2xl text-base leading-10">
                        <span className="font-extrabold">ELSE</span> offers comprehensive training programs focused on the operation and maintenance of
                        specialized equipment and systems for water and sewage network management. Our training sessions
                        are tailored to meet the specific needs of our clients and are conducted by experienced
                        professionals, ensuring effective implementation and utilization of our products.
                    </p>

                    <div className="flex flex-col items-center mt-32 font-bold">
                        <h3 className="text-center text-4xl mb-3">Our training programs include:</h3>
                        <AnimatedDivider delay={1}/>
                    </div>

                    <ul>
                        {[
                            "Practical training on the operation of inspection cameras, pressure vehicles, and manhole\n" +
                            "                            adjustment systems.",
                            "Maintenance and diagnostics of equipment under conditions similar to daily operations.",
                            "Customized training programs adapted to the client's specific activities.",
                            "Training sessions conducted at the client's premises or at our training center.",
                            "Post-training support and access to educational materials.",
                        ].map((text, idx) => (
                            <motion.li
                                key={idx}
                                initial={{ x: 100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true, amount: 0.7 }}
                                transition={{ duration: 0.6, delay: idx * 0.25 }}
                                style={{ listStyle: 'none' }}
                            >
                                <ListElementCard text={text} key={idx} />
                            </motion.li>
                        ))}
                    </ul>

                    <p className="mt-20 md:mt-32 text-base md:text-2xl text-center leading-10">
                        Through our training programs, participants gain not only theoretical knowledge but, more
                        importantly, practical skills that translate into the effective use of equipment and systems in
                        their daily work.
                    </p>
                </section>
            </>
        ),
    },
    summary: {
        summaryPL: (
            <p className="text-center md:text-2xl text-base leading-10">
                Nasze programy szkoleniowe mają na celu dostarczenie uczestnikom kompleksowej wiedzy i praktycznych umiejętności niezbędnych do efektywnej obsługi i konserwacji systemów inspekcyjnych. Dzięki zajęciom praktycznym i instruktażowi prowadzonemu przez ekspertów, uczestnicy zyskują pewność w stosowaniu najlepszych praktyk w rzeczywistych sytuacjach. Po pomyślnym ukończeniu szkolenia uczestnicy otrzymują certyfikat potwierdzający ich kompetencje, co zwiększa ich wiarygodność zawodową i wspiera rozwój kariery.
            </p>
        ),
        summaryENG: (
            <p className="text-center md:text-2xl text-base leading-10">
                Our training programs are designed to equip participants with comprehensive knowledge and practical skills essential for the effective operation and maintenance of inspection systems. Through hands-on sessions and expert-led instruction, attendees gain the confidence to apply best practices in real-world scenarios. Upon successful completion, participants receive a certification that validates their competencies, enhancing their professional credibility and supporting career advancement.
            </p>
        ),
    },
}