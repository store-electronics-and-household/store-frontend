export const formatSumm = (summ: number): string => {
  const formatedSumm = summ.toLocaleString('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0,
  });
  return formatedSumm;
};
