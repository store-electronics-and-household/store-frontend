import React, { type ReactElement } from 'react';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import AboutCompanyContent from './AboutCompanyContent';
import { aboutCompanyInfo } from '../../utils/constants';

const AboutCompany = (): ReactElement => {
  return (
    <>
      <Breadcrumbs />
      <section className='about-company'>
        <h1 className='about-company__header'>О нас</h1>
        <ul className='about-company__feature-list'>
          {aboutCompanyInfo.map((content, key) => {
            return (
              <li key={key} className='about-company__feature'>
                <AboutCompanyContent
                  head={content.head}
                  iconSrc={content.iconSrc}
                  altText={content.altText}
                  text={content.text}
                />
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default AboutCompany;
