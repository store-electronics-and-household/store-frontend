import React from 'react';
import Slider from '../Slider/Slider';
import Discount from '../Discount/Discount';
import CategoriesMain from '../CategoriesMain/CategoriesMain';
import { getBanners } from '../../utils/api/user-api';
import {
  type CategoriesTileProps,
  type MyTypeBanners,
} from '../../utils/types';
import { getCategoriesMain } from '../../utils/api/catalog+categories.api';

const Main: React.FC = () => {
  const [mainPageBanners, setMainPageBanners] = React.useState<MyTypeBanners[]>(
    []
  );
  const [mainPageDicountBanners, setMainPageDicountBanners] = React.useState<
    MyTypeBanners[]
  >([]);

  const [categoriesMain, setCategoriesMain] = React.useState<
    CategoriesTileProps[]
  >([]);
  React.useEffect(() => {
    Promise.all([getBanners(), getCategoriesMain()])
      .then(([res, categoriesMain]) => {
        const sliderBanners = res.slice(0, 5);
        const otherBanners = res.slice(5, 9);
        setMainPageBanners(sliderBanners);
        setMainPageDicountBanners(otherBanners);
        setCategoriesMain(categoriesMain);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  // React.useEffect(() => {
  //   console.log(mainPageBanners, categoriesMain);
  //   console.log(mainPageDicountBanners);
  // }, [mainPageBanners]);
  return (
    <>
      <section className='main'>
        <Slider bannerImage={mainPageBanners} />
        <Discount discountBannerImages={mainPageDicountBanners} />
        <CategoriesMain categoriesMain={categoriesMain} />
      </section>
    </>
  );
};

export default Main;
