import {Tag} from "../../../types/Tag";

const BuildInSystemsOnTheChassisTag: Tag = {
    namePL: "Systemy zabudowane na podwoziu",
    nameENG: "Chassis-mounted systems",
    link: "/products/milling-robots?name=chassis-mounted-systems",
};

const ChannelsRenovationTag: Tag = {
    namePL: "Renowacja kanałów",
    nameENG: "Channels renovation",
    link: "/products/milling-robots?name=channels-renovation",
};

const SpecializedVehicleSuperstructureTag: Tag = {
    namePL: "Specjalistyczne zabudowy na pojazdach",
    nameENG: "Specialized vehicle bodies",
    link: "/products/milling-robots?name=specialized-vehicle-bodies",
}

export const MillingRobotsTags: Record<string, Tag> = {
    BuildInSystemsOnTheChassisTag,
    ChannelsRenovationTag,
    SpecializedVehicleSuperstructureTag,
};