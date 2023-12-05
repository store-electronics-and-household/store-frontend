/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import PopupTemplate from '../PopupTemplate/PopupTemplate';
// import './Signup.css';
import OPENEDEYE from '../../image/icons/open-eye.svg';
import CLOSEDEYE from '../../image/icons/eye-closed.svg';

interface SignUpProps {
  onOpenSignUp: () => void;
  isOpenSignUp: boolean;
}
const SignUp: React.FC<SignUpProps> = ({ onOpenSignUp, isOpenSignUp }) => {
  const [showRegPassword, setShowRegPassword] = React.useState<boolean>(false);
  const [showConfPassword, setShowConfPassword] =
    React.useState<boolean>(false);
  const formik = useFormik({
    initialValues: {
      loginReg: '',
      passwordReg: '',
      ConfirmPass: '',
      RegCheckbox: false,
      enableReinitialize: true,
      isValid: true,
      isDirty: false,
      isInitialValid: true,
      initialErrors: false,
    },
    validationSchema: Yup.object({
      loginReg: Yup.string()
        .email('Введите корректный email')
        .matches(
          /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
          'Некорректный формат email'
        )
        .required('Введите email'),
      passwordReg: Yup.string()
        .min(6, 'Пароль должен содержать не менее 6 символов')
        .max(8, 'Пароль не должен превышать 8 символов')
        .required('Введите Ваш пароль'),
      ConfirmPass: Yup.string()
        .oneOf([Yup.ref('passwordReg')], 'Пароли не совпадают')
        .required('Подтвердите пароль'),
      RegCheckbox: Yup.boolean().oneOf([true], '').required(),
    }),
    onSubmit: (values) => {
      if (formik.isValid) {
        // Обработка отправки данных
        onOpenSignUp();
        formik.resetForm();
      }
    },
  });

  const handleCloseSignUpPopup = (): void => {
    onOpenSignUp();
    formik.resetForm();
  };

  return (
    <PopupTemplate
      isOpen={isOpenSignUp}
      OnClose={handleCloseSignUpPopup}
      popupClass='popup'
      popupClassOverlay='popup_overlay'
    >
      <div className='signup__container'>
        <button
          className='signup__button_cls'
          onClick={handleCloseSignUpPopup}
        />
        <form
          className='signup__form'
          onSubmit={formik.handleSubmit}
          noValidate
          onReset={formik.handleReset}
        >
          <div className='signup__title-container'>
            <div className='signup__title'>Зарегистрируйтесь</div>
            <p className='signup__subtitle'>
              Введите почту и придумайте пароль
            </p>
          </div>
          <div className='signup__inputs'>
            <div className='signup__input-wrapper'>
              <label className='signup__label'>Почта</label>
              <input
                className={`signup__input ${
                  formik.submitCount > 0 &&
                  formik.touched.loginReg &&
                  formik.errors.loginReg
                    ? 'signup__input_invalid'
                    : formik.touched.loginReg && formik.submitCount > 0
                      ? 'signup__input_valid'
                      : ''
                }`}
                type='text'
                name='loginReg'
                value={formik.values.loginReg}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                minLength={6}
                required
              />
            </div>
            {formik.submitCount > 0 &&
              formik.touched.loginReg &&
              formik.errors.loginReg && (
                <span className='signup__error-text'>
                  {formik.errors.loginReg}
                </span>
              )}
            <div className='signup__input-wrapper'>
              <label className='signup__label'>Пароль</label>
              <input
                className={`signup__input ${
                  formik.submitCount > 0 &&
                  formik.touched.passwordReg &&
                  formik.errors.passwordReg
                    ? 'signup__input_invalid'
                    : formik.touched.passwordReg && formik.submitCount > 0
                      ? 'signup__input_valid'
                      : ''
                }`}
                type={showRegPassword ? 'text' : 'password'}
                minLength={6}
                maxLength={8}
                name='passwordReg'
                value={formik.values.passwordReg}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
              />
              <span
                className='signup__toggle-password'
                onClick={() => {
                  setShowRegPassword(!showRegPassword);
                }}
              >
                <img
                  className='signup__toggle-password-icon'
                  src={showRegPassword ? OPENEDEYE : CLOSEDEYE}
                  alt='показать/скрыть пароль'
                />
              </span>
            </div>
            {formik.submitCount > 0 &&
              formik.touched.passwordReg &&
              formik.errors.passwordReg && (
                <span className='signup__error-text'>
                  {formik.errors.passwordReg}
                </span>
              )}
            <div className='signup__input-wrapper'>
              <label className='signup__label'>Повторите пароль</label>
              <input
                className={`signup__input ${
                  formik.submitCount > 0 &&
                  formik.touched.ConfirmPass &&
                  formik.errors.ConfirmPass
                    ? 'signup__input_invalid'
                    : formik.touched.ConfirmPass && formik.submitCount > 0
                      ? 'signup__input_valid'
                      : ''
                }`}
                type={showConfPassword ? 'text' : 'password'}
                minLength={6}
                maxLength={8}
                name='ConfirmPass'
                value={formik.values.ConfirmPass}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
              />
              <span
                className='signup__toggle-password'
                onClick={() => {
                  setShowConfPassword(!showConfPassword);
                }}
              >
                <img
                  className='signup__toggle-password-icon'
                  src={showConfPassword ? OPENEDEYE : CLOSEDEYE}
                  alt='показать/скрыть пароль'
                />
              </span>
            </div>
            {formik.submitCount > 0 &&
              formik.touched.ConfirmPass &&
              formik.errors.ConfirmPass && (
                <span className='signup__error-text'>
                  {formik.errors.ConfirmPass}
                </span>
              )}
          </div>
          <div className='signup__buttons'>
            <button
              className='signup__button signup__button_enter'
              disabled={formik.isSubmitting}
              type='submit'
            >
              Зарегистрироваться
            </button>
          </div>
          <div className='signup__checkbox-container'>
            <input
              className='signup__checkbox'
              type='checkbox'
              id='RegCheckbox'
              name='RegCheckbox'
              checked={formik.values.RegCheckbox}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label className='signup__checkbox-label' htmlFor='RegCheckbox'>
              <div className='signup__checkbox-checkmark'></div>
              <span className='signup__checkbox-text'>
                Я соглашаюсь на{' '}
                <span className='signup__checkbox-text signup__personal-data'>
                  обработку персональных данных
                </span>
              </span>
            </label>
            {formik.touched.RegCheckbox && formik.errors.RegCheckbox && (
              <span className='signup__error-text'>
                {formik.errors.RegCheckbox}
              </span>
            )}
          </div>
        </form>
      </div>
    </PopupTemplate>
  );
};

export default SignUp;
