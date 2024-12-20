"use client";

import {ProductItem} from "./product-item";
import {type Products} from "@/types";
import {Separator} from "@/components/ui/separator";

export type ProductListProps = {
  products: Products;
};

export const ProductList = ({products}: ProductListProps) => {
  const hasProducts = products && products.length !== 0;

  return (
    <section className="container py-4">
      {hasProducts && (
        <div className="grid grid-cols-1 gap-3">
          {products.map((product, productIndex) => (
            <>
              <ProductItem key={productIndex} product={product} />
              {productIndex !== products.length - 1 && <Separator className="bg-primary/10" />}
            </>
          ))}
        </div>
      )}
    </section>
  );
};
ProductList.displayName = "ProductList";
