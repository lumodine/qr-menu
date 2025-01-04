"use client";

import {cn} from "@/utils/shadcn";
import {formatAmount} from "@/utils/number";
import {useAppContext} from "@/contexts/AppContext";
import {ProductType, ProductVariant} from "@/types";

export type ProductVariantItemProps = {
  variant: ProductVariant;
  type: string;
};

const ProductVariantItem = ({variant, type}: ProductVariantItemProps) => {
  const isCard = type === ProductType.CARD;
  const isRow = type === ProductType.ROW;

  const {language, defaultLanguage, currency, defaultCurrency} = useAppContext();

  let translation = variant.translations.find(
    (translation) => translation.language._id === language.language._id,
  );

  if (!translation) {
    translation = variant.translations.find(
      (translation) => translation.language._id === defaultLanguage.language._id,
    );
  }

  let price = variant.prices.find((price) => price.currency._id === currency.currency._id);

  if (!price) {
    price = variant.prices.find((price) => price.currency._id === defaultCurrency.currency._id);
  }

  return (
    <div className={cn("flex items-start justify-center gap-2 overflow-hidden")}>
      <div className={cn("flex-1 w-full flex flex-col gap-1")}>
        <div className="flex gap-2 justify-between">
          {translation?.title && <b className="text-sm">{translation?.title}</b>}
          {price?.amount && (
            <>
              <span
                className={cn(
                  "flex-1 w-full border-b-2 my-2 border-dotted border-primary/20",
                  isCard && "border-primary-foreground",
                )}
              />
              <b className="text-sm">
                {price.currency.symbol}
                {formatAmount(language.language.culture, price.amount)}
              </b>
            </>
          )}
        </div>
        {translation?.description && (
          <p
            className={cn(
              "text-xs",
              isCard && "text-primary-foreground/70",
              isRow && "text-muted-foreground",
            )}
          >
            {translation?.description}
          </p>
        )}
      </div>
    </div>
  );
};

ProductVariantItem.displayName = "ProductVariantItem";

export {ProductVariantItem};
