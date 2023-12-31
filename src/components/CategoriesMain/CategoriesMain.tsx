import React, { memo } from 'react';
import CategoriesTile from '../CategoriesTile/CategoriesTile';

interface Props {
  categoriesMain: Array<{
    id: number;
    name: string;
    imageLink: string;
  }>;
}

const CategoriesMain: React.FC<Props> = ({ categoriesMain }): React.ReactElement => {
  return (
    <section className='tile'>
      <h2 className='tile__title'>Категории</h2>
      <ul className='tile__list'>
        {categoriesMain
          .sort((a, b: { name: string }) =>
            a.name.toLowerCase().localeCompare(b.name.toLowerCase())
          )
          .map((tile) => (
            <CategoriesTile key={tile.id} name={tile.name} id={tile.id} imageLink={tile.imageLink}/>
          ))}
      </ul>
    </section>
  );
};

export default memo(CategoriesMain);
