import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHookFormMask } from 'use-mask-input';

interface PhoneFormProps {
  isPhoneValidated: boolean;
  passIsPhoneValid: (isPhoneValid: boolean) => void;
  passPhone: (clientPhone: string) => void;
}

const PhoneForm: React.FC<PhoneFormProps> = ({ isPhoneValidated, passIsPhoneValid, passPhone }) => {
  const {
    register,
  } = useForm({ mode: 'onTouched' });
  const registerWithMask = useHookFormMask(register);

  // const [isPhoneValidated, setIsPhoneValidated] = useState<boolean>(false);
  const [isPhoneValid, setIsPhoneValid] = useState<boolean>(false);
  // const [clientPhone, setClientPhone] = useState<string>('');
  const [validationMessage, setValidationMessage] = useState<string>('Поле телефон не может быть пустым');

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = (): void => {
    // const formValues = getValues();
    // e.preventDefault();
    // console.log(formValues);
    // console.log(isValidPhone);
    // console.log(errorsPhone);
  };

  useEffect(() => {
    passIsPhoneValid(isPhoneValid);
  }, [isPhoneValid]);

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
    };
  };

  return (
    <form>
      <input
        {...registerWithMask('phone', '+7 (999) 999-99-99', {
          required: {
            value: true,
            message: 'Поле Email обязательно к заполнению',
          },
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Некорректный адрес электронной почты'
          }
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
      {isPhoneValidated && !isPhoneValid && (
          <span className='payments-page__input-error'>
            {validationMessage}
          </span>
        )}
      {/* <button type='button' onClick={onSubmit}>
        Submit
      </button> */}

    </form>
  );
};

export default PhoneForm;
