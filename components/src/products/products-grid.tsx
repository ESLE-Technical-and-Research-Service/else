import {Language, ProductItem} from "../types";
import Image from "next/image";
import Link from "next/link";
import {useLanguage} from "../../../context/src/LanguageContext";

type ProductsGridProps = {
    products: ProductItem[]
}

export default function ProductsGrid({products}: ProductsGridProps) {
    const {language} = useLanguage();

    return (
        <div data-testid="products-grid-container" className="w-full max-w-7xl mx-auto px-4 py-8">
            <div
                data-testid="products-grid"
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
                {products.map((product, index) => (
                    <Link
                        data-testid="product-link"
                        href={product.href}
                        key={index}
                        className="group bg-white overflow-hidden rounded-xl border border-gray-100 hover:border-gray-200 
                        hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                    >
                        <div className="relative aspect-[4/3]">
                            {product.images[0] && (
                                <Image
                                    src={product.images[0]}
                                    alt={language === Language.PL ? product.name.namePL : product.name.nameENG}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300 p-4 rounded-3xl"
                                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                />
                            )}
                        </div>
                        <div className="p-3 bg-gradient-to-b from-white to-gray-50">
                            <h3 className="text-sm font-bold text-center text-gray-700 leading-snug line-clamp-2 min-h-[2.5rem]
                            group-hover:text-gray-900 transition-colors duration-300">
                                {language === Language.PL ? product.name.namePL : product.name.nameENG}
                            </h3>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}