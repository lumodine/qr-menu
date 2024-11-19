import { Metadata } from "next"
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("pagenotfound.seo");
 
  return {
    title: t("title")
  };
}

export default async function NotFoundPage() {
  const t = await getTranslations("pagenotfound");

  return (
    <div className="grid h-screen px-4 place-content-center">
      <div className="text-center">
        <h1 className="font-black text-4xl">
          {t("title")}
        </h1>

        <p className="mt-4 text-muted-foreground">
          {t("description")}
        </p>
      </div>
    </div>
  )
}
