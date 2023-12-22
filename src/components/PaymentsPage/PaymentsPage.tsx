import React, { useEffect, useState } from 'react';
import PaymentsPageItem from './PaymentsPageItem';
import PaymentsPageButton from './PaymentsPageButton';
import { type MediumCardProps, type MeTypePickUpPoint } from '../../utils/types';
import { formatSumm } from '../../utils/formatSumm';
import { useForm } from 'react-hook-form';
import 'react-phone-number-input/style.css';
import { Link } from 'react-router-dom';
import PhoneForm from './PaymentsPageInput';
import PaymentsPageCourier from './PaymentsPageCourier';
import PopupChoosePickUpPoint from './PopupChoosePickUpPoint';
import PaymentsPageResPopup from './PaymentsPageResPopup';
import { getPickUpDate, adrressToString, priceToNumber, getDeliveryDate } from './DataFormatters';
import { productsForPay } from '../../utils/constants';
// import { productsForPay } from '../../utils/constants';

interface PaymentsPageProps {
  oldGoodsList: MediumCardProps[];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const PaymentsPage: React.FC<PaymentsPageProps> = ({ oldGoodsList }) => {
// eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [GoodsList, setGoodsList] = React.useState<MediumCardProps[]>(productsForPay);

  const [clientData, setClientData] = React.useState({
    phone: '',
    address: '',
    date: '',
    comment: ''
  });

  const [deliveryPoint, setDeliveryPoint] = React.useState<MeTypePickUpPoint>(
    {
      address: '',
      metro: '',
      deliverypice: ''
    }
  );

  const [isPhoneValid, setIsPhoneValid] = useState<boolean>(false);
  const [isCourierDataValid, setIsCourierDataValid] = useState<boolean>(false);
  const [isPopupOpened, setIsPopupOpened] = useState<boolean>(false);
  const [isResPopupOpened, setIsResPopupOpened] = useState<boolean>(true);
  const [deliveryType, setDeliveryType] = useState<string>('Самовывоз');
  const [isPhoneValidated, setIsPhoneValidated] = useState<boolean>(false);
  const [isCourierDataValidated, setCourierDataValidated] = useState<boolean>(false);
  const [isFirstPage, setIsFirstPage] = React.useState<boolean>(true);
  const [isSecondPage, setIsSecondPage] = React.useState<boolean>(false);
  const [isСourierPage, setIsСourierPage] = React.useState<boolean>(false);
  const [isReadeyToSend, setIsReadeyToSend] = React.useState<boolean>(false);

  // const [isDeliveryPage, setIsDeliveryPage] = React.useState<boolean>(true);
  // const [isFinalPage, setIsFinalPage] = React.useState<boolean>(true);

  const [deliveryPrice, setDeliveryPrice] = React.useState<number>();
  // const [selectedOption, setSelectedOption] = React.useState('');

  useEffect(() => {
    if (clientData.address !== '' && isReadeyToSend) {
      console.log('ЭТО УСПЕХ! СЕЙЧЧАС МЫ ОТПРАВИМ НА СЕРВЕР ДАННЫЕ');
      const form1Values = getValuesForm1();
      console.log(deliveryType);
      console.log(`имя: ${form1Values.name}`);
      console.log(`телефон: ${clientData.phone}`);
      // console.log(clientData.date);
      const dateToApiPrev = clientData.date.toString();
      const dateToApi = getDeliveryDate(dateToApiPrev);
      console.log(dateToApi);
      const { phone, date, ...newObject } = clientData;
      // console.log(newObject);
      const addressToApi = adrressToString(newObject);
      console.log(addressToApi);
      console.log(deliveryPrice);
      const priceToApi = priceToNumber(finalPrice);
      console.log(priceToApi);
    }
  }, [clientData, isReadeyToSend]);

  const fullQuantity: number = GoodsList.reduce(function (acc, item) {
    return acc + item.quantity;
  }, 0);

  const formatedDeliveryPrice: string =
    deliveryPrice != null ? formatSumm(deliveryPrice) : '';

  const fullPrice: string = formatSumm(
    GoodsList.reduce(function (acc, item) {
      return acc + item.quantity * item.oldPrice;
    }, 0)
  );

  const summaryDiscount: string = formatSumm(
    GoodsList.reduce(function (acc, item) {
      // return acc + item.quantity * (item.percent ? item.percent : 1);
      return (
        acc +
        item.quantity * (typeof item.percent === 'number' ? item.oldPrice * (item.percent / 100) : 0)
      );
    }, 0)
  );

  const finalPrice: string = formatSumm(
    GoodsList.reduce(function (acc, item) {
      // return acc + item.quantity * (item.percent ? item.price - item.percent : 1);
      return (
        acc +
        item.quantity *
          (typeof item.percent === 'number'
            ? item.oldPrice * (100 - item.percent) / 100
            : item.oldPrice)
      );
    }, 0) + (deliveryPrice ?? 0)
  );

  const {
    register: registerForm1,
    getValues: getValuesForm1,
    formState: { errors: errorsForm1, isValid: isValidForm1 },
  } = useForm({
    // mode: 'all', // "onChange"
    mode: 'onChange',
  });

  const handleDeliveryType = (input: any): void => {
    // const form1Values = getValuesForm1();
    // console.log(form1Values);
    if (input.id === '1') {
      setIsFirstPage(true);
      setIsСourierPage(false);
      setIsSecondPage(false);
      setDeliveryType('Самовывоз');
      setDeliveryPrice(0);
    } else if (input.id === '2') {
      setIsFirstPage(false);
      setIsSecondPage(false);
      setIsСourierPage(true);
      setDeliveryType('Доставка');
      setDeliveryPrice(300);
    }
  };

  const hadleChoosePickUpPoint = (): void => {
    setIsFirstPage(true);
    setIsСourierPage(false);
    setIsSecondPage(false);
    setIsPopupOpened(true);
  };

  const choosePickUpPoint = (): void => {
    setIsPopupOpened(true);
  };

  const handlePayout = (): void => {
    if (!isPhoneValidated) {
      setIsPhoneValidated(true);
    }
    if (isPhoneValid && isValidForm1) {
      const currentClientName = getValuesForm1();
      // setClientName(currentClientName.name);
      console.log('ЭТО УСПЕХ! СЕЙЧЧАС МЫ ОТПРАВИМ НА СЕРВЕР ДАННЫЕ');
      console.log(deliveryType);
      console.log(currentClientName.name);
      console.log(clientData.phone);
      const dateToApi = getPickUpDate();
      console.log(dateToApi);
      const addressToApi = adrressToString(deliveryPoint);
      console.log(addressToApi);
      console.log(deliveryPrice);
      const priceToApi = priceToNumber(finalPrice);
      console.log(priceToApi);
    }
  };

  // {
  //   "deliveryType": "string",OK
  //   "name": "string", OK
  //   "phone": "string", OK
  //   "deliveryAddress": "string", OK
  //   "deliveryDate": "2023-12-21", OK
  //   "deliveryPrice": 0, OK
  //   "finalPrice": 0
  // }

  const phoneHandler = (clientPhone: string): void => {
    setClientData({ ...clientData, phone: clientPhone });
  };

  const validPhoneHandler = (isPhoneValid: boolean): void => {
    if (isPhoneValid !== undefined) {
      setIsPhoneValid(isPhoneValid);
    }
  };

  const validCourierDataHandler = (isCourierDataValid: boolean): void => {
    if (isCourierDataValid !== undefined) {
      setIsCourierDataValid(isCourierDataValid);
    };
  };

  const handleClosePopup = (): void => {
    setDeliveryPrice(0);
    setIsPopupOpened(false);
  };

  const handleCloseResPopup = (): void => {
    setIsResPopupOpened(false);
  };

  const courierDataHandler = (clientAddress?: string, clientDate?: string, clientPhone?: string, clientComment?: string): void => {
    if (!isPhoneValidated) {
      setIsPhoneValidated(true);
      // console.log('debug');
    }
    if (!isCourierDataValidated) {
      setCourierDataValidated(true);
    }
    if (clientAddress !== undefined && clientDate !== undefined && clientPhone !== undefined && clientComment !== undefined) {
      setClientData({ ...clientData, address: clientAddress, date: clientDate, comment: clientComment });
    }
    if (isCourierDataValid && isPhoneValid && isValidForm1) {
      setIsReadeyToSend(true);
    }
  };

  const handleChoosenPoint = (point: MeTypePickUpPoint): void => {
    setIsFirstPage(false);
    setIsSecondPage(true);
    setDeliveryPoint(point);
  };

  return (
    <>
      <section className='payments-page'>
        <h2 className='payments-page__title'>Оформление</h2>
        <div className='payments-page__container'>
          <div className='payments-page__input-containers'>
            <form
              id='clientDataForm'
              name='clientDataForm'
              className='payments-page__client-name'
              action=''
            >
              <p className='payments-page__form-title'>Получатель</p>
              <div className='payments-page__input-container'>
                <label className='payments-page__input-label'>
                  <p className='payments-page__input-title'>
                    Имя <sup className=''>*</sup>
                  </p>
                  <input
                    {...registerForm1('name', {
                      required: {
                        value: true,
                        message: 'Поле имя обязательно к заполнению',
                      },
                    })}
                    type='text'
                    className='payments-page__client-data-input'
                    name='name'
                    required
                    // onChange={handleOutsideFunction}
                  />
                  {errorsForm1.name === undefined
                    ? isPhoneValidated &&
                      !isValidForm1 &&
                      errorsForm1?.name !== null && (
                        <span className='payments-page__input-error'>
                          Поле имя обязательно к заполнению?
                        </span>
                    )
                    : errorsForm1.name != null &&
                      typeof errorsForm1.name === 'object' &&
                      'message' in errorsForm1.name && (
                        <span className='payments-page__input-error'>
                          {(errorsForm1.name as { message: string }).message}
                        </span>
                    )}
                </label>
              </div>
            </form>
            <label className='payments-page__input-label'>
              <p className='payments-page__input-title'>
                Номер телефона <sup className=''>*</sup>
              </p>
              <PhoneForm
                isPhoneValidated={isPhoneValidated}
                passIsPhoneValid={validPhoneHandler}
                passPhone={phoneHandler}
              />
            </label>
            <div className='payments-page__line payments-page__line_type_courier'></div>
            <p className='payments-page__form-title payments-page__form-title_type_address'>
              Способ получения
            </p>
            <Link to={'/delivery'} className='payments-page__subtitle' target='_blank'>
              Способы и тарифы доставки
            </Link>
            <form className='payments-page__title-container'>
              <label className='payments-page__delivery-label'>
                <input
                  type='radio'
                  name='deliveryOption'
                  id='1'
                  // checked
                  defaultChecked
                  className='payments-page__delivery-type_type_invisible'
                  onClick={(event) => { handleDeliveryType(event.target); }}
                  // readOnly
                  // onChange={handleDeliveryTypeChange}
                />
                <span className='payments-page__delivery-type_type_visible'></span>
                Самовывоз
              </label>
              <label className='payments-page__delivery-label'>
                <input
                  id='2'
                  type='radio'
                  name='deliveryOption'
                  className='payments-page__delivery-type_type_invisible'
                  onClick={(event) => { handleDeliveryType(event.target); }}
                />
                <span className='payments-page__delivery-type_type_visible'></span>
                Курьер
              </label>
            </form>
            {isFirstPage && (
              <>
                <PaymentsPageButton
                  marginTop='44px'
                  title='Выбрать пункт самовывоза'
                  onClick={choosePickUpPoint}
                  width='302px'
                  marginBottom='40px'
                />
                {/* <PhoneNumberInput/> */}
              </>
            )}
            {isSecondPage && (
              <>
                <div className='payments-page__line payments-page__line_type_courier'></div>
                <div className='payments-page__delivery-point'>
                  <div className='payments-page__edit-delivery'>
                  <button
                    aria-label="edit point"
                    type="button"
                    className='payments-page__edit-delivery-button'
                    onClick = {() => { hadleChoosePickUpPoint(); }}
                  ></button>
                  </div>
                  <div className='payments-page__delivery-data'>
                    <h3 className='payments-page__pickuppoint-title payments-page__pickuppoint-title_payout'>CyberPlace</h3>
                    <p className='payments-page__pickuppoint-paragraph'>{deliveryPoint.address}</p>
                    <p className='payments-page__pickuppoint-paragraph payments-page__pickuppoint-paragraph_payout'>{deliveryPoint.metro}</p>
                  </div>
                </div>
                <PaymentsPageButton
                    marginTop='32px'
                    marginBottom='32px'
                    title='Перейти к оплате'
                    onClick = {() => { handlePayout(); }}
                    width='222px'
                  />
              </>
            )}

            {isСourierPage && (
              <>
                <div className='payments-page__line payments-page__line_type_courier'></div>
                <PaymentsPageCourier
                  isCourierDataValidated={isCourierDataValidated}
                  passIsAddressValid={validCourierDataHandler}
                  passDeliveryData={courierDataHandler}
                  clientPhone={clientData.phone}
                />
              </>
            )}
          </div>

          <div className='payments-page__summary-conatiner'>
            <div className='payments-page__summary'>
              <p className='payments-page__form-title payments-page__form-title_type_summary'>
                Ваш заказ
              </p>
              <div className='payments-page__line'></div>
              <div className='payments-page__cart-container'>
                {GoodsList.map((item) => (
                  <PaymentsPageItem
                    key={item.id}
                    quantity={item.quantity}
                    // imgUrl={item.imgUrl}
                    imgUrl={item.images?.[0]?.imageLink}
                  />
                ))}
              </div>
              <div className='payments-page__summary-data'>
                <p className='payments-page__summary-row'>
                  {fullQuantity} {fullQuantity % 2 === 0 ? 'товара' : 'товаров'}{' '}
                  на сумму
                </p>
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
                <p className='payments-page__summary-row '>
                  {deliveryPrice != null ? formatedDeliveryPrice : 'Не выбрано'}
                </p>
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
      <PopupChoosePickUpPoint
        isOpen={isPopupOpened}
        onClose={handleClosePopup}
        onChoosenPoint={handleChoosenPoint}
      />
      <PaymentsPageResPopup
        isOpen={isResPopupOpened}
        orderNum={'100500'}
        GoodsList={GoodsList}
        fullQuantity={fullQuantity}
        fullPrice={fullPrice}
        summaryDiscount={summaryDiscount}
        // formatedDeliveryPrice={formatedDeliveryPrice}
        formatedDeliveryPrice={'133 р'} // ПОПРАВИТЬ ОБРАТНО
        finalPrice={finalPrice}
        deliveryDate={(clientData.date.toString())}
        // deliveryPrice={deliveryPrice}
        deliveryType={deliveryType}
        // deliveryType={'Доставка'}
        onClose={handleCloseResPopup}
        // pickUpDate={getPickUpDate()}
      />

    </>
  );
};

export default PaymentsPage;
