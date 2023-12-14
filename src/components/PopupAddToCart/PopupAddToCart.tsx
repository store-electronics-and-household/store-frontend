import React from 'react';

interface PopupAddToCartProps {
  isOpen: boolean
  // overlayClickClose: (e: MouseEvent) => void
  photoUrl: string
  productName: string
}

const PopupAddToCart: React.FC<PopupAddToCartProps> = ({
  isOpen,
  // overlayClickClose,
  productName,
  photoUrl,
}: PopupAddToCartProps) => {
  return (
    <section
      className={`popup-add-to-cart ${
        isOpen ? 'popup-add-to-cart_opened' : ''
      }`}
    >
      {/* // onMouseDown={overlayClickClose}> */}
      <img
        src={photoUrl}
        alt='фото товара'
        className='popup-add-to-cart__product-photo'
      />
      <div className='popup-add-to-cart__container'>
        <h3 className='popup-add-to-cart__head'>добавлен в ворзину</h3>
        <p className='popup-add-to-cart__product-name'>{productName}</p>
        <button className='popup-add-to-cart__button'>В корзину</button>
      </div>
    </section>
  );
};

export default PopupAddToCart;
