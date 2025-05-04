import {ProductItem} from "../../../types";
import {MultipurposeVehiclesForPressureSewerCleaningCategory} from "../categories";
import {PressureVehiclesTags} from "../tags";
import compactHiPressCleaningSysImg01
    from "../../../../../assets/images/products/pressure-vehicles/compact_high_pressure_cleaning_sys_01.webp";
import compactHiPressCleaningSysImg02
    from "../../../../../assets/images/products/pressure-vehicles/compact_high_pressure_cleaning_sys_02.webp";
import compactHiPressCleaningSysImg03
    from "../../../../../assets/images/products/pressure-vehicles/compact_high_pressure_cleaning_sys_03.webp";
import compactHiPressCleaningSysImg04
    from "../../../../../assets/images/products/pressure-vehicles/compact_high_pressure_cleaning_sys_04.webp";
import compactHiPressCleaningSysImg05
    from "../../../../../assets/images/products/pressure-vehicles/compact_high_pressure_cleaning_sys_05.webp";
import compactHiPressCleaningSysImg06
    from "../../../../../assets/images/products/pressure-vehicles/compact_high_pressure_cleaning_sys_06.webp";

export const CompactHighPressureCleaningSystems: ProductItem = {
    name: {
        namePL: "Kompaktowe wysokociśnieniowe systemy czyszczące (Feierabend & Fock GmbH)",
        nameENG: "Compact high-pressure cleaning systems (Feierabend & Fock GmbH)",
    },
    href: "/products/water-sewage/pressure-vehicles/compact-high-pressure-cleaning-systems",
    images: [
        compactHiPressCleaningSysImg03,
        compactHiPressCleaningSysImg01,
        compactHiPressCleaningSysImg02,
        compactHiPressCleaningSysImg04,
        compactHiPressCleaningSysImg05,
        compactHiPressCleaningSysImg06
    ],
    description: {
        textPL: "Nasze pojazdy są dostosowywane do indywidualnych potrzeb klienta.\n" +
            "    Dostosowanie opiera się na modułowych komponentach.\n" +
            "    Pojazdy oferują lekką i użytkownikowi przyjazną konstrukcję.\n" +
            "    Wnętrze jest wodoodporne.\n" +
            "    Moduły wysokociśnieniowe gwarantują trwałość.\n" +
            "    Napęd z silnika pojazdu zapewnia cichą i ekonomiczną pracę.\n" +
            "\n",
        textENG: "Our vehicles are customized to meet individual customer needs.\n" +
            "The customization is based on modular components.\n" +
            "The vehicles feature a lightweight and user-friendly design.\n" +
            "The interior is waterproof.\n" +
            "High-pressure modules ensure durability.\n" +
            "Drive powered by the vehicle's engine guarantees quiet and economical operation.\n",
    },
    detailedDescription: {
        descriptionPL: (
            <>
                <p>
                    Pojazdy są budowane w oparciu o nasze główne komponenty modułowe, według Twoich wymagań i potrzeb technicznych. Zabudowa skupia się na dobrze zorganizowanej, lekkiej, przyjaznej dla użytkownika konstrukcji.
                </p>

                <p>
                    Nasze moduły wysokociśnieniowe są zbudowane na ramie, którą można łatwo rozszerzyć. Dzięki wodoodpornemu i izolowanemu wykończeniu wnętrza pojazdu, przestrzeń jest łatwa w utrzymaniu i trwała. Napęd dla moduły pochodzi z silnika pojazdu, dzięki temu pracuje cicho i ekonomicznie.
                </p>

                <p>
                    Ważnym czynnikiem są wyjątkowa łatwość eksploatacji i naprawy, a także niewielka masa montażowa naszych wbudowanych systemów wysokociśnieniowych.
                </p>
            </>
        ),
        descriptionENG: (
            <>
                <p>
                    The vehicles are built based on our core modular components, tailored to your requirements and technical needs. The body design focuses on a well-organized, lightweight, and user-friendly structure.
                </p>

                <p>
                    Our high-pressure modules are built on a frame that can be easily extended. Thanks to the waterproof and insulated interior finish of the vehicle, the space is easy to maintain and durable. The module is powered by the vehicle’s engine, allowing it to operate quietly and efficiently.
                </p>

                <p>
                    An important factor is the exceptional ease of use and maintenance, as well as the low installation weight of our built-in high-pressure systems.
                </p>
            </>
        ),
    },
    manufacturers: [],
    category: [MultipurposeVehiclesForPressureSewerCleaningCategory],
    tags: [
        PressureVehiclesTags.CustomOrderTag,
        PressureVehiclesTags.EaseOfRepairTag,
        PressureVehiclesTags.EnvironmentallyFriendlyOperationTag,
        PressureVehiclesTags.FriendlyConstructionTag,
        PressureVehiclesTags.IsolationTag,
        PressureVehiclesTags.HighPressureModulesTag,
        PressureVehiclesTags.ModularDesignTag,
        PressureVehiclesTags.LowInstallationWeightTag,
        PressureVehiclesTags.QuietDriveTag,
        PressureVehiclesTags.WaterproofFinishTag,
    ],
}