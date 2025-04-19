import {StaticImageData} from "next/image";
import {Tag} from "./Tag";
import {Category} from "./Category";
import {ProductDescription} from "./ProductDescription";
import {ProductName} from "./ProductName";
import {ProductDetailedDescription} from "./ProductDetailedDescription";
import {Manufacturer} from "./Manufacturer";

export type ProductItem = {
    name: ProductName,
    href: string,
    images: StaticImageData[],
    description: ProductDescription,
    detailedDescription: ProductDetailedDescription,
    manufacturers: Manufacturer[],
    category: Category[],
    tags: Tag[]
}