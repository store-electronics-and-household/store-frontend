import React from 'react';
// import { useLocation } from 'react-router-dom';

const CatalogItem: React.FC<{
  id?: number;
  name?: string;
  categoryId: number;
}> = (prodcat) => {
  // const location = useLocation().pathname;
  return (
    <li className='catalog__item'>
      <a className='catalog__item-link' href='/categories/categoryId/child'>
        {prodcat.name}
      </a>
    </li>
  );
};

export default CatalogItem;
