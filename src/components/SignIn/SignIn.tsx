import React, { useState } from 'react';
import PopupTemplate from '../PopupTemplate/PopupTemplate';
import { useFormWithValidation } from '../../hooks/validation';

const SignIn: React.FC = () => {
  const [isSignInPopupOpen, setSignInPopupOpen] = useState<boolean>(true);
  // const [isFallingAuth, setFallingAuth] = useState<boolean>(false); - если авторизация провалена,будем использовать,чтобы отобразить ссылку на форму восстоновления

  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  const toggleSignInPopup = (): void => {
    setSignInPopupOpen(!isSignInPopupOpen);
  };

  const handleResetForm = (): void => {
    resetForm();
  };

  const handleSignIn = (event: React.FormEvent): void => {
    event.preventDefault();
    if (isValid) {
      handleResetForm();
      // тут будет отправка данных на сервак,если данные валидны
      toggleSignInPopup();
    }
  };

  return (
    <PopupTemplate
      isOpen={isSignInPopupOpen}
      OnClose={toggleSignInPopup}
      popupClass='popup'
      popupClassOverlay='popup_overlay'
    >
      <div className='signin__container'>
        <button className='signin__button_cls' onClick={toggleSignInPopup} />
        <form className='signin__form' onSubmit={handleSignIn} noValidate>
          <div className='signin__title-container'>
            <div className='signin__title'>Введите логин и пароль</div>
            <p className='signin__subtitle'>
              Авторизируйтесь, чтобы совершить покупку или наполнить корзину
            </p>
          </div>
          <div className='signin__inputs'>
            <input
              className='signin__input'
              placeholder='Логин'
              type='text'
              name='loginAuth'
              value={values.loginAuth}
              onChange={handleChange}
              minLength={6}
              required
            />
            <span className='signin__error-text'>{errors.loginAuth}</span>
            <input
              className='signin__input'
              placeholder='Пароль'
              type='password'
              minLength={6}
              maxLength={10}
              name='passwordAuth'
              value={values.passwordAuth}
              onChange={handleChange}
              required
            />
            <span className='signin__error-text'>{errors.passwordAuth}</span>
          </div>
          <div className='signin__buttons'>
            <button
              className='signin__button signin__button_enter'
              disabled={!isValid}
              type='submit'
            >
              Войти
            </button>
            <button className='signin__button signin__button_registr'>
              Регистрация
            </button>
          </div>
        </form>
      </div>
    </PopupTemplate>
  );
};

export default SignIn;
