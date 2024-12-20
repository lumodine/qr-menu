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
        "bg-center bg-no-repeat bg-cover overflow-hidden rounded-sm transition-transform hover:scale-95 bg-primary text-primary-foreground",
        category.type,
      )}
      href={`/${category._id}`}
      style={{
        ["--bg-image" as string]: hasImage ? `url(${category.image || ""})` : null,
      }}
    >
      <div
        className={cn(
          "flex flex-col gap-1 items-center justify-center w-full h-full text-center p-2",
          hasImage && "bg-black/50",
        )}
      >
        <span className="text-lg font-bold drop-shadow-2xl">{translation?.name}</span>
      </div>
    </Link>
  );
};
CategoryItem.displayName = "CategoryItem";
