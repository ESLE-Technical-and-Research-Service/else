import { Category, Language, ProductItem, Tag } from "../../types";
import getProductsByCategory from "../../utils/get-products-by-category";
import Image from "next/image";
import Link from "next/link";
import { GetLocalizedText } from "../../utils";

type RecommendedProductsProps = {
    tags: Tag[];
    category: Category[];
    viewedProduct: string;
}

export default function RecommendedProducts({ tags = [], category = [], viewedProduct = '' }: RecommendedProductsProps) {
    const categoryName = category?.[0]?.name?.[Language.ENG]?.toLowerCase() || '';
    const productsByCategory: ProductItem[] = categoryName ? getProductsByCategory(categoryName) || [] : [];

    if (!productsByCategory?.length) {
        return null;
    }

    let productsWithTags = productsByCategory
        .filter((product) => product?.name?.[Language.ENG] !== viewedProduct)
        .filter((product) => {
            if (!product?.tags?.length || !tags.length) return true;
            return product.tags.some((tag) => tags.includes(tag));
        });

    if (productsWithTags.length === 0) {
        productsWithTags = productsByCategory
            .filter((product) => product?.name?.[Language.ENG] !== viewedProduct);
    }

    const randomProducts: ProductItem[] = productsWithTags.sort(() => Math.random() - 0.5);

    const relatedProductsText = {
        [Language.PL]: "Powiązane produkty",
        [Language.ENG]: "Related Products",
    };

    return (
        <>
            {randomProducts.length > 0 && (
                <div data-testid="recommended-products-card-container">
                    <h2
                        data-testid="recommended-products-card-title"
                        className="sm:text-lg md:text-2xl lg:text-3xl font-semibold mt-8 text-black text-center mb-4"
                    >
                        {GetLocalizedText(relatedProductsText)}
                    </h2>
                    <div
                        data-testid="recommended-products-container"
                        className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4"
                    >
                        {randomProducts.slice(0, 4).map((product: ProductItem, idx: number) => (
                            <div
                                key={idx}
                                className="bg-[var(--background)] p-4 rounded-lg shadow-md hover:shadow-lg
                                hover:scale-105 transition-shadow duration-300"
                            >
                                <Link
                                    data-testid="recommended-product-link"
                                    href={product.href}
                                    key={idx + 1}
                                >
                                    <Image
                                        data-testid="recommended-product-image"
                                        src={product.images[0]}
                                        alt={`${GetLocalizedText(product.name)} image ${idx + 1}`}
                                        width={200}
                                        height={200}
                                        className="w-full h-48 object-cover mb-4"
                                        key={idx + 2}
                                    />
                                    <h3
                                        key={idx + 3}
                                        data-testid="recommended-product-header"
                                        className="text-lg font-semibold mb-2 text-[var(--main-color)] text-center"
                                    >
                                        {GetLocalizedText(product.name)}
                                    </h3>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}