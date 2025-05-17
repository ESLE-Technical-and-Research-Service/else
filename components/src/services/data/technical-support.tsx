import {Service} from "../../types/Service";
import technicalSupportHeroImg from "../../../../assets/images/hero/technicalSupportHero01.webp";

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
    images: [],
    description: {
        textPL: "Nasz zespół Wsparcia Technicznego zapewnia kompleksową pomoc w zakresie obsługi systemów i aplikacji, gwarantując ich niezawodne działanie. Dzięki szybkiej reakcji i skutecznym rozwiązaniom minimalizujemy przestoje oraz zwiększamy efektywność operacyjną.",
        textENG: "Our Technical Support team is dedicated to ensuring seamless operation of your systems and applications. We provide prompt assistance to address technical issues, minimizing downtime and enhancing productivity.",
    },
    detailedDescription: {
        textPL: (
            <>
                <section>
                    <h2>Wsparcie Techniczne</h2>
                    <p>
                        ELSE oferuje kompleksowe wsparcie techniczne, zapewniając niezawodne działanie i długowieczność
                        Twoich urządzeń. Nasz doświadczony zespół jest gotowy do pomocy w szerokim zakresie potrzeb
                        technicznych, minimalizując przestoje i zapewniając efektywną pracę systemów.
                    </p>
                    <h3>Nasze usługi obejmują:</h3>
                    <ul>
                        <li>Diagnostykę i rozwiązywanie problemów z urządzeniami.</li>
                        <li>Aktualizacje oprogramowania i pomoc w konfiguracji.</li>
                        <li>Doradztwo w zakresie obsługi i konserwacji sprzętu.</li>
                        <li>Dostępność części zamiennych i komponentów.</li>
                        <li>Zdalne i stacjonarne konsultacje techniczne.</li>
                    </ul>
                    <p>
                        Dzięki zaangażowaniu w najwyższą jakość, zespół wsparcia technicznego ELSE zapewnia klientom
                        terminowe i skuteczne rozwiązania dostosowane do ich indywidualnych potrzeb.
                    </p>
                </section>
            </>
        ),
        textENG: (
            <>
                <section>
                    <h2>Technical Support</h2>
                    <p>
                        ELSE provides comprehensive technical support services to ensure the optimal performance and
                        longevity of your equipment. Our experienced team is dedicated to assisting clients with a wide
                        range of technical needs, ensuring minimal downtime and efficient operations.
                    </p>
                    <h3>Our Support Services Include:</h3>
                    <ul>
                        <li>Diagnosis and troubleshooting of equipment issues.</li>
                        <li>Software updates and configuration assistance.</li>
                        <li>Guidance on equipment operation and maintenance.</li>
                        <li>Provision of spare parts and replacement components.</li>
                        <li>Remote and on-site technical consultations.</li>
                    </ul>
                    <p>
                        With a commitment to excellence, ELSE&#39;s technical support team ensures that clients receive
                        timely and effective solutions tailored to their specific requirements.
                    </p>
                </section>
            </>
        )
    },
    summary: {
        summaryPL: (
            <></>
        ),
        summaryENG: (
            <></>
        ),
    },
}