import HeroImage from "../src/hero/hero-image";
import {getCamerasImagesSlides} from "../src/hero/hero-images-list";
import HeroCamerasTitle from "../src/hero/hero-cameras-title";

export default function Cameras() {
    const camerasImagesSlides = getCamerasImagesSlides();
    return (
        <main className="w-full overflow-y-auto bg-[var(--foreground)]">
            <HeroImage heroSlides={camerasImagesSlides} heroTitle={<HeroCamerasTitle />} heroHeight={40} />
        </main>
    )
}