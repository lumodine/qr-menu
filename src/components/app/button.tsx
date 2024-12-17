"use client";

import {ChevronUp} from "lucide-react";
import {CircleArrowLeft} from "lucide-react";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {useScrollVisible} from "@/hooks/useScrollVisible";
import {useAppContext} from "@/contexts/AppContext";
import {HeaderPosition} from "@/types";
import {cn} from "@/utils/shadcn";

export type BackToTopButtonProps = {
  headerPosition: HeaderPosition;
};

export const BackToTopButton = ({headerPosition}: BackToTopButtonProps) => {
  const isVisible = useScrollVisible(300);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) {
    return null;
  }

  const isHeaderTop = headerPosition === HeaderPosition.TOP;
  const isHeaderBottom = headerPosition === HeaderPosition.BOTTOM;

  return (
    <div
      className={cn("fixed right-2 z-50", isHeaderTop && "bottom-4", isHeaderBottom && "bottom-16")}
    >
      <Button className="rounded-sm p-2 w-10 h-10" onClick={scrollToTop}>
        <ChevronUp size={30} />
      </Button>
    </div>
  );
};
BackToTopButton.displayName = "BackToTopButton";

export const BackToMenuButton = () => {
  const {t} = useAppContext();

  return (
    <Link className="inline-flex items-center gap-1" href={"/"}>
      <CircleArrowLeft size={32} strokeWidth={1} />
      <span className="font-semibold">{t("back_to_menu")}</span>
    </Link>
  );
};
BackToMenuButton.displayName = "BackToMenuButton";
