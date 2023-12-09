import React from 'react';
import ProductCardMedium from '../ProductCardMedium/ProductCardMedium';
// import { product } from '../../utils/constants';

interface MyTypeCatalogItem {
  id: number;
  name: string;
  originPrice: number;
  salesPrice: number;
  discount?: number;
  url: string;
}

interface CatalogSharedProps {
  itemArray: MyTypeCatalogItem[];
  itemsToShow: number;
  is4Items?: boolean;
}

const CatalogShared: React.FC<CatalogSharedProps> = ({
  itemArray,
  itemsToShow,
  is4Items,
}) => {
  // const [currentItemsArray, setcurrentItemsArray] = React.useState<
  // MyTypeCatalogItem[]
  // >([]);

  // useEffect(() => {
  //   setcurrentItemsArray(product);
  // }, []);

  return (
    <>
      <section className='catalog-shared'>
        <ul
          className={`catalog__rendered-list ${
            is4Items ?? false ? 'catalog__rendered-list_type_4items' : ''
          }  `}
        >
          {itemArray.slice(0, itemsToShow).map((product) => (
            <ProductCardMedium
              key={product.id}
              name={product.name}
              originPrice={product.originPrice}
              salesPrice={product.salesPrice}
              discount={product.discount}
              url={product.url}
            />
          ))}
        </ul>
      </section>
      ;
    </>
  );
};

export default CatalogShared;
