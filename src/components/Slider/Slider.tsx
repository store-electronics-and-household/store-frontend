/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Slider.css';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import { useSlideContext } from '../../context/SlideContext';

interface SliderProps {
  bannerImage: Array<{
    id: number;
    name: string;
    imageLink: string;
  }>;
}

const Slider: React.FC<SliderProps> = ({ bannerImage }) => {
  const slideContext: any | undefined = useSlideContext();
  const { isLight, setLight } = slideContext;

  const handleSlideChange = (swiper: any): void => {
    const activeSlideIndex = swiper.activeIndex;
    const isLightForCurrentSlide = isLighChangetForSlide(activeSlideIndex);
    setLight(isLightForCurrentSlide);
    console.log(isLight);
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

  return (
    <>
      <Swiper
        navigation={{
          nextEl: '.swiper-button-next',
        }}
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 6000 }}
        slidesPerView={1}
        className='swiper-container'
        allowTouchMove={false}
        onSlideChange={handleSlideChange}
      >
        {bannerImage.map((banner, index) => (
          <SwiperSlide key={banner.id}>
            <Link to='#' rel='noreferrer'>
              <img
                src={banner.imageLink}
                alt={`${banner.name}`}
                className='slider__action-img'
              />
            </Link>
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
