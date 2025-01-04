"use client";

import {useEffect, useState} from "react";
import {ProductItem} from "@/components/product/product-item";
import {SubCategoryItem} from "@/components/subCategory/sub-category-item";
import {ITEM_KINDS} from "@/constants/item";
import {useAppContext} from "@/contexts/AppContext";
import qrMenuService from "@/services/qr-menu.service";

export type ItemDetailListProps = {
  itemId: string;
  isShowTag?: boolean;
};

export const ItemDetailList = ({itemId, isShowTag = true}: ItemDetailListProps) => {
  const {tenant} = useAppContext();
  const [items, setItems] = useState<any[]>([]);

  const fetchItems = async () => {
    const {data} = await qrMenuService.getSubItems(tenant.alias, itemId);

    setItems(data);
  };

  useEffect(() => {
    fetchItems();
  }, [tenant, itemId]);

  const hasItems = items && items.length !== 0;

  return (
    <section className="container pt-2">
      {hasItems && (
        <div className="grid grid-cols-1 gap-2">
          {items.map((item, itemIndex) => {
            if (item.kind === ITEM_KINDS.PRODUCT) {
              return <ProductItem key={itemIndex} isShowTag={isShowTag} product={item} />;
            }
            if (item.kind === ITEM_KINDS.SUB_CATEGORY) {
              return <SubCategoryItem key={itemIndex} subCategory={item} />;
            }
          })}
        </div>
      )}
    </section>
  );
};
ItemDetailList.displayName = "ItemDetailList";
