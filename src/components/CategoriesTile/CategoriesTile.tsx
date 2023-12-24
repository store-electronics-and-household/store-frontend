import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface CategoriesTileProps {
  id: number;
  name: string;
  isNotHaveChilds?: boolean;
  imageLink?: string;
  categoryAttributes?: {
    id: number;
    priority: number;
    attributeName: string;
  };
}

const CategoriesTile: React.FC<CategoriesTileProps> = ({
  id,
  name,
  imageLink,
  categoryAttributes,
}): React.ReactElement => {
  const location = useLocation().pathname;
  const nextPath = location === '/main' ? `/categories/${id}` : `${id}`;
  return (
    <li
      className={
        location === '/main' ? 'tile__item' : 'tile__item tile__item_small'
      }
    >
      <Link to={nextPath} className='tile__content'>
        <span className='tile__category-title'>{name}</span>
        <img
          className={
            location === '/main'
              ? 'tile__image'
              : 'tile__image tile__image_small'
          }
          alt={`фото категории ${name}`}
          src={imageLink}
        />
      </Link>
    </li>
  );
};

export default CategoriesTile;
