"use client";

import type {Tag} from "@/types";
import Link from "next/link";
import Image from "next/image";
import {Tag as TagIcon} from "lucide-react";
import {useAppContext} from "@/contexts/AppContext";
import {cn} from "@/utils/shadcn";

export type TagHeroProps = {
  tag: Tag;
};

export const TagHero = ({tag}: TagHeroProps) => {
  const {tenant, language, defaultLanguage} = useAppContext();

  let translation = tag.translations.find(
    (translation) => translation.language._id === language.language._id,
  );

  if (!translation) {
    translation = tag.translations.find(
      (translation) => translation.language._id === defaultLanguage.language._id,
    );
  }

  return (
    <section
      className={cn(
        tag.theme?.color && `theme-${tag.theme?.color}`,
        "bg-center bg-no-repeat bg-cover overflow-hidden bg-primary text-primary-foreground",
      )}
    >
      <div className="text-center">
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
            <h1 className="text-2xl md:text-3xl lg:text-6xl font-bold drop-shadow-2xl">
              <TagIcon className="inline-block w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12" />{" "}
              {translation?.name}
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
TagHero.displayName = "TagHero";
