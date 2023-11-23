/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import PopupTemplate from '../PopupTemplate/PopupTemplate';
import './Signup.css';

interface SignUpProps {
  onOpenSignUp: () => void;
  isOpenSignUp: boolean;
}

const SignUp: React.FC<SignUpProps> = ({ onOpenSignUp, isOpenSignUp }) => {
  const formik = useFormik({
    initialValues: {
      loginReg: '',
      passwordReg: '',
      ConfirmPass: '',
      RegCheckbox: false,
    },
    validationSchema: Yup.object({
      loginReg: Yup.string()
        .email('Введите корректный email')
        .required('Введите email'),
      passwordReg: Yup.string()
        .min(6, 'Пароль должен содержать не менее 6 символов')
        .max(8, 'Пароль не должен превышать 8 символов')
        .required('Введите Ваш пароль'),
      ConfirmPass: Yup.string()
        .oneOf([Yup.ref('passwordReg')], 'Пароль не совпадает')
        .required('Подтвердите пароль'),
      RegCheckbox: Yup.boolean().oneOf([true], '').required(),
    }),
    onSubmit: (values) => {
      // Обработка отправки данных
      onOpenSignUp();
    },
  });

  return (
    <PopupTemplate
      isOpen={isOpenSignUp}
      OnClose={onOpenSignUp}
      popupClass='popup'
      popupClassOverlay='popup_overlay'
    >
      <div className='signup__container'>
        <button className='signup__button_cls' onClick={onOpenSignUp} />
        <form
          className='signup__form'
          onSubmit={formik.handleSubmit}
          noValidate
        >
          <div className='signup__title-container'>
            <div className='signup__title'>Зарегистрируйтесь</div>
            <p className='signup__subtitle'>Придумайте логин и пароль</p>
          </div>
          <div className='signup__inputs'>
            <input
              className={`signup__input ${
                formik.dirty && !formik.errors.loginReg
                  ? 'signup__input_valid'
                  : 'signup__input_invalid'
              }`}
              placeholder='E-mail'
              type='text'
              name='loginReg'
              value={formik.values.loginReg}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              minLength={6}
              required
            />
            {formik.touched.loginReg && formik.errors.loginReg && (
              <span className='signup__error-text'>
                {formik.errors.loginReg}
              </span>
            )}
            <input
              className={`signup__input ${
                formik.dirty && !formik.errors.passwordReg
                  ? 'signup__input_valid'
                  : 'signup__input_invalid'
              }`}
              placeholder='Пароль'
              type='password'
              minLength={6}
              maxLength={8}
              name='passwordReg'
              value={formik.values.passwordReg}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.touched.passwordReg && formik.errors.passwordReg && (
              <span className='signup__error-text'>
                {formik.errors.passwordReg}
              </span>
            )}
            <input
              className={`signup__input ${
                formik.dirty && !formik.errors.ConfirmPass
                  ? 'signup__input_valid'
                  : 'signup__input_invalid'
              }`}
              placeholder='Повторите пароль'
              type='password'
              minLength={6}
              maxLength={8}
              name='ConfirmPass'
              value={formik.values.ConfirmPass}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.touched.ConfirmPass && formik.errors.ConfirmPass && (
              <span className='signup__error-text'>
                {formik.errors.ConfirmPass}
              </span>
            )}
          </div>
          <div className='signup__buttons'>
            <button
              className='signup__button signup__button_enter'
              disabled={!(formik.dirty && formik.isValid)}
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
