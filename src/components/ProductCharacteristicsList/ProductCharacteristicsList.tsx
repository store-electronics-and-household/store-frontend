import React from 'react';
import { type productAttributesDataType } from '../../utils/types';

interface ProductCharacteristicListProps {
  productSpecifyName: productAttributesDataType;
  productSpecifyValue: productAttributesDataType;
  keysList: Array<keyof productAttributesDataType>;
  modifyClass?: string;
}

const ProductCharacteristicsList: React.FC<ProductCharacteristicListProps> = ({
  productSpecifyName,
  productSpecifyValue,
  keysList,
  modifyClass,
}: ProductCharacteristicListProps) => {
  return (
    <ul className={`characteristics-list ${modifyClass}`}>
      {keysList.map((keysListItem, keysListKey) => {
        return (
          <li className='characteristics-list__item' key={keysListKey}>
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
