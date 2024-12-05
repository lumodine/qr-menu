import {notFound} from "next/navigation";
import qrMenuService from "@/services/qr-menu.service";
import {CategoryHero} from "@/components/app/category";
import {ProductList} from "@/components/app/product";
import {BackToMenuButton} from "@/components/app/button";

type CategoryPageProps = {
  params: Promise<{
    tenantAlias: string;
    categoryId: string;
  }>;
};

export default async function CategoryPage({params}: CategoryPageProps) {
  const {tenantAlias, categoryId} = await params;

  const categoryResponse = await qrMenuService.getCategoryById(tenantAlias, categoryId);

  if (!categoryResponse.success || !categoryResponse.data) {
    return notFound();
  }

  const {data: products} = await qrMenuService.getProducts(tenantAlias, categoryId);

  const category = categoryResponse.data;

  return (
    <>
      <CategoryHero category={category} />

      <section className="container">
        <div className="py-2">
          <BackToMenuButton />
        </div>
      </section>

      <ProductList products={products} />
    </>
  );
}
