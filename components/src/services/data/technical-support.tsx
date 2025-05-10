import {Service} from "../../types/Service";
import technicalSupportHeroImg from "../../../../assets/images/hero/technicalSupportHero01.jpg";

export const TechnicalSupport: Service = {
    name: {
        namePL: "Wsparcie techniczne",
        nameENG: "Technical support",
    },
    href: "/services/tech-support",
    heroImage: technicalSupportHeroImg,
    description: {
        textPL: "Nasz zespół Wsparcia Technicznego zapewnia kompleksową pomoc w zakresie obsługi systemów i aplikacji, gwarantując ich niezawodne działanie. Dzięki szybkiej reakcji i skutecznym rozwiązaniom minimalizujemy przestoje oraz zwiększamy efektywność operacyjną.",
        textENG: "Our Technical Support team is dedicated to ensuring seamless operation of your systems and applications. We provide prompt assistance to address technical issues, minimizing downtime and enhancing productivity.",
    },
}