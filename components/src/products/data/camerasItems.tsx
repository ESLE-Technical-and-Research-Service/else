import {ProductItem} from "../../types/ProductItem";
import {PushrodPortableSystem} from "./cameras/pushrod-portable-system";
import {CompactTrolleySystems} from "./cameras/compact-trolley-systems";
import {MainSewerInspectionSystems} from "./cameras/main-sewer-inspection-systems";
import {ExplosiveProofInspectionSystems} from "./cameras/explosive-proof-inspection-systems";
import {TelescopicCameraForQuickInspection} from "./cameras/telescopic-camera-for-quick-inspection";

export const camerasItems: ProductItem[] = [
    TelescopicCameraForQuickInspection,
    ExplosiveProofInspectionSystems,
    MainSewerInspectionSystems,
    CompactTrolleySystems,
    PushrodPortableSystem,
]