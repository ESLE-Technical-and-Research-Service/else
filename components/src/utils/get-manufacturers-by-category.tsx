import {Manufacturer, ProductsCategories} from "../types";
import {IBAK} from "../products/data/manufacturers/IBAK";
import {BECK} from "../products/data/manufacturers/BECK";
import {NUOVACONTEC} from "../products/data/manufacturers/NUOVACONTEC";
import {FeierabendAndFockGmbH} from "../products/data/manufacturers/FeierabendAndFockGmbH";
import {ASSMANN} from "../products/data/manufacturers/ASSMANN";

export function getManufacturersByCategory(category: ProductsCategories): Manufacturer[] {
    switch (category) {
        case ProductsCategories.CAMERAS:
            return [IBAK, BECK, NUOVACONTEC];
        case ProductsCategories.PRESSURE_VEHICLES:
            return [FeierabendAndFockGmbH];
        case ProductsCategories.MILLING_ROBOTS:
            return [IBAK];
        case ProductsCategories.ACCESSORIES:
            return [NUOVACONTEC];
        default:
            return [IBAK, BECK, NUOVACONTEC, FeierabendAndFockGmbH, ASSMANN];
    }
}