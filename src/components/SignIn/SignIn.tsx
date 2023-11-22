import React from 'react';
import { Link } from 'react-router-dom';
import PopupTemplate from '../PopupTemplate/PopupTemplate';
import { useFormWithValidation } from '../../hooks/validation';
import './Signin.css';

interface SignInProps {
  onOpenSignIn: () => void;
  isOpenSignIn: boolean;
  onOpenReg: () => void;
}

const SignIn: React.FC<SignInProps> = ({
  onOpenSignIn,
  isOpenSignIn,
  onOpenReg,
}) => {
  // const [isFallingAuth, setFallingAuth] = useState<boolean>(false); - если авторизация провалена,будем использовать,чтобы отобразить ссылку на форму восстоновления

  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  const handleResetForm = (): void => {
    resetForm();
  };

  const handleSignIn = (event: React.FormEvent): void => {
    event.preventDefault();
    if (isValid) {
      handleResetForm();
      // тут будет отправка данных на сервак,если данные валидны
      onOpenSignIn();
    }
  };

  const handleOpenReg = (): void => {
    onOpenSignIn();
    onOpenReg();
  };

  return (
    <PopupTemplate
      isOpen={isOpenSignIn}
      OnClose={onOpenSignIn}
      popupClass='popup'
      popupClassOverlay='popup_overlay'
    >
      <div className='signin__container'>
        <button className='signin__button_cls' onClick={onOpenSignIn} />
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
              placeholder='E-mail'
              type='email'
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
            <Link className='signin__link' to='/'>
              Не помню пароль
            </Link>
          </div>
          <div className='signin__buttons'>
            <button
              className='signin__button signin__button_enter'
              disabled={!isValid}
              type='submit'
            >
              Войти
            </button>
            <button
              className='signin__button signin__button_registr'
              onClick={handleOpenReg}
            >
              Регистрация
            </button>
          </div>
        </form>
      </div>
    </PopupTemplate>
  );
};

export default SignIn;
