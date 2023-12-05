import React from 'react';
import ProductCardMedium from '../ProductCardMedium/ProductCardMedium';
import CategoriesTile from '../CategoriesTile/CategoriesTile';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import { product, subCategoriesList } from '../../utils/constants';

const Categories: React.FC<{
  id?: number;
  name?: string;
  originPrice?: number;
  salesPrice?: number;
  discount?: number;
  url?: string;
}> = () => {
  return (
    <>
      <Breadcrumb currentPlace='Ноутбуки и аксессуары' />
      <section className='catalog'>
        <div className='catalog__container-big'>
          <h1 className='catalog__title'>Ноутбуки и аксессуары</h1>
          <div className='catalog__container'>
            <ul className='catalog__collection'>
              <li className='catalog__models'>
                <a className='catalog__model-link' href=''>
                  Ноутбуки
                </a>
                <ul className='catalog__models'>
                  <li className='catalog__model'>
                    <a className='catalog__model-link' href='/catalog'>
                      Apple Macbook
                    </a>
                  </li>
                  <li className='catalog__model'>
                    <a className='catalog__model-link' href='/catalog'>
                      Игровые ноутбуки
                    </a>
                  </li>
                  <li className='catalog__model'>
                    <a className='catalog__model-link' href=''>
                      Ультрабуки
                    </a>
                  </li>
                  <li className='catalog__model'>
                    <a className='catalog__model-link' href=''>
                      Ноутбуки-трансформеры
                    </a>
                  </li>
                  <li className='catalog__model'>
                    <a className='catalog__model-link' href=''>
                      Нетбуки
                    </a>
                  </li>
                </ul>
              </li>
              <ul className='catalog__models'>
                <li className='catalog__models'>
                  <a className='catalog__model-link' href=''>
                    Аксессуары
                  </a>
                </li>
                <li className='catalog__model'>
                  <a className='catalog__model-link' href=''>
                    Клавиатуры и комплекты
                  </a>
                </li>
                <li className='catalog__model'>
                  <a className='catalog__model-link' href=''>
                    Подставки для ноутбука
                  </a>
                </li>
                <li className='catalog__model'>
                  <a className='catalog__model-link' href=''>
                    Внешние жесткие диски
                  </a>
                </li>
                <li className='catalog__model'>
                  <a className='catalog__model-link' href=''>
                    Мыши компьютерные
                  </a>
                </li>
                <li className='catalog__model'>
                  <a className='catalog__model-link' href=''>
                    USB флешки
                  </a>
                </li>
              </ul>
            </ul>
            <ul className='catalog__rendered-categories'>
              <div className='catalog__render-cat'>
                {subCategoriesList.slice(0, 9).map((tile) => (
                  <CategoriesTile
                    key={tile.id}
                    title={tile.catTitle}
                    img={tile.catImg}
                    url={tile.catUrl}
                  />
                ))}
              </div>
              <h2 className='catalog__popular'>Популярные товары</h2>
              <div className='catalog__render-popular'>
                {product.slice(0, 6).map((product) => (
                  <ProductCardMedium
                    key={product.id}
                    name={product.name}
                    originPrice={product.originPrice}
                    salesPrice={product.salesPrice}
                    discount={product.discount}
                    url={product.url}
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
