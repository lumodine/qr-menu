"use client";

import {useEffect, useState} from "react";
import {TagHero} from "../tag/tag-hero";
import {CategoryHero} from "../category/category-hero";
import qrMenuService from "@/services/qr-menu.service";
import {useAppContext} from "@/contexts/AppContext";
import {ITEM_KINDS} from "@/constants/item";

type ItemHeroProps = {
  itemId: string;
};

export const ItemHero = ({itemId}: ItemHeroProps) => {
  const {tenant} = useAppContext();
  const [item, setItem] = useState<any>(null);

  const fetchItem = async () => {
    const {data} = await qrMenuService.getItemById(tenant.alias, itemId);

    setItem(data);
  };

  useEffect(() => {
    fetchItem();
  }, [tenant, itemId]);

  if (!item) return null;

  return (
    <>
      {ITEM_KINDS.TAG === item?.kind && <TagHero tag={item} />}
      {ITEM_KINDS.CATEGORY === item?.kind && <CategoryHero category={item} />}
    </>
  );
};
ItemHero.displayName = "ItemHero";
