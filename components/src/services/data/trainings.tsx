import {Service} from "../../types/Service";
import trainingsHeroImg from "../../../../assets/images/hero/trainingHero01.jpg";

export const Trainings: Service = {
    name: {
        namePL: "Szkolenia",
        nameENG: "Trainings",
    },
    href: "/services/trainings",
    heroImage: trainingsHeroImg,
    description: {
        textPL: "W ELSE oferujemy kompleksowe szkolenia z obsługi naszych specjalistycznych urządzeń i systemów dla sieci wodno-kanalizacyjnych. Nasze szkolenia są dostosowane do indywidualnych potrzeb klienta i prowadzone przez doświadczonych specjalistów, co zapewnia efektywne wdrożenie i użytkowanie oferowanych produktów.",
        textENG: "At ELSE, we provide comprehensive training programs focused on the operation of our specialized equipment and systems designed for water and sewage network management. Our training sessions are tailored to meet the specific needs of each client and are conducted by experienced professionals, ensuring effective implementation and utilization of our products..",
    },
}