import React, { useEffect, useState } from 'react';
import ProductCardMedium from '../ProductCardMedium/ProductCardMedium';
import CategoriesTile from '../CategoriesTile/CategoriesTile';
import { popularCardsToShow, products } from '../../utils/constants';
import CatalogItem from '../Catalog/CatalogItem';
import { getSubcategories, type IgetSubcategories } from '../../utils/api/catalog+categories.api';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const Categories: React.FC = (): React.ReactElement => {
  const [subCategories, setSubCategories] = useState<IgetSubcategories[]>();
  const { subcategory: subcategoryId = '' } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const subcategoryName: string = location.state.subcategoryName;
  useEffect(() => {
    getSubcategories(subcategoryId)
      .then((res) => {
        setSubCategories(res);
      })
      .catch((err) => {
        console.error(`При загрузке подкатегорий товаров произошла ошибка - ${err}`);
      });
  }, []);

  return (
    <>
      <section className='catalog'>
        <div className='catalog__container-big'>
          <h1 className='catalog__title'>{subcategoryName}</h1>
          <div className='catalog__container'>
            <nav>
              <ul className='catalog__collection'>
                <li className='catalog__models'>
                  <div className='catalog__model-link'>
                    {subcategoryName}
                  </div>
                  {subCategories?.map((item) => (
                    <CatalogItem key={item.id} name={item.name} id={item.id}/>
                  ))}
                </li>
              </ul>
            </nav>
            <ul className='catalog__rendered-categories'>
              <div className='catalog__render-cat'>
                {subCategories?.map((tile) => (
                  <CategoriesTile
                    key={tile.id}
                    name={tile.name}
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
