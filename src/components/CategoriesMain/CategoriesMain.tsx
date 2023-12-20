import React, { memo } from 'react';
import CategoriesTile from '../CategoriesTile/CategoriesTile';
import { getMainCategories } from '../../utils/api/catalog+categories.api';
import { type CategoriesTileProps } from '../../utils/types';

const CategoriesMain: React.FC = (): React.ReactElement => {
  const [categoriesMain, setCategoriesMain] = React.useState<
    CategoriesTileProps[]
  >([]);
  React.useEffect(() => {
    getMainCategories()
      .then((res) => {
        setCategoriesMain(res);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  return (
    <section className='tile'>
      <h2 className='tile__title'>Категории</h2>
      <ul className='tile__list'>
        {categoriesMain
          .sort((a, b: { name: string }) =>
            a.name.toLowerCase().localeCompare(b.name.toLowerCase())
          )
          .map((tile) => (
            <CategoriesTile
              key={tile.id}
              name={tile.name}
              id={tile.id}
              imageLink={tile.imageLink}
            />
          ))}
      </ul>
    </section>
  );
};

export default memo(CategoriesMain);
