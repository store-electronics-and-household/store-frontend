import carIcon from '../../image/icons/car_icon.svg';
import deliveryIcon from '../../image/icons/delivery_icon.svg';
import globalIcon from '../../image/icons/global_icon.svg';

export const mockedDeliveryData = [
  {
    title: 'Самовывоз из магазина',
    icon: carIcon,
    alt: 'Самовывоз',
    description:
      'Заказ можно забрать в нашем магазине в Санкт-Петербурге. Перед приездом необходимо зарезервировать товар',
    highlight: ['Самовывоз из магазина: бесплатно'],
  },
  {
    title: 'Доставка курьером',
    icon: deliveryIcon,
    alt: 'Доставка курьером',
    description:
      'По Санкт-Петербургу и пригородам курьер доставит заказ в удобное для вас время. Возможна экспресс доставка в течении 3х часов.',
    highlight: ['Доставка стандартная: 300 ₽', 'Экспресс доставка: 500 ₽'],
  },
  {
    title: 'Доставка в пункт СДЭК',
    icon: globalIcon,
    alt: 'Доставка в пункт выдачи',
    description:
      'Вы можете забрать свой заказ в одном из пунктов выдачи СДЭК в вашем городе или оформить доставку до двери.',
    highlight: ['Доставка до пункта выдачи: 200 ₽'],
  },
];
