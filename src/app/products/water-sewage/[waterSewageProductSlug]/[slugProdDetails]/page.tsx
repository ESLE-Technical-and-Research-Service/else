'use client';

import {usePathname} from "next/navigation";
import {Language, ProductItem} from "../../../../../../components/src/types";
import getProductsListByCategory from "../../../../../../components/src/utils/get-products-by-category";
import {useLanguage} from "../../../../../../context/src/LanguageContext";
import Breadcrumbs from "../../../../../../components/src/common/breadcrumbs/breadcrumbs";
import BackButton from "../../../../../../components/src/common/buttons/back-button";
import ProductDetails from "../../../../../../components/src/products/product-details";
import logo from "../../../../../../assets/images/logoElse.webp";
import Image from "next/image";

export default function WaterAndSewageProductDetails() {
    const {language} = useLanguage();
    const pathname = usePathname();
    const segments = pathname?.split("/");
    const category = segments?.[segments?.length - 2];
    const productPathName = pathname?.split("/").pop();

    const productsByCategory: ProductItem[] = getProductsListByCategory(category as string);
    const productDetails: ProductItem | undefined = productsByCategory
        .find((item: ProductItem) => item.href.split('/').pop() === productPathName);

    if (!productDetails) {
        return (
            <main className="w-full overflow-y-auto bg-[var(--foreground)]">
                <div className="hidden md:flex w-full max-w-6xl mx-auto mt-8 pt-4 pb-2">
                    <Breadcrumbs/>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <Image src={logo} alt="ELSE logo"/>
                    <h2 className="text-2xl font-bold mt-8 text-center text-gray-800">
                        {language === Language.PL ? "Wybrany produkt nie istnieje" : "Selected product does not exist"}
                    </h2>
                    <div className="w-full flex justify-center pt-4 pb-2 mb-8">
                        <BackButton />
                    </div>
                </div>
            </main>
        )
    }
    return (
        <main className="w-full overflow-y-auto bg-[var(--foreground)]">
            <div className="hidden md:flex w-full max-w-6xl mx-auto pt-4 pb-2">
                <Breadcrumbs/>
            </div>
            {productDetails && <ProductDetails product={productDetails} lang={language}/>}
            <div className="w-full flex justify-center pt-4 pb-2 mb-8">
                <BackButton />
            </div>
        </main>
    )
}
