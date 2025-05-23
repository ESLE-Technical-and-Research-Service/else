import {Language, ProductItem} from "../../../types";
import {MultipurposeVehiclesForPressureSewerCleaningCategory} from "../categories";
import {PressureVehiclesTags} from "../tags";
import automaticStreetInletsCleaningVehicles01
    from "../../../../../assets/images/products/pressure-vehicles/automatic_street_inlets_cleaning_vehicles_01.webp";
import automaticStreetInletsCleaningVehicles02
    from "../../../../../assets/images/products/pressure-vehicles/automatic_street_inlets_cleaning_vehicles_02.webp";
import automaticStreetInletsCleaningVehicles03
    from "../../../../../assets/images/products/pressure-vehicles/automatic_street_inlets_cleaning_vehicles_03.webp";
import automaticStreetInletsCleaningVehicles04
    from "../../../../../assets/images/products/pressure-vehicles/automatic_street_inlets_cleaning_vehicles_04.webp";
import automaticStreetInletsCleaningVehicles05
    from "../../../../../assets/images/products/pressure-vehicles/automatic_street_inlets_cleaning_vehicles_05.webp";
import automaticStreetInletsCleaningVehicles06
    from "../../../../../assets/images/products/pressure-vehicles/automatic_street_inlets_cleaning_vehicles_06.webp";

export const AutomaticStreetInletsCleaningVehicles: ProductItem = {
    name: {
        [Language.PL]: "Pojazdy do automatycznego czyszczenia wpustów ulicznych",
        [Language.ENG]: "Automatic street inlets cleaning vehicles",
    },
    href: "/products/water-sewage/pressure-vehicles/automatic-street-gully-cleaning-vehicles",
    images: [
        automaticStreetInletsCleaningVehicles01,
        automaticStreetInletsCleaningVehicles02,
        automaticStreetInletsCleaningVehicles03,
        automaticStreetInletsCleaningVehicles04,
        automaticStreetInletsCleaningVehicles05,
        automaticStreetInletsCleaningVehicles06,
    ],
    description: {
        [Language.PL]: "Nasze pojazdy oferują automatyczne, szybkie i skuteczne czyszczenie wpustów ulicznych. Wyposażone w zaawansowane ramię, system kamer i czujników, pozwalają na łatwą obsługę przez jedną osobę, zapewniając jednocześnie precyzję i wygodę.",
        [Language.ENG]: "Our vehicles offer automatic, fast, and efficient cleaning of street gullies. Equipped with an advanced arm, camera system, and sensors, they allow easy operation by a single person while ensuring precision and convenience.",
    },
    detailedDescription: {
        [Language.PL]: (
            <>
                <p>
                    Pojazdy te służą do automatycznego, szybkiego oraz skutecznego czyszczenia wpustów ulicznych. Ramię
                    z wężem ssącym oraz z magnetycznym urządzeniem podnoszącym, sterowane jest przez operatora z kabiny
                    kierowcy. Wykorzystując system kamer i czujników, właz uliczny jest podnoszony i ponownie wkładany
                    automatycznie na miejsce. Nasz system został zaprojektowany do obsługi przez jedną osobę co czyni go
                    prostym, wygodnym i kompleksowym narzędziem.
                </p>
            </>
        ),
        [Language.ENG]: (
            <>
                <p>
                    These vehicles are designed for automatic, fast, and efficient cleaning of street gullies. The arm
                    with a suction hose and magnetic lifting device is operated by the driver from the cabin. Using a
                    system of cameras and sensors, the street gully cover is lifted and automatically placed back. Our
                    system is designed for operation by a single person, making it a simple, convenient, and
                    comprehensive tool.
                </p>
            </>
        ),
    },
    manufacturers: [],
    category: [MultipurposeVehiclesForPressureSewerCleaningCategory],
    tags: [
        PressureVehiclesTags.ArmWithSuctionHoseTag,
        PressureVehiclesTags.AutomaticCleaningTag,
        PressureVehiclesTags.AutomaticManholeCoverLifting,
        PressureVehiclesTags.CabinControlledTag,
        PressureVehiclesTags.MagneticLiftingDeviceTag,
        PressureVehiclesTags.SinglePersonOperationTag,
        PressureVehiclesTags.StreetInletsTag,
    ],
}