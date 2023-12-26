import React, { useContext } from 'react';
import { FullOrderContext } from '../../context/FullOrderContext';
import { useNavigate } from 'react-router-dom';

const Order = ({ data }: any): JSX.Element => {
  const { id, created, finalPrice } = data;
  const images = data.orderBasket.modelSetResponseDtos.map((item: any) => {
    return item.modelShortDto.images[0];
  });
  const { setOrderData } = useContext(FullOrderContext);
  const navigate = useNavigate();

  const openOrder = (): void => {
    setOrderData(data);
    navigate(`/profile/orders/${data.id}`);
  };

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
    <div className='profile__order' onClick={openOrder}>
      <div className='profile__order-info'>
        <h2 className='profile__order-date'>{showDate()}</h2>
        <h3 className='profile__order-number'>№ {id}</h3>
        <div className='profile__order-status'>Выполнен</div>
      </div>
      <div className='profile__order-summary'>
        <div className='profile__order-images'>
          {images.map((image: { imageLink: string }, i: number) => {
            return (
              <img
                className='profile__order-image'
                key={i}
                src={image.imageLink}
                alt='Предмет заказа'
              />
            );
          })}
        </div>
        <div className='profile__order-summary-info'>
          <span className='profile__order-sum'>Сумма заказа</span>
          <span className='profile__order-price'>{finalPrice} ₽</span>
        </div>
      </div>
    </div>
  );
};

export default Order;
