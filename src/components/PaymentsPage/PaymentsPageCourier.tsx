// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useEffect, useState, useRef } from 'react';
import { useForm } from 'react-hook-form';

interface PaymentsPageCourierProps {
  isAddressValidated?: boolean;
  passIsAddressValid?: (isPhoneValid: boolean) => void;
  passDeliveryData?: (address: string, date: string) => void;
}

const PaymentsPageCourier: React.FC<PaymentsPageCourierProps> = ({
  isAddressValidated,
  passIsAddressValid,
  passDeliveryData,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isAddressValid, setIsAddressValid] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [validationMessage, setValidationMessage] = useState<string>(
    'Поле адрес не может быть пустым'
  );

  // const containerRef = useRef<HTMLFormElement>(null);
  // const [isMouseDown, setIsMouseDown] = useState(false);
  // const [scrollLeft, setScrollLeft] = useState(0);
  // const [startX, setStartX] = useState(0);

  // const handleMouseDown = (e: any): void => {
  //   const container = containerRef.current;
  //   if (!container) {
  //     // return;
  //   } else {
  //     setIsMouseDown(true);
  //     setStartX(e.pageX - container.offsetLeft);
  //     setScrollLeft(container.scrollLeft);
  //   }
  // };

  // const handleMouseMove = (e: React.MouseEvent<HTMLFormElement>): void => {
  //   if (!isMouseDown || !containerRef.current) return;
  //   const container = containerRef.current;
  //   const x = e.pageX - container.offsetLeft;
  //   const walk = (x - startX) * 2; // You can adjust the sensitivity here
  //   container.scrollLeft = scrollLeft - walk;
  // };

  // const handleMouseUp = (): void => {
  //   setIsMouseDown(false);
  // };

  const containerRef = useRef<HTMLFormElement | null>(null);
  const isMouseDownRef = useRef(false);
  const scrollLeftRef = useRef(0);
  const startXRef = useRef(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLFormElement>): void => {
    const container = containerRef.current;
    if (container === null) return;

    // Проверка, что containerRef.current не является null
    // if (container === null) return;
    isMouseDownRef.current = true;
    startXRef.current = e.pageX - container.offsetLeft;
    scrollLeftRef.current = container.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLFormElement>): void => {
    const container = containerRef.current;
    if (container === null) return;

    const x = e.pageX - container.offsetLeft;
    const walk = (x - startXRef.current) * 2; // You can adjust the sensitivity here
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
    formState: { errors: errorsForm2, isValid: isValidForm2 },
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

    // Получение дня недели на русском
    const dayOfWeek = weekdaysRussian[nextDate.getDay()];

    // Форматирование даты в виде "число.месяц"
    const formattedDate = `${nextDate.getDate()}.${nextDate.getMonth() + 1}`;

    // Добавление объекта в массив
    datesArray.push({
      date: formattedDate,
      dayOfWeek,
    });
  }

  const handleChooseDate = (item: any): void => {
    console.log(item.date);
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
      <form className='payments-page__date-container'
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}>

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
      {
        <span className='payments-page__input-error'>
          Выберите дату доставки

        </span>
      }
      <div className='payments-page__line payments-page__line_type_courier-scroll'></div>
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
