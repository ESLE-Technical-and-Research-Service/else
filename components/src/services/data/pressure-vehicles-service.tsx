import {Service} from "../../types/Service";
import pressureVehiclesServiceHeroImg from "../../../../assets/images/hero/heroImage_01.webp"

export const PressureVehiclesService: Service = {
    name: {
        namePL: "Serwis samochodów ciśnieniowych",
        nameENG: "Pressure vehicles service",
    },
    href: "/services/pressure-vehicles",
    heroImage: pressureVehiclesServiceHeroImg,
    description: {
        textPL: "Specjalizujemy się w kompleksowej obsłudze systemów wysokociśnieniowych w pojazdach specjalistycznych, zapewniając ich bezpieczne i efektywne działanie zgodnie z obowiązującymi normami i przepisami.",
        textENG: "Our Pressure Vehicles Service specializes in the maintenance and optimization of high-pressure systems within specialized vehicles. We ensure that all pressure components operate safely and efficiently, adhering to industry standards and regulations.",
    },
    detailedDescription: {
        textPL: (
            <>
                <section>
                    <h2>Serwis Kamer</h2>
                    <p>
                        ELSE oferuje autoryzowany serwis kamer inspekcyjnych, zapewniając ich niezawodne działanie przez długie lata. Dzięki bogatemu doświadczeniu od 1989 roku oraz odpowiedniemu zapleczu technicznemu, gwarantujemy wysoką jakość świadczonych usług.
                    </p>
                    <h3>Zakres naszych usług:</h3>
                    <ul>
                        <li>Serwis gwarancyjny i pogwarancyjny urządzeń inspekcyjnych.</li>
                        <li>Wsparcie w zakresie części zamiennych przez okres do 10 lat po zakończeniu danej linii produktów.</li>
                        <li>Bezpośrednia dostępność części zamiennych, co skraca czas przestoju urządzeń.</li>
                        <li>Możliwość elastycznej wymiany wszystkich komponentów urządzenia, obniżając koszty eksploatacyjne.</li>
                        <li>Komponenty systemów IBAK produkowane niemal w całości w fabryce, zapewniając ciągłość dostaw.</li>
                    </ul>
                    <p>
                        Dzięki naszemu autoryzowanemu serwisowi możesz być pewien, że Twoje urządzenia są w dobrych rękach. Nasze długoletnie doświadczenie będzie służyć Twoim potrzebom w serwisie kamer inspekcyjnych każdego producenta.
                    </p>
                </section>

            </>
        ),
        textENG: (
            <>
                <section>
                    <h2>Pressure Vehicles Service</h2>
                    <p>
                        ELSE provides comprehensive maintenance and servicing for high-pressure sewer cleaning vehicles, ensuring their reliable operation over the years. With extensive experience and the necessary technical facilities, we offer top-quality service.
                    </p>
                    <h3>Our services include:</h3>
                    <ul>
                        <li>Warranty and post-warranty servicing of pressure vehicles.</li>
                        <li>Diagnostics and repair of water recovery systems and filters.</li>
                        <li>Maintenance and repair of telescopic arms and high-pressure hoses.</li>
                        <li>Software and control system updates for vehicles.</li>
                        <li>Availability of original spare parts and components.</li>
                        <li>Operator training in vehicle operation and maintenance.</li>
                    </ul>
                    <p>
                        Our service guarantees prompt response and professional support, minimizing the risk of failures and downtime in the operation of pressure vehicles.
                    </p>
                </section>
            </>
        ),
    }
}