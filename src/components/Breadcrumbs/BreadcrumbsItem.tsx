/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import type { BreadcrumbMatch } from 'use-react-router-breadcrumbs';

interface BreadcrumbsItemProps {
  breadcrumb: ReactNode
  className?: string
  isFirstCrumb: boolean
  isLastCrumb: boolean
  match: BreadcrumbMatch<string>
};

const BreadcrumbsItem: React.FC<BreadcrumbsItemProps> = ({
  breadcrumb,
  className,
  isFirstCrumb,
  isLastCrumb,
  match,
}) => {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const renderTitle = (crumb: ReactNode) => {
    if (isFirstCrumb) {
      return (
        <Link className='breadcrumbs__link' to={match.pathname || ''}>
          Главная
        </Link>
      );
    } else if (isLastCrumb) {
      return <span className='breadcrumbs__link'>{crumb}</span>;
    } else {
      return <Link className='breadcrumbs__link' to={match.pathname || ''}>{crumb}</Link>;
    }
  };

  return (
    <li className='breadcrumbs__item'>
      {renderTitle(breadcrumb)}
    </li>
  );
};

export default BreadcrumbsItem;
