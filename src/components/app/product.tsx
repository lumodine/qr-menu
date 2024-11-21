"use client"

import Image from "next/image"
import { NotFound } from "./error"
import { cn } from "@/utils/shadcn"
import { formatPrice } from "@/utils/number"

export type ProductCardProps = {
    product: any
}

export const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <div className={
            cn(
                "flex items-start justify-center gap-4 p-4 overflow-hidden rounded-lg",
                product.type === "grid" && "flex-col",
                product.status === "not_available"
                    ? "opacity-30 cursor-no-drop select-none"
                    : ""
            )
        }>
            {
                product.image && (
                    <div className={
                        cn(
                            product.type === "row" && "h-14 w-14",
                            product.type === "grid" && "h-full w-full"
                        )
                    }>
                        <Image
                            src={product.image}
                            alt={product.translations[0].name}
                            width={50}
                            height={50}
                            loading={"lazy"}
                            className="h-full w-full rounded-lg"
                        />
                    </div>
                )
            }
            <div className="flex-1 w-full flex flex-col gap-1">
                {
                    product.translations[0].name && (
                        <span className="text-lg font-semibold text-primary">
                            {product.translations[0].name}
                        </span>
                    )
                }
                {
                    product.translations[0].description && (
                        <p className="text-sm">
                            {product.translations[0].description}
                        </p>
                    )
                }
                {
                    product.prices.length > 0 && (
                        <div className="w-full flex flex-col gap-1">
                            {product.prices.map((productPrice, productPriceIndex) => (
                                <div
                                    key={productPriceIndex}
                                    className="flex gap-2 justify-between"
                                >
                                    <span>
                                        {productPrice.unitId.translations[0].name}
                                    </span>
                                    <span className="flex-1 w-full border-b-2 my-2 border-dotted border-primary/20" />
                                    <span>
                                        {productPrice.currencyId.symbol}{formatPrice(productPrice.price)}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )
                }
            </div>
        </div>
    )
}
ProductCard.displayName = "ProductCard"

export type ProductListProps = {
    products: any[]
}

export const ProductList = ({ products }: ProductListProps) => {
    const hasProducts = products && products.length !== 0;

    return (
        <section className="container py-4">
            {
                !hasProducts && (
                    <NotFound
                        title="Üzgünüz, şu anda uygun ürünümüz bulunmuyor."
                    />
                )
            }
            {
                hasProducts && (
                    <div className="grid grid-cols-1 gap-3">
                        {products.map((product, productIndex) => (
                            <ProductCard
                                key={productIndex}
                                product={product}
                            />
                        ))}
                    </div>
                )
            }
        </section>
    )
}
ProductList.displayName = "ProductList"
