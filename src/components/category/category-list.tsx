"use client";

import type {Categories} from "@/types";
import {CategoryItem} from "./category-item";

export type CategoryListProps = {
  categories: Categories;
};

export const CategoryList = ({categories}: CategoryListProps) => {
  const hasCategories = categories && categories.length !== 0;

  return (
    <section className="container py-6">
      {hasCategories && (
        <div className="grid gap-2 auto-rows-[10em] grid-flow-row-dense grid-cols-2">
          {categories.map((category, categoryIndex) => (
            <CategoryItem key={categoryIndex} category={category} />
          ))}
        </div>
      )}
    </section>
  );
};
CategoryList.displayName = "CategoryList";
