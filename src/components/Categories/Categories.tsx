import React, { memo, useEffect, useState } from 'react';
import ProductCardMedium from '../ProductCardMedium/ProductCardMedium';
import CategoriesTile from '../CategoriesTile/CategoriesTile';
import { popularCardsToShow, products } from '../../utils/constants';
import CatalogItem from '../Catalog/CatalogItem';
import {
  getBrandsForCategory,
  getCategoryName,
  getSubcategories,
  type IgetSubcategories,
} from '../../utils/api/catalog+categories.api';
import { useLocation, useParams } from 'react-router-dom';
import Catalog from '../Catalog/Catalog';
import { type IBreadcrumbsProps } from '../Breadcrumbs/Breadcrumbs';

const Categories: React.FC<IBreadcrumbsProps> = ({ crumbs }): React.ReactElement => {
  const [subCategories, setSubCategories] = useState<IgetSubcategories[]>();
  const [subCategoryName, setSubCategoryName] = useState<string | number>();
  const [brandNames, setBrandNames] = useState<string[]>([]);
  const [chosenBrand, setChosenBrand] = useState<string>('');
  const currentPath = useLocation().pathname;
  const { subcategory: subcategoryId = '', model: modelId } = useParams();
  const currentCategory = modelId ?? subcategoryId;
  useEffect(() => {
    getCategoryName(currentCategory)
      .then((res) => {
        setSubCategoryName(res.name);
        getSubcategories(currentCategory)
          .then((res) => {
            setSubCategories(res);
            for (const item of res) {
              const newCrumb = {
                path: `${currentPath}/${item.id}`,
                breadcrumb: item.name,
              };
              const isAdd = crumbs.filter((item) => {
                return item.path === newCrumb.path;
              }).length === 0;
              if (isAdd) crumbs.push(newCrumb);
            }
          })
          .catch((err) => {
            console.error(
              `При загрузке подкатегорий товаров произошла ошибка - ${err}`
            );
          });
      })
      .catch((err) => {
        console.error(err);
      });
  }, [currentCategory]);

  useEffect(() => {
    getBrandsForCategory(+currentCategory, 'Бренд')
      .then((res) => {
        setBrandNames(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [currentCategory]);

  const handleResetBrands = (): void => {
    setChosenBrand('');
  };

  const isCatalog = subCategories?.length === 0;
  return (
    <>
      <section className='catalog'>
        <div className='catalog__container-big'>
          <h1 className='catalog__title'>{subCategoryName}</h1>
          <div className='catalog__container'>
            <nav>
              <ul className='catalog__collection'>
                <li className='catalog__models'>
                  {!isCatalog && <div className='catalog__model-link'>{subCategoryName}</div>}
                  {!isCatalog && subCategories?.map((item) => (
                    <CatalogItem key={item.id} name={item.name} id={item.id}/>
                  ))}
                  {isCatalog &&
                    <>
                      <span className="catalog__brand-search" onClick={handleResetBrands}>Все бренды</span>
                      {brandNames?.map((item, index) => (
                        <CatalogItem key={index} name={item} isCatalog={isCatalog} setChosenBrand={setChosenBrand}/>
                      ))}
                    </>
                  }
                </li>
              </ul>
            </nav>
            <ul className='catalog__rendered-categories'>
              <div className='catalog__render-cat'>
                {!isCatalog && subCategories?.map((tile) => {
                  const imageLink = tile.imageLink ?? '';
                  return <CategoriesTile key={tile.id} name={tile.name} id={tile.id} imageLink={imageLink}/>;
                })}
                {isCatalog &&
                  <Catalog chosenBrand={chosenBrand}/>}
              </div>
              <h2 className='catalog__popular'>Популярные товары</h2>
              <div className='catalog__render-popular'>
                {products.slice(0, popularCardsToShow).map((product) => (
                  <ProductCardMedium
                    key={product.id}
                    product={product}
                    // name={product.name}
                    // originPrice={product.originPrice}
                    // salesPrice={product.salesPrice}
                    // discount={product.discount}
                    // imgUrl={product.imgUrl}
                    // isLiked={product.isLiked}
                    // quantityInCart={product.quantityInCart}
                  />
                ))}
              </div>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default memo(Categories);
