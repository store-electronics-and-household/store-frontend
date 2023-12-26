/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { memo, useContext, useState } from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { formatSumm } from '../../utils/formatSumm';
import PopupAddToCart from '../PopupAddToCart/PopupAddToCart';
import CardLikeBtn from '../CardLikeBtn/CardLikeBtn';
import { useCartContext } from '../../context';
import { useFavouritesContext } from '../../context/FavouritesContext';
import { UserContext } from '../../context/UserContext';
import { useWarningPopupContext } from '../../context/WarningPopupContext';
import { type MediumCardProps } from '../../utils/types';

export interface ProductCardMediumProps {
  product: MediumCardProps;
}

const ProductCardMedium: React.FC<ProductCardMediumProps> = ({ product }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isMainImage, setIsMainImage] = React.useState(true);

  const { addProductToCart, cartItems, increaseCartQuantity } =
    useCartContext();
  const { getProductById } = useFavouritesContext();
  const { isLoggedIn } = useContext(UserContext);
  const { handleOpenWarningPopup } = useWarningPopupContext();

  const cardPriceClassname = cn('card-medium__price', {
    'card-medium__price_sale': product.oldPrice !== null,
  });

  const count =
    cartItems?.find((productInCart) => productInCart.id === product.id)
      ?.count ?? 0;

  const isCartButtonWithValue = count > 0 && isLoggedIn;
  const cartButtonClassName = isCartButtonWithValue
    ? 'card-medium__buy_big'
    : 'card-medium__buy';
  const cartButtonCount = isCartButtonWithValue ? count : '';

  const handleMouseOver = (): void => {
    setIsMainImage(false);
  };

  const handleMouseOut = (): void => {
    setIsMainImage(true);
  };

  const handleAddToCart = (): void => {
    if (isLoggedIn) {
      if (
        cartItems.findIndex(
          (productInCart) => productInCart.id === product.id
        ) === -1
      ) {
        setIsPopupOpen(true);
        setTimeout(() => {
          setIsPopupOpen(false);
        }, 5000);

        addProductToCart(product.id);
      } else {
        increaseCartQuantity(product.id);
      }
    } else {
      handleOpenWarningPopup(
        'Для добавления товара в корзину необходимо авторизоваться'
      );
    }
  };

  const handleGetFullProduct = (): void => {
    getProductById(product.id);
  };

  // const nextPath = `/categories/${productFull.category.id}/product/${product.id}`;
  return (
    <>
      <li className='card-medium' key={product.id}>
        <div className='card-medium__container'>
          <div className='card-medium__container-image'>
            <Link
              className='card-medium__link'
              to={'#'}
              onClick={handleGetFullProduct}
            >
              <img
                className='card-medium__image'
                src={
                  isMainImage
                    ? product.images?.[0]?.imageLink
                    : product.images?.[1]?.imageLink
                }
                alt={product.name}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              />

              {product.percent != null && (
                <span
                  className={
                    product.percent > 20
                      ? 'card-medium__sticker'
                      : 'card-medium__sticker card-medium__sticker_lowdiscount'
                  }
                >
                  -{product.percent}%
                </span>
              )}
            </Link>

            <div className='card-medium__like'>
              <CardLikeBtn productId={product.id} />
            </div>

            <div className='card-medium__button'>
              <button
                type='button'
                aria-label='Добавить в корзину'
                className={cartButtonClassName}
                onClick={handleAddToCart}
              />

              <span className='card-medium__counter'>{cartButtonCount}</span>
            </div>
          </div>

          <div className='card-medium__footer'>
            <Link
              className='card-medium__link'
              to={'#'}
              onClick={handleGetFullProduct}
            >
              <div className='card-medium__container-footer'>
                <h3 className='card-medium__title'>{product.name}</h3>
                <div className='card-medium__container-price'>
                  <span className={cardPriceClassname}>
                    {product.price !== 0
                      ? formatSumm(product.price)
                      : ''}
                  </span>

                  <span className='card-medium__oldprice'>
                    {product.oldPrice !== 0 && product.oldPrice !== null
                      ? formatSumm(product.oldPrice)
                      : ''}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </li>

      <PopupAddToCart
        isOpen={isPopupOpen}
        productName={product.name}
        location='catalog'
        // TODO: delete if it's needless
        // photoUrl={product.modelsImages &&  product.modelsImages[0].imageLink}
        photoUrl={product.images?.[0]?.imageLink}
      />
    </>
  );
};

export default memo(ProductCardMedium);

// TODO: delete if it's needless
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
