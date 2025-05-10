import {Service} from "../../types/Service";
import pressureVehiclesServiceHeroImg from "../../../../assets/images/hero/heroImage_01.webp"

export const PressureVehiclesService: Service = {
    name: {
        namePL: "Serwis samochodów ciśnieniowych",
        nameENG: "Pressure vehicles service",
    },
    href: "/services/pressure-vehicles",
    heroImage: pressureVehiclesServiceHeroImg,
    description: {
        textPL: "Specjalizujemy się w kompleksowej obsłudze systemów wysokociśnieniowych w pojazdach specjalistycznych, zapewniając ich bezpieczne i efektywne działanie zgodnie z obowiązującymi normami i przepisami.",
        textENG: "Our Pressure Vehicles Service specializes in the maintenance and optimization of high-pressure systems within specialized vehicles. We ensure that all pressure components operate safely and efficiently, adhering to industry standards and regulations.",
    },
}