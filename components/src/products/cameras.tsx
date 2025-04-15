import HeroImage from "../hero/hero-image";
import {getCamerasImagesSlides} from "../hero/hero-images-list";
import HeroCamerasTitle from "../hero/hero-cameras-title";
import HeaderDivider from "../common/header-divider";
import {useIntersectionObserver} from "../../../hooks/useIntersectionObserver";
import ProductsGrid from "./products-grid";
import {camerasItems} from "./data/camerasItems";

export default function Cameras() {
    const {elementRef, isVisible} = useIntersectionObserver();

    const camerasImagesSlides = getCamerasImagesSlides();

    return (
        <main className="w-full overflow-y-auto bg-[var(--foreground)]">
            <HeroImage heroSlides={camerasImagesSlides} heroTitle={<HeroCamerasTitle/>} heroHeight={30}/>
            <div ref={elementRef}>
                <HeaderDivider title={{labelPL: "Producenci", labelENG: "Manufacturers"}} isVisible={isVisible}/>
            </div>
            <ProductsGrid products={camerasItems}/>
        </main>
    )
}