import React from 'react';
import ProductCardMedium from '../ProductCardMedium/ProductCardMedium';
import { mockedFavouritesProducts } from '../../utils/mocks';
// import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';

const Favourites: React.FC<{
  name?: string
  originPrice?: number
  salesPrice?: number
  discount?: number
  url?: string
}> = () => {
  return (
    <>
      {/* <Breadcrumbs /> */}
      <section className='favourites'>
        <div className='favourites__container'>
          <h2 className='favourites__header'>Избранное</h2>
          <div className='favourites__content'>
            {mockedFavouritesProducts.map(
              ({ name, originPrice, salesPrice, discount, url }) => {
                return (
                  <>
                    <ProductCardMedium
                      name={name}
                      originPrice={originPrice}
                      salesPrice={salesPrice}
                      discount={discount}
                      url={url}
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
