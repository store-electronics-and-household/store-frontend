import React from 'react';
import { Link } from 'react-router-dom';

const CatalogItem: React.FC<{
  id?: number;
  name: string;
  isCatalog?: boolean;
  setChosenBrand?: any;
}> = ({ name, id, isCatalog, setChosenBrand }) => {
  const renderLink = isCatalog ?? false;
  const handleChooseBrand = (): void => {
    setChosenBrand(name);
  };
  return (
    <ul className='catalog__models'>
      <li className='catalog__model'>
        {(!renderLink) && <Link to={`${id}`} className='catalog__model-link'>
          {name}
        </Link>}
        {renderLink && <div className='catalog__brand-search' onClick={handleChooseBrand}>
          {name}
        </div>}
      </li>
    </ul>
  );
};

export default CatalogItem;
