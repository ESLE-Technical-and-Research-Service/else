import HeroImage from "../../components/hero/hero-image";
import Departments from "../../components/about/departments";

export default function Home() {
    return (
        <main className="w-full overflow-y-auto bg-[var(--foreground)]">
            <HeroImage/>
            <Departments/>
        </main>

    );
}
