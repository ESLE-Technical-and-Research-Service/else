import {Language, Tag} from "../../../types";

const CleaningNozzlesTag: Tag = {
    name: {
        [Language.PL]: "Głowice czyszczące",
        [Language.ENG]: "Cleaning nozzles",
    },
    link: "/products/accessories/cleaning-nozzles",
};

const SmallUncloggingNozzlesTag: Tag = {
    name: {
        [Language.PL]: "Małe głowice udrażniające",
        [Language.ENG]: "Small unclogging nozzles",
    },
    link: "/products/accessories/small-unclogging-nozzles",
};

const RotatingAndVibratingNozzlesTag: Tag = {
    name: {
        [Language.PL]: "Głowice obrotowe i wibracyjne",
        [Language.ENG]: "Rotating and vibrating nozzles",
    },
    link: "/products/accessories/rotating-and-vibrating-nozzles",
};

const WarthogTag: Tag = {
    name: {
        [Language.PL]: "Warthog",
        [Language.ENG]: "Warthog",
    },
    link: "/products/accessories/warthog",
};

export const AccessoriesTags: Record<string, Tag> = {
    CleaningNozzlesTag,
    SmallUncloggingNozzlesTag,
    RotatingAndVibratingNozzlesTag,
    WarthogTag,
};