/* eslint-disable @typescript-eslint/indent */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { memo } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import PopupTemplate from '../PopupTemplate/PopupTemplate';
import OPENEDEYE from '../../image/icons/open-eye.svg';
import CLOSEDEYE from '../../image/icons/eye-closed.svg';
import { changePassword, checkUserEmail } from '../../utils/api/user-api';
import { useNavigate } from 'react-router-dom';

interface PasswordRecoveryProps {
  onOpenRecoveryPopup: () => void;
  isOpenPasswordRecovery: boolean;
}

const PasswordRecovery: React.FC<PasswordRecoveryProps> = ({
  onOpenRecoveryPopup,
  isOpenPasswordRecovery,
}) => {
  const [isNext, SetIsNext] = React.useState<boolean>(false);
  const [isEmailValidationEnabled, setEmailValidationEnabled] =
    React.useState<boolean>(false);
  const [isUserNotFound, setIsUserNotFound] = React.useState<boolean>(false);
  const [isPassValidationEnabled, setIsPassValidationEnabled] =
    React.useState<boolean>(false);
  const [showRecPassword, setShowRecPassword] = React.useState<boolean>(false);
  const [showConfRecPassword, setShowConfRecPassword] =
    React.useState<boolean>(false);
  const [isPasswordChanged, setIsPasswordChanged] = React.useState<boolean>(false);
  const [isPassChangeError, setIsPassChangeError] = React.useState<boolean>(false);
  const navigate = useNavigate();
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
        handleChangePassword(values.loginRecovery, values.passwordRecovery);
      }
    },
  });

  const handleChangePassword = (email: string, password: string): void => {
    changePassword(email, password)
      .then((data) => {
        setIsPasswordChanged(true);
        SetIsNext(false);
        setEmailValidationEnabled(false);
        formik.resetForm();
        setIsPassValidationEnabled(false);
        setIsPassChangeError(false);
      })
      .catch((error) => {
        setIsPassChangeError(true);
        console.log(error);
      });
  };

  const handleCloseRecoveryPasswordPopup = (): void => {
    onOpenRecoveryPopup();
    formik.resetForm();
    SetIsNext(false);
    setEmailValidationEnabled(false);
    setIsPassValidationEnabled(false);
    setIsPassChangeError(false);
  };

  const handleClickNextBtn = (): void => {
    setEmailValidationEnabled(true);
    if (!formik.errors.loginRecovery && formik.values.loginRecovery !== '') {
      checkUserEmail(formik.values.loginRecovery)
        .then(() => {
          SetIsNext(true);
          setIsUserNotFound(false);
        })
        .catch((err) => {
          setIsUserNotFound(true);
          console.log(err);
        });
    } else {
      console.log('');
    }
  };

  const handleSubmitBtn = (): void => {
    setIsPassValidationEnabled(true);
  };

  const handleEndOfPassRecovery = (): void => {
    onOpenRecoveryPopup();
    setIsPasswordChanged(false);
    navigate('/', { replace: true });
  };

  return (
    <>
      {!isPasswordChanged && <PopupTemplate
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
                  {isUserNotFound &&
                    <span className='pass-recovery__error-text'>
                    Пользователь не найден
                  </span>}
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
                  {isPassChangeError &&
                    <span className='pass-recovery__error-text'>
                      При смене пароля произошла ошибка. Попробуйте еще раз.
                    </span>}
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
                    type='submit'
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
      </PopupTemplate>}
      {isPasswordChanged && <PopupTemplate
        isOpen={isOpenPasswordRecovery}
        OnClose={handleEndOfPassRecovery}
        popupClass='popup'
        popupClassOverlay='popup_overlay'
      >
        <div className='pass-recovery__container'>
          <button
            className='pass-recovery__button_cls'
            onClick={handleEndOfPassRecovery}
          />
          <div className='pass-recovery__title-container'>
            <div className='pass-recovery__title'>Пароль успешно восстановлен!</div>
            <p className='pass-recovery__subtitle'>
              Можете вернуться к покупкам
            </p>
          </div>
          <button
            onClick={handleEndOfPassRecovery}
            className='pass-recovery__button signin__button_enter'
          >
            На главную
          </button>
        </div>
      </PopupTemplate>}
    </>
  );
};

export default memo(PasswordRecovery);
