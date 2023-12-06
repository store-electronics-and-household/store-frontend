import React from 'react';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import CatalogShared from '../Catalog/CatalogShared';
import { product } from '../../utils/constants';

const SearchResults: React.FC = () => {
  return (
    <>
      <Breadcrumb currentPlace='Результаты поиска' />
      <section className='results'>
        <div className='results__container'>
          <h2 className='results__title'>Результаты поиска</h2>
          <CatalogShared
            itemArray={product}
            itemsToShow={20}
            is4Items={true}
          />
        </div>
      </section>
    </>

  );
};

export default SearchResults;
