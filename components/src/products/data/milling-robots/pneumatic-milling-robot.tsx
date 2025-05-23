import {Language, ProductItem} from "../../../types";
import {MillingRobotsForSewerRepairAndRenovationCategory} from "../categories";
import {MillingRobotsTags} from "../tags";
import {IBAK} from "../manufacturers/IBAK";
import pneumaticMillingRobotImg01
    from "../../../../../assets/images/products/milling-robots/pneumatic_milling_robot_03.webp";
import pneumaticMillingRobotImg02
    from "../../../../../assets/images/products/milling-robots/pneumatic_milling_robot_05.webp";
import pneumaticMillingRobotImg03
    from "../../../../../assets/images/products/milling-robots/pneumatic_milling_robot_06.webp";
import pneumaticMillingRobotImg04
    from "../../../../../assets/images/products/milling-robots/pneumatic_milling_robot_07.webp";
import pneumaticMillingRobotImg05
    from "../../../../../assets/images/products/milling-robots/pneumatic_milling_robot_08.webp";
import pneumaticMillingRobotImg06
    from "../../../../../assets/images/products/milling-robots/pneumatic_milling_robot_09.webp";
import pneumaticMillingRobotImg07
    from "../../../../../assets/images/products/milling-robots/pneumatic_milling_robot_10.webp";
import pneumaticMillingRobotImg08
    from "../../../../../assets/images/products/milling-robots/pneumatic_milling_robot_11.webp";

export const PneumaticMillingRobot: ProductItem = {
    name: {
        [Language.PL]: "Pneumatyczny robot frezujący",
        [Language.ENG]: "Pneumatic milling robot"
    },
    href: "/products/water-sewage/milling-robots/pneumatic-milling-robot",
    images: [
        pneumaticMillingRobotImg08,
        pneumaticMillingRobotImg06,
        pneumaticMillingRobotImg05,
        pneumaticMillingRobotImg07,
        pneumaticMillingRobotImg01,
        pneumaticMillingRobotImg02,
        pneumaticMillingRobotImg03,
        pneumaticMillingRobotImg04,
    ],
    description: {
        [Language.PL]: "Pneumatyczny robot frezujący do napraw i renowacji kanałów",
        [Language.ENG]: "Pneumatic milling robot for sewer repair and renovation"
    },
    detailedDescription: {
        [Language.PL]: (
            <>
                <h3>Główne cechy:</h3>

                <p>
                    <strong>Dostosowanie do średnicy kanału:</strong> Z łatwością pracuje w kanałach o każdej średnicy, począwszy od DN200.
                </p>

                <p>
                    <strong>Klasyczna kamera:</strong> Możliwość zamontowania kamery dla szybkiej inspekcji.
                </p>

                <p>
                    <strong>Dokładność pracy:</strong> Oferuje precyzyjną kontrolę cięcia.
                </p>

                <p>
                    <strong>Zasięg:</strong> Pozwala na pracę w odległości do 300m.
                </p>

                <p>
                    <strong>Modułowa budowa:</strong> Możliwość konfiguracji systemu dokładnie pod Twoje potrzeby, czyniąc go wszechstronnym narzędziem w każdych warunkach.
                </p>

                <p>
                    <strong>Rozbudowane funkcje:</strong> Możliwość zamontowania kamery inspekcyjnej oraz adapterów do wprowadzania kapeluszów i pakerów.
                </p>

                <p>
                    <strong>Potęga cięcia wodą:</strong> Przystawka do cięcia wodą pod wysokim ciśnieniem – do 3000 barów, gwarantuje rozbijanie trudnych do usunięcia materiałów.
                </p>

                <p>
                    <strong>Nieprzerwana widoczność:</strong> Automatyczna kontrola oświetlenia i ostrości zapewnia krystalicznie czysty obraz. Kamera podglądowa w trakcie pracy jest czyszczona strumieniem powietrza, wodą oraz mechanicznie dla nieprzerwanej widoczności. Przednia kamera zapewnia widok jazdy się w kanale.
                </p>

                <p>
                    <strong>Funkcje pomiarowe:</strong> Wszechstronne narzędzie pomiarowe oferujące analizę spadków, średnicy, uszkodzeń, temperatury oraz kompletną analizę profilu kanału.
                </p>

                <p>
                    <strong>Zaprojektowany dla Ciebie:</strong> Mocowanie kół przy użyciu szybko złączki umożliwia ich wymianę bez użycia śrub i narzędzi, co znacznie przyśpiesza przygotowanie kamery do pracy. System zasilany jest własnymi bateriami, co czyni go niezależnym od zewnętrznych źródeł energii.
                </p>

                <p>
                    <strong>Prostota i wygoda:</strong> Cały system został zaprojektowany z myślą o obsłudze przez jedną osobę, czyniąc go niezwykle prostym i praktycznym w użyciu.
                </p>

                <p>
                    Z tym robotem frezującym prace renowacyjne stają się łatwiejsze, szybsze i bardziej precyzyjne. Dostosuj system do swoich potrzeb i korzystaj z niezrównanej jakości w każdym projekcie.
                </p>
            </>
        ),
        [Language.ENG]: (
            <>
                <h3>Main Features:</h3>

                <p>
                    <strong>Adaptability to pipe diameters:</strong> Easily operates in pipes of any diameter, starting from DN200.
                </p>

                <p>
                    <strong>Classic camera:</strong> Option to mount a camera for quick inspections.
                </p>

                <p>
                    <strong>Cutting precision:</strong> Offers precise cutting control.
                </p>

                <p>
                    <strong>Range:</strong> Allows operation at distances up to 300m.
                </p>

                <p>
                    <strong>Modular design:</strong> The system can be configured exactly to your needs, making it a versatile tool for any condition.
                </p>

                <p>
                    <strong>Extended functionality:</strong> Option to mount an inspection camera and adapters for inserting liners and packers.
                </p>

                <p>
                    <strong>Water jet cutting power:</strong> High-pressure water cutting attachment – up to 3000 bar, effectively breaks down even the toughest materials.
                </p>

                <p>
                    <strong>Continuous visibility:</strong> Automatic light and focus control ensures a crystal-clear image. The monitoring camera is cleaned with air, water, and mechanical means during operation to maintain uninterrupted visibility. The front camera provides a view while driving inside the pipe.
                </p>

                <p>
                    <strong>Measurement functions:</strong> A multifunctional measuring tool offering slope, diameter, damage, and temperature analysis, along with a full channel profile assessment.
                </p>

                <p>
                    <strong>Designed for you:</strong> Quick-release wheel mounting enables tool-free changes, significantly speeding up camera preparation. The system is powered by its own batteries, making it independent from external power sources.
                </p>

                <p>
                    <strong>Simplicity and convenience:</strong> The entire system is designed for one-person operation, making it extremely simple and practical to use.
                </p>

                <p>
                    With this milling robot, rehabilitation work becomes easier, faster, and more precise. Customize the system to your needs and benefit from unmatched quality in every project.
                </p>
            </>
        ),
    },
    manufacturers: [IBAK],
    category: [MillingRobotsForSewerRepairAndRenovationCategory],
    tags: [
        MillingRobotsTags.SpecializedVehicleSuperstructureTag,
        MillingRobotsTags.BuildInSystemsOnTheChassisTag,
    ],
}