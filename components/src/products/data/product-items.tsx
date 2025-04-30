import {ProductItem} from "../../types/ProductItem";
import {PushrodPortableSystem} from "./cameras/pushrod-portable-system";
import {CompactTrolleySystems} from "./cameras/compact-trolley-systems";
import {PipeRunMeasurementInMainSewersSystems} from "./cameras/pipe-run-measurement-in-main-sewers-systems";
import {ExplosiveProofInspectionSystems} from "./cameras/explosive-proof-inspection-systems";
import {TelescopicCameraForQuickInspection} from "./cameras/telescopic-camera-for-quick-inspection";
import {InspectionSystemForLateralPipes} from "./cameras/inspection-system-for-lateral-pipes";
import {Panoramo4KScannersForMainlineSewer} from "./cameras/panoramo-4k-scanners-for-mainline-sewer";
import {PanoramoSi4kManholeInspectionScanner} from "./cameras/panoramo-si-4k-manhole-inspection-scanner";
import {LeakTestingSystem} from "./cameras/leak-testing-system";
import {SystemWithCameraAndCleaningNozzle} from "./cameras/system-with-camera-and-cleaning-nozzle";
import {OfficeSoftwareForNetworkManagement} from "./cameras/office-software-for-network-management";
import {VacuumAndFlushingVehiclesWithRecycling} from "./pressure-vehicles/vacuum-and-flushing-vehicles-with-recycling";
import {DualFunctionSuctionFlushingVehicles} from "./pressure-vehicles/dual-function-suction-flushing-vehicles";
import {
    SuctionVehiclesForTransportingHazadousMaterials
} from "./pressure-vehicles/suction-vehicles-for-transporting-hazadous-materials";
import {AutomaticStreetInletsCleaningVehicles} from "./pressure-vehicles/automatic-street-inlets-cleaning-vehicles";

export const camerasItems: ProductItem[] = [
    TelescopicCameraForQuickInspection,
    ExplosiveProofInspectionSystems,
    PipeRunMeasurementInMainSewersSystems,
    CompactTrolleySystems,
    PushrodPortableSystem,
    InspectionSystemForLateralPipes,
    Panoramo4KScannersForMainlineSewer,
    PanoramoSi4kManholeInspectionScanner,
    LeakTestingSystem,
    SystemWithCameraAndCleaningNozzle,
    OfficeSoftwareForNetworkManagement,
];

export const pressureVehiclesItems: ProductItem[] = [
    AutomaticStreetInletsCleaningVehicles,
    DualFunctionSuctionFlushingVehicles,
    SuctionVehiclesForTransportingHazadousMaterials,
    VacuumAndFlushingVehiclesWithRecycling,
];