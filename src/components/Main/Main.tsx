import React from 'react';
import Slider from '../Slider/Slider';
import Discount from '../Discount/Discount';
import CategoriesMain from '../CategoriesMain/CategoriesMain';
import { getBanners } from '../../utils/api/user-api';
import { type MyTypeBanners } from '../../utils/types';

const Main: React.FC = () => {
  const [mainPageBanners, setMainPageBanners] = React.useState<MyTypeBanners[]>([]);
  const [mainPageDicountBanners, setMainPageDicountBanners] = React.useState<MyTypeBanners[]>([]);

  React.useEffect(() => {
    getBanners()
      .then((res) => {
        const sliderBanners = res.slice(0, 5);
        const otherBanners = res.slice(5, 9);
        setMainPageBanners(sliderBanners);
        setMainPageDicountBanners(otherBanners);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  // React.useEffect(() => {
  //   console.log(mainPageBanners);
  //   console.log(mainPageDicountBanners);
  // }, [mainPageBanners]);

  return (
    <>
      <section className='main'>
        <Slider bannerImage={mainPageBanners} />
        <Discount discountBannerImages={mainPageDicountBanners}/>
        <CategoriesMain id={0} title={''} img={''} url={''} />
      </section>
    </>
  );
};

export default Main;
