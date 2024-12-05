export function formatAmount(locale: string, amount: number) {
  return new Intl.NumberFormat(locale, {
    style: "decimal",
  }).format(amount);
}
