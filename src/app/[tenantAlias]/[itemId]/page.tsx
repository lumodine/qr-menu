import {notFound} from "next/navigation";
import qrMenuService from "@/services/qr-menu.service";
import {BackToMenuButton} from "@/components/common/back-to-menu-button";
import {CategoryHero} from "@/components/category/category-hero";
import {ItemDetailList} from "@/components/item/item-detail-list";

type CategoryPageProps = {
  params: Promise<{
    tenantAlias: string;
    itemId: string;
  }>;
};

export default async function CategoryPage({params}: CategoryPageProps) {
  const {tenantAlias, itemId} = await params;

  const itemResponse = await qrMenuService.getItemById(tenantAlias, itemId);

  if (!itemResponse.success || !itemResponse.data) {
    return notFound();
  }

  const {data: items} = await qrMenuService.getSubItems(tenantAlias, itemId);

  const item = itemResponse.data;

  return (
    <>
      <CategoryHero category={item} />

      <section className="container">
        <div className="pt-2">
          <BackToMenuButton />
        </div>
      </section>

      <ItemDetailList items={items} />
    </>
  );
}
