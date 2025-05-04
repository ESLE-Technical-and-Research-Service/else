import {ProductItem} from "../../../types";
import {CamerasForSewageInspectionCategory} from "../categories";
import scanners360Panoramo01 from "../../../../../assets/images/products/cameras/scanners_360_01.webp";
import scanners360Panoramo02 from "../../../../../assets/images/products/cameras/scanners_360_02.webp";
import scanners360Panoramo03 from "../../../../../assets/images/products/cameras/scanners_360_03.webp";
import scanners360Panoramo04 from "../../../../../assets/images/products/cameras/scanners_360_04.webp";
import scanners360Panoramo05 from "../../../../../assets/images/products/cameras/scanners_360_05.webp";
import scanners360Panoramo06 from "../../../../../assets/images/products/cameras/scanners_360_06.webp";

import {CamerasTags} from "../tags";
import {IBAK} from "../manufacturers/IBAK";

export const Panoramo4KScannersForMainlineSewer: ProductItem = {
    name: {
        namePL: "Skanery 360° Panorama 4K do kanałów głównych",
        nameENG: "360° Panorama 4K scanners for mainline sewage",
    },
    href: "/products/water-sewage/cameras/360-panoramo-4k-scanners-for-mainline-sewer",
    images: [
        scanners360Panoramo01,
        scanners360Panoramo02,
        scanners360Panoramo03,
        scanners360Panoramo04,
        scanners360Panoramo05,
        scanners360Panoramo06,
    ],
    description: {
        textPL: "Skanery PANORAMO 4K umożliwiają trójwymiarowe obrazowanie kanałów w ultra wysokiej rozdzielczości. Zapewniają szybki, pełen widok wnętrza kanału oraz dokładne pomiary spadków, średnicy i uszkodzeń. Z łatwością obsługiwane przez jedną osobę, nasze skanery to kompleksowe, modułowe rozwiązanie dopasowane do indywidualnych potrzeb użytkownika. Skontaktuj się z nami, aby dowiedzieć się więcej",
        textENG: "PANORAMO 4K scanners enable three-dimensional imaging of sewer pipes in ultra-high resolution. They provide a fast, complete view of the pipe interior along with precise measurements of slopes, diameter, and defects. Easily operated by a single person, our scanners offer a comprehensive, modular solution tailored to individual user needs. Contact us to learn more."
    },
    detailedDescription: {
        descriptionPL: (
            <>
                <h2>
                    <strong>Główne cechy:</strong>
                </h2>

                <ul>
                    <li>
                        <strong>Skanery 360° PANORAMO 4K do kanałów głównych: </strong>
                        Przedstawiamy innowacyjne systemy do trójwymiarowego skanowania kanału głównego w jakości 4K.
                    </li>
                    <li>
                        <strong>Widok 360°: </strong>
                        System oferuje inspekcję w kanałach o dowolnej średnicy od DN150 wzwyż, z trójwymiarowym
                        widokiem wnętrza kanału w ultra wysokiej rozdzielczości.
                    </li>
                    <li>
                        <strong>Szybkość i wydajność: </strong>
                        Duża prędkość jazdy wózka pozwala na uzyskanie pełnego widoku wnętrza kanału w krótszym czasie
                        niż tradycyjna kamera.
                    </li>
                    <li>
                        <strong>Elastyczność i komfort: </strong>
                        Dzięki modułowej konstrukcji, system można konfigurować w zależności od indywidualnych potrzeb.
                    </li>
                    <li>
                        <strong>Wszechstronne funkcje pomiarowe: </strong>
                        Dzięki zaawansowanym funkcjom, skaner dokonuje precyzyjnych pomiarów spadków, średnicy,
                        uszkodzeń, temperatury oraz pełnej analizy profilu kanału.
                    </li>
                    <li>
                        <strong>Kompleksowe rozwiązanie: </strong>
                        Pełna oferta produktów obejmuje urządzenia i oprogramowanie pochodzące z jednego źródła.
                    </li>
                    <li>
                        <strong>Prosta obsługa: </strong>
                        Intuicyjny interfejs umożliwia szybkie przesyłanie wyników inspekcji do klienta oraz
                        automatyczne wykrywanie i analizę uszkodzeń dzięki systemowi AI (sztuczna inteligencja).
                    </li>
                    <li>
                        <strong>Komfort pracy: </strong>
                        Zaprojektowany do obsługi przez jedną osobę, gwarantuje wygodę użytkowania.
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
                        <strong>360° PANORAMO 4K Scanners for Mainline Sewers: </strong>
                        Introducing innovative systems for three-dimensional 4K-quality scanning of mainline sewer
                        pipes.
                    </li>
                    <li>
                        <strong>360° View: </strong>
                        The system enables inspections in pipes with any diameter starting from DN150, providing a 3D
                        view of the pipe interior in ultra-high resolution.
                    </li>
                    <li>
                        <strong>Speed and Efficiency: </strong>
                        High crawler speed allows for full interior visualization in less time than traditional cameras.
                    </li>
                    <li>
                        <strong>Flexibility and Comfort: </strong>
                        Thanks to its modular design, the system can be configured according to individual requirements.
                    </li>
                    <li>
                        <strong>Comprehensive Measurement Functions: </strong>
                        Advanced features enable precise measurements of slope, diameter, damage, temperature, and full
                        pipe profile analysis.
                    </li>
                    <li>
                        <strong>Complete Solution: </strong>
                        The full product offering includes hardware and software from a single source.
                    </li>
                    <li>
                        <strong>Easy Operation: </strong>
                        An intuitive interface allows for quick inspection result transmission and automatic damage
                        detection and analysis using AI (artificial intelligence).
                    </li>
                    <li>
                        <strong>Work Comfort: </strong>
                        Designed for single-operator use, the system ensures maximum user convenience.
                    </li>
                </ul>
            </>
        ),
    },
    manufacturers: [IBAK],
    category: [CamerasForSewageInspectionCategory],
    tags: [
        CamerasTags.DN150Tag,
        CamerasTags.CamerasForSewageInspectionTag,
        CamerasTags.PanoramoTag,
        CamerasTags.Scanners360PanoramoTag,
        CamerasTags.SpecializedChassisForVehiclesTag,
        CamerasTags.Systems4KTag,
        CamerasTags.PipeRunMeasurementInMainSewerSystemsTag,
        CamerasTags.ExplosiveProofInspectionSystemsTag,
        CamerasTags.ChassisMountedSystemsTag,
        CamerasTags.AITag,
    ],
}