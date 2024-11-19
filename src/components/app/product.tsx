"use client"

import { cn } from "@/utils/shadcn"
import Image from "next/image"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { formatPrice } from "@/utils/number"
import { NotFound } from "./error"
import { useLocale, useTranslations } from "next-intl"

export type ProductListProps = {
    products: any[]
    viewType: string
}

export const ProductList = ({ products, viewType }: ProductListProps) => {
    const t = useTranslations();

    return (
        <section className={cn(
            "p-4",
            viewType == "list" && "flex flex-col gap-2",
            viewType == "grid" && "grid grid-cols-product gap-2"
        )}>
            {
                products.length === 0 && (
                    <NotFound title={t("product_not_found")} />
                )
            }
            {
                products.map(product => (
                    <ProductCard
                        key={product._id}
                        viewType={viewType}
                        product={product} />
                ))
            }
        </section>
    )
}
ProductList.displayName = "ProductList"

export type ProductCardProps = {
    product: any
    viewType: string
}

export const ProductCard = ({ product, viewType }: ProductCardProps) => {
    const locale = useLocale();
    const t = useTranslations();

    const translationData = product.translations.find(translation => translation.languageId.culture === locale);

    if (!translationData) {
        return null;
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className={cn(
                    "rounded-xl bg-gray-50 text-card-foreground border border-gray-100",
                    "flex h-full gap-4 py-4 px-2",
                    "cursor-pointer",
                    viewType == "list" && "justify-center items-center",
                    viewType == "grid" && "flex-col justify-center items-center"
                )}>
                    <Image
                        src={product.image}
                        alt={translationData.name}
                        width={80}
                        height={80}
                        loading="lazy"
                        className="rounded-full"
                    />
                    <div className={cn(
                        "flex flex-col w-full h-full justify-between gap-2",
                        viewType == "list" && "text-left",
                        viewType == "grid" && "text-center",
                    )}>
                        <p className="text-md font-semibold">
                            {translationData.name}
                        </p>
                        {
                            product.description && (
                                <p className="text-xs text-gray-400 line-clamp-3">{product.description}</p>
                            )
                        }
                        <p className="text-sm font-bold">
                            {formatPrice(product.prices[0].price)}
                        </p>
                    </div>
                </div>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        {translationData.name}
                        {" "}&#x2022;{" "}
                        {formatPrice(product.prices[0].price)}
                    </DialogTitle>
                    <DialogDescription>
                        {product.description}
                    </DialogDescription>
                </DialogHeader>
                <Image
                    src={product.image}
                    alt={translationData.name}
                    width={250}
                    height={250}
                    loading="lazy"
                    className="rounded-full w-full h-auto"
                />

                <div className="text-center">
                    <DialogTrigger asChild>
                        <Button variant="secondary" size="lg" className="mt-4 w-full">
                            {t("close")}
                        </Button>
                    </DialogTrigger>
                </div>
            </DialogContent>
        </Dialog>
    )
}
ProductCard.displayName = "ProductCard"
