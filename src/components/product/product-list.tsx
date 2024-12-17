"use client";

import {ProductItem} from "./product-item";
import {type Products} from "@/types";

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
            <ProductItem key={productIndex} product={product} />
          ))}
        </div>
      )}
    </section>
  );
};
ProductList.displayName = "ProductList";
