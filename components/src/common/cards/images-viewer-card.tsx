'use client';

import {Language} from "../../types";
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/24/outline";
import Image, {StaticImageData} from "next/image";
import {useState} from "react";

type ImagesViewerCardProps = {
    images: StaticImageData[];
    productName: string;
    lang: Language;
}

export default function ImagesViewerCard({images, productName, lang}: ImagesViewerCardProps) {
    const [selectedImgIdx, setSelectedImgIdx] = useState(0);
    const [dialogOpen, setDialogOpen] = useState(false);
    const selectedImg = images[selectedImgIdx];

    return (
        <>
            <div className="w-full flex flex-col items-center relative">
                {selectedImg && (
                    <div
                        data-testid="images-viewer-card"
                        className="relative w-full aspect-[4/3] max-w-xs sm:max-w-xl mb-4 mx-auto flex
                            items-center justify-center"
                    >
                        {/* Left arrow */}
                        {images.length > 1 && selectedImgIdx > 0 && (
                            <button
                                data-testid="images-viewer-card-left-arrow"
                                type="button"
                                onClick={() => setSelectedImgIdx(selectedImgIdx - 1)}
                                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80
                                    hover:bg-blue-100 border border-blue-200 rounded-full p-2 shadow
                                    focus:outline-none focus:ring-2 focus:ring-blue-300"
                                aria-label={lang === Language.PL ? 'Poprzednie zdjęcie' : 'Previous image'}
                            >
                                <ChevronLeftIcon className="h-6 w-6 text-blue-500"/>
                            </button>
                        )}
                        <button
                            data-testid="images-viewer-card-current-image-button"
                            type="button"
                            className="relative w-full h-full rounded-lg overflow-hidden border shadow-sm
                                bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                            onClick={() => setDialogOpen(true)}
                        >
                            <Image src={selectedImg} alt={productName} fill style={{objectFit: 'contain'}}/>
                        </button>

                        {/* Right arrow */}
                        {images.length > 1 && selectedImgIdx < images.length - 1 && (
                            <button
                                data-testid="images-viewer-card-right-arrow"
                                type="button"
                                onClick={() => setSelectedImgIdx(selectedImgIdx + 1)}
                                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80
                                    hover:bg-blue-100 border border-blue-200 rounded-full p-2 shadow
                                    focus:outline-none focus:ring-2 focus:ring-blue-300"
                                aria-label={lang === Language.PL ? 'Następne zdjęcie' : 'Next image'}
                            >
                                <ChevronRightIcon className="h-6 w-6 text-blue-500"/>
                            </button>
                        )}
                    </div>
                )}

                {/* Thumbnails */}
                {images.length > 1 && (
                    <div
                        data-testid="images-viewer-card-thumbnails-container"
                        className="flex gap-2 mt-3 flex-wrap justify-center"
                    >
                        {images.map((img, idx) => (
                            <button
                                data-testid="images-viewer-card-thumbnail-button"
                                key={idx}
                                type="button"
                                onClick={() => setSelectedImgIdx(idx)}
                                className={`relative w-20 h-14 sm:w-24 sm:h-16 rounded border bg-white 
                                    overflow-hidden focus:outline-none 
                                    ${selectedImgIdx === idx ? 'ring-2 ring-blue-500' : 'hover:ring-2 hover:ring-blue-300'}`}
                            >
                                <Image src={img} alt={productName + ' thumbnail'} fill style={{objectFit: 'contain'}}/>
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Dialog for high quality image */}
            {dialogOpen && selectedImg && (
                <div
                    data-testid="image-viewer-dialog-container"
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
                    onClick={() => setDialogOpen(false)}
                >
                    <div
                        data-testid="image-viewer-dialog-content"
                        className="relative max-w-3xl w-full p-2 sm:p-4"
                        onClick={e => e.stopPropagation()}
                    >
                        <button
                            data-testid="image-viewer-dialog-full-image-close-button"
                            className="absolute top-2 right-2 text-white text-2xl font-bold z-10"
                            onClick={() => setDialogOpen(false)}
                        >
                            &times;
                        </button>
                        <div
                            data-testid="image-viewer-dialog-full-image"
                            className="relative w-full aspect-[4/3] bg-white rounded-lg overflow-hidden"
                        >
                            <Image src={selectedImg} alt={productName + ' large'} fill style={{objectFit: 'contain'}}
                                   priority/>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
