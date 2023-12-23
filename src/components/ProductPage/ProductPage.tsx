/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useState } from 'react';
import cn from 'classnames';
import cart from '../../image/icons/busket_icon-white.svg';
import ThumbsSlider from '../ThumbsSlider/ThumbsSlider';
import plusIconActive from '../../image/icons/cart_plus_icon_active.svg';
import minusIconActive from '../../image/icons/cart_minus_icon_active.svg';
import { productCharacteristicsShortListLength } from '../../utils/constants';
import PopupAddToCart from '../PopupAddToCart/PopupAddToCart';
import ProductCharacteristicsList from '../ProductCharacteristicsList/ProductCharacteristicsList';
// import { type ProductFullDataType } from '../../utils/types';
import { formatSumm } from '../../utils/formatSumm';
import PopupProductPhoto from '../PopupProductPhoto/PopupProductPhoto';
import CardLikeBtn from '../CardLikeBtn/CardLikeBtn';
import { useCartContext } from '../../context';
import { useFavouritesContext } from '../../context/FavouritesContext';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const ProductPage = () => {
  const [isActive, setIsActive] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPopupFullPhotoOpen, setIsPopupFullPhotoOpen] = useState(false);

  const { addProductToCart, cartItems, increaseCartQuantity, decreaseCartQuantity } = useCartContext();
  const { productFull } = useFavouritesContext();
  const images = productFull.images.map(item => item.imageLink);

  const handleOnAllcharacteristics = (): void => {
    setIsActive(false);
  };

  const handleOnAboutProduct = (): void => {
    setIsActive(true);
  };

  const handleOpenPopupPhoto = (): void => {
    setIsPopupFullPhotoOpen(true);
  };

  const handleClosePopupFullPhoto = (): void => {
    setIsPopupFullPhotoOpen(false);
  };

  const setTimeOutInfoPopup = (): void => {
    setTimeout(() => {
      setIsPopupOpen(false);
    }, 5000);
  };

  const openInfoPopup = (): void => {
    setIsPopupOpen(true);
    setTimeOutInfoPopup();
  };

  const handleAddToCart = (): void => {
    if (cartItems.findIndex((productInCart) => productInCart.id === productFull.id) === -1) {
      openInfoPopup();
      addProductToCart(productFull.id);
    } else {
      increaseCartQuantity(productFull.id);
    }
  };

  const handleDeleteFromCart = (): void => {
    decreaseCartQuantity(productFull.id);
  };

  const count = cartItems?.find((productInCart) => productInCart.id === productFull.id)?.count ?? 0;

  const currentPriceClassname = cn(
    'product-page__current-price',
    { 'product-page__current-price_sale': productFull.oldPrice !== null }
  );

  const quantityBtnSymbolClassname = cn(
    'product__quantity-button-symbol',
    { 'product__quantity-button-symbol_inactive': count === 1 }
  );

  const descriptionBtnClassname = cn('product-page__description-btn', {
    'product-page__description-btn_active': isActive,
  });

  const descriptionCharacteristicBtnClassname = cn(
    'product-page__description-btn',
    { 'product-page__description-btn_active': !isActive }
  );

  return (
    <>
      <section className='product-page'>
        <div className='product-page__head-container'>
          <h1 className='product-page__header'>{productFull.name}</h1>
          <span className='product-page__item-number'>
            Арт. <span>{productFull.id}</span>
          </span>
        </div>
        <div className='product-page__info-container'>
          <div className='product-page__slider'>
            <ThumbsSlider
              images={images}
              onPopupFullPhoto={handleOpenPopupPhoto}
            />
          </div>
          <div className='product-page__characteristics'>
            <h2 className='product-page__characteristic-head'>
              Характеристики:
            </h2>
            <ProductCharacteristicsList
              attributes={productFull.attributes.slice(0, productCharacteristicsShortListLength)}
            />
            <a
              href='#characteristics-anchor'
              onClick={handleOnAllcharacteristics}
              className='product-page__all-characteristics'
            >
              Все характеристики
            </a>
          </div>
          <div className='product-page__price-block'>
            <div className='product-page__price'>
              <span className={currentPriceClassname}>
                {formatSumm(productFull.price)}
              </span>
              {productFull.oldPrice !== null
                ? (<span className='product-page__old-price'>
                    {productFull.oldPrice !== null &&
                    typeof productFull.oldPrice === 'number'
                      ? formatSumm(productFull.oldPrice)
                      : ''}
                  </span>)
                : null}
            </div>
            <div className='product-page__buttons'>
              <div>
                {count === 0
                  ? <button
                      onClick={handleAddToCart}
                      className='product-page__button-basket'
                    >
                      В корзину
                      <img
                        className='product-page__cart-icon'
                        src={cart}
                        alt='корзина покупок, магазин'
                      />
                    </button>
                  : <div className='product__quantity-button'>
                      <button
                        className={quantityBtnSymbolClassname}
                        onClick={handleDeleteFromCart}
                      >
                        <img
                          className='product__quantity-button-icon'
                          src={minusIconActive}
                          alt='Уменьшить количество'
                        />
                      </button>
                      <p className='product__quantity-button-number'>{count}</p>
                      <button
                        className='product__quantity-button-symbol'
                        onClick={handleAddToCart}
                      >
                        <img
                          className='product__quantity-button-icon'
                          src={plusIconActive}
                          alt='Увеличить количество'
                        />
                      </button>
                    </div>
                }
              </div>
              <CardLikeBtn productId={productFull.id}/>
            </div>
            <ul className='product-page__benefits-list'>
              <li className='product-page__benefit'>
                <p className='product-page__benefit-text'>
                  Доставка сегодня – 300 ₽
                </p>
              </li>
              <li className='product-page__benefit'>
                <p className='product-page__benefit-text'>
                  Самовывоз – бесплатно
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div
          id='characteristics-anchor'
          className='product-page__about-product'
        >
          <div className='product-page__about-header'>
            <button
              onClick={handleOnAboutProduct}
              className={descriptionBtnClassname}
            >
              О товаре
            </button>
            <button
              onClick={handleOnAllcharacteristics}
              className={descriptionCharacteristicBtnClassname}
            >
              Характеристики
            </button>
          </div>
          {isActive
            ? (<div className='product-page__about'>
                <p className='product-page__about-description'>
                  {productFull.description}
                </p>
              </div>)
            : (<ProductCharacteristicsList
                attributes={productFull.attributes}
                modifyListClass={'characteristics-list_full'}
                modifyItemClass={'characteristics-list__item_full'}
              />
              )
          }
        </div>
        <PopupProductPhoto
          images={images}
          isOpen={isPopupFullPhotoOpen}
          closePopup={handleClosePopupFullPhoto}
        />
        <PopupAddToCart
          isOpen={isPopupOpen}
          productName={productFull.name}
          photoUrl={images[0]}
        />
      </section>
    </>
  );
};

export default ProductPage;
