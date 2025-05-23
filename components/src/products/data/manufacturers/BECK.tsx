import {Language, Manufacturer} from "../../../types";
import logo from "../../../../../assets/images/manufacturers/beck_logo.webp";

export const BECK: Manufacturer = {
    name: "BECK",
    description: {
        [Language.PL]: (
            <>
                <p>
                    <strong>Firma BECK</strong> jest innowacyjnym niemieckim producentem akcesoriów do kanałów i studzienek,
                    w tym urządzeń i systemów umożliwiających regulację studzienek, o ponad 30-letnim doświadczeniu.
                </p>

                <p><strong>W ofercie:</strong></p>
                <ul>
                    <li>Korki do kanałów</li>
                    <li>Pakery do napraw punktowych</li>
                    <li>Urządzenia do podnoszenia włazów</li>
                    <li>Klucze ręczne do włazów</li>
                    <li>Akcesoria i narzędzia do kanalizacji</li>
                    <li>Zabezpieczenia studzienek</li>
                    <li>Zestawy do regulacji włazów</li>
                    <li>Filtry odoru / zapachowe do studni</li>
                    <li>Zabezpieczenia przeciw klawiszowaniu pokryw</li>
                </ul>
            </>
        ),
        [Language.ENG]: (
            <>
                <p>
                    <strong>BECK</strong> is an innovative German manufacturer of sewer and manhole accessories, including devices and systems for manhole adjustment, with over 30 years of experience.
                </p>

                <p><strong>Product Range:</strong></p>
                <ul>
                    <li>Pipe plugs</li>
                    <li>Point repair packers</li>
                    <li>Manhole cover lifting devices</li>
                    <li>Manual manhole cover keys</li>
                    <li>Sewer accessories and tools</li>
                    <li>Manhole safety equipment</li>
                    <li>Manhole adjustment kits</li>
                    <li>Odor filters for manholes</li>
                    <li>Anti-rattle solutions for manhole covers</li>
                </ul>
            </>
        ),
    },
    image: logo,
    link: "/manufacturers/beck",
    website: "",
}