import React from 'react';
import BreadcrumbItem from './BreadcrumbItem';

interface BreadcrumbProps {
  children?: React.ReactNode;
  currentPlace: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  children,
  currentPlace,
}: BreadcrumbProps) => {
  return (
    <ul className='breadcrumb'>
      <BreadcrumbItem breadcrumbPath='/' breadcrumbText='Главная' />
      {children}
      <li className='breadcrumb__item breadcrumb__item_current'>
        {currentPlace}
      </li>
    </ul>
  );
};

export default Breadcrumb;
