import HeroImage from "../../components/hero/hero-image";
import WelcomeMessage from "../../components/about/welcome-message";

export default function Home() {
    return (
        <>
            <main className="w-full overflow-y-auto">
                <HeroImage/>
                <WelcomeMessage />
            </main>
        </>
    );
}
