import heroImg01 from "../../../assets/images/hero/heroImage_01.webp";
import heroImg02 from "../../../assets/images/hero/heroImage_02.webp";
import heroImg03 from "../../../assets/images/hero/heroImage_03.webp";
import heroImg04 from "../../../assets/images/hero/heroImage_04.webp";
import heroImg05 from "../../../assets/images/hero/heroImage_05.webp";
import heroImg10 from "../../../assets/images/hero/heroImage_10.webp";
import camerasSlideImg01 from "../../../assets/images/products/camerasHeroImage01.webp";
import camerasSlideImg02 from "../../../assets/images/products/camerasHeroImage02.webp";
import pressureVehicleImg02 from "../../../assets/images/products/pressure-vehicles/vacuum_and_flushing_veh_02.webp";
import pressureVehicleImg05 from "../../../assets/images/products/pressure-vehicles/vacuum_and_flushing_veh_05.webp";
import pressureVehicleImg08 from "../../../assets/images/products/pressure-vehicles/vacuum_and_flushing_veh_08.webp";
import millingRobotsImg01 from "../../../assets/images/products/milling-robots/pneumatic_milling_robot_10.webp";
import millingRobotsImg02 from "../../../assets/images/products/milling-robots/electric_milling_robot_02.webp";
import millingRobotsImg03 from "../../../assets/images/products/milling-robots/electric_milling_robot_04.webp";

import {StaticImageData} from "next/image";

export const getHeroSlideImages = (): StaticImageData[] => [
    heroImg01,
    heroImg02,
    heroImg03,
    heroImg04,
    heroImg05,
    heroImg10,
]

export const getCamerasHeroImagesSlides = (): StaticImageData[] => [
    camerasSlideImg01,
    camerasSlideImg02,
];

export const getPressureVehiclesHeroImagesSlides = (): StaticImageData[] => [
    pressureVehicleImg02,
    pressureVehicleImg05,
    pressureVehicleImg08,
];

export const getMillingRobotsHeroImagesSlides = (): StaticImageData[] => [
    millingRobotsImg02,
    millingRobotsImg01,
    millingRobotsImg03,
];