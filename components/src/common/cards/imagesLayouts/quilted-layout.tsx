import Image from "next/image";
import {RefObject} from "react";
import {motion} from "framer-motion";
import {ContentImage} from "../../../types";

type QuiltedLayoutProps = {
    images: ContentImage[];
    articleRef: RefObject<HTMLDivElement | null>;
    isInCenter: boolean;
    scaleValue: number;
    limit: number;
    startIndex: number;
};

const pattern = [
    { colSpan: 2, rowSpan: 2 },
    { colSpan: 1, rowSpan: 1 },
    { colSpan: 1, rowSpan: 1 },
    { colSpan: 2, rowSpan: 1 },
    { colSpan: 1, rowSpan: 2 },
    { colSpan: 1, rowSpan: 1 },
    { colSpan: 2, rowSpan: 1 },
];

export default function QuiltedLayout({
                                          images,
                                          articleRef,
                                          isInCenter,
                                          scaleValue,
                                          limit,
                                          startIndex
                                      }: QuiltedLayoutProps) {
    return (
        <motion.div
            ref={articleRef}
            animate={isInCenter ? { scale: scaleValue } : { scale: 1 }}
            initial={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", type: "spring", stiffness: 80, damping: 30 }}
            className="grid grid-cols-4 auto-rows-[120px] grid-flow-dense gap-4 p-4 bg-[var(--background)]"
        >
            {images.slice(startIndex, limit).map((img, idx) => {
                const { colSpan, rowSpan } = pattern[idx % pattern.length];

                return (
                    <div
                        key={idx}
                        className={`col-span-${colSpan} row-span-${rowSpan} overflow-hidden rounded-xl border-4 border-white bg-[var(--background)]`}
                        style={{
                            gridColumn: `span ${colSpan} / span ${colSpan}`,
                            gridRow: `span ${rowSpan} / span ${rowSpan}`
                        }}
                    >
                        <Image
                            src={img.src}
                            alt={`${img.alt} ${idx + 1}`}
                            className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 object-cover w-full h-full"
                            width={800}
                            height={500}
                        />
                    </div>
                );
            })}
        </motion.div>
    );
}
