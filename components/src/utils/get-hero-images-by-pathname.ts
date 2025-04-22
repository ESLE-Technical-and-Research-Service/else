import {StaticImageData} from "next/image";
import {ProductLinks} from "../types/products";
import {getCamerasHeroImagesSlides, getPressureVehiclesHeroImagesSlides} from "../hero/hero-images-list";

function getProductImageSlides(productType: string): StaticImageData[] {
    switch (productType) {
        case ProductLinks.CAMERAS:
            return getCamerasHeroImagesSlides();
        case ProductLinks.PRESSURE_VEHICLES:
            return getPressureVehiclesHeroImagesSlides();
        case ProductLinks.MILLING_ROBOTS:
            return [];
        case ProductLinks.ACCESSORIES:
            return [];
        default:
            return [];
    }
}

export default getProductImageSlides;