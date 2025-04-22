'use client';

import {usePathname} from "next/navigation";
import {ProductItem} from "../../../../../../components/src/types/ProductItem";
import getProductsListByCategory from "../../../../../../components/src/utils/get-products-by-category";
import {useLanguage} from "../../../../../../context/src/LanguageContext";
import Breadcrumbs from "../../../../../../components/src/common/breadcrumbs/breadcrumbs";
import BackButton from "../../../../../../components/src/common/buttons/back-button";
import ProductDetails from "../../../../../../components/src/products/product-details";

export default function WaterAndSewageProductDetails() {
    const {language} = useLanguage();
    const pathname = usePathname();
    const segments = pathname?.split("/");
    const category = segments?.[segments?.length - 2];
    const productPathName = pathname?.split("/").pop();

    const productsByCategory: ProductItem[] = getProductsListByCategory(category as string);
    const productDetails: ProductItem | undefined = productsByCategory
        .find((item: ProductItem) => item.href.split('/').pop() === productPathName);

    return (
        <main className="w-full overflow-y-auto bg-[var(--foreground)]">
            <div className="hidden md:flex w-full max-w-screen-2xl mx-auto pt-4 pb-2">
                <Breadcrumbs/>
            </div>
            {productDetails ? (
                <ProductDetails product={productDetails} lang={language}/>
            ) : (
                <div className="text-center text-red-500 py-10 text-lg font-semibold">Product not found.</div>
            )}
            <div className="w-full flex justify-center pt-4 pb-2 mb-8">
                <BackButton />
            </div>
        </main>
    )
}
