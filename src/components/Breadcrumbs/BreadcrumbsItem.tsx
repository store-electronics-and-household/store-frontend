/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import type { BreadcrumbMatch } from 'use-react-router-breadcrumbs';

interface BreadcrumbsItemProps {
  breadcrumb: ReactNode;
  isFirstCrumb: boolean;
  isLastCrumb: boolean;
  match: BreadcrumbMatch<string>;
}

const BreadcrumbsItem: React.FC<BreadcrumbsItemProps> = ({
  breadcrumb,
  isFirstCrumb,
  isLastCrumb,
  match,
}) => {
  const renderTitle = (crumb: ReactNode): React.ReactElement => {
    switch (true) {
      case isFirstCrumb:
        return (
          <Link className='breadcrumbs__link' to={match.pathname || ''}>
            Главная
          </Link>
        );
      case isLastCrumb:
        return <span className='breadcrumbs__link'>{crumb}</span>;
      default:
        return (
          <Link className='breadcrumbs__link' to={match.pathname || ''}>
            {crumb}
          </Link>
        );
    }
  };

  return <li className='breadcrumbs__item'>{renderTitle(breadcrumb)}</li>;
};

export default BreadcrumbsItem;
