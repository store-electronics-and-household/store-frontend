import React from 'react';
import { useLocation } from 'react-router-dom';

const CategoriesTile: React.FC<{
  title: string;
  img: string;
  url: string;
}> = (tile) => {
  const location = useLocation().pathname;
  return (
    <li
      className={
        location === '/main' ? 'tile__item' : 'tile__item tile__item_small'
      }
    >
      <a className='tile__content' href={tile.url}>
        <span className='tile__category-title'>{tile.title}</span>
        <img
          className={
            location === '/main'
              ? 'tile__image'
              : 'tile__image tile__image_small'
          }
          alt=''
          src={tile.img}
        />
      </a>
    </li>
  );
};

export default CategoriesTile;
