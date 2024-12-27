"use client";

import {ProductItem} from "../product/product-item";
import {SubCategoryItem} from "../subCategory/sub-category-item";
import {ITEM_KINDS} from "@/constants/item";

export type ItemDetailListProps = {
  items: any[];
};

export const ItemDetailList = ({items}: ItemDetailListProps) => {
  const hasItems = items && items.length !== 0;

  return (
    <section className="container py-4">
      {hasItems && (
        <div className="grid grid-cols-1 gap-3">
          {items.map((item, itemIndex) => {
            if (item.kind === ITEM_KINDS.PRODUCT) {
              return <ProductItem key={itemIndex} product={item} />;
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
