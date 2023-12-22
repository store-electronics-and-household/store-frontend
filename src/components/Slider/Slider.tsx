/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from 'react';
// import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
// import './Slider.css';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import { useSlideContext } from '../../context/SlideContext';
import type { MyTypeBanners, MediumCardProps } from '../../utils/types';
import { useNavigate } from 'react-router-dom';
import { getPromoResults } from '../../utils/api/search-api';

interface SliderProps {
  bannerImage: MyTypeBanners[];
  passSearchResults: (array: MediumCardProps[]) => void;
  handleSearch: (request: string) => void;
}

const Slider: React.FC<SliderProps> = ({
  handleSearch,
  bannerImage,
  passSearchResults,
}) => {
  const slideContext: any | undefined = useSlideContext();
  const { isLight, setLight } = slideContext;
  const navigate = useNavigate();

  const handleSlideChange = (swiper: any): void => {
    const activeSlideIndex = swiper.realIndex;
    const isLightForCurrentSlide = isLighChangetForSlide(activeSlideIndex);
    setLight(isLightForCurrentSlide);
  };

  const handleOnClick = (id: number, name: string): void => {
    getPromoResults(id)
      .then((res) => {
        // console.log(res.content);
        passSearchResults(res.content);
        handleSearch(name);
        navigate('/search-results');
      })
      .catch((error) => {
        console.log(`НЕ успех ${error}`);
      });
  };

  const isLighChangetForSlide = (index: number): boolean => {
    if (index === 0) {
      return true;
    } else if (index === 1) {
      return false;
    } else if (index === 2) {
      return false;
    } else if (index === 3) {
      return true;
    } else if (index === 4) {
      return true;
    } else if (index === 5) {
      return true;
    } else if (index === 6) {
      return false;
    } else if (index === 7) {
      return true;
    } else if (index === 8) {
      return false;
    } else {
      return false;
    }
  };

  React.useEffect(() => {
    handleSlideChange({ activeIndex: 0 });
  }, []);

  // const doubledBannerImage = [...bannerImage, ...bannerImage];

  // const [isLabeledStatement, setIsLast] = useState<boolean>(false)

  return (
    <>
      <Swiper
        navigation={{
          nextEl: '.swiper-button-next',
        }}
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 6000 }}
        slidesPerView={1}
        // slidesPerGroup={1} // УДАЛИТЬ?
        className='swiper-container'
        allowTouchMove={false}
        onSlideChange={handleSlideChange}
        loop={true}
        loopAdditionalSlides={bannerImage.length}
      >
        {bannerImage.map((banner, index) => (
          <SwiperSlide key={banner.id}>
            {/* <Link to='#' rel='noreferrer'> */}
            <img
              src={banner.imageLink}
              alt={`${banner.name}`}
              className='slider__action-img'
              onClick={() => {
                handleOnClick(banner.id, banner.name);
              }}
            />
            {/* </Link> */}
          </SwiperSlide>
        ))}
        <div
          className={`swiper-button-next ${
            !isLight
              ? 'swiper-button-next_black'
              : 'swiper-button-next_lightgrey'
          }`}
        ></div>
      </Swiper>
    </>
  );
};

export default Slider;
