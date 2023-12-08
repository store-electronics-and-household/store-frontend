import React from 'react';
import { useLocation } from 'react-router-dom';
import { API_CAT_IMG, API_URL } from '../../utils/constants';

const CategoriesTile: React.FC<{ id: number; name: string }> = (tile) => {
  const location = useLocation().pathname;
  return (
    <li
      className={
        location === '/main' ? 'tile__item' : 'tile__item tile__item_small'
      }
    >
      <a className='tile__content' href={`${API_URL}/categories/${tile.id}`}>
        <span className='tile__category-title'>{tile.name}</span>
        <img
          className={
            location === '/main'
              ? 'tile__image'
              : 'tile__image tile__image_small'
          }
          alt=''
          src={`${API_CAT_IMG}/${tile.id}.png`}
        />
      </a>
    </li>
  );
};

export default CategoriesTile;
