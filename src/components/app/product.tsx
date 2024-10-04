import { Product } from "@/types"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { useViewContext } from "@/contexts/viewContext"

export type ProductListProps = {
    products: Product[]
}

export const ProductList = ({ products }: ProductListProps) => {
    const activeViewType = useViewContext((state) => state.view)

    return (
        <section className={cn(
            "p-4",
            activeViewType == "list" && "flex flex-col gap-2",
            activeViewType == "grid" && "grid grid-cols-product gap-2"
        )}>
            {
                products.map(product => (
                    <ProductCard
                        key={product.id}
                        viewType={activeViewType}
                        product={product} />
                ))
            }
        </section>
    )
}
ProductList.displayName = "ProductList"

export type ProductCardProps = {
    product: Product
    viewType: string
}

export const ProductCard = ({ product, viewType }: ProductCardProps) => {
    return (
        <div className={cn(
            "rounded-xl bg-gray-50 text-card-foreground border border-gray-100",
            "flex h-full gap-4 py-4 px-2",
            viewType == "list" && "justify-center items-center",
            viewType == "grid" && "flex-col justify-center items-center"
        )}>
            <Image
                src={product.image}
                alt={product.title}
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
                    {product.title}
                </p>
                {
                    product.description && (
                        <p className="text-xs text-gray-400">{product.description}</p>
                    )
                }
                <p className="text-sm font-bold">
                    ₺{product.price}
                </p>
            </div>
        </div>
    )
}
ProductCard.displayName = "ProductCard"
