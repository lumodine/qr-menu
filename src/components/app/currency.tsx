"use client";

import type {CurrencyGroup} from "@/types";
import {Banknote} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {useAppContext} from "@/contexts/AppContext";

export type CurrencySelectProps = {
  currencies: CurrencyGroup[];
};

export const CurrencySelect = ({currencies}: CurrencySelectProps) => {
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
      <SelectTrigger className="flex items-center gap-[3px] rounded-sm bg-black/50 text-white text-xs">
        <Banknote size={14} /> <SelectValue />
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
CurrencySelect.displayName = "CurrencySelect";
