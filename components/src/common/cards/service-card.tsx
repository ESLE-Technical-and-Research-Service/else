import {Language} from "../../types";
import {Service} from "../../types/Service";
import Image from "next/image";
import {motion} from "framer-motion";
import Link from "next/link";

type ServiceCardProps = {
    language: Language;
    index: number;
    service: Service;
}

export default function ServiceCard({language, index, service}: ServiceCardProps) {
    const flexDirection = index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row';
    return (
        <motion.article
            key={index}
            className={`mb-16 last:mb-0 pb-12 border-b border-gray-200 flex flex-col ${flexDirection} items-center gap-8`}
            style={{ position: 'relative' }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.35, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className="md:w-1/2 mb-6 md:mb-0">
                <Image
                    src={service.heroImage}
                    alt={language === 'PL' ? service.name.namePL : service.name.nameENG}
                    className="rounded-xl w-full h-auto max-h-80 object-cover shadow-lg transition-transform duration-300 hover:scale-105"
                    width={600}
                    height={320}
                />
            </div>
            <div className="md:w-1/2">
                <header className="mb-4">
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-2 flex items-center gap-2">
                        {/* Optional: Number or icon */}
                        <span className="inline-block text-xl font-bold text-[var(--font-color-accent)]">
                                        {index + 1 < 10 ? `0${index + 1}` : index + 1}
                                    </span>
                        {language === 'PL' ? service.name.namePL : service.name.nameENG}
                    </h2>
                    <span className="inline-block w-10 h-1 bg-[var(--font-color-accent)] rounded transition-all group-hover:w-16"></span>
                </header>
                <div className="prose prose-lg max-w-none text-gray-700 mb-6">
                    <p>
                        {language === 'PL' ? service.description.textPL : service.description.textENG}
                    </p>
                </div>
                <Link
                    href={service.href}
                    className="text-[var(--font-color-accent)] font-semibold hover:underline"
                >
                    {language === 'PL' ? 'Dowiedz się więcej' : 'Learn more'} &rarr;
                </Link>
            </div>
        </motion.article>
    );
}