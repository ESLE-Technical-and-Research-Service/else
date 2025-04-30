import {camerasItems, millingRobotsItems, pressureVehiclesItems} from "./product-items";
import {ProductItem} from "../../types/ProductItem";

export const waterSewageProductItems: ProductItem[] = [
    ...camerasItems,
    ...pressureVehiclesItems,
    ...millingRobotsItems,
];