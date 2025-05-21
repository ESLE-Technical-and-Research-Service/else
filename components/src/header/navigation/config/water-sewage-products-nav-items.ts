import {camerasItems, pressureVehiclesItems} from "../../../products/data/product-items";
import {DropdownItem, Language, ProductItem} from "../../../types";

const waterSewageProductsNavItems = (): DropdownItem[] => [
    ...mapProductsToNavItems(camerasItems),
    ...mapProductsToNavItems(pressureVehiclesItems),
];

function mapProductsToNavItems(products: ProductItem[]) {
    const productsNavItems: DropdownItem[] = [];

    for (const product of products) {
        productsNavItems.push({
            href: product.href,
            label: {
                [Language.PL]: product.name[Language.PL],
                [Language.ENG]: product.name[Language.ENG],
            },
        });
    }

    return productsNavItems;
}

mapProductsToNavItems(camerasItems);
mapProductsToNavItems(pressureVehiclesItems);

export default waterSewageProductsNavItems;