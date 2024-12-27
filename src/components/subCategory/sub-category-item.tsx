"use client";

import type {SubCategory} from "@/types";
import {useAppContext} from "@/contexts/AppContext";

export type SubCategoryItemProps = {
  subCategory: SubCategory;
};

export const SubCategoryItem = ({subCategory}: SubCategoryItemProps) => {
  const {language, defaultLanguage} = useAppContext();

  let translation = subCategory.translations.find(
    (translation) => translation.language._id === language.language._id,
  );

  if (!translation) {
    translation = subCategory.translations.find(
      (translation) => translation.language._id === defaultLanguage.language._id,
    );
  }

  return (
    <div>
      <h2 className="text-xl font-bold text-primary">{translation?.title}</h2>
    </div>
  );
};
SubCategoryItem.displayName = "SubCategoryItem";
