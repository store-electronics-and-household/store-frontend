/* eslint-disable @typescript-eslint/indent */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import PopupTemplate from '../PopupTemplate/PopupTemplate';

interface PasswordRecoveryProps {
  onOpenRecoveryPopup: () => void;
  isOpenPasswordRecovery: boolean;
}

const PasswordRecovery: React.FC<PasswordRecoveryProps> = ({
  onOpenRecoveryPopup,
  isOpenPasswordRecovery,
}) => {
  const [isNext, setisNext] = React.useState<boolean>(false);
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
      // Обработка отправки данных
      onOpenRecoveryPopup();
      formik.resetForm();
    },
  });

  const handleCloseRecoveryPasswordPopup = (): void => {
    onOpenRecoveryPopup();
    formik.resetForm();
  };

  const handleNextLevel = (): void => {
    setisNext(true);
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
            {isNext && (
              <p className='pass-recovery__subtitle'>
                Введите почту, чтобы мы смогли найти ваш аккаунт
              </p>
            )}
          </div>
          <div className='pass-recovery__inputs'>
            <div className='pass-recovery__input-wrapper'>
              <label className='pass-recovery__label'>Почта</label>
              <input
                className={`pass-recovery__input ${
                  formik.submitCount > 0 &&
                  formik.touched.loginRecovery &&
                  formik.errors.loginRecovery
                    ? 'pass-recovery__input_invalid'
                    : formik.touched.loginRecovery && formik.submitCount > 0
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
            </div>
            {formik.submitCount > 0 &&
              formik.touched.loginRecovery &&
              formik.errors.loginRecovery && (
                <span className='pass-recovery__error-text'>
                  {formik.errors.loginRecovery}
                </span>
              )}

            <input
              className={`pass-recovery__input ${
                formik.touched.passwordRecovery &&
                formik.errors.passwordRecovery
                  ? 'pass-recovery__input_invalid'
                  : formik.touched.passwordRecovery
                    ? 'pass-recovery__input_valid'
                    : ''
              }`}
              placeholder='Пароль'
              type='password'
              name='passwordRecovery'
              value={formik.values.passwordRecovery}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.touched.passwordRecovery &&
              formik.errors.passwordRecovery && (
                <span className='pass-recovery__error-text'>
                  {formik.errors.passwordRecovery}
                </span>
              )}
            <input
              className={`pass-recovery__input ${
                formik.touched.confirmPasswordRecovery &&
                formik.errors.confirmPasswordRecovery
                  ? 'pass-recovery__input_invalid'
                  : formik.touched.confirmPasswordRecovery
                    ? 'pass-recovery__input_valid'
                    : ''
              }`}
              placeholder='Повторите пароль'
              type='password'
              name='confirmPasswordRecovery'
              value={formik.values.confirmPasswordRecovery}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.touched.confirmPasswordRecovery &&
              formik.errors.confirmPasswordRecovery && (
                <span className='pass-recovery__error-text'>
                  {formik.errors.confirmPasswordRecovery}
                </span>
              )}
          </div>
          <div className='pass-recovery__buttons'>
            <button
              className='pass-recovery__button signin__button_enter'
              disabled={!(formik.dirty && formik.isValid)}
              type='submit'
            >
              Восстановить
            </button>
            <button
              className='pass-recovery__button signin__button_enter'
              disabled={formik.isValid}
              onClick={handleNextLevel}
            >
              Далее
            </button>
          </div>
        </form>
      </div>
    </PopupTemplate>
  );
};

export default PasswordRecovery;
