import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { API_CAT_IMG } from '../../utils/constants';

interface CategoriesTileProps {
  id: number;
  name: string;
  imageLink?: string;
  categoryAttributes?: {
    id: number;
    priority: number;
    attributeName: string;
  };
}

const CategoriesTile: React.FC<CategoriesTileProps> = ({ id, name, imageLink, categoryAttributes }): React.ReactElement => {
  const location = useLocation().pathname;
  const nextPath = location === '/main'
    ? `/categories/${id}`
    : `${id}`;
  const CategoryTumbNail = location === '/main'
    ? imageLink
    : `${API_CAT_IMG}/${id}.png`;

  return (
    <li
      className={location === '/main' ? 'tile__item' : 'tile__item tile__item_small'}
    >
      <Link to={nextPath} className='tile__content'>
        <span className='tile__category-title'>{name}</span>
        <img
          className={location === '/main' ? 'tile__image' : 'tile__image tile__image_small'}
          alt={`фото категории ${name}`}
          src={CategoryTumbNail}
        />
      </Link>
    </li>
  );
};

export default CategoriesTile;
