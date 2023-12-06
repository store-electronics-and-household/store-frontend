import React from 'react';
import CategoriesTile from '../CategoriesTile/CategoriesTile';

interface Props {
  categoriesMain: string[] | any;
}

const CategoriesMain: React.FC<Props> = ({ categoriesMain }) => {
  return (
    <section className='tile'>
      <h2 className='tile__title'>Категории</h2>
      <ul className='tile__list'>
        {categoriesMain
          .sort((a: { name: string }, b: { name: string }) =>
            a.name.toLowerCase().localeCompare(b.name.toLowerCase())
          )
          .map((tile: { id: React.Key | null | undefined; name: string }) => (
            <CategoriesTile key={tile.id} name={tile.name} id={0} />
          ))}
      </ul>{' '}
    </section>
  );
};

export default CategoriesMain;
