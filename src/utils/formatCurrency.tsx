const CURRENCY_FORMATTER = new Intl.NumberFormat('ru-RU', {
  currency: 'RUB',
  style: 'currency',
  minimumFractionDigits: 0,
});

export const formatCurrency = (number: number): string => {
  return CURRENCY_FORMATTER.format(number);
};
