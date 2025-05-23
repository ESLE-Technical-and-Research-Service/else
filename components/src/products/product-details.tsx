import React from "react";
import Image from "next/image";
import {Language, ProductItem} from "../types";
import ContactUsProductCard from "../common/cards/contact-us-product-card";
import elseLogo from "../../../assets/images/logoElse.webp";
import {ManufacturerCard} from "../common/cards/manufacturer-card";
import TagsCard from "../common/cards/tags-card";
import CategoryCard from "../common/cards/category-card";
import ImagesViewerCard from "../common/cards/images-viewer-card";
import ShareButton from "../common/buttons/share-button";
import HeaderDivider from "../common/dividers/header-divider";
import RecommendedProducts from "../common/cards/recommended-products";
import {GetLocalizedJSX, GetLocalizedText} from "../utils";

interface ProductDetailsProps {
    product: ProductItem;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({product}: ProductDetailsProps) => {

    return (
        <section
            data-testid="product-details-section"
            className="w-full flex flex-col md:flex-row gap-8 max-w-6xl mx-auto
            bg-[var(--background)] rounded-xl shadow-lg overflow-hidden my-4 p-0 md:p-10"
        >
            {/* Left column: title, images, description, detailed description */}
            <div
                data-testid="product-details-left-column"
                className="w-full md:w-2/3 flex flex-col items-center bg-gray-50 p-4 sm:p-6
                md:rounded-l-xl border-b md:border-b-0 md:border-r relative"
            >
                <ShareButton title={product.name}/>
                <HeaderDivider title={GetLocalizedText(product.name)} isVisible={true}/>
                <ImagesViewerCard images={product.images} productName={GetLocalizedText(product.name)} />

                {/* Description */}
                <div className="w-full mt-4 sm:mt-6">
                    <div
                        data-testid="product-description"
                        className="text-gray-700 text-base sm:text-lg mb-2 sm:mb-4 break-words leading-10 mt-10"
                    >
                        {GetLocalizedText(product.description)}
                    </div>
                    <div
                        data-testid="product-detailed-description"
                        className="prose prose-blue max-w-none text-sm sm:text-base md:text-lg leading-10
                        !text-gray-800 [&_ul]:!list-disc [&_ul]:!pl-6 [&_li]:!marker:text-blue-600
                        [&_li]:!text-gray-900 [&_li]:mb-2 sm:[&_li]:mb-3 [&_strong]:block [&_strong]:mb-2
                        [&_p]:mb-2 sm:[&_p]:mb-3 [&_h2]:mb-2 sm:[&_h2]:mb-6 [&_h2]:mt-4 sm:[&_h2]:mt-8">
                        {GetLocalizedJSX(product.detailedDescription)}
                    </div>
                </div>
            </div>

            {/* Right column: category, tags, manufacturer, contact */}
            <div
                data-testid="product-details-right-column"
                className="w-full md:w-1/3 flex flex-col gap-6 p-4 sm:p-6"
            >
                {/* Manufacturer */}
                <ManufacturerCard manufacturers={product.manufacturers} />
                <CategoryCard category={product.category} />
                <TagsCard tags={product.tags} />
                <ContactUsProductCard  />
                <Image
                    data-testid="else-logo"
                    src={elseLogo}
                    alt="Logo ELSE"
                    className="w-2/3 sm:w-1/2 mx-auto mt-4"
                />
                <RecommendedProducts
                    tags={product.tags}
                    category={product.category}
                    viewedProduct={product.name[Language.ENG]}
                />
            </div>
        </section>
    );
};

export default ProductDetails;
