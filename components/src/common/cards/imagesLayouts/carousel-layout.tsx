import {motion} from "framer-motion";
import Image from "next/image";
import React, {RefObject, useState} from "react";
import {ContentImage} from "../../../types";

type CarouselLayoutProps = {
    images: ContentImage[],
    articleRef: RefObject<HTMLDivElement | null>,
    isInCenter: boolean,
    scaleValue: number,
    limit: number,
    startIndex: number
}

export default function CarouselLayout({
                                           images,
                                           articleRef,
                                           isInCenter,
                                           scaleValue,
                                           limit,
                                           startIndex
                                       }: CarouselLayoutProps) {
    const [current, setCurrent] = useState<number>(0);

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
        })} className="relative overflow-hidden w-full max-w-4xl mx-auto bg-[var(--background)] p-6 rounded-xl shadow-lg">
            <motion.div
                className="flex"
                drag="x"
                dragConstraints={{left: -((images.length - 1) * 1000), right: 0}}
                animate={{x: -current * 100 + '%'}}
                transition={{type: "spring", stiffness: 300, damping: 30}}
            >
                {images.slice(startIndex, limit).map((img, idx) => (
                    <div key={idx} className="w-full shrink-0 px-2">
                        <Image
                            src={img.src}
                            alt={`${img.alt} ${idx + 1}`}
                            className="rounded-2xl shadow-xl hover:scale-105 transition-all duration-300
                            object-cover w-full h-64 md:h-[24rem] bg-[var(--background)] border-4 border-white"
                            style={{objectPosition: 'center', objectFit: 'cover'}}
                            width={800}
                            height={500}
                        />
                    </div>
                ))}
            </motion.div>

            {/* Navigation Buttons */}
            <div className="absolute inset-y-1/2 left-4 flex items-center z-10">
                <button
                    onClick={() => setCurrent((prev) => Math.max(prev - 1, 0))}
                    className="p-2 rounded-full bg-[var(--background)] shadow hover:scale-110 transition"
                >
                    ◀
                </button>
            </div>
            <div className="absolute inset-y-1/2 right-4 flex items-center z-10">
                <button
                    onClick={() => setCurrent((prev) => Math.min(prev + 1, images.length - 1))}
                    className="p-2 rounded-full bg-[var(--background)] shadow hover:scale-110 transition"
                >
                    ▶
                </button>
            </div>
        </motion.div>
    );
}