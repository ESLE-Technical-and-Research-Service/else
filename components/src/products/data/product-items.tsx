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
import {CompactHighPressureCleaningSystems} from "./pressure-vehicles/compact-high-pressure-cleaning-systems";
import {CompactSuctionBarrelsOnATrailer} from "./pressure-vehicles/compact-suction-barrels-on-a-trailer";
import {CreateYourOwnVehicleConfiguration} from "./pressure-vehicles/create-your-own-vehicle-configuration";
import {ElectricMillingRobot} from "./milling-robots/electric-milling-robot";
import {PneumaticMillingRobot} from "./milling-robots/pneumatic-milling-robot";
import {WarthogX} from "./accessories/nozzles/warthog-x";
import {WarthogWtClassic} from "./accessories/nozzles/warthog-wt-classic";
import {WarthogWtPro} from "./accessories/nozzles/warhog-wt-pro";
import {WarthogMagnumSwitcher} from "./accessories/nozzles/warthog-magnum-switcher";
import {WarthogMagnumWgr} from "./accessories/nozzles/warthog-magnum-wgr";
import {WarthogMagnumWhr} from "./accessories/nozzles/warthog-magnum-whr";
import {Arzino} from "./accessories/nozzles/arzino";
import {Sile} from "./accessories/nozzles/sile";
import {Livenza} from "./accessories/nozzles/livenza";
import {Meduna} from "./accessories/nozzles/meduna";
import {Vortex} from "./accessories/nozzles/vortex";
import {Cellina} from "./accessories/nozzles/cellina";
import {Piciul} from "./accessories/nozzles/piciul";

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
    CompactHighPressureCleaningSystems,
    CompactSuctionBarrelsOnATrailer,
    CreateYourOwnVehicleConfiguration,
    DualFunctionSuctionFlushingVehicles,
    SuctionVehiclesForTransportingHazadousMaterials,
    VacuumAndFlushingVehiclesWithRecycling,
];

export const millingRobotsItems: ProductItem[] = [
    ElectricMillingRobot,
    PneumaticMillingRobot,
];

export const accessoriesItems: ProductItem[] = [
    Arzino,
    Cellina,
    Livenza,
    Meduna,
    Piciul,
    Sile,
    Vortex,
    WarthogX,
    WarthogMagnumSwitcher,
    WarthogMagnumWgr,
    WarthogMagnumWhr,
    WarthogWtClassic,
    WarthogWtPro,
];