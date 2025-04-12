import { ReactElement } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Products',
};

type Props = {
    params: {
        prodSlug: string
    }
}

export default async function ProductPage({ params }: Props): Promise<ReactElement> {
    const { prodSlug } = params;
    return (
        <main>
            <h1>Product{prodSlug}</h1>
        </main>
    );
}