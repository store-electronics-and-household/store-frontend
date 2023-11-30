import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Slider.css';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import LIGHTGRAYNANNER from '../../image/swiper-main_lightgrey-banner.png';
import BLACKNANNER from '../../image/swiper-main_black-banner.png';

const Slider: React.FC = () => {
  const [isLight, setisLight] = React.useState<boolean>(false);

  const handleSlideChange = (): void => {
    setisLight(!isLight);
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
