"use client";

import {CircleArrowLeft} from "lucide-react";
import Link from "next/link";
import {useAppContext} from "@/contexts/AppContext";

const BackToMenuButton = () => {
  const {t} = useAppContext();

  return (
    <Link className="inline-flex items-center gap-1" href={"/"}>
      <CircleArrowLeft size={32} strokeWidth={1} />
      <span className="font-semibold">{t("back_to_menu")}</span>
    </Link>
  );
};

BackToMenuButton.displayName = "BackToMenuButton";

export {BackToMenuButton};
