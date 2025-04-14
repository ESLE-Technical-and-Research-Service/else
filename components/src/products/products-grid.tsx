import {ProductItem} from "../types/ProductItem";
import Image from "next/image";
import Link from "next/link";
import {useLanguage} from "../../../context/src/LanguageContext";
import {Language} from "../../../context/src/types/Language";

type ProductsGridProps = {
    products: ProductItem[]
}

export default function ProductsGrid({ products }: ProductsGridProps) {
    const { language } = useLanguage();

    return (
        <div className="w-full px-4 py-8 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product, index) => (
                    <Link
                        href={product.href}
                        key={index}
                        className="group bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
                    >
                        <div className="relative aspect-square">
                            {product.images[0] && (
                                <Image
                                    src={product.images[0]}
                                    alt={language === Language.PLN ? product.labelPL : product.labelENG}
                                    fill
                                    className="object-cover"
                                />
                            )}
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                {language === Language.PLN ? product.labelPL : product.labelENG}
                            </h3>
                            <p className="text-sm text-gray-600 line-clamp-2">
                                {language === Language.PLN ? product.descriptionPL : product.descriptionENG}
                            </p>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {product.tags.map((tag, tagIndex) => (
                                    <span
                                        key={tagIndex}
                                        className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full"
                                    >
                                        {language === Language.PLN ? tag.namePL : tag.nameENG}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}