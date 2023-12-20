import React from 'react';
import Slider from '../Slider/Slider';
import Discount from '../Discount/Discount';
import CategoriesMain from '../CategoriesMain/CategoriesMain';
import { getBanners } from '../../utils/api/user-api';
import type { MyTypeBanners, MediumCardProps } from '../../utils/types';

interface MainProps {
  passSearchResults: (array: MediumCardProps[]) => void;
  handleSearch: (request: string) => void;
}

const Main: React.FC<MainProps> = ({ passSearchResults, handleSearch }) => {
  const [mainPageBanners, setMainPageBanners] = React.useState<MyTypeBanners[]>(
    []
  );
  const [mainPageDicountBanners, setMainPageDicountBanners] = React.useState<
    MyTypeBanners[]
  >([]);
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
  //   console.log(mainPageBanners, categoriesMain);
  //   console.log(mainPageDicountBanners);
  // }, [mainPageBanners]);
  return (
    <>
      <section className='main'>
        <Slider
          bannerImage={mainPageBanners}
          passSearchResults={passSearchResults}
          handleSearch={handleSearch}
        />
        <Discount
          discountBannerImages={mainPageDicountBanners}
          passSearchResults={passSearchResults}
          handleSearch={handleSearch}
        />
        <CategoriesMain />
      </section>
    </>
  );
};

export default Main;
