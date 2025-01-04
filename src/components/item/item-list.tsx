"use client";

import useSWR from "swr";
import {Loading} from "../common/loading";
import {CategoryItem} from "@/components/category/category-item";
import {TagItem} from "@/components/tag/tag-item";
import {ITEM_KINDS} from "@/constants/item";
import {useAppContext} from "@/contexts/AppContext";
import axios from "@/lib/axios";
import {Response} from "@/types";

const ItemList = () => {
  const {tenant} = useAppContext();
  const {data, isLoading} = useSWR<Response<any[]>>(`/qr-menu/${tenant.alias}/items`, axios);

  if (isLoading) {
    return <Loading />;
  }

  const items = data?.data;

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

export {ItemList};
