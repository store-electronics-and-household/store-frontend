import React from 'react';
import ProductCardMedium from '../ProductCardMedium/ProductCardMedium';
import CategoriesTile from '../CategoriesTile/CategoriesTile';
import { popularCardsToShow, products } from '../../utils/constants';
import CatalogItem from '../Catalog/CatalogItem';
//  import { type ProductCardMediumProps } from '../../utils/types';

interface CategoriesProps {
  subCategoriesList: {
    id: number;
    name: string;
    imageLink?: string;
    categoryAttributes: Array<{
      id: number;
      priority?: number;
      attributeName: string;
    }>;
  };
  product: Array<{
    id: number;
    name: string;
    originPrice: number;
    salesPrice?: number;
    discount?: number;
    isLiked: boolean;
    imgUrl: string[];
    quantityInCart: number;
  }>;
}

const Categories: React.FC<CategoriesProps> = ({ subCategoriesList, product }: CategoriesProps) => {
  return (
    <>
      <section className='catalog'>
        <div className='catalog__container-big'>
          <h1 className='catalog__title'>{subCategoriesList.name}</h1>
          <div className='catalog__container'>
            <ul className='catalog__collection'>
              <li className='catalog__models'>
                <a className='catalog__model-link' href=''>
                  {subCategoriesList.name}
                </a>
                {subCategoriesList.categoryAttributes.map((i) => (
                  <CatalogItem key={i.id} name={i.attributeName} id={i.id} />
                ))}
              </li>
            </ul>
            <ul className='catalog__rendered-categories'>
              <div className='catalog__render-cat'>
                {subCategoriesList.categoryAttributes.map((tile) => (
                  <CategoriesTile
                    key={tile.id}
                    name={tile.attributeName}
                    id={tile.id}
                  />
                ))}
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

export default Categories;
