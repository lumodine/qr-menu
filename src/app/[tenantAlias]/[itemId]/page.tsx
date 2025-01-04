import {BackToMenuButton} from "@/components/common/back-to-menu-button";
import {ItemDetailList} from "@/components/item/item-detail-list";
import {ItemHero} from "@/components/item/item-hero";

type CategoryPageProps = {
  params: Promise<{
    itemId: string;
  }>;
};

export default async function CategoryPage({params}: CategoryPageProps) {
  const {itemId} = await params;

  return (
    <>
      <ItemHero itemId={itemId} />

      <section className="container">
        <div className="pt-2">
          <BackToMenuButton />
        </div>
      </section>

      <ItemDetailList itemId={itemId} />
    </>
  );
}
