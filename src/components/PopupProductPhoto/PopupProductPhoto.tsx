import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { productPhotoArray } from '../../utils/constants';

import 'swiper/css';
import 'swiper/css/navigation';

interface PopupProductPhotoProps {
  isOpen: boolean
  closePopup: () => void
}

const PopupProductPhoto: React.FC<PopupProductPhotoProps> = ({
  isOpen,
  closePopup,
}) => {
  const overlayClickClose = (e: MouseEvent): void => {
    if (!(e.target as HTMLElement).classList.contains('swiper-full-photo__img') && !(e.target as HTMLElement).classList.contains('swiper-button-next') && !(e.target as HTMLElement).classList.contains('swiper-button-prev')) {
      closePopup();
      console.log(e.target);
    }
    console.log(e.target);
  };

  return <section className={`popup-product-photo ${isOpen ? 'popup-product-photo_opened' : ''}`} onMouseDown={overlayClickClose}>
    <div className='popup-product-photo__container'>
      <button onClick={closePopup} className='popup-product-photo__btn-close'></button>
      <Swiper
        navigation={true}
        slidesPerView={1}
        className='swiper-full-photo'
        modules={[Navigation]}
      >
        {productPhotoArray.map((photo, photoId) => {
          return <SwiperSlide key={photoId}>
            <img className='swiper-full-photo__img' src={photo} alt="фото товара" />
          </SwiperSlide>;
        })}
      </Swiper>
    </div>
  </section>;
};

export default PopupProductPhoto;
