"use client"

import { ArrowLeft } from "lucide-react"
import { CategoryTab } from "@/components/app/category"
import { ProductList } from "@/components/app/product"
import { View } from "@/components/app/view"
import { categories } from "@/data"
import { notFound } from "next/navigation"
import { TenantLink } from "@/components/app/tenant-link"

type Params = {
  searchParams: {
    c: number
  }
}

export default function MenuPage({ searchParams }: Params) {
  let findedCategory = categories.find(category => category.id == searchParams.c)
  if (!findedCategory && !searchParams.c) {
    findedCategory = categories.at(0)
  }

  if (!findedCategory) {
    return notFound()
  }

  const products = findedCategory.products

  if (!products) {
    return notFound()
  }

  return (
    <>
      <header className="bg-background w-full">
        <TenantLink href="/categories" className="inline-flex p-4 items-center justify-center gap-2">
          <ArrowLeft />
        </TenantLink>

        <div className="flex justify-between items-center px-4">
          <h1 className="font-bold text-xl">
            Menü
          </h1>

          <View />
        </div>
      </header>

      <div className="bg-white sticky top-0">
        <CategoryTab
          categories={categories}
          selectedCategoryId={findedCategory.id} />
      </div>

      <ProductList products={products} />
    </>
  )
}
