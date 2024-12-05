"use client";

import {ChevronUp} from "lucide-react";
import {CircleArrowLeft} from "lucide-react";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {useScrollVisible} from "@/hooks/useScrollVisible";
import {useAppContext} from "@/contexts/AppContext";

export const BackToTopButton = () => {
  const isVisible = useScrollVisible(500);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-10 right-5 z-50">
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
