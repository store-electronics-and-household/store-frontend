/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Slider.css';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import LIGHTGRAYNANNER from '../../image/swiper-main_lightgrey-banner.png';
import BLACKNANNER from '../../image/swiper-main_black-banner.png';
import { useSlideContext } from '../../context/SlideContext';

const Slider: React.FC = () => {
  const slideContext: any | undefined = useSlideContext();
  const { isLight, setLight } = slideContext;

  const handleSlideChange = (): void => {
    const newIsLight = !isLight;
    setLight(newIsLight);
  };

  return (
    <>
      <Swiper
        navigation={{
          nextEl: '.swiper-button-next',
        }}
        modules={[Navigation]}
        slidesPerView={1}
        className='swiper-container'
        loop={true}
        allowTouchMove={false}
        onSlideChange={handleSlideChange}
      >
        <SwiperSlide>
          <Link to='#' rel='noreferrer'>
            <img
              src={LIGHTGRAYNANNER}
              alt='баннер'
              className='slider__action-img'
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to='#' rel='noreferrer'>
            <img
              src={BLACKNANNER}
              alt='баннер'
              className='slider__action-img'
            />
          </Link>
        </SwiperSlide>
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
