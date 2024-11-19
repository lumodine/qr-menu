import { CategoryList } from "@/components/app/category"
import { categories } from "@/data"
import { TenantGroupHeader } from "@/components/app/tenant"

export default function CategoriesPage() {
  return (
    <>
      <TenantGroupHeader href="/" />

      <div className="p-4 flex flex-col gap-4">
        <h1 className="font-bold text-xl">
          Kategoriler
        </h1>

        <CategoryList categories={categories} />
      </div>
    </>
  )
}
