import React from 'react';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import BreadcrumbsItem from './BreadcrumbsItem';

interface IBreadcrumbsProps {
  crumbs: Array<{
    path: string;
    breadcrumb: string;
  }>;
}

const Breadcrumbs: React.FC<IBreadcrumbsProps> = ({ crumbs }) => {
  const breadcrumbs = useBreadcrumbs(crumbs);
  console.log(breadcrumbs);

  return (
    <nav className='breadcrumbs'>
      <ul className='breadcrumbs__list'>
        {breadcrumbs.map(({ breadcrumb, match }, index) => {
          const isFirstCrumb = index === 0;
          const isLastCrumb = index === breadcrumbs.length - 1;

          return (
            <BreadcrumbsItem
              key={match.pathname}
              breadcrumb={breadcrumb}
              isFirstCrumb={isFirstCrumb}
              isLastCrumb={isLastCrumb}
              match={match}
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;

// ----------------------------------------
// import React, { type ReactElement } from 'react';
// import { Link, useLocation } from 'react-router-dom';

// // const routes: Array<{
// //   path: string
// //   breadcrumb: string
// // }> = [
// //   { path: '', breadcrumb: 'Главная' },
// //   { path: '/about-company', breadcrumb: 'О нас' },
// //   { path: '/faq', breadcrumb: 'Часто задаваемые вопросы' },
// //   { path: '/favourites', breadcrumb: 'Избранное' },
// //   { path: '/categories/:id', breadcrumb: dynamicCrumb }
// // ];

// const Breadcrumbs = (): ReactElement => {
//   const { pathname } = useLocation();
//   const segments = pathname.split('/');

//   return (
//     <nav className='breadcrumbs'>
//       { segments.map((segment, id) => {
//         let url = '';
//         url += `/${segment}`;
//         return (
//             <Link to={url} key={id}>
//               { segment === ''
//                 ? 'Главная'
//                 : segment
//               }
//             </Link>
//         );
//       })
//     }
//     </nav>
//   );
// };

// export default Breadcrumbs;
