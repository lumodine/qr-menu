"use client";

import {TagHero} from "../tag/tag-hero";
import {CategoryHero} from "../category/category-hero";
import {Loading} from "../common/loading";
import {useAppContext} from "@/contexts/AppContext";
import {ITEM_KINDS} from "@/constants/item";
import {useItem} from "@/hooks/useItem";

type ItemHeroProps = {
  itemId: string;
};

const ItemHero = ({itemId}: ItemHeroProps) => {
  const {tenant} = useAppContext();
  const {item, isLoading} = useItem(tenant.alias, itemId);

  if (isLoading) {
    return <Loading />;
  }

  if (!item) {
    return null;
  }

  return (
    <>
      {ITEM_KINDS.TAG === item?.kind && <TagHero tag={item} />}
      {ITEM_KINDS.CATEGORY === item?.kind && <CategoryHero category={item} />}
    </>
  );
};

ItemHero.displayName = "ItemHero";

export {ItemHero};
