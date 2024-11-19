import { CategoryList } from "@/components/app/category"
import { TenantGroupHeader } from "@/components/app/tenant"
import qrMenuService from "@/services/qr-menu.service"
import { getTranslations } from "next-intl/server"

type CategoriesPageProps = {
  params: Promise<{
    tenantAlias: string
  }>
}

export default async function CategoriesPage({ params }: CategoriesPageProps) {
  const t = await getTranslations();

  const { tenantAlias } = await params

  const [
    { data: tenant },
    { data: categories },
  ] = await Promise.all([
    qrMenuService.getDetail(tenantAlias),
    qrMenuService.getCategories(tenantAlias),
  ])

  return (
    <>
      <TenantGroupHeader
        href={"/"}
        tenant={tenant}
      />

      <div className="p-4 flex flex-col gap-4">
        <h1 className="font-bold text-xl">
          {t("categories")}
        </h1>

        <CategoryList
          categories={categories}
        />
      </div>
    </>
  )
}
