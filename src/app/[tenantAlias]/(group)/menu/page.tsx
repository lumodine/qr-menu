import { CategoryTab } from "@/components/app/category"
import { ProductList } from "@/components/app/product"
import { View } from "@/components/app/view"
import { categories } from "@/data"
import { notFound } from "next/navigation"
import { TenantGroupHeader } from "@/components/app/tenant"
import { VIEWS } from "@/constants"
import viewService from "@/services/view.service"

type Params = {
  searchParams: Promise<{
    c: number
  }>
}

export default async function MenuPage({ searchParams }: Params) {
  const { c } = await searchParams;

  let findedCategory = categories.find(category => category.id == c)
  if (!findedCategory && !c) {
    findedCategory = categories.at(0)
  }

  if (!findedCategory) {
    return notFound()
  }

  const products = findedCategory.products

  if (!products) {
    return notFound()
  }

  const activeView = await viewService.getView();

  const viewFormAction = async (formData: FormData) => {
    "use server";

    const viewType = formData.get("viewType") as string;

    await viewService.setView(viewType);
  };

  return (
    <>
      <TenantGroupHeader href="/categories" />

      <div className="flex justify-between items-center px-4 py-1">
        <h1 className="font-bold text-xl">
          Menü
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
          selectedCategoryId={findedCategory.id} />
      </div>

      <ProductList
        products={products}
        viewType={activeView}
      />
    </>
  )
}
