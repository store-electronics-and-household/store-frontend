import React from 'react';
import ProfileLayout from '../ProfileLayout/ProfileLayout';
import orderItem from '../../image/order-item.png';
import type { IContext } from '../../context/UserContext';

const Orders = ({
  setGeneralContext,
}: {
  setGeneralContext: (args: IContext) => void;
}): JSX.Element => {
  return (
    <ProfileLayout setGeneralContext={setGeneralContext}>
      <div className='profile__orders'>
        <div className='profile__order'>
          <div className='profile__order-info'>
            <h3 className='profile__order-date'>Заказ от 14 ноября</h3>
            <h4 className='profile__order-number'>№ 345642</h4>
            <div className='profile__order-status'>В процессе</div>
          </div>
          <div className='profile__order-summary'>
            <div className='profile__order-images'>
              <img
                className='profile__order-image'
                src={orderItem}
                alt='Предмет заказа'
              />
            </div>
            <div className='profile__order-summary-info'>
              <span className='profile__order-sum'>Сумма заказа</span>
              <span className='profile__order-price'>2 990 ₽</span>
            </div>
          </div>
        </div>
      </div>
    </ProfileLayout>
  );
};

export default Orders;
