"use client";

import {Loading} from "../common/loading";
import {ProductItem} from "@/components/product/product-item";
import {SubCategoryItem} from "@/components/subCategory/sub-category-item";
import {ITEM_KINDS} from "@/constants/item";
import {useAppContext} from "@/contexts/AppContext";
import {useItems} from "@/hooks/useItems";

export type ItemDetailListProps = {
  itemId: string;
  isShowTag?: boolean;
};

const ItemDetailList = ({itemId, isShowTag = true}: ItemDetailListProps) => {
  const {tenant} = useAppContext();
  const {items, isLoading} = useItems(tenant.alias, itemId);

  if (isLoading) {
    return <Loading />;
  }

  const count = items?.length || 0;
  const hasItems = items && count > 0;

  if (!hasItems) {
    return null;
  }

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

export {ItemDetailList};
