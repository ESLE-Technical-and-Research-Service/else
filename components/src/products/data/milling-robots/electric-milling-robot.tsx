import {ProductItem} from "../../../types/ProductItem";
import {MillingRobotsForSewerRepairAndRenovationCategory} from "../categories";
import {MillingRobotsTags} from "../tags/milling-robots-tags";
import electricMillingRobotImg01
    from "../../../../../assets/images/products/milling-robots/electric_milling_robot_01.webp";
import electricMillingRobotImg02
    from "../../../../../assets/images/products/milling-robots/electric_milling_robot_02.webp";
import electricMillingRobotImg03
    from "../../../../../assets/images/products/milling-robots/electric_milling_robot_03.webp";
import electricMillingRobotImg04
    from "../../../../../assets/images/products/milling-robots/electric_milling_robot_04.webp";
import electricMillingRobotImg05
    from "../../../../../assets/images/products/milling-robots/electric_milling_robot_05.webp";
import electricMillingRobotImg06
    from "../../../../../assets/images/products/milling-robots/electric_milling_robot_06.webp";
import electricMillingRobotImg07
    from "../../../../../assets/images/products/milling-robots/electric_milling_robot_07.webp";

export const ElectricMillingRobot: ProductItem = {
    name: {
        namePL: "Elektryczny robot frezujący",
        nameENG: "Electric milling robot"
    },
    href: "/products/water-sewage/milling-robots/electric-milling-robot",
    images: [
        electricMillingRobotImg03,
        electricMillingRobotImg01,
        electricMillingRobotImg02,
        electricMillingRobotImg04,
        electricMillingRobotImg05,
        electricMillingRobotImg06,
        electricMillingRobotImg07,
    ],
    description: {
        textPL: "Elektryczny robot frezujący do napraw i renowacji kanałów",
        textENG: "Electric milling robot for sewer repair and renovation"
    },
    detailedDescription: {
        descriptionPL: (
            <>
                <>
                    <h3>Główne cechy:</h3>

                    <p>
                        <strong>Dopasowanie do kanałów:</strong> Możliwość adaptacji do kanałów o różnej średnicy,
                        począwszy od DN150.
                    </p>

                    <p>
                        <strong>Możliwość zamontowania kamery dla szybkiej inspekcji:</strong> Możliwość zamontowania
                        kamery do szybkiej inspekcji.
                    </p>

                    <p>
                        <strong>Dokładność pracy:</strong> Oferuje precyzyjną kontrolę cięcia.
                    </p>

                    <p>
                        <strong>Zasięg:</strong> Daleki zasięg do 150m.
                    </p>

                    <p>
                        <strong>Modułowa budowa:</strong> Możliwość konfiguracji systemu dokładnie pod Twoje potrzeby,
                        czyniąc go wszechstronnym narzędziem w każdych warunkach.
                    </p>

                    <p>
                        <strong>Cicha praca, wielkie możliwości:</strong> Niski poziom hałasu pozwala na pracę w nocy,
                        nawet w miejscach zabudowanych.
                    </p>

                    <p>
                        <strong>Rozbudowane funkcje:</strong> Możliwość zamontowania kamery inspekcyjnej oraz adapterów
                        do wprowadzania kapeluszów i pakerów.
                    </p>

                    <p>
                        <strong>Potęga cięcia wodą:</strong> Przystawka do cięcia wodą pod wysokim ciśnieniem – do 3000
                        barów, gwarantuje rozbijanie trudnych do usunięcia materiałów.
                    </p>

                    <p>
                        <strong>Nieprzerwana widoczność:</strong> Automatyczna kontrola oświetlenia i ostrości zapewnia
                        krystalicznie czysty obraz. Kamera podglądowa w trakcie pracy jest czyszczona strumieniem
                        powietrza, wodą oraz mechanicznie dla nieprzerwanej widoczności. Przednia kamera zapewnia widok
                        jazdy się w kanale.
                    </p>

                    <p>
                        <strong>Zaprojektowany dla Ciebie:</strong> Mocowanie kół przy użyciu szybko złączki umożliwia
                        ich wymianę bez użycia śrub i narzędzi, co znacznie przyśpiesza przygotowanie kamery do pracy.
                        System zasilany jest własnymi bateriami, co czyni go niezależnym od zewnętrznych źródeł energii.
                    </p>
                </>
            </>
        ),
        descriptionENG: (
            <>
                <h3>Main Features:</h3>

                <p>
                    <strong>Channel Adaptation:</strong> Can be adapted to channels of various diameters, starting from
                    DN150.
                </p>

                <p>
                    <strong>Quick Inspection Camera Mounting:</strong> Allows the installation of a camera for quick
                    inspection.
                </p>

                <p>
                    <strong>Precision Operation:</strong> Offers precise cutting control.
                </p>

                <p>
                    <strong>Range:</strong> Long range up to 150m.
                </p>

                <p>
                    <strong>Modular Construction:</strong> System can be configured exactly according to your needs,
                    making it a versatile tool in any conditions.
                </p>

                <p>
                    <strong>Quiet Operation, Great Capabilities:</strong> Low noise level allows operation at night,
                    even in built-up areas.
                </p>

                <p>
                    <strong>Advanced Features:</strong> Allows the mounting of an inspection camera and adapters for
                    inserting caps and packers.
                </p>

                <p>
                    <strong>Water Cutting Power:</strong> High-pressure water cutting attachment – up to 3000 bars,
                    guarantees the breaking of hard-to-remove materials.
                </p>

                <p>
                    <strong>Uninterrupted Visibility:</strong> Automatic lighting and focus control ensures a
                    crystal-clear image. The observation camera during operation is cleaned by an air stream, water, and
                    mechanically for uninterrupted visibility. The front camera provides a view of the movement in the
                    channel.
                </p>

                <p>
                    <strong>Designed for You:</strong> Wheel mounting using quick connectors allows for easy wheel
                    replacement without screws or tools, significantly speeding up camera preparation for operation. The
                    system is powered by its own batteries, making it independent of external power sources.
                </p>
            </>
        ),
    },
    manufacturers: [],
    category: [MillingRobotsForSewerRepairAndRenovationCategory],
    tags: [
        MillingRobotsTags.BuildInSystemsOnTheChassisTag,
        MillingRobotsTags.ChannelsRenovationTag,
        MillingRobotsTags.SpecializedVehicleSuperstructureTag,
    ],
}