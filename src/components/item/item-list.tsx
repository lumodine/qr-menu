"use client";

import {CategoryItem} from "../category/category-item";
import {TagItem} from "../tag/tag-item";

export type ItemListProps = {
  items: any[];
};

export const ItemList = ({items}: ItemListProps) => {
  const hasItems = items && items.length !== 0;

  return (
    <section className="container py-6">
      {hasItems && (
        <div className="grid gap-2 auto-rows-[10em] grid-flow-row-dense grid-cols-2">
          {items.map((item, itemIndex) => {
            if (item.kind === "category") {
              return <CategoryItem key={itemIndex} category={item} />;
            }
            if (item.kind === "tag") {
              return <TagItem key={itemIndex} tag={item} />;
            }
          })}
        </div>
      )}
    </section>
  );
};
ItemList.displayName = "ItemList";
