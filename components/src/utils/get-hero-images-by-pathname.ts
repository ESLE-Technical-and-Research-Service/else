import {StaticImageData} from "next/image";
import {ProductLinks} from "../types/products";
import {
    getAccessoriesHeroImagesSlides,
    getCamerasHeroImagesSlides,
    getMillingRobotsHeroImagesSlides,
    getPressureVehiclesHeroImagesSlides
} from "../hero/hero-images-list";

function getProductImageSlides(productType: string): StaticImageData[] {
    switch (productType) {
        case ProductLinks.CAMERAS:
            return getCamerasHeroImagesSlides();
        case ProductLinks.PRESSURE_VEHICLES:
            return getPressureVehiclesHeroImagesSlides();
        case ProductLinks.MILLING_ROBOTS:
            return getMillingRobotsHeroImagesSlides();
        case ProductLinks.ACCESSORIES:
            return getAccessoriesHeroImagesSlides();
        default:
            return [];
    }
}

export default getProductImageSlides;