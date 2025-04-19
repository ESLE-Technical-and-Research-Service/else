import heroImg01 from "../../../assets/images/hero/heroImage_01.webp";
import heroImg02 from "../../../assets/images/hero/heroImage_02.webp";
import heroImg03 from "../../../assets/images/hero/heroImage_03.webp";
import heroImg04 from "../../../assets/images/hero/heroImage_04.webp";
import heroImg05 from "../../../assets/images/hero/heroImage_05.webp";
import heroImg10 from "../../../assets/images/hero/heroImage_10.webp";
import camerasSlideImg01 from "../../../assets/images/products/camerasHeroImage01.webp";
import camerasSlideImg02 from "../../../assets/images/products/camerasHeroImage02.webp";

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