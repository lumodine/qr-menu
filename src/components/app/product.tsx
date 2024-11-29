"use client"

import Image from "next/image"
import { cn } from "@/utils/shadcn"
import { formatPrice } from "@/utils/number"
import { PRODUCT_STATUS, PRODUCT_TYPES } from "@/constants/product"

export type ProductCardProps = {
    product: any
}

export const ProductCard = ({ product }: ProductCardProps) => {
    const isRow = product.type === PRODUCT_TYPES.ROW;
    const isGrid = product.type === PRODUCT_TYPES.GRID;
    const isNotAvailable = product.status === PRODUCT_STATUS.NOT_AVAILABLE;

    const image = {
        width: isRow ? 50 : 400,
        height: isRow ? 50 : 400,
    };

    return (
        <div className={
            cn(
                "flex items-start justify-center gap-4 p-4 overflow-hidden rounded-lg",
                isGrid && "flex-col",
                isNotAvailable && "opacity-30 cursor-no-drop select-none"
            )
        }>
            {
                product.image && (
                    <div className={
                        cn(
                            isRow && "h-14 w-14",
                            isGrid && "h-full w-full"
                        )
                    }>
                        <Image
                            src={product.image}
                            alt={product.translations[0].name}
                            width={image.width}
                            height={image.height}
                            loading={"lazy"}
                            className="h-full w-full rounded-lg"
                        />
                    </div>
                )
            }
            <div className="flex-1 w-full flex flex-col gap-1">
                <div
                    className="flex gap-2 justify-between"
                >
                    {
                        product.translations[0].name && (
                            <span className="text-lg font-semibold text-primary">
                                {product.translations[0].name}
                            </span>
                        )
                    }
                    <span className="flex-1 w-full border-b-2 my-2 border-dotted border-primary/20" />
                    <b className="text-primary">
                        {product.prices[0].currency.symbol}{formatPrice(product.prices[0].amount)}
                    </b>
                </div>
                {
                    product.translations[0].description && (
                        <p className="text-sm">
                            {product.translations[0].description}
                        </p>
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
