import qrMenuService from "@/services/qr-menu.service";
import { CategoryHero } from "@/components/app/category";
import { ProductList } from "@/components/app/product";
import { notFound } from "next/navigation";
import { BackToMenuButton } from "@/components/app/button";

type CategoryPageProps = {
    params: Promise<{
        tenantAlias: string
        categoryId: string
    }>
}

export default async function CategoryPage({ params }: CategoryPageProps) {
    const {
        tenantAlias,
        categoryId
    } = await params;

    const categoryResponse = await qrMenuService.getCategoryById(tenantAlias, categoryId);

    if (!categoryResponse.success) {
        return notFound();
    }

    const [
        { data: tenant },
        { data: products }
    ] = await Promise.all([
        qrMenuService.getDetail(tenantAlias),
        qrMenuService.getProducts(tenantAlias, categoryId)
    ]);

    const category = categoryResponse.data;

    return (
        <>
            <CategoryHero
                tenant={tenant}
                category={category}
            />

            <section className="container">
                <div className="py-2">
                    <BackToMenuButton />
                </div>
            </section>

            <ProductList
                products={products}
            />
        </>
    );
}
