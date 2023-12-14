import React, { memo } from 'react';
import './CategoriesTile.css';
import { Link, useLocation } from 'react-router-dom';

const CategoriesTile: React.FC<{
  categoryId: number
  catTitle: string
  catImg: string
  catUrl?: string
}> = ({ categoryId, catTitle, catImg, catUrl }): React.ReactElement => {
  const location = useLocation();
  return (
    <li
      className={
        location.pathname === '/main'
          ? 'tile__item'
          : 'tile__item tile__item_small'
      }
    >
      <Link to={`${catUrl}`} className="tile__content" state={{ categoryId }}>
        <span className="tile__category-name">{catTitle}</span>
        <img
          className={
            location.pathname === '/main'
              ? 'tile__image'
              : 'tile__image tile__image_small'
          }
          alt=""
          src={catImg}
        />
      </Link>
    </li>
  );
};

export default memo(CategoriesTile);
