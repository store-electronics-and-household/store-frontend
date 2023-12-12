import React from 'react';
import ProductCardMedium from '../ProductCardMedium/ProductCardMedium';
import { PaginatedItems } from '../Pagination/Pagination';
import { products } from '../../utils/constants';
import { useLocation } from 'react-router-dom';

const Catalog: React.FC<{
  id?: number;
  name?: string;
  originPrice?: number;
  salesPrice?: number;
  discount?: number;
}> = () => {
  const location = useLocation().pathname;
  return (
    <>
      <section className='catalog'>
        <div className='catalog__container-big'>
          <h1
            className={
              location === '/categories'
                ? 'catalog__title'
                : 'catalog__title catalog__title-catalog'
            }
          >
            Apple Macbook{' '}
          </h1>
          <div className='catalog__container'>
            <ul className='catalog__collection'>
              <li className='catalog__model catalog__model-catalog'>
                <a className='catalog__model-link' href=''>
                  Macbook Pro
                </a>
              </li>
              <li className='catalog__model catalog__model-catalog'>
                <a className='catalog__model-link' href=''>
                  Macbook Air
                </a>
              </li>
            </ul>
            <ul className='catalog__rendered-list'>
              <PaginatedItems
                itemsPerPage={12}
                items={products.map((product) => (
                  <ProductCardMedium
                    key={product.id}
                    name={product.name}
                    originPrice={product.originPrice}
                    salesPrice={product.salesPrice}
                    discount={product.discount}
                    imgUrl={product.imgUrl}
                    isLiked={product.isLiked}
                    quantityInCart={product.quantityInCart}
                  />
                ))}
              />
            </ul>
          </div>
        </div>
      </section>
      ;
    </>
  );
};

export default Catalog;
