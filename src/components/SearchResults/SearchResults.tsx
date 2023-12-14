import React from 'react';
import CatalogShared from '../Catalog/CatalogShared';
import { products } from '../../utils/constants';

const SearchResults: React.FC = () => {
  return (
    <>
      <section className='results'>
        <div className='results__container'>
          <h2 className='results__title'>Результаты поиска</h2>
          <CatalogShared itemArray={products} itemsToShow={20} is4Items={true} />
        </div>
      </section>
    </>
  );
};

export default SearchResults;
