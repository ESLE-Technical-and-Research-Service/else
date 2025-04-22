import {ProductItem} from "../../../types/ProductItem";
import {MultipurposeVehiclesForPressureSewerCleaningCategory} from "../categories";
import {PressureVehiclesTags} from "../tags/pressure-vehicles-tags";
import dualSuctionAndJettingVeh01 from "../../../../../assets/images/products/pressure-vehicles/dual_function_suction_and_jetting_veh_01.webp";
import dualSuctionAndJettingVeh02 from "../../../../../assets/images/products/pressure-vehicles/dual_function_suction_and_jetting_veh_02.webp";
import dualSuctionAndJettingVeh03 from "../../../../../assets/images/products/pressure-vehicles/dual_function_suction_and_jetting_veh_03.webp";
import dualSuctionAndJettingVeh04 from "../../../../../assets/images/products/pressure-vehicles/dual_function_suction_and_jetting_veh_04.webp";
import dualSuctionAndJettingVeh05 from "../../../../../assets/images/products/pressure-vehicles/dual_function_suction_and_jetting_veh_05.webp";
import dualSuctionAndJettingVeh06 from "../../../../../assets/images/products/pressure-vehicles/dual_function_suction_and_jetting_veh_06.webp";

export const DualFunctionSuctionFlushingVehicles: ProductItem = {
    name: {
        namePL: "Pojazdy dwufunkcyjne ssąco-płuczące",
        nameENG: "Dual-function suction and jetting vehicles",
    },
    href: "/products/water-sewage/pressure-vehicles/dual-function-suction-flushing-vehicles",
    images: [
        dualSuctionAndJettingVeh01,
        dualSuctionAndJettingVeh02,
        dualSuctionAndJettingVeh03,
        dualSuctionAndJettingVeh04,
        dualSuctionAndJettingVeh05,
        dualSuctionAndJettingVeh06,
    ],
    description: {
        textPL: "Nasze dwufunkcyjne pojazdy ssąco-płuczące są idealne do efektywnego czyszczenia kanalizacji. Dostępne w różnych konfiguracjach zbiorników, oferują wszechstronność w opróżnianiu i optymalizację przestrzeni. Dodatkowo, zewnętrzna płaska część oferuje możliwość personalizacji jako przestrzeń reklamowa.",
        textENG: "Our dual-function suction and jetting vehicles are ideal for efficient sewer cleaning. Available in various tank configurations, they offer versatility in emptying and space optimization. Additionally, the flat external surface provides an opportunity for customization as an advertising space.",
    },
    detailedDescription: {
        descriptionPL: (
            <>
                <p>
                    Pojazdy te służą do skutecznego i ekonomicznego czyszczenia kanalizacji. Są dostępne ze zbiornikami w różnych rozmiarach, materiałach i rodzajach ich opróżniania dla podwozi 2-, 3- i 4-osiowych.
                </p>

                <p>
                    Zbiornik na osad można opróżnić za pomocą pneumatycznej przegrody lub poprzez przechylenie go do tyłu. Przestrzeń na wodę dla systemu czyszczącego znajduje się w tylnej części dużego zbiornika lub w bocznych zbiornikach po obu stronach pojazdu. Dzięki tym zbiornikom zwiększa się ilość transportowanej wody oraz zasłaniają one cylindryczny zbiornik główny, dzięki czemu pojazd wygląda niezwykle estetycznie.
                </p>

                <p>
                    Zewnętrzną płaską część można wykorzystać jako przestrzeń reklamową do oklejenia.
                </p>
            </>
        ),
        descriptionENG: (
            <>
                <p>
                    These vehicles are designed for effective and economical sewer cleaning. They are available with tanks in various sizes, materials, and emptying methods, suitable for 2-, 3-, and 4-axle chassis.
                </p>

                <p>
                    The sludge tank can be emptied either by a pneumatic partition or by tilting it backwards. The water compartment for the cleaning system is located at the rear of the main tank or in side tanks on both sides of the vehicle. These additional tanks increase the amount of water that can be transported and also cover the cylindrical main tank, giving the vehicle a highly aesthetic appearance.
                </p>

                <p>
                    The flat external surface can be used as an advertising space for vehicle wrapping.
                </p>
            </>
        ),
    },
    manufacturers: [],
    category: [MultipurposeVehiclesForPressureSewerCleaningCategory],
    tags: [
        PressureVehiclesTags.AdvertisingSpaceTag,
        PressureVehiclesTags.CleaningSystemTag,
        PressureVehiclesTags.SideTanksTag,
        PressureVehiclesTags.SewerCleaningTag,
        PressureVehiclesTags.SpaceOptimizationTag,
        PressureVehiclesTags.PersonalizationTag,
        PressureVehiclesTags.PneumaticPartitionTag,
        PressureVehiclesTags.TwoThreeFourAxleChassisTag,
        PressureVehiclesTags.DualFunctionVehiclesTag,
        PressureVehiclesTags.TankTiltingTag,
        PressureVehiclesTags.WaterTransportTag,
    ],
}