import {Service} from "../../types/Service";
import camServiceHeroImg from "../../../../assets/images/products/cameras/system_with_camera_and_cleaning_nozzle_04.webp";

export const CameraService: Service = {
    name: {
        namePL: "Serwis kamer",
        nameENG: "Cameras service",
    },
    href: "/services/cam-service",
    heroImage: camServiceHeroImg,
    description: {
        textPL: "Serwis kamer oferowany przez firmę ELSE Technical and Research Service Co. Ltd Sp. z o.o. koncentruje się na kompleksowej obsłudze systemów inspekcji kanalizacji i sieci wodno-kanalizacyjnych. Dzięki wieloletniemu doświadczeniu (działalność od 1989 roku) oraz autoryzacji producenta IBAK, firma zapewnia wysoką jakość usług serwisowych.",
        textENG: "The camera service provided by ELSE Technical and Research Service Co. Ltd focuses on comprehensive maintenance and support of inspection systems for sewage and water networks. With decades of experience (operating since 1989) and official authorization from the manufacturer IBAK, the company ensures high-quality service.",
    },
}