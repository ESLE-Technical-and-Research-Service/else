import {camerasItems, pressureVehiclesItems} from "../../../products/data/product-items";
import {ProductItem} from "../../../types/ProductItem";

export type ProductNavItem = {
    href: string
    labelPL: string
    labelENG: string
}

const waterSewageProductsNavItems = (): ProductNavItem[] => [
    ...mapProductsToNavItems(camerasItems),
    ...mapProductsToNavItems(pressureVehiclesItems),
];

function mapProductsToNavItems(products: ProductItem[]) {
    const productsNavItems: ProductNavItem[] = [];

    for (const product of products) {
        productsNavItems.push({
            href: product.href,
            labelPL: product.name.namePL,
            labelENG: product.name.nameENG,
        });
    }

    return productsNavItems;
}

mapProductsToNavItems(camerasItems);
mapProductsToNavItems(pressureVehiclesItems);

export default waterSewageProductsNavItems;