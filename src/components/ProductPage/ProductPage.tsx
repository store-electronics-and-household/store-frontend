import React, { useState } from 'react';
import cart from '../../image/icons/busket_icon-white.svg';
import deliveryIcon from '../../image/icons/delivery_icon.svg';
import favoriteIcon from '../../image/icons/favourite_icon.svg';
import ThumbsSlider from '../ThumbsSlider/ThumbsSlider';
import {
  productPhotoArray,
  productSpecifyName,
  productSpecifyValue,
} from '../../utils/constants';
import PopupAddToCart from '../PopupAddToCart/PopupAddToCart';
// import './ProductPage.css';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import BreadcrumbItem from '../Breadcrumb/BreadcrumbItem';
import ProductCharacteristicsList from '../ProductCharacteristicsList/ProductCharacteristicsList';
import { type SpecifyType } from '../../utils/types';

const objectKeys = (object: SpecifyType): Array<keyof SpecifyType> => {
  return Object.keys(object) as Array<keyof SpecifyType>;
};

const ProductPage: React.FC = () => {
  // const refSetTimeout = useRef<NodeJS.Timeout>();
  const [isActive, setIsActive] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOnAllcharacteristics = (): void => {
    setIsActive(false);
  };

  const handleOnAboutProduct = (): void => {
    setIsActive(true);
  };

  const handleAddToCart = (): void => {
    setIsPopupOpen(true);
    setTimeout(() => {
      setIsPopupOpen(false);
    }, 2000);
  };

  return (
    <>
      <Breadcrumb currentPlace={productSpecifyValue.productName}>
        <BreadcrumbItem
          breadcrumbText='Смартфоны'
          breadcrumbPath='/categories'
        />
        <BreadcrumbItem
          breadcrumbText='Apple iPhone'
          breadcrumbPath='/catalog'
        />
        <BreadcrumbItem
          breadcrumbText='iPhone 15 Pro'
          breadcrumbPath='/catalog'
        />
      </Breadcrumb>
      <section className='product-page'>
        <div className='product-page__head-container'>
          <h1 className='product-page__header'>
            {productSpecifyValue.productName}
          </h1>
          <span className='product-page__item-number'>
            Арт. <span>{productSpecifyValue.article}</span>
          </span>
        </div>
        <div className='product-page__info-container'>
          <div className='product-page__slider'>
            <ThumbsSlider />
          </div>
          <div className='product-page__characteristics'>
            <h2 className='product-page__characteristic-head'>
              Характеристики:
            </h2>
            <ProductCharacteristicsList
              productSpecifyName={productSpecifyName}
              productSpecifyValue={productSpecifyValue}
              keysList={objectKeys(productSpecifyValue)
                .filter((n) => {
                  return (
                    n !== 'productName' &&
                    n !== 'article' &&
                    n !== 'aboutProduct'
                  );
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
              <span className='product-page__current-price'>119 700 ₽</span>
              <span className='product-page__old-price'>430 800 ₽</span>
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
          {isActive ? (
            <div className='product-page__about'>
              <p className='product-page__about-description'>
                Данная модель могла быть активирована до продажи без привязки к
                аккаунту Apple ID. Это не влияет на потребительские
                характеристики, внешний вид товара, функциональность или
                какие-либо иные свойства продукта. Срок гарантии на смартфон
                составляет 1 год с момента покупки.
              </p>
              <p className='product-page__about-description'>
                Смартфон Apple iPhone 15 Pro Max Black Titanium получил дисплей
                диагональю 6,7 дюйма, выполненный по технологии Super Retina
                XDR. Разрешение — 2796x1290 пикселей, яркость достигает 2000
                кд/м², контрастность составляет 2000000:1 — изображение четкое,
                детализированное и насыщенное.
              </p>
              <p className='product-page__about-description'>
                Основная камера тройная: 48/12/12 Мп. Она способна снимать в
                разрешении до 4К (3840x2160 пикселей). Оптический зум на
                увеличение и на уменьшение, цифровая и оптическая стабилизация и
                вспышка помогут получить отличные результаты в любых условиях.
                Фокус при съемке портретов можно менять уже после того, как
                сделан снимок. Для селфи и видеосвязи предназначена фронтальная
                камера на 12 Мп.
              </p>
              <p className='product-page__about-description'>
                Смартфон снабжен универсальным портом USB Type-C,
                соответствующий кабель для зарядки прилагается. Доступна также
                беспроводная и быстрая зарядка, поддерживается технология
                MagSafe. Корпус выполнен из авиационного титана, внутренняя рама
                — из алюминия (100% переработки), задняя панель отделана
                стеклом. На боковой панели размещена кнопка Action Button,
                отвечающая активацию беззвучного режима, включение камеры,
                фонарика и прочих функций. Заявлена защита по стандарту IP68 —
                смартфон может без вреда для себя погружаться на глубину до 6 м.
              </p>
            </div>
          ) : (
            <ProductCharacteristicsList
              productSpecifyName={productSpecifyName}
              productSpecifyValue={productSpecifyValue}
              keysList={objectKeys(productSpecifyValue).filter((n) => {
                return (
                  n !== 'productName' && n !== 'article' && n !== 'aboutProduct'
                );
              })}
              modifyClass={'characteristics-list_full'}
            />
          )}
        </div>
        <PopupAddToCart
          isOpen={isPopupOpen}
          productName={productSpecifyValue.productName}
          photoUrl={productPhotoArray[0]}
        />
      </section>
      ;
    </>
  );
};

export default ProductPage;
