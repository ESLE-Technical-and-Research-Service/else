import {Language, Manufacturer} from "../../../types";
import logo from "../../../../../assets/images/manufacturers/ibak_logo.webp";

export const IBAK: Manufacturer = {
    name: "IBAK",
    description: {
        [Language.PL]: (
            <>
                <p>
                    Założona w 1945 r. firma <strong>IBAK</strong> jest dziś największym producentem i dostawcą systemów do telewizyjnej inspekcji kanałów,
                    a także najstarszą firmą w tej branży. Jako pionier w tym sektorze przemysłu, cieszy się najlepszą reputacją wśród specjalistów i klientów.
                </p>

                <p>
                    Różnorodność ofertowa, uznana jakość produkowanych urządzeń, opatentowane rozwiązania – to tylko niektóre fakty
                    plasujące firmę IBAK jako lidera w wyznaczaniu nowych trendów w produkcji tego typu sprzętu.
                </p>

                <b>W ofercie:</b>

                <ul>
                    <li>Kamery inspekcyjne w jakości Full HD</li>
                    <li>Systemy skanowania kanału oraz studni 4K</li>
                    <li>Systemy inspekcyjne zabudowane i przenośne</li>
                    <li>Systemy inspekcyjne popychane</li>
                    <li>Roboty frezujące</li>
                    <li>Przenośne roboty frezujące</li>
                    <li>Oprogramowanie inspekcyjne dla systemów zabudowanych i przenośnych</li>
                    <li>Oprogramowanie biurowe do zarządzania siecią</li>
                    <li>Specjalistyczne zabudowy z przedziałem operatorskim do prowadzenia telewizyjnej inspekcji sieci</li>
                </ul>
            </>
        ),
        [Language.ENG]: (
            <>
                <p>
                    Founded in 1945, <strong>IBAK</strong> is now the largest manufacturer and supplier of TV inspection systems for pipelines, and also the oldest company in this industry.
                    As a pioneer in this sector, IBAK enjoys the highest reputation among professionals and customers.
                </p>

                <p>
                    A diverse product range, recognized manufacturing quality, and patented innovations are just some of the facts that place IBAK as a leader in setting new trends in this field.
                </p>

                <b>Product offering includes:</b>

                <ul>
                    <li>Full HD inspection cameras</li>
                    <li>4K scanning systems for pipelines and manholes</li>
                    <li>Built-in and portable inspection systems</li>
                    <li>Push camera inspection systems</li>
                    <li>Milling robots</li>
                    <li>Portable milling robots</li>
                    <li>Inspection software for both built-in and portable systems</li>
                    <li>Office software for network management</li>
                    <li>Specialist vehicles with operator compartments for TV inspection of pipelines</li>
                </ul>
            </>
        ),
    },
    image: logo,
    link: "/manufacturers/ibak",
    website: "https://www.ibak.de/",
}