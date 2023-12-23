import React, { useState, type RefObject } from 'react';
import { type CatalogMenuCategory } from '../../utils/types';
import { getMainCategories as getCatalogCategories } from '../../utils/api/catalog+categories.api';
import { Link } from 'react-router-dom';

interface Props {
  catalogRef: RefObject<HTMLDivElement>;
  visible: boolean | null;
  onCategoryClick: () => void;
}

const CatalogMenu: React.FC<Props> = ({ visible, catalogRef, onCategoryClick }) => {
  const [categories, setCategories] = useState<CatalogMenuCategory[]>([]);

  React.useEffect(() => {
    getCatalogCategories()
      .then((res) => {
        setCategories(res as CatalogMenuCategory[]);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  let animationClass = '';
  let overlayClass = '';

  if (visible !== null) {
    animationClass = `${
      visible
        ? 'catalog-menu-animation-entrance'
        : 'catalog-menu-animation-exit'
    }`;
    overlayClass = `${
      visible ? 'catalog-menu__overlay' : 'catalog-menu__overlay-disactive'
    }`;
  } else {
    return null;
  }

  return (
    <>
      <div
        className={`catalog-menu__overlay ${overlayClass}`}
        ref={catalogRef}
      />
      <section className={`catalog-menu ${animationClass}`} ref={catalogRef}>
        <h2 className='catalog-menu__title'>Каталог</h2>

        <div className='catalog-menu__grid-wrapper'>
          {categories.map(({ id, name, imageLink }) => (
            <div className='catalog-menu__category' key={id}>
              <Link to={`/categories/${id}`} className='catalog-menu__category-link' onClick={onCategoryClick}>
                <div className='catalog-menu__category-wrapper'>
                  <div className='catalog-menu__category-img'>
                    <img src={imageLink} alt={name} />
                  </div>
                  <span className='catalog-menu__category-name'>
                    {name}
                  </span>
                </div>
                </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CatalogMenu;
