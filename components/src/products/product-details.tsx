import React from "react";
import Image from "next/image";
import {Language, ProductItem} from "../types";
import ContactUsCard from "../common/cards/contact-us-card";
import elseLogo from "../../../assets/images/logoElse.webp";
import {ManufacturerCard} from "../common/cards/manufacturer-card";
import TagsCard from "../common/cards/tags-card";
import CategoryCard from "../common/cards/category-card";
import ImagesViewerCard from "../common/cards/images-viewer-card";
import ShareButton from "../common/buttons/share-button";
import HeaderDivider from "../common/dividers/header-divider";
import RecommendedProducts from "../common/cards/recommended-products";

interface ProductDetailsProps {
    product: ProductItem;
    lang: Language;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({product, lang}: ProductDetailsProps) => {
    const productName = lang === Language.PL ? product.name.namePL : product.name.nameENG;
    const description = lang === Language.PL ? product.description.textPL : product.description.textENG;
    const detailedDescription = lang === Language.PL ? product.detailedDescription.descriptionPL : product.detailedDescription.descriptionENG;

    return (
        <section
            data-testid="product-details-section"
            className="w-full flex flex-col md:flex-row gap-8 max-w-6xl mx-auto
            bg-white rounded-xl shadow-lg overflow-hidden my-4 p-0 md:p-10"
        >
            {/* Left column: title, images, description, detailed description */}
            <div
                data-testid="product-details-left-column"
                className="w-full md:w-2/3 flex flex-col items-center bg-gray-50 p-4 sm:p-6
                md:rounded-l-xl border-b md:border-b-0 md:border-r relative"
            >
                <ShareButton lang={lang} title={productName} />
                <HeaderDivider title={{ labelPL: product.name.namePL, labelENG: product.name.nameENG }} isVisible={true} />
                <ImagesViewerCard images={product.images} productName={productName} lang={lang} />

                {/* Description */}
                <div className="w-full mt-4 sm:mt-6">
                    <div
                        data-testid="product-description"
                        className="text-gray-700 text-base sm:text-lg mb-2 sm:mb-4 break-words"
                    >
                        {description}
                    </div>
                    <div
                        data-testid="product-detailed-description"
                        className="prose prose-blue max-w-none text-sm sm:text-base md:text-lg leading-relaxed
                        !text-gray-800 [&_ul]:!list-disc [&_ul]:!pl-6 [&_li]:!marker:text-blue-600
                        [&_li]:!text-gray-900 [&_li]:mb-2 sm:[&_li]:mb-3 [&_strong]:block [&_strong]:mb-2
                        [&_p]:mb-2 sm:[&_p]:mb-3 [&_h2]:mb-2 sm:[&_h2]:mb-6 [&_h2]:mt-4 sm:[&_h2]:mt-8">
                        {detailedDescription}
                    </div>
                </div>
            </div>

            {/* Right column: category, tags, manufacturer, contact */}
            <div
                data-testid="product-details-right-column"
                className="w-full md:w-1/3 flex flex-col gap-6 p-4 sm:p-6"
            >
                {/* Manufacturer */}
                <ManufacturerCard manufacturers={product.manufacturers} lang={lang}/>
                <CategoryCard category={product.category} lang={lang}/>
                <TagsCard tags={product.tags} lang={lang}/>
                <ContactUsCard lang={lang}/>
                <Image
                    data-testid="else-logo"
                    src={elseLogo}
                    alt="Logo ELSE"
                    className="w-2/3 sm:w-1/2 mx-auto mt-4"
                />
                <RecommendedProducts
                    lang={lang}
                    tags={product.tags}
                    category={product.category}
                    viewedProduct={product.name.nameENG}
                />
            </div>
        </section>
    );
};

export default ProductDetails;
