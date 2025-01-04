"use client";

import {useEffect, useState} from "react";
import {CategoryItem} from "@/components/category/category-item";
import {TagItem} from "@/components/tag/tag-item";
import {ITEM_KINDS} from "@/constants/item";
import qrMenuService from "@/services/qr-menu.service";
import {useAppContext} from "@/contexts/AppContext";

export const ItemList = () => {
  const {tenant} = useAppContext();
  const [items, setItems] = useState<any[]>([]);

  const fetchItems = async () => {
    const {data} = await qrMenuService.getItems(tenant.alias);

    setItems(data);
  };

  useEffect(() => {
    fetchItems();
  }, [tenant]);

  const hasItems = items && items.length !== 0;

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
