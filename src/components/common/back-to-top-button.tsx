"use client";

import {ChevronUp} from "lucide-react";
import {Button} from "@/components/ui/button";
import {useScrollVisible} from "@/hooks/useScrollVisible";
import {HeaderPosition} from "@/types";
import {cn} from "@/utils/shadcn";

export type BackToTopButtonProps = {
  headerPosition: HeaderPosition;
};

const BackToTopButton = ({headerPosition}: BackToTopButtonProps) => {
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

export {BackToTopButton};
