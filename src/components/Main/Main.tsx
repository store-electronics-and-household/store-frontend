import React from 'react';
import Slider from '../Slider/Slider';
import Discount from '../Discount/Discount';
import CategoriesMain from '../CategoriesMain/CategoriesMain';
import { getBanners } from '../../utils/api/user-api';
import { type CategoriesTileProps } from '../../utils/types';
import { getCategoriesMain } from '../../utils/api/catalog+categories.api';

const Main: React.FC = () => {
  const [mainPageBanners, setMainPageBanners] = React.useState<
    Array<{ id: number; name: string; imageLink: string }>
  >([]);
  const [categoriesMain, setCategoriesMain] = React.useState<
    CategoriesTileProps[]
  >([]);
  React.useEffect(() => {
    Promise.all([getBanners(), getCategoriesMain()])
      .then(([res, categoriesMain]) => {
        setMainPageBanners(res);
        setCategoriesMain(categoriesMain);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  React.useEffect(() => {
    console.log(mainPageBanners, categoriesMain);
  }, [mainPageBanners]);
  return (
    <>
      <section className='main'>
        <Slider bannerImage={mainPageBanners} />
        <Discount />
        <CategoriesMain categoriesMain={categoriesMain} />
      </section>
    </>
  );
};

export default Main;
