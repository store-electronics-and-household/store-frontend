import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import cn from 'classnames';
import PaymentsPageButton from './PaymentsPageButton';
import { pickUpPoints } from '../../utils/constants';
// import closeIcon from '../../image/icons/btn-close-popup-pick-up.svg';

interface MeTypePickUpPoint {
  address: string;
  metro: string;
  deliverypice: string;
};

interface PopupChoosePickUpPointProps {
  isOpen: boolean;
  onClose: () => void;
  onChoosenPoint: (point: MeTypePickUpPoint) => void;
  // photoUrl?: string;
  // productName: string;
}

const PopupChoosePickUpPoint: React.FC<PopupChoosePickUpPointProps> = ({
  isOpen,
  onClose,
  onChoosenPoint,
  // productName,
  // photoUrl,
}) => {
  const PopupChoosePickUpPointClass = cn('payments-page__popup', {
    'payments-page__popup_opened': isOpen,
  });

  const [choosedPointIndex, setChoosedPointIndex] = useState<number>(-1);
  const [choosedPoint, setChoosedPoint] = useState<MeTypePickUpPoint>();

  const choosePickUpPoint = (item: MeTypePickUpPoint, index: number): void => {
    setChoosedPointIndex(index);
    setChoosedPoint(item);
  };

  const confirmPickUpPoint = (): void => {
    // console.log('подтвердили выбор пункта выдачи');
    // console.log(choosedPoint);
    if (choosedPoint !== undefined && choosedPoint !== null) {
      onClose();
      onChoosenPoint(choosedPoint);
    };
  };

  const handleClose = (): void => {
    console.log('закрываем попап');
    onClose();
  };

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const months = [
    'января', 'февраля', 'марта',
    'апреля', 'мая', 'июня',
    'июля', 'августа', 'сентября',
    'октября', 'ноября', 'декабря'
  ];

const formattedDate = `${tomorrow.getDate()} ${months[tomorrow.getMonth()]}`;

  return (
    <section className={PopupChoosePickUpPointClass}>
      <div className='payments-page__popup-container'>
        <div className='payments-page__pickuppoint-container'>
          <div className='payments-page__pickuppoint-list'>
            {pickUpPoints.map((item, index) => (
              <div
                key={item.address}
                // onClick={(index) => choosePickUpPoint}
                onClick={() => { choosePickUpPoint(item, index); }}
                className={`payments-page__pickuppoint ${choosedPointIndex === index ? 'payments-page__pickuppoint_choosed' : ''} `}
              >
                <div className='payments-page__pickuppoint-box'>
                  <h3 className='payments-page__pickuppoint-title'>CyberPlace</h3>
                  <p className='payments-page__pickuppoint-paragraph'>{item.address}</p>
                  <p className='payments-page__pickuppoint-paragraph'>{item.metro}</p>
                  <p className='payments-page__pickuppoint-paragraph'>стоимость - {item.deliverypice}</p>
                  <p className='payments-page__pickuppoint-paragraph'>дата доставки - завтра, {formattedDate}</p>
                </div>

              </div>
            ))}
          </div>
          <div className='payments-page__pickuppoint-button'>
            <PaymentsPageButton
              marginTop='0'
              title='Подтвердить'
              onClick={confirmPickUpPoint}
              width='298px'
              marginBottom='0'
            />
          </div>

        </div>
        {/* <p className='popup-add-to-cart__product-name'>что то будет</p>
        <Link to='/cart' className='popup-add-to-cart__button'>В корзину</Link> */}
        <button
            aria-label="Close"
            type="button"
            className='payments-page__close-button'
            onClick={handleClose}
          ></button>
      </div>

    </section>
  );
};

export default PopupChoosePickUpPoint;
