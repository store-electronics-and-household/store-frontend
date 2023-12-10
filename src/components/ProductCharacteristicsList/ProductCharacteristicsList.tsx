import React from 'react';
import { type productAttributesDataType } from '../../utils/types';

interface ProductCharacteristicListProps {
  productSpecifyName: productAttributesDataType;
  productSpecifyValue: productAttributesDataType;
  keysList: Array<keyof productAttributesDataType>;
  modifyListClass?: string;
  modifyItemClass?: string;
}

const ProductCharacteristicsList: React.FC<ProductCharacteristicListProps> = ({
  productSpecifyName,
  productSpecifyValue,
  keysList,
  modifyListClass,
  modifyItemClass
}: ProductCharacteristicListProps) => {
  return (
    <ul className={`characteristics-list ${modifyListClass}`}>
      {keysList.map((keysListItem, keysListKey) => {
        return (
          <li className={`characteristics-list__item ${modifyItemClass}`} key={keysListKey}>
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
