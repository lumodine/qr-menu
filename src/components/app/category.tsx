"use client"

import Link from "next/link"
import Image from "next/image"

export type CategoryHeroProps = {
    tenant: any
    category: any
}

export const CategoryHero = ({ tenant, category }: CategoryHeroProps) => {
    return (
        <section
            style={{ '--bg-image': `url(${category.image})` }}
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
                                    className="rounded-full w-[100px] h-[100px] md:w-[200px] md:h-[200px]"
                                />
                            </Link>
                        )
                    }
                    {
                        category.translations[0].name && (
                            <h1 className="text-2xl md:text-3xl lg:text-6xl font-bold text-white drop-shadow-2xl">
                                {category.translations[0].name}
                            </h1>
                        )
                    }
                    {
                        category.translations[0].description && (
                            <p className="text-sm md:text-md lg:text-lg text-white drop-shadow-2xl">
                                {category.translations[0].description}
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
    category: any
}

export const CategoryCard = ({ category }: CategoryCardProps) => {
    return (
        <Link
            href={`/${category._id}`}
            style={{ '--bg-image': `url(${category.image})` }}
            className="bg-[image:var(--bg-image)] bg-center bg-no-repeat bg-cover overflow-hidden rounded-lg transition-transform hover:scale-95 bg-primary/50"
        >
            <div className="flex flex-col gap-1 items-center justify-center w-full h-full bg-black/50">
                <span className="text-lg font-bold text-white drop-shadow-2xl">
                    {category.translations[0].name}
                </span>
                {
                    category.translations[0].description && (
                        <p className="text-xs text-white drop-shadow-2xl">
                            {category.translations[0].description}
                        </p>
                    )
                }
            </div>
        </Link>
    )
}
CategoryCard.displayName = "CategoryCard"

export type CategoryListProps = {
    categories: any[]
}

export const CategoryList = ({ categories }: CategoryListProps) => {
    const hasCategories = categories && categories.length !== 0;

    return (
        <section className="container py-6">
            {
                hasCategories && (
                    <div className="grid grid-cols-1 gap-3 auto-rows-[10em]">
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
