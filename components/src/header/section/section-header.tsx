import {Language} from "../../types";
import HeaderDivider from "../../common/dividers/header-divider";

type SectionHeaderProps = {
    language: Language;
    title: {
        labelPL: string;
        labelENG: string;
    };
    subtitle: {
        labelPL: string;
        labelENG: string;
    };
}

export default function SectionHeader({language, title, subtitle}: SectionHeaderProps) {
    return (
        <section className="w-full bg-[var(--background)] py-16">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <HeaderDivider title={title} isVisible={true}/>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    {
                        language === Language.PL
                            ? subtitle.labelPL
                            : subtitle.labelENG
                    }
                </p>
            </div>
        </section>
    )
}