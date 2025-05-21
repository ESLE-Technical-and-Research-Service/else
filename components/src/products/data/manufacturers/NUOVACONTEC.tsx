import {Language, Manufacturer} from "../../../types";
import logo from "../../../../../assets/images/manufacturers/nuovacontec_logo.webp";

export const NUOVACONTEC: Manufacturer = {
    name: "NUOVACONTEC",
    description: {
        [Language.PL]: (
            <>
                <p>
                    <strong>NUOVACONTEC</strong> jest firmą specjalizującą się w produkcji i światowej dystrybucji
                    głowic i wyposażenia do czyszczenia kanalizacji. Od lat inwestuje w rozwój i badanie najlepszych
                    rozwiązań.
                </p>

                <p><strong>Specjalizacja:</strong></p>
                <ul>
                    <li>Udrażnianie rur</li>
                    <li>Rozbijanie przeszkód</li>
                    <li>Usuwanie piasku i korzeni</li>
                </ul>

                <p><strong>W ofercie:</strong></p>
                <ul>
                    <li>Głowice małe udrażniające</li>
                    <li>Głowice o kształcie jajowym</li>
                    <li>Głowice obrotowe</li>
                    <li>Głowice wibracyjne</li>
                    <li>Głowice do ciężkich zadań</li>
                    <li>Głowice frezujące</li>
                    <li>Głowice z łańcuchami</li>
                </ul>
            </>
        ),
        [Language.ENG]: (
            <>
                <p>
                    <strong>NUOVACONTEC</strong> is a company specializing in the production and global distribution of
                    heads and equipment for sewer cleaning. For years, it has been investing in the development and
                    research of the best solutions.
                </p>

                <p><strong>Specialization:</strong></p>
                <ul>
                    <li>Pipe cleaning</li>
                    <li>Obstacle breaking</li>
                    <li>Sand and root removal</li>
                </ul>

                <p><strong>Offer:</strong></p>
                <ul>
                    <li>Small clearing heads</li>
                    <li>Egg-shaped heads</li>
                    <li>Rotary heads</li>
                    <li>Vibrating heads</li>
                    <li>Heavy-duty heads</li>
                    <li>Milling heads</li>
                    <li>Chain heads</li>
                </ul>
            </>

        ),
    },
    image: logo,
    link: "/manufacturers/nuovacontec",
    website: "https://www.nuovacontec.com/",
}