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
    if (currencies.length <= 1) {
        return null;
    }

    return (
        <Select defaultValue={defaultCurrency._id.code}>
            <SelectTrigger className="rounded-full bg-primary text-primary-foreground border-primary-foreground">
                <SelectValue />
            </SelectTrigger>
            <SelectContent>
                {currencies.map((currency, currencyIndex) => (
                    <SelectItem
                        key={currencyIndex}
                        value={currency._id.code}
                    >
                        {currency._id.code} ({currency._id.symbol})
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}
CurrencySelect.displayName = "CurrencySelect"
