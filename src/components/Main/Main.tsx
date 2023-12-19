import React from 'react';
import Slider from '../Slider/Slider';
import Discount from '../Discount/Discount';
import CategoriesMain from '../CategoriesMain/CategoriesMain';
import { getBanners } from '../../utils/api/user-api';
import { type CategoriesTileProps, type MyTypeBanners, type MediumCardProps } from '../../utils/types';
import { getMainCategories } from '../../utils/api/catalog+categories.api';

interface MainProps {
  passSearchResults: (array: MediumCardProps[]) => void;
  handleSearch: (request: string) => void;
}

const Main: React.FC<MainProps> = ({ passSearchResults, handleSearch }) => {
  const [mainPageBanners, setMainPageBanners] = React.useState<MyTypeBanners[]>([]);
  const [mainPageDicountBanners, setMainPageDicountBanners] = React.useState<MyTypeBanners[]>([]);
  const [categoriesMain, setCategoriesMain] = React.useState<CategoriesTileProps[]>([]);

  React.useEffect(() => {
    Promise.all([getBanners(), getMainCategories()])
      .then(([res, categoriesMain]) => {
        const sliderBanners = res.slice(0, 5);
        const otherBanners = res.slice(5, 9);
        // console.log(res)
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
        <CategoriesMain categoriesMain={categoriesMain}/>
      </section>
    </>
  );
};

export default Main;
