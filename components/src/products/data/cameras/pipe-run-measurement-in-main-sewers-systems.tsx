import {ProductItem} from "../../../types/ProductItem";
import mainSewerInspSys01 from "../../../../../assets/images/products/cameras/main_sewer_insp_sys_01.webp";
import mainSewerInspSys02 from "../../../../../assets/images/products/cameras/main_sewer_insp_sys_02.webp";
import mainSewerInspSys03 from "../../../../../assets/images/products/cameras/main_sewer_insp_sys_03.webp";
import mainSewerInspSys04 from "../../../../../assets/images/products/cameras/main_sewer_insp_sys_04.webp";
import {CamerasForSewageInspectionCategory} from "../categories";
import {CamerasTags} from "../tags/cameras-tags";
import {IBAK} from "../manufacturers/IBAK";

export const PipeRunMeasurementInMainSewersSystems: ProductItem = {
    name: {
        namePL: "Systemy inspekcyjne w wersji do kanałów głównych",
        nameENG: "Pipe measurement in main sewers systems",
    },
    href: "/products/water-sewage/cameras/pipe-measurement-in-main-sewers-systems",
    images: [
        mainSewerInspSys01,
        mainSewerInspSys02,
        mainSewerInspSys03,
        mainSewerInspSys04,
    ],
    description: {
        textPL: "Prezentujemy nowoczesne systemy do inspekcji kanałów głównych w jakości HD. Wszechstronna i modułowa konstrukcja, umożliwia inspekcję kanałów o dowolnej średnicy od DN100. Nasze rozwiązania łączą w sobie precyzyjne funkcje pomiarowe, automatyczne sterowanie oświetleniem i ostrością, a także unikalny system ROTAX, który ułatwia orientację operatora w kanale. Oprogramowanie zapewnia łatwe przesyłanie wyników inspekcji. Dodatkowe funkcje, takie jak laserowy pomiar owalizacji kanału oraz automatyczne wykrywanie uszkodzeń poprzez pionierski system AI (sztuczna inteligencja), zwiększają efektywność systemu. Szybka wymiana kół bez użycia narzędzi oraz możliwość obsługi przez jedną osobę to kolejne atuty naszych produktów.",
        textENG: "We present modern HD-quality systems for mainline sewer inspection. Their versatile and modular design allows inspections of pipes with any diameter starting from DN100. Our solutions combine precise measurement functions, automatic light and focus control, as well as the unique ROTAX system that helps the operator maintain orientation inside the pipe. The software enables easy transfer of inspection results. Additional features, such as laser-based pipe ovality measurement and automatic damage detection using a pioneering AI system, further enhance the system’s efficiency. Quick tool-free wheel replacement and single-person operation are additional advantages of our products.",
    },
    detailedDescription: {
        descriptionPL: (
            <>
                <b>Główne cechy:</b>

                <ul>
                    <li><strong>Wszechstronność: </strong>Możliwość konfiguracji systemu do inspekcji dowolnej średnicy
                        od DN100 wzwyż.
                    </li>
                    <li><strong>Kompleksowe funkcje pomiarowe:</strong>Precyzyjne pomiary spadków, średnicy, uszkodzeń,
                        deformacji, temperatury oraz pełna analiza profilu kanału na całym jego odcinku.
                    </li>
                    <li><strong>Elastyczność: </strong>Modułowa konstrukcja pozwala łatwo dostosować system do
                        konkretnych potrzeb.
                    </li>
                    <li><strong>Kompleksowe rozwiązanie: </strong>Pełna oferta produktów obejmuje urządzenia i
                        oprogramowanie pochodzące z jednego źródła.
                    </li>
                    <li><strong>Łatwość użycia: </strong>Intuicyjny interfejs umożliwia szybkie przesyłanie wyników
                        inspekcji do klienta.
                    </li>
                    <li><strong>Sztuczna inteligencja AI: </strong>Pionierskie oprogramowanie wykrywające i analizujące
                        uszkodzenia AI (sztuczna inteligencja).
                    </li>
                    <li><strong>Komfort pracy: </strong>Zastosowano tempomat i asystenta prędkości jazdy wózka.</li>
                    <li><strong>Inteligentne sterowanie: </strong>System posiada funkcje automatycznego sterowania
                        oświetleniem oraz ostrością.
                    </li>
                    <li><strong>System ROTAX: </strong>Automatyczna korekta obrazu, horyzont w stałym miejscy dla łatwej
                        orientacji operatora. Aby zobaczyć konkretny punkt w kanale, nie trzeba wychylać główki kamery
                        osobno stopniowo w poziomie i pionie.
                    </li>
                    <li><strong>Lokalizacja kamery: </strong>System jest wyposażony w nadajnik umożliwiający lokalizację
                        kamery w kanale.
                    </li>
                    <li><strong>Szybka wymiana kół: </strong>Możliwość szybkiej wymiany kół bez użycia narzędzi.</li>
                    <li><strong>Przyjazny dla użytkownika: </strong>System został zaprojektowany z myślą o obsłudze
                        przez jedną osobę.
                    </li>
                </ul>
            </>
        ),
        descriptionENG: (
            <>
                <b>Main Features:</b>

                <ul>
                    <li>
                        <strong>Versatility: </strong>
                        The system can be configured for inspecting any diameter from DN100 upwards.
                    </li>
                    <li>
                        <strong>Comprehensive Measurement Functions: </strong>
                        Precise measurements of slopes, diameter, damage, deformation, temperature, and full channel
                        profile analysis along the entire section.
                    </li>
                    <li>
                        <strong>Flexibility: </strong>
                        Modular design allows for easy adaptation of the system to specific needs.
                    </li>
                    <li>
                        <strong>Comprehensive Solution: </strong>
                        Complete product offering includes devices and software from a single source.
                    </li>
                    <li>
                        <strong>Ease of Use: </strong>
                        Intuitive interface enables fast transfer of inspection results to the client.
                    </li>
                    <li>
                        <strong>Artificial Intelligence (AI): </strong>
                        Cutting-edge software for detecting and analyzing damage using AI.
                    </li>
                    <li>
                        <strong>Work Comfort: </strong>
                        Includes cruise control and speed assistant for the crawler.
                    </li>
                    <li>
                        <strong>Smart Control: </strong>
                        System features automatic light and focus control.
                    </li>
                    <li>
                        <strong>ROTAX System: </strong>
                        Automatic image correction keeps the horizon fixed for easier operator orientation. To view a
                        specific point in the pipe, the camera head doesn’t need to be manually tilted horizontally and
                        vertically step by step.
                    </li>
                    <li>
                        <strong>Camera Locator: </strong>
                        System includes a transmitter that enables camera localization in the pipe.
                    </li>
                    <li>
                        <strong>Quick Wheel Exchange: </strong>
                        Wheels can be quickly replaced without using any tools.
                    </li>
                    <li>
                        <strong>User-Friendly: </strong>
                        System is designed for single-operator use.
                    </li>
                </ul>
            </>

        ),
    },
    manufacturers: [IBAK],
    category: [CamerasForSewageInspectionCategory],
    tags: [
        CamerasTags.TransmitterForSewageTag,
        CamerasTags.TrolleyAssistantTag,
        CamerasTags.ContinuousPipeInspectionTag,
        CamerasTags.DN100Tag,
        CamerasTags.CamerasForSewageInspectionTag,
        CamerasTags.PanoramoTag,
        CamerasTags.RotaxTag,
        CamerasTags.SpecializedChassisForVehiclesTag,
        CamerasTags.HDSystemsTag,
        CamerasTags.MainlineSewerInspectionSystemsTag,
        CamerasTags.ExplosiveProofInspectionSystemsTag,
        CamerasTags.ChassisMountedSystemsTag,
        CamerasTags.AITag,
        CamerasTags.SelfPropelledTrolleysTag,
    ],
};