"use client";

import type {Tag} from "@/types";
import Link from "next/link";
import {useAppContext} from "@/contexts/AppContext";
import {Badge} from "@/components/ui/badge";

export type ProductTagItemProps = {
  tag: Tag;
};

export const ProductTagItem = ({tag}: ProductTagItemProps) => {
  const {language, defaultLanguage} = useAppContext();

  let translation = tag.translations.find(
    (translation) => translation.language._id === language.language._id,
  );

  if (!translation) {
    translation = tag.translations.find(
      (translation) => translation.language._id === defaultLanguage.language._id,
    );
  }

  return (
    <Badge className={`theme-${tag.theme?.color} px-1`}>
      <Link href={`/${tag._id}`}>
        <span>{translation?.title}</span>
      </Link>
    </Badge>
  );
};
ProductTagItem.displayName = "ProductTagItem";
