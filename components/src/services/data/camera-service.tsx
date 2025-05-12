import {Service} from "../../types/Service";
import camServiceHeroImg
    from "../../../../assets/images/products/cameras/system_with_camera_and_cleaning_nozzle_04.webp";
import camServiceImg01 from "../../../../assets/images/products/cameras/explosive_proof_inspec_sys_01.webp";
import camServiceImg02 from "../../../../assets/images/products/cameras/leak_testing_system_06.webp";

export const CameraService: Service = {
    name: {
        namePL: "Serwis kamer",
        nameENG: "Cameras service",
    },
    title: {
        titlePL: "Zapewniamy kompleksowa obsługę systemów kamer inspekcyjnych",
        titleENG: "We offer comprehensive maintenance and support of inspection cameras systems",
    },
    href: "/services/cam-service",
    heroImage: camServiceHeroImg,
    images: [
        camServiceImg01,
        camServiceImg02,
    ],
    description: {
        textPL: "Serwis kamer oferowany przez firmę ELSE Technical and Research Service Co. Ltd Sp. z o.o. koncentruje się na kompleksowej obsłudze systemów inspekcji kanalizacji i sieci wodno-kanalizacyjnych. Dzięki wieloletniemu doświadczeniu (działalność od 1989 roku) oraz autoryzacji producenta IBAK, firma zapewnia wysoką jakość usług serwisowych.",
        textENG: "The camera service provided by ELSE Technical and Research Service Co. Ltd focuses on comprehensive maintenance and support of inspection systems for sewage and water networks. With decades of experience (operating since 1989) and official authorization from the manufacturer IBAK, the company ensures high-quality service.",
    },
    detailedDescription: {
        textPL: (
            <>
                <section>
                    <p>
                        ELSE oferuje autoryzowany serwis kamer inspekcyjnych, zapewniając ich niezawodne działanie przez
                        długie lata. Dzięki bogatemu doświadczeniu od 1989 roku oraz odpowiedniemu zapleczu
                        technicznemu, gwarantujemy wysoką jakość świadczonych usług.
                    </p>
                    <h3>Zakres naszych usług:</h3>
                    <ul>
                        <li>Serwis gwarancyjny i pogwarancyjny urządzeń inspekcyjnych.</li>
                        <li>Wsparcie w zakresie części zamiennych przez okres do 10 lat po zakończeniu danej linii
                            produktów.
                        </li>
                        <li>Bezpośrednia dostępność części zamiennych, co skraca czas przestoju urządzeń.</li>
                        <li>Możliwość elastycznej wymiany wszystkich komponentów urządzenia, obniżając koszty
                            eksploatacyjne.
                        </li>
                        <li>Komponenty systemów IBAK produkowane niemal w całości w fabryce, zapewniając ciągłość
                            dostaw.
                        </li>
                    </ul>
                    <p>
                        Dzięki naszemu autoryzowanemu serwisowi możesz być pewien, że Twoje urządzenia są w dobrych
                        rękach. Nasze długoletnie doświadczenie będzie służyć Twoim potrzebom w serwisie kamer
                        inspekcyjnych każdego producenta.
                    </p>
                </section>

            </>
        ),
        textENG: (
            <>
                <section>
                    <p>
                        ELSE provides comprehensive services for the maintenance and operation of CCTV systems. Our
                        offerings ensure optimal performance and longevity of your surveillance equipment.
                    </p>
                    <h3>Our Services Include:</h3>
                    <ul>
                        <li>Regular maintenance and cleaning of camera lenses.</li>
                        <li>Adjustment of focus and focal length for optimal image clarity.</li>
                        <li>System diagnostics and troubleshooting.</li>
                        <li>Firmware updates and software configuration.</li>
                        <li>Training for staff on system operation and best practices.</li>
                    </ul>
                    <p>
                        Our experienced technicians are available to assist with any issues and ensure your surveillance
                        system operates efficiently.
                    </p>
                </section>

            </>
        ),
    }
}