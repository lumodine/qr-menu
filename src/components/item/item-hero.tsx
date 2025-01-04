"use client";

import useSWR from "swr";
import {TagHero} from "../tag/tag-hero";
import {CategoryHero} from "../category/category-hero";
import {Loading} from "../common/loading";
import {useAppContext} from "@/contexts/AppContext";
import {ITEM_KINDS} from "@/constants/item";
import axios from "@/lib/axios";
import {Response} from "@/types";

type ItemHeroProps = {
  itemId: string;
};

export const ItemHero = ({itemId}: ItemHeroProps) => {
  const {tenant} = useAppContext();
  const {data, isLoading} = useSWR<Response<any>>(
    `/qr-menu/${tenant.alias}/items/${itemId}`,
    axios,
  );

  if (isLoading) {
    return <Loading />;
  }

  const item = data?.data;

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
