import heroImage1 from "../../../assets/images/heroImage_01.jpg";
import heroImage2 from "../../../assets/images/heroImage_02.jpg";
import heroImage3 from "../../../assets/images/heroImage_03.jpg";
import heroImage4 from "../../../assets/images/heroImage_04.webp"
import heroImage5 from "../../../assets/images/heroImage_05.webp"
import {StaticImageData} from "next/image";

export const getHeroSlideImages = (): StaticImageData[] => [
    heroImage1,
    heroImage2,
    heroImage3,
    heroImage4,
    heroImage5,
]