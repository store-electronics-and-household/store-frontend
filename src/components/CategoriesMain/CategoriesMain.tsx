import React from 'react';
import { categoriesList } from '../../utils/constants';
import CategoriesTile from '../CategoriesTile/CategoriesTile';

const CategoriesMain: React.FC<{
  id: number;
  title: string;
  img: string;
  url: string;
}> = (tile) => {
  return (
    <section className='tile'>
      <h2 className='tile__title'>Категории</h2>
      <ul className='tile__list'>
        {categoriesList
          .sort((a, b) => a.title.localeCompare(b.title))
          .map((tile) => (
            <CategoriesTile
              key={tile.id}
              title={tile.title}
              img={tile.img}
              url={tile.url}
            />
          ))}
      </ul>{' '}
    </section>
  );
};

export default CategoriesMain;
