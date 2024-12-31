"use client";

import Image from "next/image";
import {ProductTagItem} from "@/components/product/product-tag-item";
import {ProductVariantItem} from "@/components/product/product-variant-item";
import {cn} from "@/utils/shadcn";
import {formatAmount} from "@/utils/number";
import {useAppContext} from "@/contexts/AppContext";
import {ProductStatus, ProductType, Tag, type Product} from "@/types";
import {ITEM_KINDS} from "@/constants/item";

export type ProductItemProps = {
  product: Product;
  isShowTag?: boolean;
};

export const ProductItem = ({product, isShowTag = true}: ProductItemProps) => {
  const isRow = product.type === ProductType.ROW;
  const isCard = product.type === ProductType.CARD;
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

  const tags = product.parentItems.filter((item) => item.kind === ITEM_KINDS.TAG) || [];
  const variants =
    product?.childItems?.filter((item) => item.kind === ITEM_KINDS.PRODUCT_VARIANT) || [];

  return (
    <div
      className={cn(
        "flex items-start justify-center gap-2 overflow-hidden rounded-sm",
        isCard && "flex-col bg-primary text-primary-foreground",
        isNotAvailable && "opacity-30 cursor-no-drop select-none",
      )}
    >
      {product.image && (
        <div className={cn(isRow && "h-14 w-14", isCard && "h-full w-full")}>
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
      <div className={cn("flex-1 w-full flex flex-col gap-1", isCard && "p-2")}>
        {isShowTag && tags.length > 0 && (
          <div className="flex gap-1">
            {tags.map((productTag: Tag, productTagIndex: number) => (
              <ProductTagItem key={productTagIndex} tag={productTag} />
            ))}
          </div>
        )}
        <div className="flex gap-2 justify-between">
          {translation?.title && <b className="text-lg">{translation?.title}</b>}
          {price?.amount && (
            <>
              <span
                className={cn(
                  "flex-1 w-full border-b-2 my-2 border-dotted border-primary/20",
                  isCard && "border-primary-foreground",
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

        {variants.length > 0 && (
          <div className="pl-4">
            {variants.map((variant, index) => (
              <ProductVariantItem key={index} productVariant={variant} type={product.type} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
ProductItem.displayName = "ProductItem";
