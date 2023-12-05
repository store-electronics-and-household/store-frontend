/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Slider.css';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
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
