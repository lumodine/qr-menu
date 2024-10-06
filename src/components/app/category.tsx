import { routes } from "@/constants"
import { Category } from "@/types"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useViewContext } from "@/contexts/viewContext"
import { cn } from "@/lib/utils"

export type CategoryTabItemProps = {
    category: Category
    isActive?: boolean
}

export const CategoryTabItem = ({ category, isActive }: CategoryTabItemProps) => {
    return (
        <Link href={routes.categoryDetail.href(category.id)}>
            <Button
                variant={isActive ? "destructive" : "outline"}
                className="h-full p-2 flex gap-2 items-center justify-center">
                <Image
                    src={category.image}
                    alt={category.title}
                    width={30}
                    height={30}
                    loading="lazy"
                    className="rounded-full align-middle"
                />
                <span className="font-semibold text-sm">
                    {category.title}
                </span>
            </Button>
        </Link>
    )
}
CategoryTabItem.displayName = "CategoryTabItem"

export type CategoryTabProps = {
    categories: Category[]
    selectedCategoryId: number
}

export const CategoryTab = ({ categories, selectedCategoryId }: CategoryTabProps) => {
    return (
        <div className="whitespace-nowrap overflow-x-auto p-3 no-scrollbar">
            {
                categories.map(category => (
                    <div
                        key={category.id}
                        className="inline-flex px-1">
                        <CategoryTabItem
                            key={category.id}
                            category={category}
                            isActive={category.id == selectedCategoryId} />
                    </div>
                ))
            }
        </div>
    )
}
CategoryTab.displayName = "CategoryTab"

export type CategoryListProps = {
    categories: Category[]
}

export const CategoryList = ({ categories }: CategoryListProps) => {
    const activeViewType = useViewContext((state) => state.view)

    return (
        <section className={cn(
            activeViewType == "grid" && "grid grid-cols-category",
            activeViewType == "list" && "flex flex-col",
            "gap-2"
        )}>
            {
                categories.map(category => (
                    <CategoryCard
                        key={category.id}
                        category={category} />
                ))
            }
        </section>
    )
}
CategoryList.displayName = "CategoryList"

export type CategoryCardProps = {
    category: Category
}

export const CategoryCard = ({ category }: CategoryCardProps) => {
    return (
        <Link href={routes.categoryDetail.href(category.id)}>
            <div className="flex items-center justify-between flex-col text-center rounded-xl bg-gray-50 text-card-foreground border border-gray-100 h-full gap-2 p-4">
                <Image
                    src={category.image}
                    alt={category.title}
                    width={80}
                    height={80}
                    loading="lazy"
                    className="rounded-full"
                />
                {
                    category.description && (
                        <p className="mt-2 text-xs text-gray-400">{category.description}</p>
                    )
                }
                <p className="mt-2 text-sm font-semibold">
                    {category.title}
                </p>
            </div>
        </Link>
    )
}
CategoryCard.displayName = "CategoryCard"

export const CategoryNotFound = () => {
    return (
        <section>
            <h1>
                Kategori bulunamadı!
            </h1>
        </section>
    )
}
CategoryNotFound.displayName = "CategoryNotFound"
