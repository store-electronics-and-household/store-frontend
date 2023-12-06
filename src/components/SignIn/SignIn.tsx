/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import PopupTemplate from '../PopupTemplate/PopupTemplate';
// import './Signin.css';
import OPENEDEYE from '../../image/icons/open-eye.svg';
import CLOSEDEYE from '../../image/icons/eye-closed.svg';

interface SignInProps {
  onOpenSignIn: () => void;
  isOpenSignIn: boolean;
  onOpenReg: () => void;
  onOpenRecovery: () => void;
}

const SignIn: React.FC<SignInProps> = ({
  onOpenSignIn,
  isOpenSignIn,
  onOpenReg,
  onOpenRecovery,
}) => {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const formik = useFormik({
    initialValues: {
      enableReinitialize: true,
      loginAuth: '',
      passwordAuth: '',
    },
    validationSchema: Yup.object({
      loginAuth: Yup.string()
        .email('Введите корректный email')
        .matches(
          /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
          'Некорректный формат email'
        )
        .required('Введите email'),
      passwordAuth: Yup.string()
        .min(6, 'Пароль должен содержать не менее 6 символов')
        .max(8, 'Пароль не должен превышать 8 символов')
        .required('Введите Ваш пароль'),
    }),
    onSubmit: (values) => {
      if (formik.isValid) {
        // Обработка отправки данных
        onOpenSignIn();
        formik.resetForm();
      }
    },
  });

  const handleOpenReg = (): void => {
    onOpenSignIn();
    onOpenReg();
    formik.resetForm();
  };

  const handleCloseSignInPopup = (): void => {
    onOpenSignIn();
    formik.resetForm();
  };

  const OpenRecoveryPass = (): void => {
    onOpenSignIn();
    onOpenRecovery();
    formik.resetForm();
  };

  const handleOpenRecoveryPass = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ): void => {
    event.preventDefault();
    OpenRecoveryPass();
  };

  return (
    <PopupTemplate
      isOpen={isOpenSignIn}
      OnClose={handleCloseSignInPopup}
      popupClass='popup'
      popupClassOverlay='popup_overlay'
    >
      <div className='signin__container'>
        <button
          className='signin__button_cls'
          onClick={handleCloseSignInPopup}
        />
        <form
          className='signin__form'
          onSubmit={formik.handleSubmit}
          noValidate
        >
          <div className='signin__title-container'>
            <div className='signin__title'>Введите логин и пароль</div>
            <p className='signin__subtitle'>
              Авторизируйтесь, чтобы совершить покупку или наполнить корзину
            </p>
          </div>
          <div className='signin__inputs'>
            <div className='signin__input-wrapper'>
              <label className='signin__label'>Почта</label>
              <input
                className={`signin__input ${
                  formik.submitCount > 0 &&
                  formik.touched.loginAuth &&
                  formik.errors.loginAuth
                    ? 'signin__input_invalid'
                    : formik.touched.loginAuth && formik.submitCount > 0
                      ? 'signin__input_valid'
                      : ''
                }`}
                type='email'
                name='loginAuth'
                value={formik.values.loginAuth}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                minLength={6}
                required
              />
            </div>
            {formik.submitCount > 0 &&
              formik.touched.loginAuth &&
              formik.errors.loginAuth && (
                <span className='signin__error-text'>
                  {formik.errors.loginAuth}
                </span>
              )}
            <div className='signin__input-wrapper'>
              <label className='signin__label'>Пароль</label>
              <input
                className={`signin__input ${
                  formik.submitCount > 0 &&
                  formik.touched.passwordAuth &&
                  formik.errors.passwordAuth
                    ? 'signin__input_invalid'
                    : formik.touched.passwordAuth && formik.submitCount > 0
                      ? 'signin__input_valid'
                      : ''
                }`}
                type={showPassword ? 'text' : 'password'}
                minLength={6}
                maxLength={10}
                name='passwordAuth'
                value={formik.values.passwordAuth}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
              />
              <span
                className='signin__toggle-password'
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              >
                <img
                  className='signin__toggle-password-icon'
                  src={showPassword ? OPENEDEYE : CLOSEDEYE}
                  alt='показать/скрыть пароль'
                />
              </span>
            </div>
            {formik.submitCount > 0 &&
              formik.touched.passwordAuth &&
              formik.errors.passwordAuth && (
                <span className='signin__error-text'>
                  {formik.errors.passwordAuth}
                </span>
              )}
            {!formik.isValid && formik.submitCount > 0 && (
              <Link
                className='signin__link'
                onClick={handleOpenRecoveryPass}
                to={''}
              >
                Не помню пароль
              </Link>
            )}
          </div>
          <div className='signin__buttons'>
            <button
              className='signin__button signin__button_enter'
              disabled={formik.isSubmitting}
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
