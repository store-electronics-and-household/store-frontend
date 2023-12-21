// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useEffect, useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import PaymentsPageButton from './PaymentsPageButton';

interface PaymentsPageCourierProps {
  isCourierDataValidated: boolean;
  passIsAddressValid: (isAddressValid: boolean) => void;
  passDeliveryData: (clientAddress?: string, clientDate?: string, clientPhone?: string, clientComment?: string) => void;
  clientPhone: string;
}

const PaymentsPageCourier: React.FC<PaymentsPageCourierProps> = ({
  isCourierDataValidated,
  passIsAddressValid,
  passDeliveryData,
  clientPhone
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isAddressValid, setIsAddressValid] = useState<boolean>(false);

  const [date, setDate] = useState<string>('');
  const containerRef = useRef<HTMLFormElement | null>(null);
  const isMouseDownRef = useRef(false);
  const scrollLeftRef = useRef(0);
  const startXRef = useRef(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLFormElement>): void => {
    const container = containerRef.current;
    if (container === null) return;
    isMouseDownRef.current = true;
    startXRef.current = e.pageX - container.offsetLeft;
    scrollLeftRef.current = container.scrollLeft;
  };

  // const handleMouseMove = (e: React.MouseEvent<HTMLFormElement>): void => {
  //   const container = containerRef.current;
  //   if (container === null) return;
  //   const x = e.pageX - container.offsetLeft;
  //   const walk = (x - startXRef.current) * 2; // You can adjust the sensitivity here
  //   container.scrollLeft = scrollLeftRef.current - walk;
  // };

  const handleMouseMove = (e: React.MouseEvent<HTMLFormElement>): void => {
    if (!isMouseDownRef.current) return; // Добавленная проверка
    const container = containerRef.current;
    if (container === null) return;
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startXRef.current) * 2; // Вы можете настроить чувствительность здесь
    container.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUp = (): void => {
    isMouseDownRef.current = false;
  };

  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    register: registerForm2,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getValues: getValuesForm2,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formState: { isValid: isValidForm2 },
  } = useForm({
    // mode: 'all', // "onChange"
    mode: 'onChange',
  });

  useEffect(() => {
    if (date !== '' && isValidForm2) {
      setIsAddressValid(true);
    } else {
      setIsAddressValid(false);
    }
  }, [date, isValidForm2]);

  useEffect(() => {
    passIsAddressValid(isAddressValid);
  }, [isAddressValid]);

  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    register: registerForm3,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getValues: getValuesForm3,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars

  } = useForm({
    // mode: 'all', // "onChange"
    mode: 'onChange',
  });

  const today = new Date();
  const datesArray = [];
  const weekdaysRussian = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
  ];

  for (let i = 0; i < 7; i++) {
    const nextDate = new Date(today);
    nextDate.setDate(today.getDate() + i);
    const dayOfWeek = weekdaysRussian[nextDate.getDay()];
    const formattedDate = `${nextDate.getDate()}.${nextDate.getMonth() + 1}`;
    datesArray.push({
      date: formattedDate,
      dayOfWeek: dayOfWeek,
    });
  }

  const handleChooseDate = (item: any): void => {
    setDate(item.date);
    // console.log(item.date);
  };

  // const convertObjectToString = (obj: any): string => {
  //   const nonEmptyFields = Object.entries(obj)
  //     .filter(([key, value]) => value !== '')
  //     .map(([key, value]) => `${key}:${value}`);
  //   return nonEmptyFields.join(' ');
  // };

  const convertObjectToString = (obj: Record<string, string>): string => {
    const nonEmptyFields = Object.entries(obj)
      .filter(([key, value]) => value !== '')
      .map(([key, value]) => `${key}:${value}`);
    return nonEmptyFields.join(' ');
  };

  const handlePayout = (): void => {
    const address = getValuesForm2();
    const addressForPass = convertObjectToString(address);
    const clientComment = getValuesForm3();
    // console.log(clientComment);
    // const addressIsValid = (date !== '' && isValidForm2);

    // console.log(date);
    // console.log(addressForPass);
    // console.log(clientPhone);
    // passDeliveryData(addressForPass, date, clientPhone)
    // passIsAddressValid(addressIsValid);
    if (addressForPass !== undefined && date !== undefined && clientPhone !== undefined && clientComment !== undefined) {
    //   if (addressForPass !== undefined && date !== undefined && clientComment !== undefined) {
      passDeliveryData(addressForPass, date, clientPhone, clientComment.comment);
    }
    // clientAddress: string, clientDate: string, clientPhone: string
    // console.log('payment button is pressed');
  };

  // useEffect(() => {
  //   passIsAddressValid(isAddressValid);
  // }, [isAddressValid]);

  return (
    <>
      <form
        id='clientAddressForm'
        name='clientAddressForm'
        action=''
        className='payments-page__client-address'
      >
        <div className='payments-page__address-container'>
          <h3 className='payments-page__address-title'>Адрес доставки</h3>
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

              { isCourierDataValidated && !isValidForm2 && (
                  <span className='payments-page__input-error'>
                    Поле адрес обязательно к заполнению
                  </span>
                )}
            </label>
            <div className='payments-page__address-box'>
              <label className='payments-page__input-label payments-page__input-label_type_address'>
                <p className='payments-page__input-title'>Подъезд</p>
                <input
                  {...registerForm2('gate')}
                  type='text'
                  className='payments-page__client-data-input'
                  name='gate'
                />
              </label>
              <label className='payments-page__input-label payments-page__input-label_type_address'>
                <p className='payments-page__input-title'>Этаж</p>
                <input
                  {...registerForm2('floor')}
                  type='text'
                  className='payments-page__client-data-input'
                  name='floor'
                />
              </label>
              <label className='payments-page__input-label payments-page__input-label_type_address'>
                <p className='payments-page__input-title'>Квартира</p>
                <input
                  {...registerForm2('appartment')}
                  type='text'
                  className='payments-page__client-data-input'
                  name='appartment'
                />
              </label>
              <label className='payments-page__input-label payments-page__input-label_type_address'>
                <p className='payments-page__input-title'>Домофон</p>
                <input
                  {...registerForm2('ring')}
                  type='text'
                  className='payments-page__client-data-input'
                  name='ring'
                />
              </label>
            </div>
          </div>
        </div>
      </form>
      <div className='payments-page__line payments-page__line_type_courier'></div>
      <h3 className='payments-page__address-title'>Дата доставки</h3>
      <form
        className='payments-page__date-container'
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {datesArray.map((item) => (
          <label
            className='payments-page__date-label'
            key={item.date}
            onClick={() => {
              handleChooseDate(item);
            }}
          >
            <input
              key={item.date}
              type='radio'
              name='deliveryDate'
              className='payments-page__date_type_invisible'
              // onClick={() => handleChooseDate(item)}
            />
            <span className='payments-page__date_type_visible'>
              <div className='payments-page__delivery-date-container'>
                <p className='payments-page__date_type_visible-text'>
                  {item.date}
                </p>
                <p className='payments-page__date_type_visible-text'>
                  {item.dayOfWeek}
                </p>
              </div>
            </span>
          </label>
        ))}
      </form>
      {isCourierDataValidated && date === '' && (<span className='payments-page__input-error'>
          Выберите дату доставки
      </span>)}
      <div className='payments-page__line payments-page__line_type_courier-scroll'></div>
      <form
        id='clientCommentForm'
        name='clientCommentForm'
        action=''
        className='payments-page__client-address'
      >
        <div className='payments-page__address-container'>
          <h3 className='payments-page__address-title'>Комментарий</h3>
          <div className='payments-page__address-input-container'>
            <label className='payments-page__input-label payments-page__input-label_type_comment'>
              <textarea
                {...registerForm3('comment', {
                })}
                // type='text'
                className='payments-page__client-data-input payments-page__client-data-input_type_comment'
              />
              {/* <textarea
                value={yourTextValue}
                onChange={(e) => setYourTextValue(e.target.value)}
                style={{ whiteSpace: 'pre-line' }}
              /> */}
            </label>
          </div>
        </div>
      </form>
      <PaymentsPageButton
        marginTop='0'
        title='Перейти к оплате'
        onClick={handlePayout}
        width='312px'
        marginBottom='16px'
      />
      <div className='payments-page__link-container'>
      <Link to={'/delivery'} className='payments-page__subtitle' target='_blank'>
        Способы и тарифы доставки
      </Link>
      </div>
    </>
  );
};

export default PaymentsPageCourier;

/*
  const validPhone = (num: string): void => {
    // console.log(num);
    // setIsPhoneValidated(true);
    if (num.charAt(num.length - 1) === '_') {
      // console.log('введите корректный номер телефона');
      if (isPhoneValid) {
        setIsPhoneValid(false);
      }
      setValidationMessage('Введите корректный номер телефона');
    } else if (num.length > 1 && num.charAt(num.length - 1) !== '_') {
      // setClientPhone(num);
      setIsPhoneValid(true);
      console.log(`сохранили в стейт номер телефона ${num}`);
      passPhone(num);
    }
  };

   <form>
      <input
        {...registerWithMask('phone', '+7 (999) 999-99-99', {
          required: {
            value: true,
            message: 'Поле телефон обязательно к заполнению',
          },
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Некорректный номер телефона',
          },
        })}
        type='text'
        name='phone'
        placeholder='+7 (_ _ _) _ _ _-_ _-_ _'
        required
        // className='payments-page__phone-input'
        className='payments-page__client-data-input'
        // onChange={onSubmit}
        onChange={(e) => {
          // const { value } = e.target;
          validPhone(e.target.value);
          // console.log(e.target.value);
        }}
      />
      {isAddressValidated && !isValid && (
        <span className='payments-page__input-error'>{validationMessage}</span>
      )}
    </form>
*/
