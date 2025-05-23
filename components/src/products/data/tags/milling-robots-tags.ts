import {Language, Tag} from "../../../types";

const BuildInSystemsOnTheChassisTag: Tag = {
    name: {
        [Language.PL]: "Systemy zabudowane na podwoziu",
        [Language.ENG]: "Chassis-mounted systems",
    },
    link: "/products/milling-robots?name=chassis-mounted-systems",
};

const ChannelsRenovationTag: Tag = {
    name: {
        [Language.PL]: "Renowacja kanałów",
        [Language.ENG]: "Channels renovation",
    },
    link: "/products/milling-robots?name=channels-renovation",
};

const SpecializedVehicleSuperstructureTag: Tag = {
    name: {
        [Language.PL]: "Specjalistyczne zabudowy na pojazdach",
        [Language.ENG]: "Specialized vehicle bodies",
    },
    link: "/products/milling-robots?name=specialized-vehicle-bodies",
}

export const MillingRobotsTags: Record<string, Tag> = {
    BuildInSystemsOnTheChassisTag,
    ChannelsRenovationTag,
    SpecializedVehicleSuperstructureTag,
};