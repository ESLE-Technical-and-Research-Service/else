import {Service} from "../../types/Service";
import {CameraService} from "./camera-service";
import {PressureVehiclesService} from "./pressure-vehicles-service";
import {TechnicalSupport} from "./technical-support";
import {Trainings} from "./trainings";

export const servicesItems: Service[] = [
    CameraService,
    PressureVehiclesService,
    TechnicalSupport,
    Trainings,
];