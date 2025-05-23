import {Language, ProductItem} from "../../../types";
import {MultipurposeVehiclesForPressureSewerCleaningCategory} from "../categories";
import {PressureVehiclesTags} from "../tags";
import customVehicleImg01
    from "../../../../../assets/images/products/pressure-vehicles/vacuum_and_flushing_veh_01.webp";
import customVehicleImg02
    from "../../../../../assets/images/products/pressure-vehicles/dual_function_suction_and_jetting_veh_02.webp";
import customVehicleImg03
    from "../../../../../assets/images/products/pressure-vehicles/dual_function_suction_and_jetting_veh_04.webp";
import customVehicleImg04
    from "../../../../../assets/images/products/pressure-vehicles/vacuum_and_flushing_veh_08.webp";

export const CreateYourOwnVehicleConfiguration: ProductItem = {
    name: {
        [Language.PL]: "Stwórz własną konfiguracje pojazdu",
        [Language.ENG]: "Create your own vehicle configuration",
    },
    href: "/products/water-sewage/pressure-vehicles/create-your-own-vehicle-configuration",
    images: [
        customVehicleImg01,
        customVehicleImg02,
        customVehicleImg03,
        customVehicleImg04,
    ],
    description: {
        [Language.PL]: "Indywidualna konfiguracja zamawiającego pozwala na dopasowanie pojazdu do potrzeb danej infrastruktury miejskiej. Dostępne opcje obejmują podwozia 2-, 3- lub 4-osiowe, różne rozmiary zbiorników, dodatkowe zbiorniki po obu stronach zabudowy, zróżnicowaną długość wysuwanego ramienia oraz wielkość i rodzaje pomp ssących i ciśnieniowych.",
        [Language.ENG]: "The individual configuration tailored to the customer's needs allows the vehicle to be adapted to specific urban infrastructure requirements. Available options include 2-, 3-, or 4-axle chassis types, various tank sizes, additional side-mounted tanks, different lengths of the extendable arm, as well as a range of suction and pressure pump sizes and types.",
    },
    detailedDescription: {
        [Language.PL]: (
            <>
                <p>
                    Stwórz własny pojazd dostosowany do Twoich potrzeb. Oferujemy indywidualną konfigurację
                    umożliwiającą idealne dopasowanie do infrastruktury miejskiej. Wybieraj spośród różnych rodzajów
                    podwozia, rozmiarów zbiorników, długości ramienia oraz pomp ssących i ciśnieniowych. Dodatkowe
                    zbiorniki po obu stronach zabudowy zapewniają jeszcze większą funkcjonalność.
                </p>
            </>
        ),
        [Language.ENG]: (
            <>
                <p>
                    Create your own vehicle tailored to your needs.
                </p>
                <p>
                    We offer an individual configuration that enables perfect adjustment to urban infrastructure. Choose
                    from different chassis types, tank sizes, arm lengths, as well as suction and pressure pumps.
                    Additional tanks on both sides of the structure ensure even greater functionality.
                </p>
            </>
        ),
    },
    manufacturers: [],
    category: [MultipurposeVehiclesForPressureSewerCleaningCategory],
    tags: [
        PressureVehiclesTags.AdditionalTanksTag,
        PressureVehiclesTags.AddoptionToUrbanInfrastructureTag,
        PressureVehiclesTags.ChassinTypeTag,
        PressureVehiclesTags.CustomConfigurationTag,
        PressureVehiclesTags.EquipmentOptionsTag,
        PressureVehiclesTags.ExtendableArmTag,
        PressureVehiclesTags.FunctionalityTag,
        PressureVehiclesTags.HighPressurePompsTag,
        PressureVehiclesTags.PersonalizationTag,
        PressureVehiclesTags.SuctionPumpsTag,
        PressureVehiclesTags.SuperstructureTag,
        PressureVehiclesTags.TwoThreeFourAxleChassingTag,
        PressureVehiclesTags.VariousTankSizesTag,
    ],
}