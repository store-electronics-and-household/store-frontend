import React from 'react';
import { Link } from 'react-router-dom';

const CatalogItem: React.FC<{
  id: number;
  name: string;
}> = ({ name, id }) => {
  return (
    <ul className='catalog__models'>
      <li className='catalog__model'>
        <Link to={`${id}`} className='catalog__model-link'>
          {name}
        </Link>
      </li>
    </ul>
  );
};

export default CatalogItem;
