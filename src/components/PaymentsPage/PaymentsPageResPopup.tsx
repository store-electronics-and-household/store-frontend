import React from 'react';
import cn from 'classnames';
import { type ProductInfo } from '../../utils/types';
import PaymentsPageItem from './PaymentsPageItem';
import PaymentsPageButton from './PaymentsPageButton';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { getTomorrowDate, getDeliveryDate } from './DataFormatters';

interface PaymentsPageResPopupProps {
  isOpen: boolean;
  GoodsList: ProductInfo[];
  orderNum: string;
  fullQuantity: number;
  fullPrice: string;
  summaryDiscount: string;
  formatedDeliveryPrice: string;
  finalPrice: string;
  deliveryDate: string;
  deliveryType: string;
  onClose: () => void;
}

const PaymentsPageResPopup: React.FC<PaymentsPageResPopupProps> = ({
  isOpen,
  GoodsList,
  orderNum,
  fullQuantity,
  fullPrice,
  summaryDiscount,
  formatedDeliveryPrice,
  finalPrice,
  deliveryDate,
  deliveryType,
  onClose,
}) => {
  const PopupClass = cn('payments-page__popup', {
    'payments-page__popup_opened': isOpen,
  });

  const handleClose = (): void => {
    onClose();
  };

  const pickUpDate = getTomorrowDate();
  const deliveryDateNew = getDeliveryDate(deliveryDate);

  return (
    <section className={PopupClass}>
      <div className='payments-page__res-popup-conatiner'>
        <div className='payments-page__res-popup-info'>
          <div className='payments-page__res-popup-close-ctn'>
            <p className='payments-page__form-title payments-page__form-title_type_popup'>
              Ура все получилось!
            </p>
            <button
              aria-label='Close'
              type='button'
              className='payments-page__close-button payments-page__close-button_res'
              onClick={handleClose}
            ></button>
          </div>
          <div className='payments-page__res-popup-close-ctn'>
            <p className='payments-page__form-title payments-page__form-title_type_popup'>
              Номер заказа
            </p>
            <p className='payments-page__form-title payments-page__form-title_type_popup'>
              {orderNum}
            </p>
          </div>

          <div className='payments-page__line'></div>
          <div className='payments-page__cart-container'>
            {GoodsList.map((item) => (
              <PaymentsPageItem
                key={item.id}
                quantity={item.count}
                // imgUrl={item.imgUrl}
                imgUrl={item.images?.[0]?.imageLink}
              />
            ))}
          </div>
          <div className='payments-page__summary-data payments-page__summary-data_popup'>
            <p className='payments-page__summary-row'>
              {fullQuantity} {fullQuantity % 2 === 0 ? 'товара' : 'товаров'} на
              сумму
            </p>
            <p className='payments-page__summary-row'>{fullPrice}</p>
          </div>
          <div className='payments-page__summary-data payments-page__summary-data_popup'>
            <p className='payments-page__summary-row'>Скидка</p>
            <p className='payments-page__summary-row payments-page__summary-row_discount'>
              {summaryDiscount}
            </p>
          </div>
          <div className='payments-page__summary-data payments-page__summary-data_popup'>
            <p className='payments-page__summary-row'>{deliveryType}</p>
            <p className='payments-page__summary-row '>
              {formatedDeliveryPrice ?? 100}
            </p>
          </div>
          <div className='payments-page__summary-data'>
            <p className='payments-page__summary-row'>Заказ приедет</p>
            <p className='payments-page__summary-row'>
              {deliveryType === 'Доставка' ? deliveryDateNew : pickUpDate}
            </p>
          </div>
          <div className='payments-page__line'></div>
          <div className='payments-page__summary-data payments-page__summary-data_final'>
            <p className='payments-page__summary-final payments-page__summary-final_popup'>Сумма заказа</p>
            <p className='payments-page__summary-final payments-page__summary-final_popup'>{finalPrice}</p>
          </div>
          <div className='payments-page__line'></div>
          <div className='payments-page__btn-ctn'>
          <PaymentsPageButton
            marginTop='44px'
            title='Готово'
            onClick={handleClose}
            width='437px'
            marginBottom='0'
          />
          </div>

        </div>

      </div>

    </section>
  );
};

export default PaymentsPageResPopup;
