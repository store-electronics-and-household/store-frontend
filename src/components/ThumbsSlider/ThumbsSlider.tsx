/* eslint-disable @typescript-eslint/strict-boolean-expressions */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { type ReactElement, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { type Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './ThumbsSlider.css';
// import required modules
import { FreeMode, Mousewheel, Navigation, Thumbs } from 'swiper/modules';

interface ThumbsSliderProps {
  images: string[];
  onPopupFullPhoto: () => void;
}

const ThumbsSlider: React.FC<ThumbsSliderProps> = ({ images, onPopupFullPhoto }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <>
      <Swiper
        spaceBetween={10}
        navigation={true}
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className='swiper-second'
      >
        {images.map((img, imgId) => {
          return (
            <SwiperSlide key={imgId}>
              <img
                onClick={onPopupFullPhoto}
                className='swiper-second__img'
                src={img}
                alt='фото товара'
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={8}
        slidesPerView={5}
        freeMode={true}
        mousewheel={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Mousewheel, Navigation, Thumbs]}
        className='swiper-first'
        direction='vertical'
      >
        {images.map((img, imgId) => {
          return (
            <SwiperSlide key={imgId}>
              <img
                className='swiper-first__img'
                src={img}
                alt='фото товара'
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default ThumbsSlider;
