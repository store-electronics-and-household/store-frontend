import React from 'react';
import type { FC } from 'react';

import crossIcon from '../../image/icons/cart_cross_icon.svg';
import minusIconDefault from '../../image/icons/cart_minus_icon_default.svg';
import plusIconActive from '../../image/icons/cart_plus_icon_active.svg';
import minusIconActive from '../../image/icons/cart_minus_icon_active.svg';
import imgUrl from '../../image/item.jpg';
import type { ProductInfo } from '../../utils/types';

import { formatCurrency } from '../../utils/formatCurrency';
import { useCartContext } from '../../context';

interface Props {
  data: ProductInfo;
}

const CartItem: FC<Props> = ({ data }) => {
  const { id, name, description, article, quantity, originPrice, salesPrice } =
    data;

  const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } =
    useCartContext();

  return (
    <div className='cart__item' key={id}>
      <div className='cart__item-info'>
        <div className='cart__item-image-wrapper'>
          <img src={imgUrl} alt='Фото товара' />
        </div>
        <div className='cart__item-textdata'>
          <h3 className='cart__item-name'>{name}</h3>
          <p className='cart__item-description'>{description}</p>
          <p className='cart__item-article'>Арт. {article}</p>
        </div>
      </div>

      <div className='cart__item-data'>
        <div className='cart__item-price-wrapper'>
          <div className='cart__item-quantity-button'>
            <button
              className='cart__item-quantity-button-symbol'
              onClick={() => {
                decreaseCartQuantity(id);
              }}
            >
              {quantity > 1 ? (
                <img src={minusIconActive} alt='Уменьшить количество' />
              ) : (
                <img src={minusIconDefault} alt='Уменьшить количество' />
              )}
            </button>

            <p className='cart__item-quantity-button-number'>{quantity}</p>

            <button
              className='cart__item-quantity-button-symbol'
              onClick={() => {
                increaseCartQuantity(id);
              }}
            >
              <img src={plusIconActive} alt='Увеличить количество' />
            </button>
          </div>
          {quantity > 1 ? (
            <div className='cart__item-onceprice-container'>
              <div className='cart__item-onceprice-wrapper'>
                <span className='cart__item-onceprice'>
                  {formatCurrency(salesPrice)}/шт.
                </span>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>

        <div className='cart__item-price-container'>
          <div className='cart__item-price'>
            <span className='cart__item-salesprice'>
              {formatCurrency(salesPrice)}
            </span>
          </div>
          <div className='cart__item-price'>
            <span className='cart__item-originprice'>
              {formatCurrency(originPrice)}
            </span>
          </div>
        </div>
        <div className='cart__cross-button-wrapper'>
          <button
            className='cart__cross-button'
            onClick={() => {
              removeFromCart(id);
            }}
          >
            <img
              className='cart__cross-icon'
              src={crossIcon}
              alt='Удалить из корзины'
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
