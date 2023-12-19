import React, { useState } from 'react';
import { formatSumm } from '../../utils/formatSumm';
import PopupAddToCart from '../PopupAddToCart/PopupAddToCart';
import CardLikeBtn from '../CardLikeBtn/CardLikeBtn';
import cn from 'classnames';
import { type MediumCardProps } from '../../utils/types';

interface ProductCardMediumProps {
  product: MediumCardProps;
}

const ProductCardMedium: React.FC<ProductCardMediumProps> = ({ product }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isMainImage, setIsMainImage] = React.useState(true);
  const [isCounter, setIsCounter] = React.useState(0);
  const handleMouseOver = (): void => {
    setIsMainImage(false);
  };
  const handleMouseOut = (): void => {
    setIsMainImage(true);
  };

  const handleAddToCart = (): void => {
    setIsCounter((prev) => {
      return prev + 1;
    });
    setIsPopupOpen(true);
    setTimeout(() => {
      setIsPopupOpen(false);
    }, 2000);
  };

  const cardPriceClassname = cn(
    'card-medium__price',
    { 'card-medium__price_sale': product.oldPrice !== null }
  );

  return (
    <>
      <li className='card-medium'>
        <div className='card-medium__container'>
          <div className='card-medium__container-image'>
            <a className='card-medium__link' href={'/categories/catalog/product'}>
              <img
                className='card-medium__image'
                src={isMainImage ? product.modelsImages?.[0]?.imageLink : product.modelsImages?.[1]?.imageLink}
                alt={product.name}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              />
              { product.percent != null &&
                <p className={
                  product.percent > 20
                    ? 'card-medium__sticker'
                    : 'card-medium__sticker card-medium__sticker_lowdiscount'
                  }
                >
                  -{product.percent}%
                </p>
              }
            </a>
            <div className='card-medium__like'>
              {/* <CardLikeBtn isLikedCard={product.isLiked}/> */}
              <CardLikeBtn isLikedCard={false}/>
            </div>
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
            <a className='card-medium__link' href={'/categories/catalog/product'}>
              <div className='card-medium__container-footer'>
                <h3 className='card-medium__title'>{product.name}</h3>
                <div className='card-medium__container-price'>
                  <p className={cardPriceClassname}>
                    {product.price !== 0 &&
                    typeof product.price === 'number'
                      ? formatSumm(product.price)
                      : ''}
                  </p>
                  <p className='card-medium__oldprice'>
                    {product.oldPrice !== 0 &&
                    typeof product.oldPrice === 'number'
                      ? formatSumm(product.oldPrice)
                      : ''}
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </li>
      <PopupAddToCart
        isOpen={isPopupOpen}
        productName={product.name}
        // photoUrl={product.modelsImages &&  product.modelsImages[0].imageLink}
        photoUrl={product.modelsImages?.[0]?.imageLink}
      />
    </>
  );
};

export default ProductCardMedium;

/*

const ProductCardMedium: React.FC<{
  originPrice: number;
  salesPrice?: number;
  name: string;
  discount?: number;
  isLiked: boolean;
  quantityInCart: number;
  imgUrl: string[];
}> = (product) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isMainImage, setIsMainImage] = React.useState(true);
  const [isCounter, setIsCounter] = React.useState(0);
  const handleMouseOver = (): void => {
    setIsMainImage(false);
  };
  const handleMouseOut = (): void => {
    setIsMainImage(true);
  };

  const handleAddToCart = (): void => {
    setIsCounter((prev) => {
      return prev + 1;
    });
    setIsPopupOpen(true);
    setTimeout(() => {
      setIsPopupOpen(false);
    }, 2000);
  };

  const cardPriceClassname = cn(
    'card-medium__price',
    { 'card-medium__price_sale': product.salesPrice !== undefined }
  );

  return (
    <>
      <li className='card-medium'>
        <div className='card-medium__container'>
          <div className='card-medium__container-image'>
            <a className='card-medium__link' href={'/categories/catalog/product'}>
              <img
                className='card-medium__image'
                src={isMainImage ? product.imgUrl[0] : product.imgUrl[1]}
                alt={product.name}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              />
              { product.discount != null &&
                <p className={
                  product.discount > 20
                    ? 'card-medium__sticker'
                    : 'card-medium__sticker card-medium__sticker_lowdiscount'
                  }
                >
                  -{product.discount}%
                </p>
              }
            </a>
            <div className='card-medium__like'>
              <CardLikeBtn isLikedCard={product.isLiked}/>
            </div>
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
            <a className='card-medium__link' href={'/categories/catalog/product'}>
              <div className='card-medium__container-footer'>
                <h3 className='card-medium__title'>{product.name}</h3>
                <div className='card-medium__container-price'>
                  <p className={cardPriceClassname}>
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
        isOpen={isPopupOpen}
        productName={product.name}
        photoUrl={product.imgUrl[0]}
      />
    </>
  );
};

export default ProductCardMedium;

*/
