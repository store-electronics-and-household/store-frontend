import React, { useState } from 'react';
import { formatSumm } from '../../utils/formatSumm';
import vector from '../../image/Vector.png';
import map from '../../image/map.png';
import PopupAddToCart from '../PopupAddToCart/PopupAddToCart';

const ProductCardMedium: React.FC<{
  originPrice: number;
  salesPrice?: number;
  name: string;
  discount?: number;
  url: string;
}> = (product) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isMainImage, setIsMainImage] = React.useState(true);
  const [isLiked, setIsLiked] = React.useState(false);
  const handleMouseOver = (): void => {
    setIsMainImage(false);
  };
  const handleMouseOut = (): void => {
    setIsMainImage(true);
  };
  const handleLike = (): void => {
    setIsLiked(!isLiked);
  };
  const [isCounter, setIsCounter] = React.useState(0);

  const cardLikeButtonClassName = `card-medium__like ${
    isLiked && 'card-medium__like_active'
  }`;

  const handleAddToCart = (): void => {
    setIsCounter((prev) => {
      return prev + 1;
    });
    setIsPopupOpen(true);
    // setTimeout(() => {
    // setIsPopupOpen(false);
    // }, 10000
    // );
  };
  return (
    <>
      <li className='card-medium'>
        <div className='card-medium__container'>
          <div className='card-medium__container-image'>
            <a className='card-medium__link' href={product.url}>
              <img
                className='card-medium__image'
                src={isMainImage ? vector : map}
                alt={product.name}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              />
              <p
                className={
                  product.discount != null
                    ? product.discount > 20
                      ? 'card-medium__sticker'
                      : 'card-medium__sticker card-medium__sticker_lowdiscount'
                    : 'card-medium__sticker card-medium__sticker_inactive'
                }
              >
                -{product.discount}%
              </p>
            </a>
            <button
              type='button'
              aria-label='Поставить лайк'
              className={cardLikeButtonClassName}
              onClick={handleLike}
            />
            <div className='card-medium__button'>
              <button
                type='button'
                aria-label='Добавить в корзину'
                className={
                  isCounter > 0 ? 'card-medium__buy_big' : 'card-medium__buy'
                }
                onClick={handleAddToCart}
              />
              <span className='card-medium__counter'>
                {isCounter > 0 ? isCounter : ''}
              </span>
            </div>
          </div>
          <div className='card-medium__footer'>
            <a className='card-medium__link' href={product.url}>
              <div className='card-medium__container-footer'>
                <h3 className='card-medium__title'>{product.name}</h3>
                <div className='card-medium__container-price'>
                  <p className='card-medium__price'>
                    {product.originPrice !== 0 &&
                    typeof product.originPrice === 'number'
                      ? formatSumm(product.originPrice)
                      : ''}
                  </p>
                  <p className='card-medium__oldprice'>
                    {product.salesPrice !== 0 &&
                    typeof product.salesPrice === 'number'
                      ? formatSumm(product.salesPrice)
                      : ''}
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </li>
      <PopupAddToCart
        // тут поправить!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        isOpen={isPopupOpen}
        productName={product.name}
        photoUrl={vector}
      />
    </>
  );
};

export default ProductCardMedium;

/*
<p className='card-medium__price'>
                  {' '}
                  { product.originPrice !== null && product.originPrice.toLocaleString('ru-RU', {
                    style: 'currency',
                    currency: 'RUB',
                    maximumFractionDigits: 0,
                  })}{' '}
                </p>
*/
