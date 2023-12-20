import React from 'react';
import cn from 'classnames';

interface ProductCharacteristicListProps {
  attributes: Array<{
    attributeName: string;
    value: string;
  }>;
  modifyListClass?: string;
  modifyItemClass?: string;
}

const ProductCharacteristicsList: React.FC<ProductCharacteristicListProps> = ({
  attributes,
  modifyListClass,
  modifyItemClass
}: ProductCharacteristicListProps) => {
  const characteristicsListClassname = cn('characteristics-list', modifyListClass);
  const characteristicsItemClassname = cn('characteristics-list__item', modifyItemClass);

  return (
    <ul className={characteristicsListClassname}>
      {attributes.map((attribute, id) => {
        return (
          <li className={characteristicsItemClassname} key={id}>
            <span className='characteristics-list__item-key'>
              {attribute.attributeName}
            </span>
            <span className='characteristics-list__item-value'>
              {attribute.value}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default ProductCharacteristicsList;
