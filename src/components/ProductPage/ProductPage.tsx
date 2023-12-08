import React, { useState } from 'react';
import cart from '../../image/icons/busket_icon-white.svg';
import deliveryIcon from '../../image/icons/delivery_icon.svg';
import favoriteIcon from '../../image/icons/favourite_icon.svg';
import ThumbsSlider from '../ThumbsSlider/ThumbsSlider';
import { productSpecifyName } from '../../utils/constants';
import PopupAddToCart from '../PopupAddToCart/PopupAddToCart';
import ProductCharacteristicsList from '../ProductCharacteristicsList/ProductCharacteristicsList';
import {
  type productDataType,
  type productAttributesDataType,
} from '../../utils/types';
import { formatSumm } from '../../utils/formatSumm';
import PopupProductPhoto from '../PopupProductPhoto/PopupProductPhoto';

const objectKeys = (
  object: productAttributesDataType
): Array<keyof productAttributesDataType> => {
  return Object.keys(object) as Array<keyof productAttributesDataType>;
};

interface ProductPageProps {
  product: productDataType;
  attributes: productAttributesDataType;
}

const ProductPage: React.FC<ProductPageProps> = ({
  product,
  attributes,
}: ProductPageProps) => {
  // const refSetTimeout = useRef<NodeJS.Timeout>();
  const [isActive, setIsActive] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPopupFullPhotoOpen, setIsPopupFullPhotoOpen] = useState(false);

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

  const handleAddToCart = (): void => {
    setIsPopupOpen(true);
    setTimeout(() => {
      setIsPopupOpen(false);
    }, 2000);
  };

  return (
    <>
      <section className='product-page'>
        <div className='product-page__head-container'>
          <h1 className='product-page__header'>{product.name}</h1>
          <span className='product-page__item-number'>
            Арт. <span>{product.id}</span>
          </span>
        </div>
        <div className='product-page__info-container'>
          <div className='product-page__slider'>
            <ThumbsSlider
              images={product.images}
              onPopupFullPhoto={handleOpenPopupPhoto}
            />
          </div>
          <div className='product-page__characteristics'>
            <h2 className='product-page__characteristic-head'>
              Характеристики:
            </h2>
            <ProductCharacteristicsList
              productSpecifyName={productSpecifyName}
              productSpecifyValue={attributes}
              keysList={objectKeys(attributes)
                .filter((n) => {
                  return n;
                })
                .splice(0, 10)}
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
              <span className='product-page__current-price'>
                {formatSumm(product.price)}
              </span>
              {
                product.oldPrice !== 0
                  ? (
                      <span className='product-page__old-price'>
                        {product.oldPrice !== 0 &&
                        typeof product.oldPrice === 'number'
                          ? formatSumm(product.oldPrice)
                          : ''}
                      </span>
                    )
                  : null
              }
            </div>
            <div className='product-page__buttons'>
              <button
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
              <button className='product-page__button-faivorite'>
                <img
                  className='product-page__faivorite-icon'
                  src={favoriteIcon}
                  alt='сердце, лайк, кнопка нравится'
                />
              </button>
            </div>
            <ul className='product-page__benefits-list'>
              <li className='product-page__benefit'>
                <img
                  className='product-page__benefit-icon'
                  src={deliveryIcon}
                  alt='преимущество доставки, быстрая доставка'
                />
                <p className='product-page__benefit-text'>
                  Оригинальная продукция
                </p>
              </li>
              <li className='product-page__benefit'>
                <img
                  className='product-page__benefit-icon'
                  src={deliveryIcon}
                  alt='преимущество доставки, быстрая доставка'
                />
                <p className='product-page__benefit-text'>
                  Доставка сегодня – 300 ₽
                </p>
              </li>
              <li className='product-page__benefit'>
                <img
                  className='product-page__benefit-icon'
                  src={deliveryIcon}
                  alt='преимущество доставки, быстрая доставка'
                />
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
            <h2
              onClick={handleOnAboutProduct}
              className={`product-page__description-title ${
                !isActive ? '' : 'product-page__description-title_active'
              }`}
            >
              О товаре
            </h2>
            <h2
              onClick={handleOnAllcharacteristics}
              className={`product-page__description-title ${
                isActive ? '' : 'product-page__description-title_active'
              }`}
            >
              Характеристики
            </h2>
          </div>
          {isActive
            ? (
                <div className='product-page__about'>
                  {product.description.map((desc, id) => {
                    return (
                      <p key={id} className='product-page__about-description'>
                        {desc}
                      </p>
                    );
                  })}
                </div>
              )
            : (
                <ProductCharacteristicsList
                  productSpecifyName={productSpecifyName}
                  productSpecifyValue={attributes}
                  keysList={objectKeys(attributes).filter((n) => {
                    return n;
                  })}
                  modifyClass={'characteristics-list_full'}
                />
              )}
        </div>
        <PopupProductPhoto
          images={product.images}
          isOpen={isPopupFullPhotoOpen}
          closePopup={handleClosePopupFullPhoto}
        />
        <PopupAddToCart
          isOpen={isPopupOpen}
          productName={product.name}
          photoUrl={product.images[0]}
        />
      </section>
      ;
    </>
  );
};

export default ProductPage;
