import {ProductItem} from "../../../../../types/ProductItem";
import {
    AccessoriesCategory,
    CleaningNozzlesCategory,
    CleaningNozzlesForPressureVehiclesCategory, RotatingAndVibratingNozzlesCategory
} from "../../../categories";
import {AccessoriesTags} from "../../../tags/accessories-tags";
import rdsVImg01 from "../../../../../../../assets/images/products/nozzles/rds-v/rds-v-01.webp";
import rdsVImg02 from "../../../../../../../assets/images/products/nozzles/rds-v/rds-v-02.webp";
import rdsVImg03 from "../../../../../../../assets/images/products/nozzles/rds-v/rds-v-03.webp";
import rdsVImg04 from "../../../../../../../assets/images/products/nozzles/rds-v/rds-v-04.webp";

export const RdsV: ProductItem = {
    name: {
        namePL: "RDS-V",
        nameENG: "RDS-V",
    },
    href: "/products/water-sewage/accessories/rds-v",
    images: [
        rdsVImg01,
        rdsVImg02,
        rdsVImg03,
        rdsVImg04,
    ],
    description: {
        textPL: "Dzięki działaniu wibracyjnemu i udarowemu, te obrotowe głowice nadają się idealnie do rozbijania i usuwania twardych osadów z dna kanału. Zęby na czubku sprawiają, że głowica jest agresywna w przypadku twardych przeszkód. Aby uniknąć uszkodzenia rur PCV, można zastosować głowicę bez zębów.",
        textENG: "Thanks to their vibrating and percussive action, these rotating nozzles are ideal for breaking up and removing hard deposits from the bottom of the pipe. The teeth on the tip make the nozzle aggressive when tackling tough obstructions. To avoid damaging PVC pipes, a toothless version of the nozzle can be used.",
    },
    detailedDescription: {
        descriptionPL: <></>,
        descriptionENG: <></>,
    },
    manufacturers: [],
    category: [
        AccessoriesCategory,
        CleaningNozzlesCategory,
        CleaningNozzlesForPressureVehiclesCategory,
        RotatingAndVibratingNozzlesCategory,
    ],
    tags: [
        AccessoriesTags.CleaningNozzlesTag,
        AccessoriesTags.RotatingAndVibratingNozzlesTag,
    ],
}