import React from 'react';
import { type ProductAttributesDataType } from '../../utils/types';
import cn from 'classnames';

interface ProductCharacteristicListProps {
  productSpecifyName: ProductAttributesDataType;
  productSpecifyValue: ProductAttributesDataType;
  keysList: Array<keyof ProductAttributesDataType>;
  modifyListClass?: string;
  modifyItemClass?: string;
}

const ProductCharacteristicsList: React.FC<ProductCharacteristicListProps> = ({
  productSpecifyName,
  productSpecifyValue,
  keysList,
  modifyListClass,
  modifyItemClass,
}: ProductCharacteristicListProps) => {
  const characteristicsListClassname = cn(
    'characteristics-list',
    modifyListClass
  );
  const characteristicsItemClassname = cn(
    'characteristics-list__item',
    modifyItemClass
  );

  return (
    <ul className={characteristicsListClassname}>
      {keysList.map((keysListItem, keysListKey) => {
        return (
          <li className={characteristicsItemClassname} key={keysListKey}>
            <span className='characteristics-list__item-key'>
              {productSpecifyName[keysListItem]}
            </span>
            <span className='characteristics-list__item-value'>
              {productSpecifyValue[keysListItem]}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default ProductCharacteristicsList;
