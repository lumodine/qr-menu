import {notFound} from "next/navigation";
import qrMenuService from "@/services/qr-menu.service";
import {BackToMenuButton} from "@/components/common/back-to-menu-button";
import {ProductList} from "@/components/product/product-list";
import {CategoryHero} from "@/components/category/category-hero";

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
