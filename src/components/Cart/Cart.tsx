import React from 'react';
import type { FC } from 'react';
import { Link } from 'react-router-dom';

import { type MediumCardProps } from '../../utils/types';
import { formatCurrency } from '../../utils/formatCurrency';

import { paymentPageData } from '../../utils/constants';
import CartItem from '../CartItem/CartItem';
import { useCartContext } from '../../context';
interface CartProps {
  onCheckoutClick: (data: MediumCardProps[]) => void;
}

const Cart: FC<CartProps> = ({ onCheckoutClick }) => {
  const handleCheckout = (): void => {
    onCheckoutClick(paymentPageData);
  };

  const { cartItems, totalCount, totalDiscount, sumValue, totalSumValue } =
    useCartContext();

  return (
    <section className='cart'>
      <div className='cart__container'>
        <h2 className='cart__header'>Корзина</h2>
        {/* If cart is empty: */}
        {cartItems.length === 0 ? (
          <div className='cart__default-content'>
            <h3 className='cart__default-info'>В корзине ничего нет</h3>
            <div className='cart__default-info-description'>
              <p className='cart__default-info-p'>
                переходите в каталог или воспользуйтесь поиском,
              </p>
              <p className='cart__default-info-p'>
                если ищете что-то конкретное
              </p>
            </div>
            <button className='cart__default-button'>
              <span className='cart__default-button-content'>
                Перейти в каталог
              </span>
            </button>
          </div>
        ) : (
          <div className='cart__content'>
            <div className='cart__list'>
              {cartItems.map((data) => (
                <CartItem key={data.id} data={data} />
              ))}
            </div>

            <div className='cart__summary'>
              <div className='cart__summary-container'>
                <div className='cart__order-title-wrapper'>
                  <h2 className='cart__order-title'>Сумма заказа</h2>
                </div>

                <div className='cart__order-info'>
                  <div className='cart__order-info-wrapper'>
                    <span className='cart__order-info-sum'>
                      {totalCount} товара на сумму{' '}
                      {/* Общее количество товаров в списке */}
                    </span>
                    <span className='cart__order-info-sum-number'>
                      {formatCurrency(sumValue)}
                    </span>
                  </div>

                  <div className='cart__order-info-wrapper'>
                    <span className='cart__order-info-sum'>Скидка</span>
                    <span className='cart__order-info-sum-number'>
                      <span>- </span>
                      {formatCurrency(totalDiscount)}
                    </span>
                  </div>
                </div>

                <div className='cart__order-total-wrapper'>
                  <h2 className='cart__order-total'>Итого</h2>
                  <h2 className='cart__order-total-sum'>
                    {formatCurrency(totalSumValue)}
                  </h2>
                </div>
              </div>

              <div className='cart__order-button-wrapper'>
                <Link to='/payment' className='card__order-button-link'>
                  <button
                    className='cart__order-button'
                    onClick={handleCheckout}
                  >
                    <span className='cart__order-button-title'>
                      Оформить заказ
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
