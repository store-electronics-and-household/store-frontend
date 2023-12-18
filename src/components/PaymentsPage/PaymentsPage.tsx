import React, { useEffect, useState } from 'react';
import PaymentsPageItem from './PaymentsPageItem';
import PaymentsPageButton from './PaymentsPageButton';
import { type MediumCardProps } from '../../utils/types';
import { formatSumm } from '../../utils/formatSumm';
import { useForm } from 'react-hook-form';
import 'react-phone-number-input/style.css';
import { Link } from 'react-router-dom';
import PhoneForm from './PaymentsPageInput';
import PaymentsPageCourier from './PaymentsPageCourier';

interface PaymentsPageProps {
  GoodsList: MediumCardProps[];
}

const PaymentsPage: React.FC<PaymentsPageProps> = ({ GoodsList }) => {
  // interface ClientDataProps {
  //   name: string;
  //   phone: string;
  //   address: string;
  // }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [clientData, setClientData] = React.useState({});

  const [isPhoneValid, setIsPhoneValid] = useState<boolean>(false);

  const [isPhoneValidated, setIsPhoneValidated] = useState<boolean>(false);

  const [isFirstPage, setIsFirstPage] = React.useState<boolean>(true);
  const [isСourierPage, setIsСourierPage] = React.useState<boolean>(false);
  // const [isDeliveryPage, setIsDeliveryPage] = React.useState<boolean>(true);
  // const [isFinalPage, setIsFinalPage] = React.useState<boolean>(true);

  const [deliveryPrice, setDeliveryPrice] = React.useState<number>();
  // const [selectedOption, setSelectedOption] = React.useState('');

  useEffect(() => {
    setDeliveryPrice(8500);
  }, []);

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
        item.quantity * (typeof item.percent === 'number' ? item.percent : 0)
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
            ? item.oldPrice - item.percent
            : item.oldPrice)
      );
    }, 0) - (deliveryPrice ?? 0)
  );

  const {
    register: registerForm1,
    // getValues: getValuesForm1,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formState: { errors: errorsForm1, isValid: isValidForm1 },
  } = useForm({
    // mode: 'all', // "onChange"
    mode: 'onChange',
  });

  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    register: registerForm3,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getValues: getValuesForm3,
    // handleSubmitForm1,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    control: controlForm3,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formState: { errors: errorsPhone, isValid: isValidPhone },
  } = useForm({
    mode: 'onChange',
  });

  const handleDeliveryType = (): void => {
    console.log('выбираем тип доставки');
    setIsFirstPage(!isFirstPage);
    setIsСourierPage(!isСourierPage);
  };

  // // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const handleDeliveryTypeChange = (
  //   e: React.ChangeEvent<HTMLInputElement>
  // ): void => {
  //   e.preventDefault();
  //   console.log('hello');
  // };

  // const form1Values = getValuesForm1();
  // const form2Values = getValuesForm2();
  // console.log('Form 1 Values:', form1Values);
  // console.log('Form 2 Values:', form2Values);
  // };
  // const handleOutsideFunction = (): void => {
  //   const form2Values = getValuesForm2();
  //   console.log(form2Values);
  // };

  const choosePickUpPoint = (): void => {
    setIsPhoneValidated(true);
    // console.log('выбирает пункт выдачи');
    console.log(isPhoneValid);
    if (isPhoneValid && isValidForm1) {
      setIsFirstPage(!isFirstPage);
    }
  };

  const phoneHandler = (clientPhone: string): void => {
    setClientData({ ...clientData, phone: clientPhone });
  };

  const validPhoneHandler = (isPhoneValid: boolean): void => {
    if (isPhoneValid !== undefined) {
      setIsPhoneValid(isPhoneValid);
    }
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
            <div className='payments-page__line'></div>
            <p className='payments-page__form-title payments-page__form-title_type_address'>
              Способ получения
            </p>
            <Link to={'/delivery'} className='payments-page__subtitle'>
              Способы и тарифы доставки
            </Link>
            <form className='payments-page__title-container'>
              <label className='payments-page__delivery-label'>
                <input
                  type='radio'
                  name='deliveryOption'
                  // checked
                  defaultChecked
                  className='payments-page__delivery-type_type_invisible'
                  onClick={handleDeliveryType}
                  // readOnly
                  // onChange={handleDeliveryTypeChange}
                />
                <span className='payments-page__delivery-type_type_visible'></span>
                Самовывоз
              </label>
              <label className='payments-page__delivery-label'>
                <input
                  type='radio'
                  name='deliveryOption'
                  className='payments-page__delivery-type_type_invisible'
                  onClick={handleDeliveryType}
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
            {isСourierPage && (
              <>
                <div className='payments-page__line payments-page__line_type_courier'></div>
                <PaymentsPageCourier />
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
                    imgUrl={item.modelsImages?.[0]?.imageLink}
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
    </>
  );
};

export default PaymentsPage;

/*
<form
              id='clientAddressForm'
              name='clientAddressForm'
              action=''
              className='payments-page__client-address'
            >
              {/* <div className='payments-page__address-container'>
                <div className='payments-page__address-input-container'>
                  <label className='payments-page__input-label payments-page__input-label_type_address'>
                    <p className='payments-page__input-title'>
                      Город, улица и дом <sup className=''>*</sup>
                    </p>
                    <input
                      {...registerForm2('address', {
                        required: {
                          value: true,
                          message: 'Поле адрес обязательно к заполнению',
                        },
                      })}
                      type='text'
                      placeholder='Пушкина, 33, Москва'
                      className='payments-page__client-data-input'
                      name='address'
                      required
                    />
                    {errorsForm2.address != null &&
                      typeof errorsForm2.address === 'object' &&
                      'message' in errorsForm2.address && (
                        <span className='payments-page__input-error'>
                          {(errorsForm2.address as { message: string }).message}
                        </span>
                      )}
                  </label>

                  <div className='payments-page__address-box'>
                    <label className='payments-page__input-label payments-page__input-label_type_address'>
                      <p className='payments-page__input-title'>Квартира</p>
                      <input
                        {...registerForm2('appartment')}
                        type='text'
                        placeholder='12'
                        className='payments-page__client-data-input'
                        name='appartment'
                      />
                    </label>
                    <label className='payments-page__input-label payments-page__input-label_type_address'>
                      <p className='payments-page__input-title'>Подъезд</p>
                      <input
                        {...registerForm2('gate')}
                        type='text'
                        placeholder='1'
                        className='payments-page__client-data-input'
                        name='gate'
                      />
                    </label>
                    <label className='payments-page__input-label payments-page__input-label_type_address'>
                      <p className='payments-page__input-title'>Этаж</p>
                      <input
                        {...registerForm2('floor')}
                        type='text'
                        placeholder='3'
                        className='payments-page__client-data-input'
                        name='floor'
                      />
                    </label>
                    <label className='payments-page__input-label payments-page__input-label_type_address'>
                      <p className='payments-page__input-title'>Этаж</p>
                      <input
                        {...registerForm2('ring')}
                        type='text'
                        placeholder='12'
                        className='payments-page__client-data-input'
                        name='ring'
                      />
                    </label>
                  </div>
                </div>
              </div>
              </form>
*/

/*
            <button
                  onClick={handleDeliveryTypeClick}
                  className='payments-page__delivery-type'
                >
                  Курьер
                </button>
                <button className='payments-page__delivery-type'>
                  Самовывоз
                </button>
*/
