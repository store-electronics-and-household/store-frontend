/* eslint-disable @typescript-eslint/strict-boolean-expressions */
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
import { productPhotoArray } from '../../utils/constants';
// import required modules
import { FreeMode, Mousewheel, Navigation, Thumbs } from 'swiper/modules';

interface ThumbsSliderProps {
  onPopupFullPhoto: () => void
}

const ThumbsSlider: React.FC<ThumbsSliderProps> = ({ onPopupFullPhoto }) => {
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
        {productPhotoArray.map((photo, photoId) => {
          return <SwiperSlide key={photoId}>
            <img
              onClick={onPopupFullPhoto}
              className='swiper-second__img'
              src={photo}
              alt="фото товара"
            />
          </SwiperSlide>;
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
        {productPhotoArray.map((photo, photoId) => {
          return (
            <SwiperSlide key={photoId}>
              <img
                className='swiper-first__img'
                src={photo}
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
