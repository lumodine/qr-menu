"use client";

import type {CurrencyGroup} from "@/types";
import {Banknote} from "lucide-react";
import {Select, SelectContent, SelectItem, SelectTrigger} from "@/components/ui/select";
import {useAppContext} from "@/contexts/AppContext";

export type CurrencySwitcherProps = {
  currencies: CurrencyGroup[];
};

export const CurrencySwitcher = ({currencies}: CurrencySwitcherProps) => {
  const {currency, defaultCurrency, setCurrency} = useAppContext();

  if (currencies.length <= 1) {
    return null;
  }

  const handleValueChange = (currencyCode: string) => {
    const selectedCurrency = currencies.find((currency) => currency.currency.code === currencyCode);

    setCurrency(selectedCurrency || defaultCurrency);
  };

  return (
    <Select
      defaultValue={currency.currency.code || defaultCurrency.currency.code}
      onValueChange={handleValueChange}
    >
      <SelectTrigger className="border-none flex items-center gap-[3px] rounded-sm bg-black/50 text-white text-xs p-2 hover:bg-black/70">
        <Banknote size={14} />
      </SelectTrigger>
      <SelectContent>
        {currencies.map((currency, currencyIndex) => (
          <SelectItem key={currencyIndex} className="text-xs" value={currency.currency.code}>
            {currency.currency.code}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
CurrencySwitcher.displayName = "CurrencySwitcher";
