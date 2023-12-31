import React, { useState } from 'react';
import CatalogShared from '../Catalog/CatalogShared';
import { products } from '../../utils/constants';
import { Link } from 'react-router-dom';

interface SearchResultsProps {
  searchRequest: string;
}

const SearchResults: React.FC<SearchResultsProps> = ({ searchRequest }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isResulExist, setIsResulExist] = useState<boolean>(false);

  return (
    <>
      <section className='results'>
        <div className='results__container'>
          <h2 className='results__title'>Результаты поиска по запросу {searchRequest}</h2>
          {isResulExist
            ? <CatalogShared itemArray={products} itemsToShow={20} is4Items={true} />
            : <div className='results__no-results-container'>
              <h3 className='results__no-results-title'>По вашему запросу ничего не нашлось</h3>
              <p className='results__no-results-subtitle'>
                попробуйте сформулировать по-другому или переходите в каталог
              </p>
              <Link to='/categories/catalog'>
                <button className='results__button'>
                  Перейти в каталог
                </button>
              </Link>
            </div>
          }

        </div>
      </section>
    </>
  );
};

export default SearchResults;
