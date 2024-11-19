"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { cn } from "@/utils/shadcn"
import { useEffect, useRef } from "react"
import Link from "next/link"
import { useLocale } from "next-intl"

export type CategoryTabItemProps = {
    category: any
    isActive?: boolean
}

export const CategoryTabItem = ({ category, isActive }: CategoryTabItemProps) => {
    const locale = useLocale();

    const translationData = category.translations.find(translation => translation.languageId.culture === locale);

    if (!translationData) {
        return null;
    }

    return (
        <Link href={`/menu/?c=${category._id}`}>
            <Button
                variant={isActive ? "destructive" : "outline"}
                className="h-full p-2 flex gap-2 items-center justify-center">
                <Image
                    src={category.image}
                    alt={translationData.name}
                    width={30}
                    height={30}
                    loading="lazy"
                    className="rounded-full align-middle"
                />
                <span className="font-semibold text-sm">
                    {translationData.name}
                </span>
            </Button>
        </Link>
    )
}
CategoryTabItem.displayName = "CategoryTabItem"

export type CategoryTabProps = {
    categories: any[]
    selectedCategoryId: string
}

export const CategoryTab = ({ categories, selectedCategoryId }: CategoryTabProps) => {
    const tabContainerRef = useRef<HTMLDivElement | null>(null)
    const tabRefs = useRef<(HTMLDivElement | null)[]>([])

    const handleTabScroll = (index: string) => {
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
                        key={category._id}
                        className="inline-flex px-1"
                        ref={(el) => { tabRefs.current[index + 1] = el }}
                        onClick={() => handleTabScroll(index + 1)}>
                        <CategoryTabItem
                            key={category._id}
                            category={category}
                            isActive={category._id == selectedCategoryId} />
                    </div>
                ))
            }
        </div>
    )
}
CategoryTab.displayName = "CategoryTab"

export type CategoryListProps = {
    categories: any[]
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
                        key={category._id}
                        category={category} />
                ))
            }
        </section>
    )
}
CategoryList.displayName = "CategoryList"

export type CategoryCardProps = {
    category: any
}

export const CategoryCard = ({ category }: CategoryCardProps) => {
    const locale = useLocale();

    const translationData = category.translations.find(translation => translation.languageId.culture === locale);

    if (!translationData) {
        return null;
    }
    
    return (
        <Link href={`/menu/?c=${category._id}`}>
            <div className="flex items-center justify-between flex-col text-center rounded-xl bg-gray-50 text-card-foreground border border-gray-100 h-full gap-2 p-4">
                <Image
                    src={category.image}
                    alt={translationData.name}
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
                    {translationData.name}
                </p>
            </div>
        </Link>
    )
}
CategoryCard.displayName = "CategoryCard"
