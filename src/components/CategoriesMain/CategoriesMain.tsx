import React, { memo } from 'react';
import CategoriesTile from '../CategoriesTile/CategoriesTile';
import { getMainCategories } from '../../utils/api/catalog+categories.api';
import { type CategoriesTileProps } from '../../utils/types';
import { type IBreadcrumbsProps } from '../Breadcrumbs/Breadcrumbs';

const CategoriesMain: React.FC<IBreadcrumbsProps> = ({ crumbs }): React.ReactElement => {
  const [categoriesMain, setCategoriesMain] = React.useState<
  CategoriesTileProps[]
  >([]);
  React.useEffect(() => {
    getMainCategories()
      .then((res) => {
        setCategoriesMain(res);
        for (const item of res) {
          const newCrumb = {
            path: `categories/${item.id}`,
            breadcrumb: item.name,
          };
          const isAdd = crumbs.filter((item) => {
            return item.path === newCrumb.path;
          }).length === 0;
          if (isAdd) crumbs.push(newCrumb);
        }
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
