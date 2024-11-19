import { CategoryTab } from "@/components/app/category"
import { ProductList } from "@/components/app/product"
import { View } from "@/components/app/view"
import { notFound } from "next/navigation"
import { TenantGroupHeader } from "@/components/app/tenant"
import { VIEWS } from "@/constants"
import viewService from "@/services/view.service"
import qrMenuService from "@/services/qr-menu.service"
import { getTranslations } from "next-intl/server"

type Params = {
  params: Promise<{
    tenantAlias: string
  }>
  searchParams: Promise<{
    c: string
  }>
}

export default async function MenuPage({ params, searchParams }: Params) {
  const t = await getTranslations();

  const { tenantAlias } = await params
  const { c } = await searchParams

  const [
    { data: tenant },
    { data: categories },
    { data: products }
  ] = await Promise.all([
    qrMenuService.getDetail(tenantAlias),
    qrMenuService.getCategories(tenantAlias),
    qrMenuService.getProducts(tenantAlias)
  ])

  let findedCategory = categories.find(category => category._id == c)
  if (!findedCategory && !c) {
    findedCategory = categories.at(0)
  }

  const activeView = await viewService.getView()

  const viewFormAction = async (formData: FormData) => {
    "use server"

    const viewType = formData.get("viewType") as string

    await viewService.setView(viewType)
  }
  
  const filteredProducts = products.filter(product => product.categories.find(category => category._id === c));

  return (
    <>
      <TenantGroupHeader
        href="/categories"
        tenant={tenant}
      />

      <div className="flex justify-between items-center px-4 py-1">
        <h1 className="font-bold text-xl">
          {t("menu")}
        </h1>

        <View
          views={VIEWS}
          activeView={activeView}
          formAction={viewFormAction}
        />
      </div>

      <div className="bg-white sticky top-0">
        <CategoryTab
          categories={categories}
          selectedCategoryId={findedCategory._id}
        />
      </div>

      <ProductList
        products={filteredProducts}
        viewType={activeView}
      />
    </>
  )
}
