import {Language} from "../../types";
import {Service} from "../../types/Service";
import Image from "next/image";
import {motion, useInView} from "framer-motion";
import Link from "next/link";
import AnimatedDivider from "../dividers/animated-divider";
import {useRef} from "react";

type ServiceCardProps = {
    language: Language;
    index: number;
    service: Service;
}

export default function ServiceCard({language, index, service}: ServiceCardProps) {
    const cardRef = useRef(null);
    const isInCenter = useInView(cardRef, {
        amount: 0.5,
        margin: "-30% 0px -30% 0px",
    });
    
    const isReversed = index % 2 === 1;
    const flexDirection = isReversed ? 'md:flex-row-reverse' : 'md:flex-row';

    let scaleValue = 1.15;
    if (typeof window !== 'undefined') {
        if (window.innerWidth < 768) {
            scaleValue = 1.03;
        } else if (window.innerWidth < 1024) {
            scaleValue = 1;
        }
    }

    return (
        <motion.article
            key={index}
            ref={cardRef}
            animate={{ scale: isInCenter ? scaleValue : 1}}
            className={`mb-20 last:mb-0 pb-12 border-b border-gray-200 flex flex-col ${flexDirection} items-center md:items-stretch gap-8 md:gap-0`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{duration: 1.2, delay: index * 0.25, ease: "easeOut", type: "spring", stiffness: 80, damping: 30}}
            viewport={{once: true, amount: 0.3}}
        >
            <motion.div
                className={`md:w-1/2 mb-12 md:mb-0 ${isReversed ? 'md:pl-4 md:pr-0' : 'md:pr-4 md:pl-0'}`}
                initial={{
                    x: isReversed ? 100 : -100,
                    opacity: 0
                }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 2, delay: index * 0.75, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <Image
                    src={service.heroImage}
                    alt={language === 'PL' ? service.name.namePL : service.name.nameENG}
                    className="rounded-xl w-full h-auto max-h-80 object-cover shadow-lg transition-transform duration-300 hover:scale-105"
                    width={600}
                    height={320}
                />
            </motion.div>
            <div className={`md:w-1/2 ${isReversed ? 'md:pr-4 md:pl-0' : 'md:pl-4 md:pr-0'}`}>
                <header className="mb-4">
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-2 flex items-center gap-2">
                        {/* Optional: Number or icon */}
                        <span className="inline-block text-xl font-bold text-[var(--font-color-accent)]">
                                        {index + 1 < 10 ? `0${index + 1}` : index + 1}
                                    </span>
                        {language === 'PL' ? service.name.namePL : service.name.nameENG}
                    </h2>
                    <AnimatedDivider delay={index + 1}/>
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