"use client";

import type {Categories, Category} from "@/types";
import Link from "next/link";
import Image from "next/image";
import {useAppContext} from "@/contexts/AppContext";
import {cn} from "@/utils/shadcn";

export type CategoryHeroProps = {
  category: Category;
};

export const CategoryHero = ({category}: CategoryHeroProps) => {
  const {tenant, language, defaultLanguage} = useAppContext();

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
    <section
      className={cn(
        hasImage && "bg-[image:var(--bg-image)]",
        "bg-center bg-no-repeat bg-cover overflow-hidden bg-primary/50",
      )}
      style={{
        ["--bg-image" as string]: hasImage ? `url(${category.image})` : null,
      }}
    >
      <div className="bg-black/50">
        <div className="container flex flex-col gap-4 items-center justify-center w-full h-[30vh] lg:h-[40vh] ">
          {tenant.logo && (
            <Link href={"/"}>
              <Image
                alt={tenant.name}
                className="rounded-sm w-[100px] h-[100px] md:w-[200px] md:h-[200px]"
                height={100}
                loading={"lazy"}
                src={tenant.logo}
                width={100}
              />
            </Link>
          )}
          {translation?.name && (
            <h1 className="text-2xl md:text-3xl lg:text-6xl font-bold text-white drop-shadow-2xl">
              {translation?.name}
            </h1>
          )}
          {translation?.description && (
            <p className="text-sm md:text-md lg:text-lg text-white drop-shadow-2xl">
              {translation?.description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
CategoryHero.displayName = "CategoryHero";

export type CategoryCardProps = {
  category: Category;
};

export const CategoryCard = ({category}: CategoryCardProps) => {
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
CategoryCard.displayName = "CategoryCard";

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
            <CategoryCard key={categoryIndex} category={category} />
          ))}
        </div>
      )}
    </section>
  );
};
CategoryList.displayName = "CategoryList";
