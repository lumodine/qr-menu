"use client"

import Image from "next/image"
import { cn } from "@/utils/shadcn"
import { formatAmount } from "@/utils/number"
import { PRODUCT_STATUS, PRODUCT_TYPES } from "@/constants/product"
import { useAppContext } from "@/contexts/AppContext"
import { Product, Products } from "@/types"

export type ProductCardProps = {
    product: Product
}

export const ProductCard = ({ product }: ProductCardProps) => {
    const isRow = product.type === PRODUCT_TYPES.ROW;
    const isGrid = product.type === PRODUCT_TYPES.GRID;
    const isNotAvailable = product.status === PRODUCT_STATUS.NOT_AVAILABLE;

    const image = {
        width: isRow ? 50 : 400,
        height: isRow ? 50 : 400,
    };

    const {
        language,
        defaultLanguage,
        currency,
        defaultCurrency
    } = useAppContext();

    let translation = product.translations
        .find((translation) =>
            translation.language._id === language.language._id
        );

    if (!translation) {
        translation = product.translations
            .find((translation) =>
                translation.language._id === defaultLanguage.language._id
            );
    }

    let price = product.prices
        .find((price) =>
            price.currency._id === currency.currency._id
        );

    if (!price) {
        price = product.prices
            .find((price) =>
                price.currency._id === defaultCurrency.currency._id
            );
    }

    return (
        <div className={
            cn(
                "flex items-start justify-center gap-4 p-4 overflow-hidden rounded-sm",
                isGrid && "flex-col bg-primary text-primary-foreground",
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
                            alt={translation?.name || "image"}
                            width={image.width}
                            height={image.height}
                            loading={"lazy"}
                            className="h-full w-full rounded-sm"
                        />
                    </div>
                )
            }
            <div className="flex-1 w-full flex flex-col gap-1">
                <div
                    className="flex gap-2 justify-between"
                >
                    {
                        translation?.name && (
                            <span className="text-lg font-semibold">
                                {translation?.name}
                            </span>
                        )
                    }
                    {
                        price?.amount && (
                            <>
                                <span className={
                                    cn(
                                        "flex-1 w-full border-b-2 my-2 border-dotted border-primary/20",
                                        isGrid && "border-primary-foreground"
                                    )
                                } />
                                <b>
                                    {price.currency.symbol}{formatAmount(language.language.culture, price.amount)}
                                </b>
                            </>
                        )
                    }
                </div>
                {
                    translation?.description && (
                        <p className="text-sm">
                            {translation?.description}
                        </p>
                    )
                }
            </div>
        </div>
    )
}
ProductCard.displayName = "ProductCard"

export type ProductListProps = {
    products: Products
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
