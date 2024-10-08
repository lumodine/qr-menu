export function formatPrice(price: number) {
    return new Intl.NumberFormat('tr-TR', {
        style: "currency",
        currency: "TRY",
        currencyDisplay: "symbol"
    }).format(price)
}
