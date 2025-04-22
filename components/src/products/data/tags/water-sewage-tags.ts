import {CamerasTags} from "./cameras-tags";
import {Tag} from "../../../types/Tag";
import {PressureVehiclesTags} from "./pressure-vehicles-tags";

export const WaterSewageTags: Record<string, Tag> = {
    ...CamerasTags,
    ...PressureVehiclesTags,
}