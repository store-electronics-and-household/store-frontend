import React from 'react';
import './CategoriesMain.scss';
import { categoriesList } from '../../utils/constants';
import CategoriesTile from '../СategoriesTile/CategoriesTile';

const CategoriesMain: React.FC<{
  catId?: number;
  catTitle?: string;
  catImg?: string;
  catUrl?: string;
}> = () => {
  return (
    <section className='tile-main'>
      <div className='tile-main__text'>
        <h2 className='tile-main__title'>Категории</h2>
      </div>
      <ul className='tile-main__list'>
        {categoriesList.map((tile) => (
          <CategoriesTile
            key={tile.catId}
            catTitle={tile.catTitle}
            catImg={tile.catImg}
            catUrl={tile.catUrl}
          />
        ))}
      </ul>{' '}
    </section>
  );
};

export default CategoriesMain;
