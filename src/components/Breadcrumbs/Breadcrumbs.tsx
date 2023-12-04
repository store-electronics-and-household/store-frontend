import React, { type ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';

const routes: Array<{
  path: string
  breadcrumb: string
}> = [
  { path: '', breadcrumb: 'Главная' },
  { path: '/about-company', breadcrumb: 'О нас' },
  { path: '/faq', breadcrumb: 'Часто задаваемые вопросы' },
  { path: '/favourites', breadcrumb: 'Избранное' },
];

const Breadcrumbs = (): ReactElement => {
  const breadcrumbs = useBreadcrumbs(routes);

  return (
    <nav className='breadcrumbs'>
      {breadcrumbs.map(({ match, breadcrumb }) => (
        <NavLink key={match.pathname} to={match.pathname} className='breadcrumbs__item'>
          {breadcrumb}
        </NavLink>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
