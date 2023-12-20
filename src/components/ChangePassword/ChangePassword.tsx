import React, { useRef } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import type { MouseEvent } from 'react';
import ProfileLayout from '../ProfileLayout/ProfileLayout';
import { changePassword } from '../../utils/api/user-api';
import { authorize } from '../../utils/api/dist/user-api';

const ChangePassword = (): JSX.Element => {
  const CURRENT_EMAIL = '12345678@mail.ru';
  const statusMessage = useRef<HTMLSpanElement>(null);
  const formik = useFormik({
    initialValues: {
      email: CURRENT_EMAIL,
      currentPassword: '',
      newPassword: '',
      newPasswordConfirmation: '',
    },
    validationSchema: Yup.object({
      currentPassword: Yup.string()
        .required('Необходимо заполнить это поле')
        .min(2, 'Минимальная длина пароля 2 символа')
        .max(8, 'Мааксимальная длина пароля 8 символов'),
      newPassword: Yup.string()
        .required('Укажите новый пароль')
        .min(2, 'Минимальная длина пароля 2 символа')
        .max(8, 'Мааксимальная длина пароля 8 символов'),
      newPasswordConfirmation: Yup.string()
        .required('Подтвердите новый пароль')
        .oneOf([Yup.ref('newPassword')], 'Пароли должны совпадать'),
    }),
    onSubmit: ({ email, currentPassword, newPassword }) => {
      if (formik.isValid) {
        authorize(email, currentPassword)
          .then(() => {
            formik.setFieldError('currentPassword', undefined);
            changePassword(email, newPassword)
              .then(() => {
                if (statusMessage.current != null) {
                  statusMessage.current.classList.add(
                    'profile__password-status_succes'
                  );
                  statusMessage.current.innerText = 'Пароль успешно изменён';
                }
              })
              .catch((e) => {
                if (statusMessage.current != null) {
                  statusMessage.current.innerText = 'Произошла ошибка';
                  statusMessage.current.classList.add(
                    'profile__password-status_fail'
                  );
                }
              })
              .finally(() => {
                setTimeout(() => {
                  if (statusMessage.current != null) {
                    statusMessage.current.innerText = '';
                  }
                }, 8000);
              });
          })
          .catch(() => {
            formik.setFieldError(
              'currentPassword',
              'Пароль не совпадает с текущим'
            );
          });
      }
    },
  });

  function toggleVisibility(e: MouseEvent): void {
    const target = e.target as HTMLElement;
    const fieldset = target.closest('fieldset');
    const button = fieldset?.querySelector('button');
    const input = fieldset?.querySelector('input');
    if (input != null) {
      switch (input.type) {
        case 'text':
          input.type = 'password';
          button?.classList.remove('profile__password-button-vision_open');
          break;
        case 'password':
          input.type = 'text';
          button?.classList.add('profile__password-button-vision_open');
          break;
      }
    }
  }

  return (
    <ProfileLayout>
      <div className='profile__password'>
        <form
          onSubmit={formik.handleSubmit}
          noValidate
          className='profile__password-form'
        >
          <fieldset className='profile__password-fieldset'>
            <label className='profile__password-label'>
              Ваш текущий пароль
            </label>
            <input
              minLength={2}
              maxLength={8}
              name='currentPassword'
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.currentPassword}
              type='password'
              className='profile__password-input'
            />
            {formik.touched.currentPassword != null &&
              formik.errors.currentPassword != null && (
                <span className='profile__password-error'>
                  {formik.errors.currentPassword}
                </span>
              )}
            <button
              type='button'
              onClick={toggleVisibility}
              className='profile__password-button-vision'
            ></button>
          </fieldset>
          <fieldset className='profile__password-fieldset'>
            <label className='profile__password-label'>Новый пароль</label>
            <input
              minLength={2}
              maxLength={8}
              name='newPassword'
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.newPassword}
              type='password'
              className='profile__password-input'
            />
            {formik.touched.newPassword != null &&
              formik.errors.newPassword != null && (
                <span className='profile__password-error'>
                  {formik.errors.newPassword}
                </span>
              )}
            <button
              type='button'
              onClick={toggleVisibility}
              className='profile__password-button-vision'
            ></button>
          </fieldset>
          <fieldset className='profile__password-fieldset'>
            <label className='profile__password-label'>Повторите пароль</label>
            <input
              minLength={2}
              maxLength={8}
              name='newPasswordConfirmation'
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.newPasswordConfirmation}
              type='password'
              className='profile__password-input'
            />
            {formik.touched.newPasswordConfirmation != null &&
              formik.errors.newPasswordConfirmation != null && (
                <span className='profile__password-error'>
                  {formik.errors.newPasswordConfirmation}
                </span>
              )}
            <button
              type='button'
              onClick={toggleVisibility}
              className='profile__password-button-vision'
            ></button>
          </fieldset>
          <button type='submit' className='profile__password-button'>
            Сохранить
          </button>
          <span
            ref={statusMessage}
            className='profile__password-status profile__password-succes_visible'
          ></span>
        </form>
      </div>
    </ProfileLayout>
  );
};

export default ChangePassword;
