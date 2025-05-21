import {StaticImageData} from "next/image";
import {NavigationLinks} from "../types";
import {
    getAccessoriesHeroImagesSlides,
    getCamerasHeroImagesSlides,
    getMillingRobotsHeroImagesSlides,
    getPressureVehiclesHeroImagesSlides
} from "../hero/hero-images-list";

function getProductImageSlides(productType: string): StaticImageData[] {
    switch (productType) {
        case NavigationLinks.CAMERAS:
            return getCamerasHeroImagesSlides();
        case NavigationLinks.PRESSURE_VEHICLES:
            return getPressureVehiclesHeroImagesSlides();
        case NavigationLinks.MILLING_ROBOTS:
            return getMillingRobotsHeroImagesSlides();
        case NavigationLinks.ACCESSORIES:
            return getAccessoriesHeroImagesSlides();
        default:
            return [];
    }
}

export default getProductImageSlides;