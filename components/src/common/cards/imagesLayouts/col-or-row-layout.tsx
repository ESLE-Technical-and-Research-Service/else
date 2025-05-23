import Image from "next/image";
import React from "react";
import {ContentImage, ImagesGridLayout} from "../../../types";
import {motion} from "framer-motion";

type ColOrRowLayoutProps = {
    direction: ImagesGridLayout;
    images: ContentImage[];
    articleRef: React.RefObject<HTMLDivElement | null>;
    isInCenter: boolean;
    scaleValue: number;
    limit: number;
    startIndex: number;
}

export default function ColOrRowLayout({
                                           direction,
                                           images,
                                           articleRef,
                                           isInCenter,
                                           scaleValue,
                                           limit,
                                           startIndex
                                       }: ColOrRowLayoutProps) {
    return (
        <motion.div
            ref={articleRef}
            animate={{scale: isInCenter ? scaleValue : 1}}
            initial={{scale: 1}}
            transition={{duration: 1.2, ease: "easeOut", type: "spring", stiffness: 80, damping: 30}}
            className={`flex ${direction === ImagesGridLayout.ROW
                ? 'flex-row flex-wrap justify-center'
                : 'flex-col'
            } gap-6 items-center`}
        >
            {images.slice(startIndex, limit).map((img, idx) => (
                <Image
                    key={idx}
                    src={img.src}
                    alt={`${img.alt} ${idx + 1}`}
                    className={`"rounded-2xl shadow-xl hover:scale-105 transition-all duration-300 object-cover" w-full 
                    ${direction === ImagesGridLayout.ROW
                        ? 'md:w-[calc(50%-0.75rem)]'
                        : 'md:w-2/3'
                    } h-64 md:h-[22rem] bg-[var(--background)] border-4 border-white`}
                    style={{objectPosition: 'center', objectFit: 'cover' }}
                />
            ))}
        </motion.div>
    )
}