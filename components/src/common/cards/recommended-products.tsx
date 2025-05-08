import {Category, Language, ProductItem, Tag} from "../../types";
import getProductsByCategory from "../../utils/get-products-by-category";
import Image from "next/image";
import Link from "next/link";

type RecommendedProductsProps = {
    lang: Language;
    tags: Tag[];
    category: Category[];
    viewedProduct: string;
}

export default function RecommendedProducts({lang, tags, category, viewedProduct}: RecommendedProductsProps) {
    const productsByCategory: ProductItem[] = getProductsByCategory(category[0].nameENG.toLowerCase());

    let productsWithTags = productsByCategory
        .filter((product) => product.name.nameENG !== viewedProduct)
        .filter(
            (product) => product.tags && product.tags.some((tag) => tags.includes(tag))
        );

    if (productsWithTags.length === 0) {
        productsWithTags = productsByCategory
            .filter((product) => product.name.nameENG !== viewedProduct);
    }

    const randomProducts: ProductItem[] = productsWithTags.sort(() => Math.random() - 0.5);

    return (
        <>
            {randomProducts.length > 0 && (
                <div data-testid="recommended-products-card-container">
                    <h2
                        data-testid="recommended-products-card-title"
                        className="sm:text-lg md:text-2xl lg:text-3xl font-semibold mb-4 text-black text-center mt-6 mb-4"
                    >
                        {
                            lang === Language.PL
                                ? "Powiązane produkty"
                                : "Related Products"
                        }
                    </h2>
                    <div
                        data-testid="recommended-products-container"
                        className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4"
                    >
                        {randomProducts.slice(0, 4).map((product: ProductItem, indx: number) => (
                            <div key={indx} className="bg-white p-4 rounded-lg shadow-md">
                                <Link
                                    data-testid="recommended-product-link"
                                    href={product.href}
                                    key={indx}
                                >
                                    <Image
                                        data-testid="recommended-product-image"
                                        src={product.images[0]}
                                        alt={`${lang === Language.PL ? product.name.namePL : product.name.nameENG}`}
                                        width={200}
                                        height={200}
                                        className="w-full h-48 object-cover mb-4"
                                        key={indx}
                                    />
                                    <h3
                                        data-testid="recommended-product-header"
                                        className="text-lg font-semibold mb-2 text-[var(--main-color)] text-center"
                                    >
                                        {lang === Language.PL ? product.name.namePL : product.name.nameENG}
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