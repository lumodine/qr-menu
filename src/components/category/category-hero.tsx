"use client";

import type {Category} from "@/types";
import Link from "next/link";
import Image from "next/image";
import {useAppContext} from "@/contexts/AppContext";
import {cn} from "@/utils/shadcn";

export type CategoryHeroProps = {
  category: Category;
};

const CategoryHero = ({category}: CategoryHeroProps) => {
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
        hasImage && "bg-(image:--bg-image)",
        "bg-center bg-no-repeat bg-cover overflow-hidden bg-primary text-primary-foreground",
      )}
      style={{
        ["--bg-image" as string]: hasImage ? `url(${category.image})` : null,
      }}
    >
      <div className={cn("text-center", hasImage && "bg-black/50 text-white")}>
        <div className="container flex flex-col gap-4 items-center justify-center w-full h-[30vh] lg:h-[40vh] ">
          {tenant.logo && (
            <Link href={"/"}>
              <Image
                alt={tenant.name}
                className="rounded-sm w-[100px] h-[100px] md:w-[200px] md:h-[200px]"
                height={100}
                src={tenant.logo}
                width={100}
              />
            </Link>
          )}
          {translation?.title && (
            <h1 className="text-2xl md:text-3xl lg:text-6xl font-bold drop-shadow-2xl">
              {translation?.title}
            </h1>
          )}
          {translation?.description && (
            <p className="text-sm md:text-md lg:text-lg drop-shadow-2xl">
              {translation?.description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

CategoryHero.displayName = "CategoryHero";

export {CategoryHero};
