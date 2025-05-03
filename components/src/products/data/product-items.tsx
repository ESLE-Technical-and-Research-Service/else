import {ProductItem} from "../../types/ProductItem";
import {
    CompactTrolleySystems,
    ExplosiveProofInspectionSystems,
    InspectionSystemForLateralPipes,
    LeakTestingSystem,
    OfficeSoftwareForNetworkManagement,
    Panoramo4KScannersForMainlineSewer,
    PanoramoSi4kManholeInspectionScanner,
    PipeRunMeasurementInMainSewersSystems,
    PushrodPortableSystem,
    SystemWithCameraAndCleaningNozzle,
    TelescopicCameraForQuickInspection
} from "./cameras";
import {
    AutomaticStreetInletsCleaningVehicles,
    CompactHighPressureCleaningSystems,
    CompactSuctionBarrelsOnATrailer,
    CreateYourOwnVehicleConfiguration,
    DualFunctionSuctionFlushingVehicles,
    SuctionVehiclesForTransportingHazadousMaterials,
    VacuumAndFlushingVehiclesWithRecycling
} from "./pressure-vehicles";
import {ElectricMillingRobot, PneumaticMillingRobot} from "./milling-robots";
import {
    Arzino,
    Cellina,
    Gris,
    Livenza,
    Malnis,
    Meduna,
    Piciul,
    Ravedis,
    RdsV,
    Rotospin,
    Sile,
    Small,
    Tremol,
    Vortex,
    WarthogMagnumSwitcher,
    WarthogMagnumWgr,
    WarthogMagnumWhr,
    WarthogWtClassic,
    WarthogWtPro,
    WarthogX
} from "./accessories/nozzles";

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
    Gris,
    Livenza,
    Malnis,
    Meduna,
    Piciul,
    Sile,
    Small,
    Ravedis,
    RdsV,
    Rotospin,
    Tremol,
    Vortex,
    WarthogX,
    WarthogMagnumSwitcher,
    WarthogMagnumWgr,
    WarthogMagnumWhr,
    WarthogWtClassic,
    WarthogWtPro,
];