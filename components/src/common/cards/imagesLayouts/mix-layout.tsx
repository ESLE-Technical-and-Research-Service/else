import Image, {StaticImageData} from "next/image";
import {motion} from "framer-motion";
import React from "react";

type MixLayoutProps = {
    images: StaticImageData[];
    imageAlt: string;
    articleRef: React.RefObject<HTMLDivElement | null>;
    isInCenter: boolean;
    scaleValue: number;
    limit: number;
    startIndex: number;
    columns: number;
}

export default function MixLayout({
                                      images,
                                      imageAlt,
                                      articleRef,
                                      isInCenter,
                                      scaleValue,
                                      limit,
                                      startIndex,
                                      columns,
                                  }: MixLayoutProps) {
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
        })}
                    className={`mt-10 md:mt-32 mb-10 grid grid-cols-1 md:grid-cols-${columns} gap-6 
                    items-center p-6 bg-[var(--background)]`}>
            {images.slice(startIndex, limit).map((src, idx) => (
                <div key={idx} className="w-full">
                    <Image
                        src={src}
                        alt={`${imageAlt} ${idx + 1}`}
                        className="rounded-2xl shadow-xl hover:scale-105 transition-all duration-300 object-cover
                        w-full h-64 md:h-[22rem] bg-[var(--background)] border-4 border-white"
                        style={{objectPosition: 'center'}}
                    />
                </div>
            ))}
        </motion.div>
    )
}