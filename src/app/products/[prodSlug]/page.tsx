// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import {ReactElement} from "react";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Products',
};

export default async function ProductPage({params}: { params: { prodSlug: string } }): Promise<ReactElement> {
    const {prodSlug} = params;
    return (
        <main>
            <h1>Product: {prodSlug}</h1>
        </main>
    );
}
