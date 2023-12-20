import React, { type MouseEvent } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import cn from 'classnames';

interface PopupProductPhotoProps {
  images: string[];
  isOpen: boolean;
  closePopup: () => void;
}

const PopupProductPhoto: React.FC<PopupProductPhotoProps> = ({
  images,
  isOpen,
  closePopup,
}) => {
  const overlayClickClose = (event: MouseEvent): void => {
    event.preventDefault();
    if (
      !(event.target as HTMLElement).classList.contains(
        'swiper-full-photo__img'
      ) &&
      !(event.target as HTMLElement).classList.contains('swiper-button-next') &&
      !(event.target as HTMLElement).classList.contains('swiper-button-prev')
    ) {
      closePopup();
    }
  };

  const popupProductPhotoClass = cn('popup-product-photo', {
    'popup-product-photo_opened': isOpen,
  });

  return (
    <section className={popupProductPhotoClass} onMouseDown={overlayClickClose}>
      <div className='popup-product-photo__container'>
        <button
          onClick={closePopup}
          className='popup-product-photo__btn-close'
        ></button>
        <Swiper
          navigation={true}
          slidesPerView={1}
          className='swiper-full-photo'
          modules={[Navigation]}
        >
          {images.map((img, imgId) => {
            return (
              <SwiperSlide key={imgId}>
                <img
                  className='swiper-full-photo__img'
                  src={img}
                  alt='фото товара'
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default PopupProductPhoto;
