import React from 'react';

const CatalogItem: React.FC<{
  id: number;
  name: string;
}> = (i) => {
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
