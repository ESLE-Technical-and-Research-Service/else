import Image, {StaticImageData} from "next/image";
import {motion} from "framer-motion";
import React from "react";

type MasonryLayoutProps = {
    images: StaticImageData[];
    imageAlt: string;
    articleRef: React.RefObject<HTMLDivElement | null>;
    isInCenter: boolean;
    scaleValue: number;
    limit: number;
    startIndex: number;
    columns: number;
};

export default function MasonryLayout({
                                          images,
                                          imageAlt,
                                          articleRef,
                                          isInCenter,
                                          scaleValue,
                                          limit,
                                          startIndex,
                                          columns
                                      }: MasonryLayoutProps) {
    return (
        <motion.div {...({
            ref: articleRef,
            animate: {scale: isInCenter ? scaleValue : 1},
            initial: {scale: 1},
            transition: {
                duration: 1.2,
                ease: "easeOut",
                type: "spring",
                stiffness: 80,
                damping: 30,
            }
        })} className="w-full px-6 py-10 bg-[var(--background)]">
            <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${columns} gap-6`}>
                {images.slice(startIndex, limit).map((src, idx) => (
                    <Image
                        key={idx}
                        src={src}
                        alt={`${imageAlt} ${idx + 1}`}
                        className="rounded-2xl shadow-xl hover:scale-105 transition-all duration-300 object-cover
                        w-full h-64 md:h-[22rem] bg-[var(--background)] border-4 border-white"
                        width={800}
                        height={500}
                        style={{objectFit: 'cover', objectPosition: 'center'}}
                    />
                ))}
            </div>
        </motion.div>
    )
}