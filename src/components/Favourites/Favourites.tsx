import React from 'react';
import type { FC } from 'react';
import ProductCardMedium from '../ProductCardMedium/ProductCardMedium';
import { mockedFavouritesProducts } from '../../utils/mocks';
// import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';

const Favourites: FC = () => {
  return (
    <>
      {/* <Breadcrumbs /> */}
      <section className='favourites'>
        <div className='favourites__container'>
          <h2 className='favourites__header'>Избранное</h2>
          <div className='favourites__content'>
            {mockedFavouritesProducts.map(
              ({ name, originPrice, salesPrice, discount, imgUrl, isLiked, quantityInCart }) => {
                return (
                  <>
                    <ProductCardMedium
                      name={name}
                      originPrice={originPrice}
                      salesPrice={salesPrice}
                      discount={discount}
                      isLiked={isLiked}
                      imgUrl={imgUrl}
                      quantityInCart={quantityInCart}
                    />
                  </>
                );
              }
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Favourites;
