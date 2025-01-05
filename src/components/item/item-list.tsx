"use client";

import {Loading} from "../common/loading";
import {CategoryItem} from "@/components/category/category-item";
import {TagItem} from "@/components/tag/tag-item";
import {ITEM_KINDS} from "@/constants/item";
import {useAppContext} from "@/contexts/AppContext";
import {useItems} from "@/hooks/useItems";

const ItemList = () => {
  const {tenant} = useAppContext();
  const {items, isLoading} = useItems(tenant.alias);

  if (isLoading) {
    return <Loading />;
  }

  const count = items?.length || 0;
  const hasItems = items && count > 0;

  return (
    <section className="container pt-2">
      {hasItems && (
        <div className="grid gap-2 auto-rows-[10em] grid-flow-row-dense grid-cols-2">
          {items.map((item, itemIndex) => {
            if (item.kind === ITEM_KINDS.CATEGORY) {
              return <CategoryItem key={itemIndex} category={item} />;
            }
            if (item.kind === ITEM_KINDS.TAG) {
              return <TagItem key={itemIndex} tag={item} />;
            }
          })}
        </div>
      )}
    </section>
  );
};

ItemList.displayName = "ItemList";

export {ItemList};
