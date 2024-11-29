"use client";

import { Button } from "@/components/ui/button";
import { useAppContext } from "@/contexts/AppContext";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sayfa Bulunamadı",
  robots: "noindex, nofollow",
};

export default function NotFoundPage() {
  const { t } = useAppContext();

  return (
    <div className="grid h-screen px-4 place-content-center">
      <div className="text-center">
        <h1 className="font-black text-4xl">
          {t("page_not_found_title")}
        </h1>

        <p className="my-4 text-muted-foreground">
          {t("page_not_found_description")}
        </p>

        <Link href={"/"}>
          <Button variant={"default"}>
            {t("page_not_found_cta_text")}
          </Button>
        </Link>
      </div>
    </div>
  )
}
