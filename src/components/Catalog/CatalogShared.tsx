import React from 'react';
import ProductCardMedium from '../ProductCardMedium/ProductCardMedium';
import { type MediumCardProps } from '../../utils/types';
// import { product } from '../../utils/constants';

// interface MyTypeCatalogItem {
//   id: number;
//   name: string;
//   originPrice: number;
//   salesPrice?: number;
//   discount?: number;
//   imgUrl: string[];
//   isLiked: boolean;
//   quantityInCart: number;
// }

interface CatalogSharedProps {
  itemArray: MediumCardProps[];
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
              product={product}
              // name={product.name}
              // originPrice={product.price}
              // salesPrice={product.price}
              // discount={product.discount}
              // imgUrls={product.modelsImages}
              // // isLiked={product.isLiked}
              // quantityInCart={product.quantity}
            />
          ))}
        </ul>
      </section>
      ;
    </>
  );
};

export default CatalogShared;
