import React from 'react';
import Slider from '../Slider/Slider';
import Discount from '../Discount/Discount';
import CategoriesMain from '../CategoriesMain/CategoriesMain';
import { getBanners } from '../../utils/api/user-api';
import type { MyTypeBanners, MediumCardProps } from '../../utils/types';
import { defSlides } from '../../utils/constants';

interface MainProps {
  passSearchResults: (array: MediumCardProps[]) => void;
  handleSearch: (request: string) => void;
  crumbs: Array<{
    path: string;
    breadcrumb: string;
  }>;
}

const Main: React.FC<MainProps> = ({ passSearchResults, handleSearch, crumbs }) => {
  const [mainPageBanners, setMainPageBanners] = React.useState<MyTypeBanners[]>(defSlides);
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
        <CategoriesMain crumbs={crumbs}/>
      </section>
    </>
  );
};

export default Main;
