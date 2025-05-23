import pushrodPortableSys01 from "../../../../../assets/images/products/cameras/pushrod_portable_sys_01.webp";
import pushrodPortableSys02 from "../../../../../assets/images/products/cameras/pushrod_portable_sys_02.webp";
import pushrodPortableSys03 from "../../../../../assets/images/products/cameras/pushrod_portable_sys_03.webp";
import pushrodPortableSys04 from "../../../../../assets/images/products/cameras/pushrod_portable_sys_04.webp";
import pushrodPortableSys05 from "../../../../../assets/images/products/cameras/pushrod_portable_sys_05.webp";
import pushrodPortableSys06 from "../../../../../assets/images/products/cameras/pushrod_portable_sys_06.webp";
import pushrodPortableSys07 from "../../../../../assets/images/products/cameras/pushrod_portable_sys_07.webp";
import pushrodPortableSys08 from "../../../../../assets/images/products/cameras/pushrod_portable_sys_08.webp";
import {CamerasForSewageInspectionCategory} from "../categories";
import {CamerasTags} from "../tags";
import {Language, ProductItem} from "../../../types";

export const PushrodPortableSystem: ProductItem = {
    name: {
        [Language.PL]: "Przenośne systemy popychane",
        [Language.ENG]: "Pushrod portable systems",
    },
    href: "/products/water-sewage/cameras/pushrod-portable-systems",
    images: [
        pushrodPortableSys06,
        pushrodPortableSys01,
        pushrodPortableSys02,
        pushrodPortableSys03,
        pushrodPortableSys04,
        pushrodPortableSys05,
        pushrodPortableSys07,
        pushrodPortableSys08,
    ],
    description: {
        [Language.PL]: "Przenośny system popychany  to lekkie i wytrzymałe rozwiązanie do inspekcji trudno dostępnych miejsc i małych kanałów. Z długim przewodem, wszechstronnymi funkcjami pomiarowymi i możliwością podłączenia różnych kamer, te systemy są niezastąpione w warunkach niedostępnych dla samochodu",
        [Language.ENG]: "The portable pushrod system is a lightweight and durable solution for inspecting hard-to-reach areas and small pipelines. With a long cable, versatile measurement functions, and the ability to connect various cameras, these systems are indispensable in locations inaccessible to vehicles.",
    },
    detailedDescription: {
        [Language.PL]: (
            <>
                <p>Idealne do trudno dostępnych miejsc i kanałów o małej średnicy, nasz przenośny system popychany
                    oferuje solidność w lekkiej, mobilnej formie. Wyposażony w wszechstronne funkcje pomiarowe i 80
                    metrowy przewód, ten system jest niezastąpiony w inspekcji kanałów, rur i szybów.</p>

                <b>Główne cechy:</b>

                <ul>
                    <li><strong>Elastyczność: </strong>Możliwość przeprowadzenia inspekcji w kanałach od DN50 oraz
                        trudno dostępnych miejscach.
                    </li>
                    <li><strong>Mobilność i wytrzymałość: </strong>Solidna, lekka konstrukcja zapewnia łatwość w
                        transporcie.
                    </li>
                    <li><strong>Wielofunkcyjność: </strong>Możliwość podłączenia do systemu zabudowanego w
                        pojeździe.
                    </li>
                    <li><strong>Zasięg: </strong>Długość przewodu 80m umożliwia inspekcję w dużej odległości.</li>
                    <li><strong>Wszechstronność: </strong>Możliwość podłączenia różnych kamer uchylno-obrotowych.
                    </li>
                    <li><strong>Kompleksowość: </strong>Funkcje pomiarowe takie jak średnica, uszkodzenia i
                        deformacje.
                    </li>
                    <li><strong>Łatwy transfer danych: </strong>Prosty w obsłudze interfejs umożliwia szybkie
                        przesyłanie wyników inspekcji.
                    </li>
                    <li><strong>Lokalizacja kamery: </strong>Nadajnik pozwala precyzyjnie zlokalizować kamerę w
                        kanale.
                    </li>
                    <li><strong>Wymienne akumulatory: </strong>Nieprzerwana praca dzięki dwóm wymiennym
                        akumulatorom.
                    </li>
                    <li><strong>Opcja przeciwwybuchowa: </strong>System dostępny w wersji przeciwwybuchowej Ex.</li>
                </ul>
            </>
        ),
        [Language.ENG]: (
            <>
                <p>
                    Ideal for hard-to-reach areas and small-diameter pipelines, our portable pushrod system offers
                    durability in a lightweight, mobile form. Equipped with versatile measurement functions and an
                    80-meter cable, this system is indispensable for inspecting pipelines, pipes, and shafts.
                </p>

                <b>Main Features:</b>

                <ul>
                    <li><strong>Flexibility: </strong>Allows inspection in pipelines from DN50 and in hard-to-access
                        locations.
                    </li>
                    <li><strong>Mobility and Durability: </strong>Robust, lightweight design ensures easy transport.
                    </li>
                    <li><strong>Multifunctionality: </strong>Can be connected to a vehicle-mounted system.</li>
                    <li><strong>Reach: </strong>The 80-meter cable allows for long-distance inspection.</li>
                    <li><strong>Versatility: </strong>Compatible with various pan-and-tilt cameras.</li>
                    <li><strong>Comprehensiveness: </strong>Measurement functions such as diameter, damage, and
                        deformation analysis.
                    </li>
                    <li><strong>Easy Data Transfer: </strong>User-friendly interface enables quick inspection result
                        transfer.
                    </li>
                    <li><strong>Camera Localization: </strong>The transmitter allows precise camera positioning in
                        the pipeline.
                    </li>
                    <li><strong>Replaceable Batteries: </strong>Uninterrupted operation thanks to two replaceable
                        batteries.
                    </li>
                    <li><strong>Explosion-Proof Option: </strong>System available in explosion-proof Ex version.
                    </li>
                </ul>
            </>

        ),
    },
    manufacturers: [],
    category: [CamerasForSewageInspectionCategory],
    tags: [
        CamerasTags.MobileCameraTag,
        CamerasTags.PushrodPortableSystemsTag,
        CamerasTags.HDSystemsTag,
    ],
};