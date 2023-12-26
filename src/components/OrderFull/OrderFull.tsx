import React, { useContext } from 'react';
import { FullOrderContext } from '../../context/FullOrderContext';
import ProfileLayout from '../ProfileLayout/ProfileLayout';

const OrderFull = (): JSX.Element => {
  const { orderData } = useContext(FullOrderContext);
  const { created, id, finalPrice, deliveryPrice, deliveryType, name, phone } =
    orderData;
  const images = orderData.orderBasket.modelSetResponseDtos.map((item: any) => {
    return item.modelShortDto.images[0];
  });
  const names = orderData.orderBasket.modelSetResponseDtos.map((item: any) => {
    return item.modelShortDto.name;
  });
  const brands = orderData.orderBasket.modelSetResponseDtos.map((item: any) => {
    return item.modelShortDto.brand;
  });
  const vendorcodes = orderData.orderBasket.modelSetResponseDtos.map(
    (item: any) => {
      return item.id;
    }
  );
  const prices = orderData.orderBasket.modelSetResponseDtos.map((item: any) => {
    return item.modelShortDto.price;
  });

  const showDate = (): string => {
    const date = new Date(created);
    const month = date.getMonth();
    const days = date.getDate();
    const monthes = [
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

    return `Заказ от ${days} ${monthes[month]}`;
  };

  return (
    <ProfileLayout>
      <div className='order'>
        <div className='order__info'>
          <h2 className='order__date'>{showDate()}</h2>
          <h3 className='order__number'>{id}</h3>
          <div className='order__status'>Выполнен</div>
        </div>

        <div className='order__payment'>
          <h3 className='order__title'>Оплата</h3>
          <div className='order__payment-info'>
            <span>Товары</span>
            <span className='order__payment-justify'>{finalPrice} ₽</span>
            <span>Доставка</span>
            <span className='order__payment-justify'>
              {deliveryPrice !== 0 ? `${deliveryPrice} ₽` : 'Бесплатно'}
            </span>
            <span className='order__payment-summary'>Итого</span>
            <span className='order__payment-summary order__payment-justify'>
              {finalPrice + deliveryPrice} ₽
            </span>
          </div>
        </div>

        <div className='order__delivery'>
          <h3 className='order__title'>Способ получения</h3>

          <div className='order__delivery-info'>
            <div className='order__delivery-details'>
              <h4 className='order__delivery-title'>Способ получения:</h4>
              <span className='order__delivery-bold'>
                {deliveryType === 'type1'
                  ? 'Доставка'
                  : 'Самовывоз из магазина'}
              </span>
            </div>
            <div className='order__delivery-details'>
              <h4 className='order__delivery-title'>Получатель:</h4>
              <span className='order__delivery-bold'>
                {name}, {phone}
              </span>
            </div>
          </div>
        </div>

        <div className='order__goods'>
          <h3 className='order__title'>Товары</h3>

          <div className='order__goods-list'>
            {images.map(
              (image: { imageLink: string | undefined }, i: number) => {
                return (
                  <div key={i} className='order__goods-info'>
                    <img
                      className='order__goods-image'
                      src={image.imageLink}
                      alt='Товар'
                    />
                    <div className='order__goods-details'>
                      <h4 className='order__goods-title'>{names[i]}</h4>
                      <span className='order__goods-brand'>{brands[i]}</span>
                      <span className='order__goods-vendorcode'>
                        Арт. {vendorcodes[i]}
                      </span>
                    </div>
                    <span className='order__goods-summaryprice'>
                      {prices[i]} ₽
                    </span>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </ProfileLayout>
  );
};

export default OrderFull;
