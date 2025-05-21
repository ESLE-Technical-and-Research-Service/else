import {Language, ProductItem} from "../../../types";
import {MultipurposeVehiclesForPressureSewerCleaningCategory} from "../categories";
import {PressureVehiclesTags} from "../tags";
import sucVehForTransHazMatImg01
    from "../../../../../assets/images/products/pressure-vehicles/suction_veh_for_transp_haz_mat_01.webp";
import sucVehForTransHazMatImg02
    from "../../../../../assets/images/products/pressure-vehicles/suction_veh_for_transp_haz_mat_02.webp";
import sucVehForTransHazMatImg03
    from "../../../../../assets/images/products/pressure-vehicles/suction_veh_for_transp_haz_mat_03.webp";
import sucVehForTransHazMatImg04
    from "../../../../../assets/images/products/pressure-vehicles/suction_veh_for_transp_haz_mat_04.webp";
import sucVehForTransHazMatImg05
    from "../../../../../assets/images/products/pressure-vehicles/suction_veh_for_transp_haz_mat_05.webp";

export const SuctionVehiclesForTransportingHazadousMaterials: ProductItem = {
    name: {
        [Language.PL]: "Pojazdy ssące do przewozu materiałów niebezpiecznych",
        [Language.ENG]: "Suction vehicles for transporting hazardous materials",
    },
    href: "/products/water-sewage/pressure-vehicles/suction-vehicles-for-transporting-hazadous-materials",
    images: [
        sucVehForTransHazMatImg01,
        sucVehForTransHazMatImg02,
        sucVehForTransHazMatImg03,
        sucVehForTransHazMatImg04,
        sucVehForTransHazMatImg05,
    ],
    description: {
        [Language.PL]: "Pojazdy ssące do przewozu materiałów niebezpiecznych: pojazdy ssące, naczepy i przyczepy są dedykowane do transportu odpadów płynnych i substancji niebezpiecznych zgodnie z ADR. Wyposażone w zaawansowane systemy podciśnieniowe i wysokociśnieniowe oraz wielofunkcyjne ramię, gwarantują indywidualne dopasowanie do potrzeb.",
        [Language.ENG]: "Suction vehicles for transporting hazardous materials: suction vehicles, trailers, and semi-trailers are designed for transporting liquid waste and hazardous substances in compliance with ADR regulations. Equipped with advanced vacuum and high-pressure systems as well as a multifunctional arm, they ensure tailored solutions to meet specific needs.",
    },
    detailedDescription: {
        [Language.PL]: (
            <>
                <p>
                    Pojazdy ssące, naczepy i przyczepy produkowane są do odbioru i transportu odpadów płynnych oraz
                    substancji niebezpiecznych zgodnie z ADR. System podciśnieniowy i wysokociśnieniowy o różnej mocy
                    oraz wielofunkcyjne ramię, pozwalają na indywidualne dopasowanie pojazdu do potrzeb użytkownika.
                </p>
            </>
        ),
        [Language.ENG]: (
            <>
                <p>
                    Suction vehicles, trailers, and semi-trailers are manufactured for the collection and transport of
                    liquid waste and hazardous substances in accordance with ADR regulations. The vacuum and
                    high-pressure systems, available in various power levels, along with a multifunctional boom, allow
                    for customization of the vehicle to meet the user&#39;s specific needs.
                </p>
            </>
        ),
    },
    manufacturers: [],
    category: [MultipurposeVehiclesForPressureSewerCleaningCategory],
    tags: [
        PressureVehiclesTags.AdrComplianceTag,
        PressureVehiclesTags.HazardousMaterialsTransportTag,
        PressureVehiclesTags.HighPressureSystemTag,
        PressureVehiclesTags.MultifunctionalArmTag,
        PressureVehiclesTags.LiquiddWasteTag,
        PressureVehiclesTags.SpecializationTag,
        PressureVehiclesTags.SuctionVehiclesTag,
        PressureVehiclesTags.TailoredCustomizationTag,
        PressureVehiclesTags.TrailersTag,
        PressureVehiclesTags.VacuumSystemTag,
    ],
}