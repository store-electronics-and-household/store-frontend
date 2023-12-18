import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

interface PopupAddToCartProps {
  isOpen: boolean;
  photoUrl?: string;
  productName: string;
}

const PopupAddToCart: React.FC<PopupAddToCartProps> = ({
  isOpen,
  productName,
  photoUrl,
}: PopupAddToCartProps) => {
  const popupAddToCartClass = cn(
    'popup-add-to-cart',
    { 'popup-add-to-cart_opened': isOpen }
  );

  return (
    <section
      className={popupAddToCartClass}
    >
      <img
        src={photoUrl}
        alt='фото товара'
        className='popup-add-to-cart__product-photo'
      />
      <div className='popup-add-to-cart__container'>
        <h3 className='popup-add-to-cart__head'>добавлен в корзину</h3>
        <p className='popup-add-to-cart__product-name'>{productName}</p>
        <Link to='/cart' className='popup-add-to-cart__button'>В корзину</Link>
      </div>
    </section>
  );
};

export default memo(PopupAddToCart);
