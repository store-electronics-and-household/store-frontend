import React, { useState } from 'react';
import PopupTemplate from '../PopupTemplate/PopupTemplate';
import './WarningPopup.css';

const WarningPopup: React.FC = () => {
  const [isWarningPopupOpen, setWarningPopupOpen] = useState(true);

  // const openIWarningPopupOpen = () => {
  //   setWarningPopupOpen(true);
  // };

  const closeWarningPopupOpen = (): void => {
    setWarningPopupOpen(false);
  };

  return (
    <PopupTemplate
      isOpen={isWarningPopupOpen}
      OnClose={closeWarningPopupOpen}
      popupClass='popup'
      popupClassOverlay='popup_overlay-transperent'
    >
      <div className='warning-popup__container'>
        <p className='warning-popup__text'>
          Для добавления товара в корзину необходимо авторизоваться
        </p>
        <button
          className='warning-popup__cls-btn'
          onClick={closeWarningPopupOpen}
        >
          Войти
        </button>
      </div>
    </PopupTemplate>
  );
};

export default WarningPopup;
