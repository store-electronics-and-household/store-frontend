import React, { useRef } from 'react';
import './WarningPopup.css';
import { useWarningPopupContext } from '../../context/WarningPopupContext';
import { useClickOutside } from '../../utils/useClickOutside';

interface WarningPopupProps {
  onOpenAuth: () => void;
}

const WarningPopup: React.FC<WarningPopupProps> = ({
  onOpenAuth,
}) => {
  const { handleCloseWarningPopup, isWarningPopupOpen, warningPopupText } = useWarningPopupContext();
  const warningPopupRef = useRef(null);
  useClickOutside(warningPopupRef, () => {
    handleCloseWarningPopup();
  });

  const handleOpenAuth = (): void => {
    onOpenAuth();
    handleCloseWarningPopup();
  };
  return (
    <div ref={warningPopupRef} className={`warningPopup ${isWarningPopupOpen ? '' : 'warningPopup_none'}`}>
      <div className='warning-popup__container'>
        <p className='warning-popup__text'>
          {warningPopupText}
        </p>
        <button className='warning-popup__cls-btn' onClick={handleOpenAuth}>
          Войти
        </button>
      </div>
    </div>
  );
};

export default WarningPopup;
