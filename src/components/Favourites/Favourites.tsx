import React, { useEffect } from 'react';
import type { FC } from 'react';

import ProductCardMedium from '../ProductCardMedium/ProductCardMedium';
// import { mockedFavouritesProducts } from '../../utils/mocks';
import { useFavouritesContext } from '../../context/FavouritesContext';

const Favourites: FC = () => {
  const { getFavouriteList, favouritesProductsList } = useFavouritesContext();

  useEffect(() => {
    getFavouriteList();
  }, []);

  return (
    <>
      <section className='favourites'>
        <div className='favourites__container'>
          <h2 className='favourites__header'>Избранное</h2>
          <div className='favourites__content'>
            {favouritesProductsList.map(
              // ({ name, originPrice, salesPrice, discount, imgUrl, isLiked, quantityInCart }) => {
              (product) => {
                return (
                  <>
                    <ProductCardMedium
                      // name={name}
                      product={product}
                      // originPrice={originPrice}
                      // salesPrice={salesPrice}
                      // discount={discount}
                      // isLiked={isLiked}
                      // imgUrl={imgUrl}
                      // quantityInCart={quantityInCart}
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
