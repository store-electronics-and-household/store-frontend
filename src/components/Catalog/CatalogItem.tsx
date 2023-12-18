import React from 'react';
// import { useLocation } from 'react-router-dom';

const CatalogItem: React.FC<{
  id: number;
  name: string;
}> = (i) => {
  // const location = useLocation().pathname;
  return (
    <ul className='catalog__models'>
      <li className='catalog__model'>
        <a className='catalog__model-link' href=''>
          {i.name}
        </a>
      </li>
    </ul>
  );
};

export default CatalogItem;
