import React from 'react';
import { formatSumm } from '../../utils/formatSumm';
import vector from '../../image/Vector.png';
import map from '../../image/map.png';

const ProductCardMedium: React.FC<{
  originPrice: number;
  salesPrice?: number;
  name: string;
  discount?: number;
  url: string;
}> = (product) => {
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
  const handleAddToBasket = (): void => {
    setIsCounter((prev) => {
      return prev + 1;
    });
  };
  const cardLikeButtonClassName = `card-medium__like ${
    isLiked && 'card-medium__like_active'
  }`;
  return (
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
              onClick={handleAddToBasket}
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
                  {' '}
                  {formatSumm(product.originPrice)}{' '}
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
  );
};

export default ProductCardMedium;
