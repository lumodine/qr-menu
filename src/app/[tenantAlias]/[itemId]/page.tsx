import {notFound} from "next/navigation";
import qrMenuService from "@/services/qr-menu.service";
import {BackToMenuButton} from "@/components/common/back-to-menu-button";
import {CategoryHero} from "@/components/category/category-hero";
import {ItemDetailList} from "@/components/item/item-detail-list";
import {ITEM_KINDS} from "@/constants/item";
import {TagHero} from "@/components/tag/tag-hero";

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

  const item = itemResponse.data;

  const isTag = item.kind === ITEM_KINDS.TAG;

  const {data: items} = await qrMenuService.getSubItems(tenantAlias, itemId);

  return (
    <>
      {isTag ? <TagHero tag={item} /> : <CategoryHero category={item} />}

      <section className="container">
        <div className="pt-2">
          <BackToMenuButton />
        </div>
      </section>

      <ItemDetailList isShowTag={!isTag} items={items} />
    </>
  );
}
