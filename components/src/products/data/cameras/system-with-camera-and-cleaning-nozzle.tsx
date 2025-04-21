import {ProductItem} from "../../../types/ProductItem";
import {CamerasForSewageInspectionCategory} from "../categories";
import sysWithCamAndCleaningNozzle01 from "../../../../../assets/images/products/cameras/system_with_camera_and_cleaning_nozzle_01.webp";
import sysWithCamAndCleaningNozzle02 from "../../../../../assets/images/products/cameras/system_with_camera_and_cleaning_nozzle_02.webp";
import sysWithCamAndCleaningNozzle03 from "../../../../../assets/images/products/cameras/system_with_camera_and_cleaning_nozzle_03.webp";
import sysWithCamAndCleaningNozzle04 from "../../../../../assets/images/products/cameras/system_with_camera_and_cleaning_nozzle_04.webp";
import {CamerasTags} from "../tags/cameras-tags";

export const SystemWithCameraAndCleaningNozzle: ProductItem = {
    name: {
        namePL: "System z kamerą oraz dyszą czyszczącą",
        nameENG: "System with camera and cleaning nozzle",
    },
    href: "/products/water-sewage/cameras/system-with-camera-and-cleaning-nozzle",
    images: [
        sysWithCamAndCleaningNozzle01,
        sysWithCamAndCleaningNozzle02,
        sysWithCamAndCleaningNozzle03,
        sysWithCamAndCleaningNozzle04,
    ],
    description: {
        textPL: "System z kamerą oraz dyszą czyszczącą to wszechstronne rozwiązanie do efektywnego udrażniania przyłączy oraz czyszczenia kanałów głównych. Z jego wieloma funkcjami pomiarowymi, łatwością obsługi oraz elastyczną konfiguracją, stanowi on wszechstronne rozwiązanie do inspekcji sieci wod-kan.",
        textENG: "The System with Camera and Cleaning Nozzle is a versatile solution for efficient clearing of laterals and cleaning of mainline sewers. With its multiple measurement functions, ease of use, and flexible configuration, it provides a comprehensive solution for inspecting water and sewage networks.",
    },
    detailedDescription: {
        descriptionPL: (
            <>
                <b>Główne cechy:</b>

                <ul>
                    <li>
                        <strong>Zasięg czyszczenia: </strong>
                        Nasz system zapewnia wyjątkowo skuteczne czyszczenie przyłączy o dalekim zasięgu.
                    </li>
                    <li>
                        <strong>Wszechstronność pomiarów: </strong>
                        System wyposażony jest w niezbędne, zaawansowane funkcje pomiarowe, umożliwiające inspekcje
                        sieci.
                    </li>
                    <li>
                        <strong>Elastyczna konfiguracja: </strong>
                        Dzięki modułowej konstrukcji, system można łatwo dostosować oraz rozbudować do indywidualnych
                        potrzeb.
                    </li>
                    <li>
                        <strong>Łatwość użytkowania: </strong>
                        Szybkie przesyłanie wyników inspekcji do klienta, dzięki intuicyjnemu interfejsowi użytkownika.
                    </li>
                    <li>
                        <strong>Szybka wymiana kół: </strong>
                        System umożliwia szybką wymianę kół bez użycia narzędzi, co znacznie przyśpiesza dostosowanie
                        kamery do warunków inspekcji.
                    </li>
                    <li>
                        <strong>Przyjazny dla użytkownika: </strong>
                        System zaprojektowany do obsługi przez jedną osobę.
                    </li>
                </ul>
            </>
        ),
        descriptionENG: (
            <>
                <b>Main features:</b>

                <ul>
                    <li>
                        <strong>Cleaning Range: </strong>
                        Our system provides exceptionally effective long-range cleaning of laterals.
                    </li>
                    <li>
                        <strong>Measurement Versatility: </strong>
                        Equipped with essential and advanced measurement functions for comprehensive network
                        inspections.
                    </li>
                    <li>
                        <strong>Flexible Configuration: </strong>
                        Thanks to its modular design, the system can be easily adapted and expanded to meet individual
                        requirements.
                    </li>
                    <li>
                        <strong>Ease of Use: </strong>
                        Quick inspection result transmission to clients via an intuitive user interface.
                    </li>
                    <li>
                        <strong>Fast Wheel Exchange: </strong>
                        Tool-free quick wheel replacement allows for rapid adaptation of the camera to inspection
                        conditions.
                    </li>
                    <li>
                        <strong>User-Friendly: </strong>
                        Designed for single-operator use.
                    </li>
                </ul>
            </>
        ),
    },
    manufacturers: [],
    category: [CamerasForSewageInspectionCategory],
    tags: [
        CamerasTags.TransmitterForLocationTag,
        CamerasTags.TrolleyAssistantTag,
        CamerasTags.DN150Tag,
        CamerasTags.GeoSenseTag,
        CamerasTags.CamerasForSewageInspectionTag,
        CamerasTags.SystemWithCameraAndCleaningNozzleTag,
        CamerasTags.SpecializedChassisForVehiclesTag,
        CamerasTags.HDSystemsTag,
        CamerasTags.PipeRunMeasurementInMainSewerSystemsTag,
        CamerasTags.InspectionSystemForLateralPipesTag,
        CamerasTags.ExplosiveProofInspectionSystemsTag,
        CamerasTags.ChassisMountedSystemsTag,
        CamerasTags.SelfPropelledTrolleysTag,
    ],
}