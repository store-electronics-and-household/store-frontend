/* eslint-disable @typescript-eslint/indent */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import PopupTemplate from '../PopupTemplate/PopupTemplate';
import OPENEDEYE from '../../image/icons/open-eye.svg';
import CLOSEDEYE from '../../image/icons/eye-closed.svg';

interface PasswordRecoveryProps {
  onChangePassword: (email: string, password: string) => void;
  onOpenRecoveryPopup: () => void;
  isOpenPasswordRecovery: boolean;
}

const PasswordRecovery: React.FC<PasswordRecoveryProps> = ({
  onOpenRecoveryPopup,
  isOpenPasswordRecovery,
  onChangePassword,
}) => {
  const [isNext, SetIsNext] = React.useState<boolean>(false);
  const [isEmailValidationEnabled, setEmailValidationEnabled] =
    React.useState<boolean>(false);
  const [isPassValidationEnabled, setIsPassValidationEnabled] =
    React.useState<boolean>(false);
  const [showRecPassword, setShowRecPassword] = React.useState<boolean>(false);
  const [showConfRecPassword, setShowConfRecPassword] =
    React.useState<boolean>(false);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      loginRecovery: '',
      passwordRecovery: '',
      confirmPasswordRecovery: '',
    },
    validationSchema: Yup.object({
      loginRecovery: Yup.string()
        .email('Введите корректный email')
        .matches(
          /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
          'Некорректный формат email'
        )
        .required('Введите email'),
      passwordRecovery: Yup.string()
        .min(6, 'Пароль должен содержать не менее 6 символов')
        .max(8, 'Пароль не должен превышать 8 символов')
        .required('Введите Ваш пароль'),
      confirmPasswordRecovery: Yup.string()
        .oneOf([Yup.ref('passwordRecovery')], 'Пароль не совпадает')
        .required('Подтвердите пароль'),
    }),
    onSubmit: (values) => {
      if (formik.isValid) {
        onChangePassword(values.loginRecovery, values.passwordRecovery);
        onOpenRecoveryPopup();
        SetIsNext(false);
        setEmailValidationEnabled(false);
        formik.resetForm();
        setIsPassValidationEnabled(false);
      }
    },
  });

  const handleCloseRecoveryPasswordPopup = (): void => {
    onOpenRecoveryPopup();
    formik.resetForm();
    SetIsNext(false);
    setEmailValidationEnabled(false);
    setIsPassValidationEnabled(false);
  };

  // console.log(isPassValidationEnabled);

  const handleClickNextBtn = (): void => {
    setEmailValidationEnabled(true);
    if (!formik.errors.loginRecovery && formik.values.loginRecovery !== '') {
      SetIsNext(true);
    } else {
      console.log('');
    }
  };

  const handleSubmitBtn = (): void => {
    console.log('WTF?');
    setIsPassValidationEnabled(true);
  };

  return (
    <PopupTemplate
      isOpen={isOpenPasswordRecovery}
      OnClose={onOpenRecoveryPopup}
      popupClass='popup'
      popupClassOverlay='popup_overlay'
    >
      <div className='pass-recovery__container'>
        <button
          className='pass-recovery__button_cls'
          onClick={handleCloseRecoveryPasswordPopup}
        />
        <form
          className='pass-recovery__form'
          onSubmit={formik.handleSubmit}
          noValidate
        >
          <div className='pass-recovery__title-container'>
            <div className='pass-recovery__title'>Восстановление пароля</div>
            {!isNext && (
              <p className='pass-recovery__subtitle'>
                Введите почту, чтобы мы смогли найти ваш аккаунт
              </p>
            )}
          </div>
          <div className='pass-recovery__inputs'>
            {!isNext && (
              <div className='pass-recovery__input-wrapper'>
                <label className='pass-recovery__label'>Почта</label>
                <input
                  className={`pass-recovery__input ${
                    isEmailValidationEnabled &&
                    formik.touched.loginRecovery &&
                    formik.errors.loginRecovery
                      ? 'pass-recovery__input_invalid'
                      : formik.touched.loginRecovery &&
                        !formik.errors.loginRecovery
                      ? 'pass-recovery__input_valid'
                      : ''
                  }`}
                  type='text'
                  name='loginRecovery'
                  value={formik.values.loginRecovery}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  minLength={6}
                  required
                />
                {isEmailValidationEnabled &&
                  formik.touched.loginRecovery &&
                  formik.errors.loginRecovery && (
                    <span className='pass-recovery__error-text'>
                      {formik.errors.loginRecovery}
                    </span>
                  )}
              </div>
            )}
            {isNext && (
              <>
                <div className='pass-recovery__input-wrapper'>
                  <label className='pass-recovery__label'>Пароль</label>
                  <input
                    className={`pass-recovery__input ${
                      isPassValidationEnabled &&
                      formik.touched.passwordRecovery &&
                      formik.submitCount > 0 &&
                      formik.errors.passwordRecovery
                        ? 'pass-recovery__input_invalid'
                        : formik.touched.passwordRecovery &&
                          formik.submitCount > 0 &&
                          isPassValidationEnabled
                        ? 'pass-recovery__input_valid'
                        : ''
                    }`}
                    type={showRecPassword ? 'text' : 'password'}
                    name='passwordRecovery'
                    value={formik.values.passwordRecovery}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    required
                  />
                  <span
                    className='pass-recovery__toggle-password'
                    onClick={() => {
                      setShowRecPassword(!showRecPassword);
                    }}
                  >
                    <img
                      className='pass-recovery__toggle-password-icon'
                      src={showRecPassword ? OPENEDEYE : CLOSEDEYE}
                      alt='показать/скрыть пароль'
                    />
                  </span>
                </div>
                {formik.submitCount > 0 &&
                  formik.touched.passwordRecovery &&
                  formik.errors.passwordRecovery &&
                  isPassValidationEnabled && (
                    <span className='pass-recovery__error-text'>
                      {formik.errors.passwordRecovery}
                    </span>
                  )}
                <div className='pass-recovery__input-wrapper'>
                  <label className='pass-recovery__label'>
                    Повторите пароль
                  </label>
                  <input
                    className={`pass-recovery__input ${
                      isPassValidationEnabled &&
                      formik.touched.confirmPasswordRecovery &&
                      formik.submitCount > 0 &&
                      formik.errors.confirmPasswordRecovery
                        ? 'pass-recovery__input_invalid'
                        : formik.touched.confirmPasswordRecovery &&
                          formik.submitCount > 0 &&
                          isPassValidationEnabled
                        ? 'pass-recovery__input_valid'
                        : ''
                    }`}
                    type={showConfRecPassword ? 'text' : 'password'}
                    name='confirmPasswordRecovery'
                    value={formik.values.confirmPasswordRecovery}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    required
                  />
                  <span
                    className='pass-recovery__toggle-password'
                    onClick={() => {
                      setShowConfRecPassword(!showConfRecPassword);
                    }}
                  >
                    <img
                      className='pass-recovery__toggle-password-icon'
                      src={showConfRecPassword ? OPENEDEYE : CLOSEDEYE}
                      alt='показать/скрыть пароль'
                    />
                  </span>
                </div>
                {formik.submitCount > 0 &&
                  formik.touched.confirmPasswordRecovery &&
                  formik.errors.confirmPasswordRecovery &&
                  isPassValidationEnabled && (
                    <span className='pass-recovery__error-text'>
                      {formik.errors.confirmPasswordRecovery}
                    </span>
                  )}
              </>
            )}
            <div className='pass-recovery__buttons'>
              {isNext && (
                <button
                  className='pass-recovery__button signin__button_enter'
                  type='submit'
                  onClick={handleSubmitBtn}
                >
                  Восстановить
                </button>
              )}
              {!isNext && (
                <button
                  className='pass-recovery__button signin__button_enter'
                  onClick={handleClickNextBtn}
                >
                  Далее
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </PopupTemplate>
  );
};

export default PasswordRecovery;
