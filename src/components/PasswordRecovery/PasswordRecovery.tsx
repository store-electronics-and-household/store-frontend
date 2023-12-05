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
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      passwordRecovery: '',
      confirmPasswordRecovery: '',
    },
    validationSchema: Yup.object({
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
            <p className='pass-recovery__subtitle'>Введите новый пароль</p>
          </div>
          <div className='pass-recovery__inputs'>
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
          </div>
        </form>
      </div>
    </PopupTemplate>
  );
};

export default PasswordRecovery;
