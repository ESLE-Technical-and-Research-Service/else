import HeroImage from "../../components/src/hero/hero-image";
import Departments from "../../components/src/about/departments";
import {getHeroSlideImages} from "../../components/src/hero/hero-images-list";
import HeroHomeTitle from "../../components/src/hero/hero-home-title";

export default function Home() {
    const heroSlides = getHeroSlideImages();

    return (
        <main className="w-full overflow-y-auto bg-[var(--foreground)]">
            <HeroImage heroSlides={heroSlides} heroTitle={<HeroHomeTitle />} heroHeight={70}/>
            <Departments/>
        </main>

    );
}
