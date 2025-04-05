export default async function ProductPage({ params }) {
    const { prodSlug } = await params;
    return (
        <main>
            <h1>Product {prodSlug}</h1>
        </main>
    )
}