import {accessoriesItems, camerasItems, millingRobotsItems, pressureVehiclesItems} from "./product-items";
import {ProductItem} from "../../types";

export const waterSewageProductItems: ProductItem[] = [
    ...camerasItems,
    ...pressureVehiclesItems,
    ...millingRobotsItems,
    ...accessoriesItems,
];