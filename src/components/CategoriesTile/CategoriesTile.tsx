import React from 'react';
import { useLocation } from 'react-router-dom';
import { API_CAT_IMG, API_URL } from '../../utils/constants';

interface CategoriesTileProps {
  id: number;
  name: string;
  categoryAttributes?: Array<{
    id: number;
    priority: number;
    attributeName: string;
  }>;
}
const CategoriesTile: React.FC<CategoriesTileProps> = (
  tile,
  categoryAttributes
) => {
  const location = useLocation().pathname;
  return (
    <li
      className={
        location === '/main' ? 'tile__item' : 'tile__item tile__item_small'
      }
    >
      {/* изменить путь */}
      <a
        className='tile__content'
        href={
          location === '/main'
            ? `${API_URL}/categories/${tile.id}`
            : `${API_URL}/categories/${categoryAttributes.id}`
        }
      >
        <span className='tile__category-title'>{tile.name}</span>
        <img
          className={
            location === '/main'
              ? 'tile__image'
              : 'tile__image tile__image_small'
          }
          alt={''} /* изменить путь */
          src={
            location === '/main'
              ? `${API_CAT_IMG}/${tile.id}.png`
              : `${API_CAT_IMG}/${categoryAttributes.id}.png`
          }
        />
      </a>
    </li>
  );
};

export default CategoriesTile;
