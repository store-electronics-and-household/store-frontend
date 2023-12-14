import React, { useEffect, useState } from 'react';
import './CategoriesMain.css';
import CategoriesTile from '../CategoriesTile/CategoriesTile';
import { getMainCategories, type IgetMainCategories } from '../../utils/MainApi/CatalogApi';
import { categoryEndpoint, imagesUrl } from '../../utils/constants';

const CategoriesMain: React.FC<{
  catId?: number
  catTitle?: string
  catImg?: string
  catUrl?: string
}> = (tile): React.ReactElement => {
  const [categories, setCategories] = useState<IgetMainCategories[]>();

  useEffect(() => {
    getMainCategories()
      .then((res) => {
        setCategories(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [categories]);

  return (
    <section className="tile-main">
      <div className="tile-main__text">
        <h2 className="tile-main__title">Категории</h2>
      </div>
      <ul className="tile-main__list">
        {
          categories?.map((item) => (
            <CategoriesTile
              key={item.id}
              categoryId={item.id}
              catTitle={item.name}
              catImg={`${imagesUrl}${item.id}.png`}
              catUrl={categoryEndpoint}
            />
          ))}
      </ul>
      {' '}
    </section>
  );
};

export default CategoriesMain;
