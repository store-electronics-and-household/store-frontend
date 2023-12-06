import React from 'react';
import Slider from '../Slider/Slider';
import Discount from '../Discount/Discount';
import CategoriesMain from '../CategoriesMain/CategoriesMain';
import { getBanners } from '../../utils/api/user-api';

const Main: React.FC = (categoriesMain) => {
  const [mainPageBanners, setMainPageBanners] = React.useState<
    Array<{ id: number; name: string; imageLink: string }>
  >([]);
  React.useEffect(() => {
    getBanners()
      .then((res) => {
        setMainPageBanners(res);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  React.useEffect(() => {
    console.log(mainPageBanners);
  }, [mainPageBanners]);

  return (
    <>
      <section className='main'>
        <Slider bannerImage={mainPageBanners} />
        <Discount />
        <CategoriesMain categoriesMain={[]} />
      </section>
    </>
  );
};

export default Main;
