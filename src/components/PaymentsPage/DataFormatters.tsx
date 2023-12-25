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
  const [day, month] = inputDate.split('.');
  const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ];

  const formattedDate = `${parseInt(day, 10)} ${months[parseInt(month, 10) - 1]}`;
  return formattedDate;
};

export const convertDateToISO = (inputDate: string): string => {
  const [day, month] = inputDate.split('.').map(Number);
  const currentYear = new Date().getFullYear();
  const convertedDate = new Date(currentYear, month - 1, day + 1);
  const iso8601Format = convertedDate.toISOString().split('T')[0];
  return iso8601Format;
};
