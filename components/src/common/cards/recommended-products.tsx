import {Language} from "../../../../context/src/types/Language";
import {Tag} from "../../types/Tag";
import {Category} from "../../types/Category";
import getProductsByCategory from "../../utils/get-products-by-category";
import {ProductItem} from "../../types/ProductItem";
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
    const productsWithTags = productsByCategory
        .filter((product) => product.name.nameENG !== viewedProduct)
        .filter(
            (product) => product.tags && product.tags.some((tag) => tags.includes(tag))
        );
    const randomProducts = productsWithTags.sort(() => Math.random() - 0.5);

    return (
        <div>
            <h2 className="sm:text-lg md:text-2xl lg:text-3xl font-semibold mb-4 text-black text-center mt-6 mb-4">
                {
                    lang === Language.PL
                        ? "Powiązane produkty"
                        : "Related Products"
                }
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
                {randomProducts.slice(0, 4).map((product: ProductItem, indx: number) => (
                    <div key={indx} className="bg-white p-4 rounded-lg shadow-md">
                        <Link href={product.href} key={product.href}>

                            <Image
                                src={product.images[0]}
                                alt={`${lang === Language.PL ? product.name.namePL : product.name.nameENG}`}
                                width={200}
                                height={200}
                                className="w-full h-48 object-cover mb-4"
                            />
                            <h3 className="text-lg font-semibold mb-2 text-[var(--main-color)] text-center">
                                {lang === Language.PL ? product.name.namePL : product.name.nameENG}
                            </h3>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}