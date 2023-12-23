import React from 'react';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import BreadcrumbsItem from './BreadcrumbsItem';

export interface IBreadcrumbsProps {
  crumbs: Array<{
    path: string;
    breadcrumb: string;
  }>;
}

const Breadcrumbs: React.FC<IBreadcrumbsProps> = ({ crumbs }) => {
  const breadcrumbs = useBreadcrumbs(crumbs);

  return (
    <nav className='breadcrumbs'>
      <ul className='breadcrumbs__list'>
        {breadcrumbs.map(({ breadcrumb, match }, index) => {
          const isFirstCrumb = index === 0;
          const isLastCrumb = index === breadcrumbs.length - 1;

          if (match.pathname !== '/categories') {
            return (
              <BreadcrumbsItem
                key={match.pathname}
                breadcrumb={breadcrumb}
                isFirstCrumb={isFirstCrumb}
                isLastCrumb={isLastCrumb}
                match={match}
              />
            );
          }
          return null;
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
