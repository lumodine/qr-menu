"use client"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export type CurrencySelectProps = {
    currencies: any[]
    defaultCurrency: any
}

export const CurrencySelect = ({ currencies, defaultCurrency }: CurrencySelectProps) => {
    return null;

    if (currencies.length <= 1) {
        return null;
    }

    return (
        <Select defaultValue={defaultCurrency.currency.code}>
            <SelectTrigger className="rounded-full bg-primary text-primary-foreground border-primary-foreground">
                <SelectValue />
            </SelectTrigger>
            <SelectContent>
                {currencies.map((currency, currencyIndex) => (
                    <SelectItem
                        key={currencyIndex}
                        value={currency.currency.code}
                    >
                        {currency.currency.code} ({currency.currency.symbol})
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}
CurrencySelect.displayName = "CurrencySelect"
