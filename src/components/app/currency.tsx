"use client"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useAppContext } from "@/contexts/AppContext";
import { CurrencyGroup } from "@/types";

export type CurrencySelectProps = {
    currencies: CurrencyGroup[]
}

export const CurrencySelect = ({ currencies }: CurrencySelectProps) => {
    const {
        currency,
        defaultCurrency,
        setCurrency
    } = useAppContext();
    
    if (currencies.length <= 1) {
        return null;
    }

    const handleValueChange = (currencyCode: string) => {
        const selectedCurrency = currencies
            .find(currency => currency.currency.code === currencyCode);

        setCurrency(selectedCurrency || defaultCurrency);
    };

    return (
        <Select
            defaultValue={currency.currency.code || defaultCurrency.currency.code}
            onValueChange={handleValueChange}
        >
            <SelectTrigger className="rounded-full bg-primary text-primary-foreground border-primary-foreground">
                <SelectValue />
            </SelectTrigger>
            <SelectContent>
                {currencies.map((currency, currencyIndex) => (
                    <SelectItem
                        key={currencyIndex}
                        value={currency.currency.code}
                    >
                        {currency.currency.symbol}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}
CurrencySelect.displayName = "CurrencySelect"
