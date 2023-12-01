import React from 'react';
import BreadcrumbItem from './BreadcrumbItem';
import { useLocation } from 'react-router-dom';

interface BreadcrumbProps {
  children?: React.ReactNode;
  currentPlace: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  children,
  currentPlace,
}: BreadcrumbProps) => {
  const location = useLocation();

  return (
    <ul className='breadcrumb'>
      <BreadcrumbItem
        breadcrumbPath='/'
        breadcrumbText={`${
          location.pathname === '/payment' ? 'Корзина' : 'Главная'
        }`}
      />
      {children}
      <li className='breadcrumb__item breadcrumb__item_current'>
        {currentPlace}
      </li>
    </ul>
  );
};

export default Breadcrumb;
