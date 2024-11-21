export function formatPrice(price: number) {
    return new Intl.NumberFormat().format(price)
}
