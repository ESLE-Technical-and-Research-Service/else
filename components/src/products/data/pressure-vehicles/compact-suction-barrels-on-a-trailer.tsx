import {Language, ProductItem} from "../../../types";
import {MultipurposeVehiclesForPressureSewerCleaningCategory} from "../categories";
import {PressureVehiclesTags} from "../tags";
import {FeierabendAndFockGmbH} from "../manufacturers/FeierabendAndFockGmbH";
import compSuctionBarrelsOnATrailerImg01
    from "../../../../../assets/images/products/pressure-vehicles/compact_suction_barrels_on_a_trailer_01.webp";
import compSuctionBarrelsOnATrailerImg02
    from "../../../../../assets/images/products/pressure-vehicles/compact_suction_barrels_on_a_trailer_02.webp";
import compSuctionBarrelsOnATrailerImg03
    from "../../../../../assets/images/products/pressure-vehicles/compact_suction_barrels_on_a_trailer_03.webp";
import compSuctionBarrelsOnATrailerImg04
    from "../../../../../assets/images/products/pressure-vehicles/compact_suction_barrels_on_a_trailer_04.webp";

export const CompactSuctionBarrelsOnATrailer: ProductItem = {
    name: {
        [Language.PL]: "Kompaktowe beczki ssące na przyczepie",
        [Language.ENG]: "Compact suction barrels on a trailer",
    },
    href: "/products/water-sewage/pressure-vehicles/compact-suction-barrels-on-a-trailer",
    images: [
        compSuctionBarrelsOnATrailerImg01,
        compSuctionBarrelsOnATrailerImg02,
        compSuctionBarrelsOnATrailerImg03,
        compSuctionBarrelsOnATrailerImg04,
    ],
    description: {
        [Language.PL]: "Mała szerokość, idealna do manewrowania w wąskich obszarach, niska masa własna, duża objętość zbiornika, oszczędność miejsca, modułowa konstrukcja, idealne rozmieszczenie elementów dla optymalnego rozkładu masy, prosta konserwacja, duża paleta do układania węża.",
        [Language.ENG]: "Small width, ideal for maneuvering in narrow areas, low weight, large tank volume, space-saving design, modular construction, ideal placement of components for optimal weight distribution, and easy maintenance with a large pallet for hose storage.",
    },
    detailedDescription: {
        [Language.PL]: (
            <>
                <p>
                    Our trailer with a suction barrel is the ideal compact solution for connecting to a van-type chassis. The small width of the trailer allows for easy reversing and maneuvering in tight spaces. Made of galvanized materials, the modular design enables easy transfer of components to any other chassis or frame.
                </p>

                <h3>Specifications:</h3>
                <ul>
                    <li>Suction pump performance: 4500 l/min at 60% suction power</li>
                    <li>Drive power: approx. 6 kW</li>
                    <li>Pump drive: air-cooled 2-stroke. Gasoline engine (15 kW)</li>
                    <li>Tank capacity: standard 1200 liters (optional 1500 liters or 1800 liters)</li>
                    <li>Dimensions: length x width x height) approx. 4200 x 1900 x 1940 mm</li>
                    <li>Weight with empty tank: approx. 1200 kg</li>
                    <li>Maximum permissible weight: 2500 kg</li>
                </ul>

                <h3>Additional equipment:</h3>
                <ul>
                    <li>1500-liter tank</li>
                    <li>1800-liter tank</li>
                    <li>Advertising boards on the left and right side of the tank</li>
                </ul>
            </>
        ),
        [Language.ENG]: (
            <>
                <p>
                    Our trailer with a suction barrel is the ideal compact solution for connecting to a van-type chassis. The small width of the trailer allows for easy reversing and maneuvering in tight spaces. Made of galvanized materials, the modular design enables easy transfer of components to any other chassis or frame.
                </p>

                <h3>Specifications:</h3>
                <ul>
                    <li>Suction pump performance: 4500 l/min at 60% suction power</li>
                    <li>Drive power: approx. 6 kW</li>
                    <li>Pump drive: air-cooled 2-stroke gasoline engine (15 kW)</li>
                    <li>Tank capacity: standard 1200 liters (optional 1500 liters or 1800 liters)</li>
                    <li>Dimensions: length x width x height approx. 4200 x 1900 x 1940 mm</li>
                    <li>Weight with empty tank: approx. 1200 kg</li>
                    <li>Maximum permissible weight: 2500 kg</li>
                </ul>

                <h3>Additional equipment:</h3>
                <ul>
                    <li>1500-liter tank</li>
                    <li>1800-liter tank</li>
                    <li>Advertising boards on the left and right side of the tank</li>
                </ul>
            </>
        ),
    },
    manufacturers: [FeierabendAndFockGmbH],
    category: [MultipurposeVehiclesForPressureSewerCleaningCategory],
    tags: [
        PressureVehiclesTags.AdditionalEquipmentTag,
        PressureVehiclesTags.AirCoolingTag,
        PressureVehiclesTags.AdvertisingSpaceTag,
        PressureVehiclesTags.CompactSuctionBarrelTag,
        PressureVehiclesTags.EasyMaintananceTag,
        PressureVehiclesTags.GalvanizedMaterialsTag,
        PressureVehiclesTags.HoseStackingPlatformTag,
        PressureVehiclesTags.ModularDesignTag,
        PressureVehiclesTags.LowWidthTag,
        PressureVehiclesTags.LargeTankVolumeTag,
        PressureVehiclesTags.LowUnladenWeightTag,
        PressureVehiclesTags.OptimalWeightDistributionTag,
        PressureVehiclesTags.SpaceSaveTag,
        PressureVehiclesTags.SuctionPumpPerformanceTag,
        PressureVehiclesTags.TrailersTag,
        PressureVehiclesTags.VanTypeChassinTag,
    ],
}