"use client"

import { Category } from "@/types"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { cn } from "@/utils/shadcn"
import { useEffect, useRef } from "react"
import { TenantLink } from "./tenant"

export type CategoryTabItemProps = {
    category: Category
    isActive?: boolean
}

export const CategoryTabItem = ({ category, isActive }: CategoryTabItemProps) => {
    return (
        <TenantLink href={`/menu/?c=${category.id}`}>
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
        </TenantLink>
    )
}
CategoryTabItem.displayName = "CategoryTabItem"

export type CategoryTabProps = {
    categories: Category[]
    selectedCategoryId: number
}

export const CategoryTab = ({ categories, selectedCategoryId }: CategoryTabProps) => {
    const tabContainerRef = useRef<HTMLDivElement | null>(null)
    const tabRefs = useRef<(HTMLDivElement | null)[]>([])

    const handleTabScroll = (index: number) => {
        if (tabContainerRef.current) {
            tabRefs.current[index]?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" })
        }
    }

    useEffect(() => {
        handleTabScroll(selectedCategoryId)
    }, [selectedCategoryId])

    return (
        <div className="whitespace-nowrap overflow-x-auto p-3 no-scrollbar" ref={tabContainerRef}>
            {
                categories.map((category, index) => (
                    <div
                        key={category.id}
                        className="inline-flex px-1"
                        ref={(el) => { tabRefs.current[index + 1] = el }}
                        onClick={() => handleTabScroll(index + 1)}>
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
    return (
        <section className={cn(
            "grid grid-cols-category",
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
        <TenantLink href={`/menu/?c=${category.id}`}>
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
        </TenantLink>
    )
}
CategoryCard.displayName = "CategoryCard"
