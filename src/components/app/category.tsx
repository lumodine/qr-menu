"use client"

import Link from "next/link"
import Image from "next/image"
import { useAppContext } from "@/contexts/AppContext"
import { Categories, Category, Tenant } from "@/types"
import { cn } from "@/utils/shadcn"
import { CATEGORY_TYPE_CLASS } from "@/constants/category"

export type CategoryHeroProps = {
    tenant: Tenant
    category: Category
}

export const CategoryHero = ({ tenant, category }: CategoryHeroProps) => {
    const {
        language,
        defaultLanguage
    } = useAppContext();

    let translation = category.translations
        .find((translation) =>
            translation.language._id === language.language._id
        );

    if (!translation) {
        translation = category.translations
            .find((translation) =>
                translation.language._id === defaultLanguage.language._id
            );
    }

    return (
        <section
            style={{ ['--bg-image' as string]: `url(${category.image})` }}
            className="bg-[image:var(--bg-image)] bg-center bg-no-repeat bg-cover overflow-hidden bg-primary/50"
        >
            <div className="bg-black/50">
                <div className="container flex flex-col gap-4 items-center justify-center w-full h-[30vh] lg:h-[40vh] ">
                    {
                        tenant.logo && (
                            <Link href={"/"}>
                                <Image
                                    src={tenant.logo}
                                    alt={tenant.name}
                                    width={100}
                                    height={100}
                                    loading={"lazy"}
                                    className="rounded-sm w-[100px] h-[100px] md:w-[200px] md:h-[200px]"
                                />
                            </Link>
                        )
                    }
                    {
                        translation?.name && (
                            <h1 className="text-2xl md:text-3xl lg:text-6xl font-bold text-white drop-shadow-2xl">
                                {translation?.name}
                            </h1>
                        )
                    }
                    {
                        translation?.description && (
                            <p className="text-sm md:text-md lg:text-lg text-white drop-shadow-2xl">
                                {translation?.description}
                            </p>
                        )
                    }
                </div>
            </div>
        </section>
    )
}
CategoryHero.displayName = "CategoryHero"

export type CategoryCardProps = {
    category: Category
}

export const CategoryCard = ({ category }: CategoryCardProps) => {
    const { language, defaultLanguage } = useAppContext();

    let translation = category.translations.find((translation) => translation.language._id === language.language._id);

    if (!translation) {
        translation = category.translations
            .find((translation) =>
                translation.language._id === defaultLanguage.language._id
            );
    }

    return (
        <Link
            href={`/${category._id}`}
            style={{ ['--bg-image' as string]: `url(${category.image})` }}
            className={
                cn(
                    "bg-[image:var(--bg-image)] bg-center bg-no-repeat bg-cover overflow-hidden rounded-sm transition-transform hover:scale-95 bg-primary/50",
                    CATEGORY_TYPE_CLASS[category.type]
                )
            }
        >
            <div className="flex flex-col gap-1 items-center justify-center w-full h-full bg-black/60">
                <span className="text-lg font-bold text-white drop-shadow-2xl">
                    {translation?.name}
                </span>
                {
                    translation?.description && (
                        <p className="text-xs text-white drop-shadow-2xl">
                            {translation?.description}
                        </p>
                    )
                }
            </div>
        </Link>
    )
}
CategoryCard.displayName = "CategoryCard"

export type CategoryListProps = {
    categories: Categories
}

export const CategoryList = ({ categories }: CategoryListProps) => {
    const hasCategories = categories && categories.length !== 0;

    return (
        <section className="container py-6">
            {
                hasCategories && (
                    <div
                        className="grid gap-2 auto-rows-[10em] grid-flow-row-dense grid-cols-2"
                    >
                        {categories.map((category, categoryIndex) => (
                            <CategoryCard
                                key={categoryIndex}
                                category={category}
                            />
                        ))}
                    </div>
                )
            }
        </section>
    )
}
CategoryList.displayName = "CategoryList"
