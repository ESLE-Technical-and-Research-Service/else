import {Manufacturer} from "../../../types/Manufacturer";
import logo from "../../../../../assets/images/manufacturers/assmann_sonderfahrzeuge.webp";

export const ASSMANN: Manufacturer = {
    name: "ASSMANN",
    descriptionPL: (
        <>
            <p>
                <strong>ASSMANN</strong> to producent wielofunkcyjnych pojazdów do ciśnieniowego czyszczenia kanalizacji, projektowanych i produkowanych zgodnie z indywidualnymi potrzebami klienta.
            </p>

            <p><strong>Cel firmy:</strong></p>
            <ul>
                <li>Utrzymanie wysokiego zadowolenia klientów</li>
                <li>Ciągłe doskonalenie jakości i szybkości rozwiązywania problemów</li>
                <li>Rozwój i udoskonalanie oferowanych produktów</li>
            </ul>

            <p><strong>W ofercie:</strong></p>
            <ul>
                <li>Pojazdy z systemem odzysku wody do ciśnieniowego czyszczenia kanalizacji</li>
                <li>Pojazdy dwufunkcyjne</li>
                <li>Pojazdy z systemem do czyszczenia wpustów ulicznych</li>
            </ul>

            <p><strong>Parametry produkcyjne:</strong></p>
            <ul>
                <li>3800 m² powierzchni produkcyjnej</li>
                <li>Ponad 40 lat doświadczenia</li>
                <li>System zarządzania jakością zgodny z DIN EN ISO 9001</li>
            </ul>
        </>
    ),
    descriptionENG: (
        <>
            <p>
                <strong>ASSMANN</strong> is a manufacturer of multifunctional vehicles for high-pressure sewer cleaning, designed and built to meet individual customer requirements.
            </p>

            <p><strong>Company Objectives:</strong></p>
            <ul>
                <li>Maintain high customer satisfaction</li>
                <li>Continuously improve the quality and speed of problem-solving</li>
                <li>Enhance and further develop our products</li>
            </ul>

            <p><strong>Product Range:</strong></p>
            <ul>
                <li>Vehicles with water recycling systems for high-pressure sewer cleaning</li>
                <li>Dual-function vehicles</li>
                <li>Vehicles equipped for cleaning street inlets</li>
            </ul>

            <p><strong>Production Parameters:</strong></p>
            <ul>
                <li>3,800 m² of production area</li>
                <li>Over 40 years of experience</li>
                <li>Quality management system compliant with DIN EN ISO 9001</li>
            </ul>
        </>
    ),
    image: logo,
    link: "/manufacturers/assmann",
    website: "https://www.assmann-sonderfahrzeuge.de/"
}