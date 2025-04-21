import {ProductItem} from "../../../types/ProductItem";
import leakTestingSystem01 from "../../../../../assets/images/products/cameras/leak_testing_system_01.webp";
import leakTestingSystem02 from "../../../../../assets/images/products/cameras/leak_testing_system_02.webp";
import leakTestingSystem03 from "../../../../../assets/images/products/cameras/leak_testing_system_03.webp";
import leakTestingSystem04 from "../../../../../assets/images/products/cameras/leak_testing_system_04.webp";
import leakTestingSystem05 from "../../../../../assets/images/products/cameras/leak_testing_system_05.webp";
import leakTestingSystem06 from "../../../../../assets/images/products/cameras/leak_testing_system_06.webp";

import {CamerasTags} from "../tags/cameras-tags";
import {CamerasForSewageInspectionCategory} from "../categories";

export const LeakTestingSystem: ProductItem = {
    name: {
        namePL: "System do sprawdzania szczelności",
        nameENG: "Leak testing system",
    },
    href: "/products/water-sewage/cameras/leak-testing-system",
    images: [
        leakTestingSystem01,
        leakTestingSystem02,
        leakTestingSystem03,
        leakTestingSystem04,
        leakTestingSystem05,
        leakTestingSystem06,
    ],
    description: {
        textPL: "Nasz system do sprawdzania szczelności to wszechstronne rozwiązanie do efektywnej kontroli nowych obiektów budowlanych. Wyposażony w zaawansowane funkcje pomiarowe oraz system wymiany kół bez użycia narzędzi. Intuicyjne oprogramowanie pozwala na szybkie przesyłanie wyników do klienta. Zaprojektowany został z myślą o obsłudze przez jedną osobę.",
        textENG: "Our leak testing system is a versatile solution for efficient inspection of new construction structures. It is equipped with advanced measurement functions and a tool-free wheel exchange system. The intuitive software allows for quick transmission of inspection results to the client. Designed for single-person operation.",
    },
    detailedDescription: {
        descriptionPL: (
            <>
                <h2>
                    <strong>Główne cechy:</strong>
                </h2>

                <ul>
                    <li>
                        <strong>System do sprawdzania szczelności:</strong>
                        Wszechstronne rozwiązanie do kontroli nowych obiektów budowlanych, wykorzystujące technologię HD, zapewniające precyzyjne pomiary i wygodę użytkowania.
                    </li>
                    <li>
                        <strong>Skuteczność:</strong>
                        Został zaprojektowany specjalnie do kontroli szczelności kanałów.
                    </li>
                    <li>
                        <strong>Wszechstronność:</strong>
                        Wyposażony w wiele funkcji pomiarowych, nasz system zapewnia pełne wsparcie w prowadzeniu inspekcji.
                    </li>
                    <li>
                        <strong>Elastyczność:</strong>
                        Dzięki modułowej konstrukcji, system można dostosować do indywidualnych potrzeb.
                    </li>
                    <li>
                        <strong>Kompleksowość:</strong>
                        Oferujemy rozwiązanie obejmujące urządzenia i oprogramowanie pochodzące z jednego źródła.
                    </li>
                    <li>
                        <strong>Szybkość przesyłania wyników:</strong>
                        Interfejs systemu umożliwia szybkie i łatwe przesyłanie wyników do klienta.
                    </li>
                    <li>
                        <strong>Wymiana kół:</strong>
                        System szybkiej wymiany kół bez użycia narzędzi, zwiększa efektywność pracy.
                    </li>
                    <li>
                        <strong>Przyjazny dla użytkownika:</strong>
                        System został zaprojektowany z myślą o obsłudze przez jedną osobę.
                    </li>
                </ul>
            </>

        ),
        descriptionENG: (
            <>
                <h2>
                    <strong>Main features:</strong>
                </h2>

                <ul>
                    <li>
                        <strong>Leak Testing System:</strong>
                        A versatile solution for inspecting new construction objects, utilizing HD technology to provide precise measurements and user convenience.
                    </li>
                    <li>
                        <strong>Effectiveness:</strong>
                        Specifically designed for leak testing of pipes.
                    </li>
                    <li>
                        <strong>Versatility:</strong>
                        Equipped with various measurement functions, our system provides full support for conducting inspections.
                    </li>
                    <li>
                        <strong>Flexibility:</strong>
                        Thanks to its modular design, the system can be customized to individual needs.
                    </li>
                    <li>
                        <strong>Comprehensiveness:</strong>
                        We offer a solution that includes both hardware and software from a single source.
                    </li>
                    <li>
                        <strong>Fast Result Transmission:</strong>
                        The system’s interface allows for quick and easy transmission of inspection results to the client.
                    </li>
                    <li>
                        <strong>Wheel Exchange:</strong>
                        A quick wheel exchange system that doesn't require tools, enhancing work efficiency.
                    </li>
                    <li>
                        <strong>User-Friendly:</strong>
                        The system is designed for operation by a single person.
                    </li>
                </ul>
            </>
        ),
    },
    manufacturers: [],
    category: [CamerasForSewageInspectionCategory],
    tags: [
        CamerasTags.TransmitterForSewageTag,
        CamerasTags.TrolleyAssistantTag,
        CamerasTags.CamerasForSewageInspectionTag,
        CamerasTags.SpecializedChassisForVehiclesTag,
        CamerasTags.LeakTestingSystemTag,
        CamerasTags.SelfPropelledTrolleysTag,
    ],
}