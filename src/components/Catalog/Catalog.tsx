import React from 'react';
import './Catalog.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ProductCardMedium from '../ProductCardMedium/ProductCardMedium';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import { product } from '../../utils/constants';

const Catalog: React.FC<{
  id?: number;
  name?: string;
  originPrice?: number;
  salesPrice?: number;
  discount?: number;
}> = () => {
  return (
    <>
      <Header />
      <section className='catalog'>
        <Breadcrumb currentPlace='Apple IPhone' />
        <h1 className='catalog__title'>Смартфоны</h1>
        <div className='catalog__container'>
          <ul className='catalog__collection'></ul>
          <ul className='catalog__rendered-list'>
            {product.map((product) => (
              <ProductCardMedium
                key={product.id}
                name={product.name}
                originPrice={product.originPrice}
                salesPrice={product.salesPrice}
                discount={product.discount}
              />
            ))}
          </ul>
        </div>
      </section>
      ;
      <Footer />
    </>
  );
};

export default Catalog;
