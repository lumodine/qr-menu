export function formatAmount(locale: string, amount: number) {
  return new Intl.NumberFormat(locale, {
    style: "decimal",
    minimumFractionDigits: 2,
  }).format(amount);
}
