import {ProductItem} from "../../../types/ProductItem";
import telescopicCamera01 from "../../../../../assets/images/products/cameras/telescopic_camera_01.webp";
import telescopicCamera02 from "../../../../../assets/images/products/cameras/telescopic_camera_02.webp";
import telescopicCamera03 from "../../../../../assets/images/products/cameras/telescopic_camera_03.webp";
import telescopicCamera04 from "../../../../../assets/images/products/cameras/telescopic_camera_04.webp";
import {CamerasTags} from "../tags/cameras-tags";
import {CamerasForSewageInspectionCategory} from "../categories";

export const TelescopicCameraForQuickInspection: ProductItem = {
    name: {
        namePL: "Kamera teleskopowa do szybkiej inspekcji",
        nameENG: "Telescopic camera for quick inspection",
    },
    href: "/products/water-sewage/cameras/telescopic-camera",
    images: [
        telescopicCamera01,
        telescopicCamera02,
        telescopicCamera03,
        telescopicCamera04
    ],
    description: {
        textPL: "Kamera teleskopowa do szybkiej inspekcji umożliwia natychmiastową kontrolę od strony studzienki, oferując szybką i skuteczną metodę monitorowania wszelkiego rodzaju zbiorników. Wytrzymała, lekka konstrukcja oraz wbudowane zasilanie sprawiają, że jest to idealne narzędzie w terenie",
        textENG: "The telescopic inspection camera allows for immediate inspection from the manhole side, offering a quick and effective method for monitoring all types of tanks. Its durable, lightweight design and built-in power supply make it an ideal tool for field use.",
    },
    detailedDescription: {
        descriptionPL: (
            <>
                <p>Główne cechy:</p>

                <ul>
                    <li><strong>Natychmiastowy podgląd: </strong>Idealna do natychmiastowej inspekcji od strony
                        studzienki bez potrzeby instalacji dodatkowego sprzętu.
                    </li>
                    <li><strong>Wszechstronne zastosowanie: </strong>Doskonała do inspekcji wszelkiego rodzaju
                        zbiorników, zapewniając pełen obraz wnętrza.
                    </li>
                    <li><strong>Mobilność i wytrzymałość: </strong>Lekka i solidna konstrukcja sprawiają, że jest to
                        doskonałe narzędzie do pracy w terenie.
                    </li>
                    <li><strong>Niezależne zasilanie: </strong>Dzięki własnemu zasilaniu, nasza kamera teleskopowa jest
                        zawsze gotowa do działania.
                    </li>
                    <li><strong>Zoom optyczny i cyfrowy: </strong>Zapewnia przejrzysty i szczegółowy obraz, niezależnie
                        od odległości.
                    </li>
                    <li><strong>Kompleksowe rozwiązanie: </strong>Oferujemy pełne spektrum potrzebnego sprzętu i
                        oprogramowania.
                    </li>
                    <li><strong>Łatwy transfer: </strong>Przesyłanie wyników inspekcji do klienta pozostaje szybkie i
                        proste.
                    </li>
                </ul>

                <a href="kontakt.wod-kan@else.pl">Skontaktuj się z naszym działem handlowym, aby dowiedzieć się
                    więcej</a>
            </>
        ),
        descriptionENG: (
            <>
                <p>Main Features:</p>

                <ul>
                    <li>
                        <strong>Instant Preview: </strong>
                        Perfect for immediate inspection from the manhole side without the need to install additional
                        equipment.
                    </li>
                    <li>
                        <strong>Versatile Use: </strong>
                        Excellent for inspecting all types of tanks, providing a complete view of the interior.
                    </li>
                    <li>
                        <strong>Mobility and Durability: </strong>
                        Lightweight and robust construction makes it an ideal tool for fieldwork.
                    </li>
                    <li>
                        <strong>Independent Power Supply: </strong>
                        Thanks to its own power source, our telescopic camera is always ready for operation.
                    </li>
                    <li>
                        <strong>Optical and Digital Zoom: </strong>
                        Provides a clear and detailed image regardless of distance.
                    </li>
                    <li>
                        <strong>Comprehensive Solution: </strong>
                        We offer a full range of necessary equipment and software.
                    </li>
                    <li>
                        <strong>Easy Transfer: </strong>
                        Transferring inspection results to the client remains quick and simple.
                    </li>
                </ul>

                <a href="mailto:kontakt.wod-kan@else.pl">
                    Contact our sales department to learn more
                </a>
            </>
        ),
    },
    manufacturers: [],
    category: [CamerasForSewageInspectionCategory],
    tags: [
        CamerasTags.MobileCameraTag
    ]
};