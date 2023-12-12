import React, { useState } from 'react';
import { formatSumm } from '../../utils/formatSumm';
// import vector from '../../image/Vector.png';
// import map from '../../image/map.png';
import PopupAddToCart from '../PopupAddToCart/PopupAddToCart';
import CardLikeBtn from '../CardLikeBtn/CardLikeBtn';

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
                  <p className={`card-medium__price ${product.salesPrice !== undefined && 'card-medium__price_sale'}`}>
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
        photoUrl={'../../image/Vector.png'}
      />
    </>
  );
};

export default ProductCardMedium;
