"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { CategoryNotFound, CategoryTab } from "@/components/app/category"
import { ProductNotFound, ProductList } from "@/components/app/product"
import { View } from "@/components/app/view"
import { categories } from "@/data"
import { routes } from "@/constants"

export default function CategoryPage() {
  const searchParams = useSearchParams()

  const categoryId = parseInt(searchParams.get("i") as string)

  const findedCategory = categories.find(category => category.id == categoryId)
  if (!findedCategory) {
    return <CategoryNotFound />
  }

  const products = findedCategory.products

  if (!products) {
    return <ProductNotFound />
  }

  return (
    <>
      <header className="bg-background w-full">
        <Link
          href={routes.home.href}
          className="inline-flex p-4 items-center justify-center gap-2">
          <ArrowLeft />
        </Link>

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
