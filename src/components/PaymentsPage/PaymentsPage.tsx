// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useEffect } from 'react';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
// import { paymentPageData } from '../../utils/constants';
import PaymentsPageItem from './PaymentsPageItem';
import { type GoodsListProps } from '../../utils/types';
import { formatSumm } from '../../utils/formatSumm';

interface PaymentsPageProps {
  GoodsList: GoodsListProps[]
}

const PaymentsPage: React.FC<PaymentsPageProps> = ({ GoodsList }) => {
  interface ClientDataProps {
    name: string
    phone: string
    address: string
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [clientData, setClientData] = React.useState<ClientDataProps | null>(null);

  const [deliveryPrice, setDeliveryPrice] = React.useState<number>();

  useEffect(() => {
    setDeliveryPrice(8500);
  }, []);

  // const formatSumm = (summ: number): string => {
  //   const formatedSumm = summ.toLocaleString('ru-RU', {
  //     style: 'currency',
  //     currency: 'RUB',
  //     minimumFractionDigits: 0
  //   });
  //   return formatedSumm;
  // };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const fullQuantity: number = GoodsList.reduce(function (acc, item) {
    return acc + item.quantity;
  }, 0);

  const formatedDeliveryPrice: string = (deliveryPrice != null) ? formatSumm(deliveryPrice) : '';

  const fullPrice: string = formatSumm(GoodsList.reduce(function (acc, item) {
    return acc + item.quantity * item.salesPrice;
  }, 0));

  const summaryDiscount: string = formatSumm(GoodsList.reduce(function (acc, item) {
    return acc + item.quantity * item.discount;
  }, 0));

  const finalPrice: string = formatSumm(GoodsList.reduce(function (acc, item) {
    return acc + item.quantity * (item.salesPrice - item.discount);
  }, 0) - (deliveryPrice ?? 0));

  return (
    <>
      <Breadcrumb currentPlace='Оформление заказа' />
      <section className='payments-page'>
        <h2 className='payments-page__title'>Оформление заказа</h2>
        <div className='payments-page__container'>
          <div className='payments-page__input-containers'>
            <form className='payments-page__client-name' action=''>
              <p className='payments-page__form-title'>Ваши данные</p>
              <div className='payments-page__line'></div>
            </form>
            <form className='payments-page__client-address' action=''>
              <div className='payments-page__title-container'>
                <p className='payments-page__form-title'>Адрес доставки</p>
                <button className='payments-page__delivery-type'>Курьер</button>
                <button className='payments-page__delivery-type'>
                  Самовывоз
                </button>
              </div>
              <div className='payments-page__line'></div>
            </form>
          </div>
          <div className='payments-page__summary-conatiner'>
            <div className='payments-page__summary'>
              <p className='payments-page__form-title'>Ваш заказ</p>
              <div className='payments-page__line'></div>
              <div className='payments-page__cart-container'>
                {GoodsList.map((item) => (
                  <PaymentsPageItem
                    key={item.id}
                    quantity={item.quantity}
                    imgUrl={item.imgUrl}
                  />
                ))}
              </div>
              <div className='payments-page__summary-data'>
                <p className='payments-page__summary-row'>{fullQuantity} {fullQuantity % 2 === 0 ? 'товара' : 'товаров'} на сумму</p>
                <p className='payments-page__summary-row'>{fullPrice}</p>
              </div>
              <div className='payments-page__summary-data'>
                <p className='payments-page__summary-row'>Скидка</p>
                <p className='payments-page__summary-row payments-page__summary-row_discount'>
                  {summaryDiscount}
                </p>
              </div>
              <div className='payments-page__summary-data'>
                <p className='payments-page__summary-row'>Доставка</p>
                <p className='payments-page__summary-row '>{(deliveryPrice != null) ? formatedDeliveryPrice : 'Не выбрано'}</p>
              </div>
              <div className='payments-page__line'></div>
              <div className='payments-page__summary-data'>
                <p className='payments-page__summary-final'>Итого</p>
                <p className='payments-page__summary-final'>{finalPrice}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PaymentsPage;
