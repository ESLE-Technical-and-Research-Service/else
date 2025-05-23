import explosiveProofInspecSys02
    from "../../../../../assets/images/products/cameras/explosive_proof_inspec_sys_02.webp";
import explosiveProofInspecSys01
    from "../../../../../assets/images/products/cameras/explosive_proof_inspec_sys_01.webp";
import explosiveProofInspecSys03
    from "../../../../../assets/images/products/cameras/explosive_proof_inspec_sys_03.webp";
import explosiveProofInspecSys04
    from "../../../../../assets/images/products/cameras/explosive_proof_inspec_sys_04.webp";
import explosiveProofInspecSys05
    from "../../../../../assets/images/products/cameras/explosive_proof_inspec_sys_05.webp";
import {CamerasForSewageInspectionCategory} from "../categories";
import {CamerasTags} from "../tags";
import {IBAK} from "../manufacturers/IBAK";
import {Language} from "../../../types";

export const ExplosiveProofInspectionSystems = {
    name: {
        [Language.PL]: "Systemy inspekcyjne w wersji przeciw wybuchowej Ex",
        [Language.ENG]: "Explosive-proof inspection systems",
    },
    href: "/products/water-sewage/cameras/explosive-proof-inspection-systems",
    images: [
        explosiveProofInspecSys02,
        explosiveProofInspecSys01,
        explosiveProofInspecSys03,
        explosiveProofInspecSys04,
        explosiveProofInspecSys05
    ],
    description: {
        [Language.PL]: "Systemy inspekcyjne w wersji przeciwwybuchowej Ex oferują bezpieczne i skuteczne rozwiązania dla prac w miejscach zagrożonych wybuchem. Z systemami zabudowanymi na pojeździe, przenośnymi z wózkiem samojezdnym oraz przenośnymi systemami popychanymi, mamy opcje dostosowane do każdej potrzeby.",
        [Language.ENG]: "Explosive-proof inspection systems offer secure and effective solutions for work areas prone to explosions. We have options for every need, with built-in vehicles, tow-truck and pusher systems.",
    },
    detailedDescription: {
        [Language.PL]: (
            <>
                <p>Systemy inspekcyjne w wersji przeciwwybuchowej Ex zapewniają bezpieczną pracę w miejscach zagrożonych
                    wybuchem. Oferujemy różne rozwiązania dostosowane do Twoich potrzeb, zarówno systemy zabudowane na
                    pojeździe, jak i systemy przenośne z wózkiem samojezdnym oraz przenośne systemy popychane.</p>

                <h2>
                    <strong>Główne cechy:</strong>
                </h2>

                <ul>
                    <li><strong>Bezpieczna praca: </strong>Kompletne rozwiązanie dla pracy w miejscach zagrożonych
                        wybuchem.
                    </li>
                    <li><strong>Systemy zabudowane na pojeździe: </strong>W pełni wyposażone pojazdy z częścią biurową
                        dla wygodnej pracy w terenie.
                    </li>
                    <li><strong>Systemy przenośne z wózkiem samojezdnym: </strong>Kompaktowe, łatwe w transporcie i
                        obsłudze, idealne do zadań w trudniej dostępnych miejscach.
                    </li>
                    <li><strong>Przenośne systemy popychane: </strong>Lekka, niewielkich rozmiarów konstrukcja umożliwia
                        inspekcję kanałów, rur i szybów w miejscach niedostępnych dla większych systemów.
                    </li>
                </ul>
            </>
        ),
        [Language.ENG]: (
            <>
                <p>
                    Inspection systems in the Ex explosion-proof version ensure safe operation in potentially explosive
                    environments. We offer various solutions tailored to your needs, including vehicle-mounted systems,
                    portable systems with a self-propelled crawler, and portable pushrod systems.
                </p>

                <h2>
                    <b>Main Features:</b>
                </h2>

                <ul>
                    <li>
                        <strong>Safe Operation: </strong>
                        A complete solution for working in explosive hazard areas.
                    </li>
                    <li>
                        <strong>Vehicle-Mounted Systems: </strong>
                        Fully equipped vehicles with an office area for convenient fieldwork.
                    </li>
                    <li>
                        <strong>Portable Systems with Self-Propelled Crawler: </strong>
                        Compact, easy to transport and operate—ideal for tasks in hard-to-reach areas.
                    </li>
                    <li>
                        <strong>Portable Pushrod Systems: </strong>
                        Lightweight and compact design allows inspection of pipelines, ducts, and shafts in locations
                        inaccessible to larger systems.
                    </li>
                </ul>
            </>

        ),
    },
    manufacturers: [IBAK],
    category: [CamerasForSewageInspectionCategory],
    tags: [
        CamerasTags.TransmitterForLocationTag,
        CamerasTags.TrolleyAssistantTag,
        CamerasTags.ContinuousPipeInspectionTag,
        CamerasTags.DN100Tag,
        CamerasTags.CamerasForSewageInspectionTag,
        CamerasTags.PanoramoTag,
        CamerasTags.RotaxTag,
    ]
};