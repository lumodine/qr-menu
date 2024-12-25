"use client";

import Image from "next/image";
import {ProductTagItem} from "./product-tag-item";
import {cn} from "@/utils/shadcn";
import {formatAmount} from "@/utils/number";
import {useAppContext} from "@/contexts/AppContext";
import {ProductStatus, ProductTag, ProductType, type Product} from "@/types";
import {ITEM_KINDS} from "@/constants/item";

export type ProductItemProps = {
  product: Product;
};

export const ProductItem = ({product}: ProductItemProps) => {
  const isRow = product.type === ProductType.ROW;
  const isGrid = product.type === ProductType.GRID;
  const isNotAvailable = product.status === ProductStatus.NOT_AVAILABLE;

  const image = {
    width: isRow ? 50 : 400,
    height: isRow ? 50 : 400,
  };

  const {language, defaultLanguage, currency, defaultCurrency} = useAppContext();

  let translation = product.translations.find(
    (translation) => translation.language._id === language.language._id,
  );

  if (!translation) {
    translation = product.translations.find(
      (translation) => translation.language._id === defaultLanguage.language._id,
    );
  }

  let price = product.prices.find((price) => price.currency._id === currency.currency._id);

  if (!price) {
    price = product.prices.find((price) => price.currency._id === defaultCurrency.currency._id);
  }

  const tags = product.parentItems.filter((item) => item.kind === ITEM_KINDS.TAG);

  return (
    <div
      className={cn(
        "flex items-start justify-center gap-2 overflow-hidden rounded-sm",
        isGrid && "flex-col bg-primary text-primary-foreground",
        isNotAvailable && "opacity-30 cursor-no-drop select-none",
      )}
    >
      {product.image && (
        <div className={cn(isRow && "h-14 w-14", isGrid && "h-full w-full")}>
          <Image
            alt={translation?.title || "image"}
            className="h-full w-full"
            height={image.height}
            loading={"lazy"}
            src={product.image}
            width={image.width}
          />
        </div>
      )}
      <div className={cn("flex-1 w-full flex flex-col gap-1", isGrid && "p-2")}>
        {tags.length > 0 && (
          <div className="flex gap-1">
            {tags.map((productTag: ProductTag, productTagIndex: number) => (
              <ProductTagItem key={productTagIndex} tag={productTag} />
            ))}
          </div>
        )}
        <div className="flex gap-2 justify-between">
          {translation?.title && (
            <span className="text-lg font-semibold">{translation?.title}</span>
          )}
          {price?.amount && (
            <>
              <span
                className={cn(
                  "flex-1 w-full border-b-2 my-2 border-dotted border-primary/20",
                  isGrid && "border-primary-foreground",
                )}
              />
              <b>
                {price.currency.symbol}
                {formatAmount(language.language.culture, price.amount)}
              </b>
            </>
          )}
        </div>
        {translation?.description && <p className="text-sm">{translation?.description}</p>}
      </div>
    </div>
  );
};
ProductItem.displayName = "ProductItem";
