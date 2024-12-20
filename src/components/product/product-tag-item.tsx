"use client";

import type {ProductTag} from "@/types";
import Link from "next/link";
import {useAppContext} from "@/contexts/AppContext";
import {Badge} from "@/components/ui/badge";

export type ProductTagItemProps = {
  tag: ProductTag;
};

export const ProductTagItem = ({tag}: ProductTagItemProps) => {
  const {language, defaultLanguage} = useAppContext();

  let translation = tag.item.translations.find(
    (translation) => translation.language._id === language.language._id,
  );

  if (!translation) {
    translation = tag.item.translations.find(
      (translation) => translation.language._id === defaultLanguage.language._id,
    );
  }

  return (
    <Badge className={`theme-${tag.item.theme?.color} px-1`}>
      <Link href={`/tags/${tag.item._id}`}>
        <span>{translation?.name}</span>
      </Link>
    </Badge>
  );
};
ProductTagItem.displayName = "ProductTagItem";
