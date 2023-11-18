import React from 'react';
import './CategoriesTile.css';

const CategoriesTile: React.FC<{
  catTitle: string;
  catImg: string;
  catUrl?: string;
}> = (tile) => {
  return (
    <li className='tile__item'>
      <a className='tile__content' href={tile.catUrl}>
        <span className='tile__category-name'>{tile.catTitle}</span>
        <img className='tile__image' alt='' src={tile.catImg} />
      </a>
    </li>
  );
};

export default CategoriesTile;
