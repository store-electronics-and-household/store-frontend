import { type MeTypePickUpPoint } from '../../utils/types';

export const getPickUpDate = (): string => {
  const currentDate = new Date();
  const tomorrowDate = new Date();
  tomorrowDate.setDate(currentDate.getDate() + 1);
  const iso8601Format = tomorrowDate.toISOString().split('T')[0];
  return iso8601Format;
};

export const adrressToString = (obj: MeTypePickUpPoint): string => {
  const nonEmptyFields = Object.entries(obj)
    .filter(([key, value]) => value !== '')
    .map(([key, value]: [string, string]) => `${key}:${value}`);
  return nonEmptyFields.join(' ');
};

export const priceToNumber = (currencyString: string): number => {
  const stringWithoutCurrency = currencyString.replace(/\s|\u00A0|₽/g, '');
  const numberValue = parseFloat(stringWithoutCurrency);
  return isNaN(numberValue) ? 0 : numberValue;
};

export const getTomorrowDate = (): string => {
  const currentDate = new Date();
  const tomorrowDate = new Date(currentDate);
  tomorrowDate.setDate(currentDate.getDate() + 1);
  const months = [
    'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
    'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
  ];
  const dayOfMonth = tomorrowDate.getDate();
  const monthName = months[tomorrowDate.getMonth()];
  const formattedDate = `${dayOfMonth} ${monthName}`;
  return formattedDate;
};

// getDeliveryDate
export const getDeliveryDate = (inputDate: string): string => {
  // Разбираем строку с датой
  const [day, month] = inputDate.split('.').map(Number);

  // Получаем текущую дату
  const currentDate = new Date();

  // Устанавливаем день и месяц на указанные значения
  currentDate.setDate(day);
  currentDate.setMonth(month - 1); // Месяцы в JavaScript начинаются с 0

  // Проверка на невалидные даты
  if (isNaN(currentDate.getTime())) {
    throw new Error('Неверное значение даты');
  }

  // Преобразовываем в формат YYYY-MM-DD
  const formattedDate = currentDate.toISOString().split('T')[0];

  return formattedDate;
};
