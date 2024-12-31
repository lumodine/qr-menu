"use client";

import type {Tag} from "@/types";
import Link from "next/link";
import {Tag as TagIcon} from "lucide-react";
import {useAppContext} from "@/contexts/AppContext";
import {cn} from "@/utils/shadcn";

export type TagItemProps = {
  tag: Tag;
};

export const TagItem = ({tag}: TagItemProps) => {
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
    <Link
      className={cn(
        `theme-${tag.theme?.color}`,
        "text-primary-foreground bg-primary",
        "overflow-hidden rounded-sm transition-transform hover:scale-95",
        tag.type,
      )}
      href={`/${tag._id}`}
    >
      <div className="flex h-full w-full items-center justify-center text-center p-2">
        <span className="text-lg font-bold">
          <TagIcon className="inline-block mr-1" />
          {translation?.title}
        </span>
      </div>
    </Link>
  );
};
TagItem.displayName = "TagItem";
