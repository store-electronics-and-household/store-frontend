import React from 'react';
import './ProductCardMedium.scss';
import vector from '../../images/Vector.png';
import { product } from '../../utils/constants';

const ProductCardMedium: React.FC<{
  originPrice?: number;
  salesPrice?: number;
  name?: string;
  discount?: number;
}> = (card, onCardLike) => {
  const [isLiked, setIsLiked] = React.useState(false);
  function handleLike(): void {
    setIsLiked(!isLiked);
  }
  const [isCounter, setIsCounter] = React.useState(0);
  function handleAddToBasket(): void {
    setIsCounter((prev) => {
      return prev + 1;
    });
  }
  const cardLikeButtonClassName = `card-medium__like ${
    isLiked && 'card-medium__like_active'
  }`;
  return (
    <div className='card-medium'>
      <a className='card-medium__link' href='/'>
        <img
          className='card-medium__image'
          src={vector}
          alt='прекрасная фотография товара'
        />
        <p className='card-medium__sticker'>{product.discount}</p>
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
      <div className='card-medium__footer'>
        <a className='card-medium__link' href='/'>
          <h3 className='card-medium__title'>{product.name}</h3>
          <div className='card-medium__price-container'>
            <p className='card-medium__price'> {product.originPrice} ₽</p>
            <p className='card-medium__oldprice'>{product.salesPrice} ₽</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ProductCardMedium;
