import React, {useState} from "react";
import Image from "next/image";
import {ProductItem} from "../types/ProductItem";
import {Language} from "../../../context/src/types/Language";
import ContactUsCard from "../common/cards/contact-us-card";
import elseLogo from "../../../assets/images/logoElse.webp";
import {ChevronLeftIcon, ChevronRightIcon, ShareIcon} from "@heroicons/react/24/outline";

interface ProductDetailsProps {
    product: ProductItem;
    lang: Language;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({product, lang}: ProductDetailsProps) => {
    const name = lang === Language.PLN ? product.name.namePL : product.name.nameENG;
    const description = lang === Language.PLN ? product.description.textPL : product.description.textENG;
    const detailedDescription = lang === Language.PLN ? product.detailedDescription.descriptionPL : product.detailedDescription.descriptionENG;

    const [selectedImgIdx, setSelectedImgIdx] = useState(0);
    const [dialogOpen, setDialogOpen] = useState(false);

    const images = product.images || [];
    const selectedImg = images[selectedImgIdx];

    return (
        <section
            className="w-full flex flex-col md:flex-row gap-8 max-w-screen-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden my-4 p-0 md:p-10"
        >
            {/* Left column: title, images, description, detailed description */}
            <div
                className="w-full md:w-2/3 flex flex-col items-center bg-gray-50 p-4 sm:p-6 md:rounded-l-xl border-b md:border-b-0 md:border-r relative"
            >
                {/* Share button at top right */}
                <button
                    type="button"
                    onClick={() => {
                        if (navigator.share) {
                            navigator.share({
                                title: name,
                                url: window.location.href
                            });
                        } else {
                            navigator.clipboard.writeText(window.location.href);
                            alert(lang === Language.PLN ? "Link skopiowany do schowka!" : "Link copied to clipboard!");
                        }
                    }}
                    className="absolute top-2 right-2 sm:top-4 sm:right-4 z-20 bg-white/80 hover:bg-blue-50 border border-blue-200 rounded-full p-2 shadow transition-all focus:outline-none focus:ring-2 focus:ring-blue-300"
                    aria-label={lang === Language.PLN ? "Udostępnij" : "Share"}
                >
                    <ShareIcon className="h-6 w-6 text-blue-500"/>
                </button>
                {/* Title */}
                <div
                    className="text-2xl sm:text-3xl font-semibold text-center text-gray-800 mb-4 sm:mb-8 w-full break-words">
                    {name}
                </div>
                {/* Image viewer */}
                <div className="w-full flex flex-col items-center relative">
                    {selectedImg && (
                        <div
                            className="relative w-full aspect-[4/3] max-w-xs sm:max-w-xl mb-4 mx-auto flex
                            items-center justify-center"
                        >
                            {/* Left arrow */}
                            {images.length > 1 && selectedImgIdx > 0 && (
                                <button
                                    type="button"
                                    onClick={() => setSelectedImgIdx(selectedImgIdx - 1)}
                                    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80
                                    hover:bg-blue-100 border border-blue-200 rounded-full p-2 shadow
                                    focus:outline-none focus:ring-2 focus:ring-blue-300"
                                    aria-label={lang === Language.PLN ? 'Poprzednie zdjęcie' : 'Previous image'}
                                >
                                    <ChevronLeftIcon className="h-6 w-6 text-blue-500"/>
                                </button>
                            )}
                            <button
                                type="button"
                                className="relative w-full h-full rounded-lg overflow-hidden border shadow-sm
                                bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                                onClick={() => setDialogOpen(true)}
                            >
                                <Image src={selectedImg} alt={name} fill style={{objectFit: 'contain'}}/>
                            </button>

                            {/* Right arrow */}
                            {images.length > 1 && selectedImgIdx < images.length - 1 && (
                                <button
                                    type="button"
                                    onClick={() => setSelectedImgIdx(selectedImgIdx + 1)}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80
                                    hover:bg-blue-100 border border-blue-200 rounded-full p-2 shadow
                                    focus:outline-none focus:ring-2 focus:ring-blue-300"
                                    aria-label={lang === Language.PLN ? 'Następne zdjęcie' : 'Next image'}
                                >
                                    <ChevronRightIcon className="h-6 w-6 text-blue-500"/>
                                </button>
                            )}
                        </div>
                    )}

                    {/* Thumbnails */}
                    {images.length > 1 && (
                        <div className="flex gap-2 mt-3 flex-wrap justify-center">
                            {images.map((img, idx) => (
                                <button
                                    key={idx}
                                    type="button"
                                    onClick={() => setSelectedImgIdx(idx)}
                                    className={`relative w-20 h-14 sm:w-24 sm:h-16 rounded border bg-white 
                                    overflow-hidden focus:outline-none 
                                    ${selectedImgIdx === idx ? 'ring-2 ring-blue-500' : 'hover:ring-2 hover:ring-blue-300'}`}
                                >
                                    <Image src={img} alt={name + ' thumbnail'} fill style={{objectFit: 'contain'}}/>
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Dialog for high quality image */}
                {dialogOpen && selectedImg && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
                         onClick={() => setDialogOpen(false)}>
                        <div className="relative max-w-3xl w-full p-2 sm:p-4" onClick={e => e.stopPropagation()}>
                            <button className="absolute top-2 right-2 text-white text-2xl font-bold z-10"
                                    onClick={() => setDialogOpen(false)}>&times;</button>
                            <div className="relative w-full aspect-[4/3] bg-white rounded-lg overflow-hidden">
                                <Image src={selectedImg} alt={name + ' large'} fill style={{objectFit: 'contain'}}
                                       priority/>
                            </div>
                        </div>
                    </div>
                )}

                {/* Description */}
                <div className="w-full mt-4 sm:mt-6">
                    <div className="text-gray-700 text-base sm:text-lg mb-2 sm:mb-4 break-words">{description}</div>
                    <div
                        className="prose prose-blue max-w-none text-sm sm:text-base md:text-lg leading-relaxed !text-gray-800 [&_ul]:!list-disc [&_ul]:!pl-6 [&_li]:!marker:text-blue-600 [&_li]:!text-gray-900 [&_li]:mb-2 sm:[&_li]:mb-3 [&_strong]:block [&_strong]:mb-2 [&_p]:mb-2 sm:[&_p]:mb-3">
                        {detailedDescription}
                    </div>
                </div>
            </div>

            {/* Right column: category, tags, manufacturer, contact */}
            <div className="w-full md:w-1/3 flex flex-col gap-6 p-4 sm:p-6">
                {/* Manufacturer */}
                <div>
                    <span className="font-semibold text-gray-700 mr-2">
                        {lang === Language.PLN ? "Producent:" : "Manufacturer:"}
                    </span>
                    <div className="flex flex-wrap gap-2 sm:gap-4 mt-2 items-center justify-center md:justify-start">
                        {product.manufacturers.map((man) => (
                            <a key={man.name} href={man.link} target="_blank" rel="noopener noreferrer"
                               className="flex flex-col items-center group">
                                <div
                                    className="relative w-20 h-10 sm:w-28 sm:h-14 flex items-center justify-center bg-white overflow-hidden p-2 mb-1"
                                >
                                    <Image src={man.image} alt={man.name} fill style={{objectFit: 'contain'}}/>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
                {/* Categories */}
                {product.category.length > 0 && (
                    <div className="mb-2">
                        <span
                            className="font-semibold text-gray-700 mr-2">
                            {lang === Language.PLN ? "Kategorie:" : "Categories:"}
                        </span>
                        {product.category.map((cat, idx) => (
                            <a key={cat.link} href={cat.link}
                               className="inline-block text-blue-600 hover:underline mr-2">
                                {lang === Language.PLN ? cat.namePL : cat.nameENG}
                                {idx < product.category.length - 1 ? ", " : ""}
                            </a>
                        ))}
                    </div>
                )}
                {/* Tags */}
                {product.tags.length > 0 && (
                    <div className="mb-2">
                        <p
                            className="font-semibold text-gray-700 mr-2"
                        >
                            {lang === Language.PLN ? "Tagi:" : "Tags:"}
                        </p>
                        {product.tags.map((tag) => (
                            <a key={tag.link} href={tag.link}
                               className="inline-block bg-blue-100 text-blue-700 px-2 py-1 rounded mr-2 sm:mr-4 mt-2 text-sm sm:text-base hover:bg-blue-200">
                                {lang === Language.PLN ? tag.namePL : tag.nameENG}
                            </a>
                        ))}
                    </div>
                )}
                {/* Contact Button - glassmorphic alternative */}
                <ContactUsCard lang={lang}/>
                <Image
                    src={elseLogo}
                    alt="Logo ELSE"
                    className="w-2/3 sm:w-1/2 mx-auto mt-4"
                />
            </div>
        </section>
    );
};

export default ProductDetails;
