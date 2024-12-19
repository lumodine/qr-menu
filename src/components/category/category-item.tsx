"use client";

import type {Category} from "@/types";
import Link from "next/link";
import {useAppContext} from "@/contexts/AppContext";
import {cn} from "@/utils/shadcn";

export type CategoryItemProps = {
  category: Category;
};

export const CategoryItem = ({category}: CategoryItemProps) => {
  const {language, defaultLanguage} = useAppContext();

  let translation = category.translations.find(
    (translation) => translation.language._id === language.language._id,
  );

  if (!translation) {
    translation = category.translations.find(
      (translation) => translation.language._id === defaultLanguage.language._id,
    );
  }

  const hasImage = !!category.image;

  return (
    <Link
      className={cn(
        `theme-${category.theme?.color}`,
        hasImage && "bg-[image:var(--bg-image)] ",
        "bg-center bg-no-repeat bg-cover overflow-hidden rounded-sm transition-transform hover:scale-95 bg-primary/50",
        category.type,
      )}
      href={`/${category._id}`}
      style={{
        ["--bg-image" as string]: hasImage ? `url(${category.image || ""})` : null,
      }}
    >
      <div className="flex flex-col gap-1 items-center justify-center w-full h-full bg-black/60 text-center">
        <span className="text-lg font-bold text-white drop-shadow-2xl">{translation?.name}</span>
      </div>
    </Link>
  );
};
CategoryItem.displayName = "CategoryItem";
