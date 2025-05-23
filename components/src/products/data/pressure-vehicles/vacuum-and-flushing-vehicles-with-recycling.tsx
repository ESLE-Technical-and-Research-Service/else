import {Language, ProductItem} from "../../../types";
import {MultipurposeVehiclesForPressureSewerCleaningCategory} from "../categories";
import {PressureVehiclesTags} from "../tags";
import vaccumAndFlushingVehImg01
    from "../../../../../assets/images/products/pressure-vehicles/vacuum_and_flushing_veh_01.webp";
import vaccumAndFlushingVehImg02
    from "../../../../../assets/images/products/pressure-vehicles/vacuum_and_flushing_veh_02.webp";
import vaccumAndFlushingVehImg03
    from "../../../../../assets/images/products/pressure-vehicles/vacuum_and_flushing_veh_03.webp";
import vaccumAndFlushingVehImg04
    from "../../../../../assets/images/products/pressure-vehicles/vacuum_and_flushing_veh_04.webp";
import vaccumAndFlushingVehImg05
    from "../../../../../assets/images/products/pressure-vehicles/vacuum_and_flushing_veh_05.webp";
import vaccumAndFlushingVehImg06
    from "../../../../../assets/images/products/pressure-vehicles/vacuum_and_flushing_veh_06.webp";
import vaccumAndFlushingVehImg07
    from "../../../../../assets/images/products/pressure-vehicles/vacuum_and_flushing_veh_07.webp";
import vaccumAndFlushingVehImg10
    from "../../../../../assets/images/products/pressure-vehicles/vacuum_and_flushing_veh_10.webp";
import vaccumAndFlushingVehImg11
    from "../../../../../assets/images/products/pressure-vehicles/vacuum_and_flushing_veh_11.webp";
import vaccumAndFlushingVehImg12
    from "../../../../../assets/images/products/pressure-vehicles/vacuum_and_flushing_veh_12.webp";

export const VacuumAndFlushingVehiclesWithRecycling: ProductItem = {
    name: {
        [Language.PL]: "Pojazdy ssąco-płuczące z recyklingiem",
        [Language.ENG]: "Vacuum and flushing vehicles with recycling",
    },
    href: "/products/water-sewage/pressure-vehicles/vacuum-and-flushing-vehicles-with-recycling",
    images: [
        vaccumAndFlushingVehImg05,
        vaccumAndFlushingVehImg01,
        vaccumAndFlushingVehImg02,
        vaccumAndFlushingVehImg03,
        vaccumAndFlushingVehImg04,
        vaccumAndFlushingVehImg06,
        vaccumAndFlushingVehImg07,
        vaccumAndFlushingVehImg10,
        vaccumAndFlushingVehImg11,
        vaccumAndFlushingVehImg12,
    ],
    description: {
        [Language.PL]: "Nasze pojazdy oferują zaawansowany system odzysku wody dla ciągłego czyszczenia. Z wykorzystaniem sita ze stali nierdzewnej i obrotowego filtra szczelinowego, woda jest wielokrotnie oczyszczana. Dodatkowo, innowacyjny teleskopowy wysięgnik z oboma wężami zapewnia precyzyjność i wygodę w pracy, nawet w miejscach trudno dostępnych.",
        [Language.ENG]: "Our vehicles feature an advanced water recycling system for continuous cleaning. Using a stainless steel screen and a rotating slotted filter, the water is purified multiple times. Additionally, the innovative telescopic boom with dual hoses ensures precision and convenience during operation, even in hard-to-reach areas.",
    },
    detailedDescription: {
        [Language.PL]: (
            <>
                <p>
                    Pojazdy te posiadają system odzysku wody, który umożliwia ciągłe czyszczenie. Brudna woda zebrana z kanałów jest poddawana kilkustopniowemu oczyszczaniu, dzięki czemu może zostać ponownie wykorzystana.
                </p>

                <p>
                    Wstępna separacja ścieków odbywa się za pomocą sita ze stali nierdzewnej w zbiorniku osadu, który jest również oczyszczany podczas pracy za pomocą zintegrowanych dysz wysokociśnieniowych.
                </p>

                <p>
                    Tak wstępnie oczyszczona woda jest następnie transportowana do samoczyszczącego się obrotowego filtra szczelinowego. Cząsteczki gromadzą się na obracającym się bębnie i są w całości usuwane. Zaletą umieszczenia go poza głównym zbiornikiem osadu jest jego łatwa dostępność dla użytkownika.
                </p>

                <p>
                    Obrotowy, teleskopowy wysięgnik umożliwia operatorowi umieszczenie węża ssawnego oraz węża wysokociśnieniowego do czyszczenia idealnie nad studzienką. Firma Assmann jako pierwsza na świecie stworzyła ramię, na którym umieszczono oba węże.
                </p>

                <p>
                    Wielofunkcyjny wysięgnik o dalekim zasięgu gwarantuje większą wygodę użytkowania pojazdu. Oferuje możliwość dostania się do trudno dostępnych miejsc, gdzie podjechanie pod właz studzienki jest utrudnione lub niemożliwe.
                </p>
            </>
        ),
        [Language.ENG]: (
            <>
                <p>
                    These vehicles feature a water recycling system that enables continuous cleaning. Dirty water collected from the sewer is subjected to a multi-stage purification process, allowing it to be reused.
                </p>

                <p>
                    Initial wastewater separation is carried out using a stainless steel screen inside the sludge tank, which is also cleaned during operation by integrated high-pressure nozzles.
                </p>

                <p>
                    The pre-cleaned water is then transferred to a self-cleaning rotating slotted filter. Particles accumulate on the rotating drum and are completely removed. A key advantage of placing the filter outside the main sludge tank is its easy accessibility for the operator.
                </p>

                <p>
                    The rotating, telescopic boom allows the operator to precisely position both the suction and high-pressure cleaning hoses directly over the manhole. Assmann was the first company in the world to develop a boom that houses both hoses.
                </p>

                <p>
                    This multifunctional long-reach boom ensures greater ease of use and enables access to hard-to-reach locations where approaching the manhole directly is difficult or impossible.
                </p>
            </>
        ),
    },
    manufacturers: [],
    category: [MultipurposeVehiclesForPressureSewerCleaningCategory],
    tags: [
        PressureVehiclesTags.ContinuousCleaningTag,
        PressureVehiclesTags.CleaningHosesTag,
        PressureVehiclesTags.HardToReachAreasTag,
        PressureVehiclesTags.HighPressureCleaningNozzlesTag,
        PressureVehiclesTags.MultistageCleaningTag,
        PressureVehiclesTags.SelfCleaningRotatingSlotFilterTag,
        PressureVehiclesTags.SludgeTankTag,
        PressureVehiclesTags.TelescopicArmFilterTag,
        PressureVehiclesTags.WaterRecoverySystemTag,
    ],
};