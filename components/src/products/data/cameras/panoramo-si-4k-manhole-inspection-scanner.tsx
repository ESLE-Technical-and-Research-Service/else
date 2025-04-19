import panoramoSi4KScanner01 from "../../../../../assets/images/products/cameras/panoramo_si_4k_manhole_scanner_01.webp";
import panoramoSi4KScanner02 from "../../../../../assets/images/products/cameras/panoramo_si_4k_manhole_scanner_02.webp";
import panoramoSi4KScanner03 from "../../../../../assets/images/products/cameras/panoramo_si_4k_manhole_scanner_03.webp";
import panoramoSi4KScanner04 from "../../../../../assets/images/products/cameras/panoramo_si_4k_manhole_scanner_04.webp";
import panoramoSi4KScanner05 from "../../../../../assets/images/products/cameras/panoramo_si_4k_manhole_scanner_05.webp";
import panoramoSi4KScanner06 from "../../../../../assets/images/products/cameras/panoramo_si_4k_manhole_scanner_06.webp";

import {CamerasTags} from "../tags/cameras-tags";
import {CamerasForSewageInspectionCategory} from "../categories";
import {IBAK} from "../manufacturers/IBAK";

export const PanoramoSi4kManholeInspectionScanner = {
    name: {
        namePL: "Skanery 360° PANORAMO SI 4K do kanałów głównych",
        nameENG: "360° PANORAMO SI 4K scanners for mainline sewage",
    },
    href: "/products/water-sewage/cameras/360-panoramo-si-4k-manhole-inspection-scanner",
    images: [
        panoramoSi4KScanner06,
        panoramoSi4KScanner05,
        panoramoSi4KScanner04,
        panoramoSi4KScanner03,
        panoramoSi4KScanner02,
        panoramoSi4KScanner01,
    ],
    description: {
        textPL: "SSkanery PANORAMO 4K umożliwiają trójwymiarowe obrazowanie kanałów w ultra wysokiej rozdzielczości. Zapewniają szybki, pełen widok wnętrza kanału oraz dokładne pomiary spadków, średnicy i uszkodzeń. Z łatwością obsługiwane przez jedną osobę, nasze skanery to kompleksowe, modułowe rozwiązanie dopasowane do indywidualnych potrzeb użytkownika.",
        textENG: "PANORAMO 4K scanners enable three-dimensional imaging of pipelines in ultra-high resolution. They provide a fast, complete view of the inside of the pipeline along with accurate measurements of gradients, diameters, and defects. Easily operated by a single person, our scanners are a comprehensive, modular solution tailored to individual user needs."
    },
    detailedDescription: {
        descriptionPL: (
            <p>Zdobądź pełny, trójwymiarowy obraz Twoich studzienek dzięki technologii 4K</p>
        ),
        descriptionENG: (
            <p>Get full, three-dimensional images of your manholes thanks to 4K technology</p>
        ),
    },
    manufacturers: [IBAK],
    category: [CamerasForSewageInspectionCategory],
    tags: [
        CamerasTags.DN150Tag,
        CamerasTags.CamerasForSewageInspectionTag,
        CamerasTags.PanoramoTag,
        CamerasTags.Scanners360Panoramo4KTag,
        CamerasTags.SpecializedChassisForVehiclesTag,
        CamerasTags.Systems4KTag,
        CamerasTags.MainlineSewerInspectionSystemsTag,
        CamerasTags.ExplosiveProofInspectionSystemsTag,
        CamerasTags.ChassisMountedSystemsTag,
        CamerasTags.AITag,
    ],
}