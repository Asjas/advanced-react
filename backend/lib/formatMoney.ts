const formatter = new Intl.NumberFormat('en-ZA', {
  style: 'currency',
  currency: 'ZAR',
});

export default function formatMoney(cents: number) {
  const dollars = cents / 100;
  return formatter.format(dollars);
}
