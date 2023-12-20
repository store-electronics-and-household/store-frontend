import React from 'react';
// import type { FormEvent } from 'react';
import ProfileLayout from '../ProfileLayout/ProfileLayout';
import InputMask from 'react-input-mask';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Profile = (): JSX.Element => {
  const CURRENT_EMAIL = '123455678@mail.ru';
  interface FormProps {
    email: string;
    number?: string;
    name?: string;
    lastName?: string;
  }
  const formik = useFormik({
    initialValues: {
      email: CURRENT_EMAIL,
      number: '',
      name: '',
      lastName: '',
    },
    validationSchema: Yup.object({
      number: Yup.string()
        .matches(
          /\+7\(\d\d\d\)\d\d\d-\d\d-\d\d/i,
          'Номер не соответствует схеме'
        )
        .notRequired(),
      name: Yup.string()
        .min(2, 'Имя должно быть длиннее 2 символов')
        .max(30, 'Имя не может содержать больше 30 символов')
        .notRequired(),
      lastName: Yup.string()
        .min(2, 'Фамилия должна быть длиннее 2 символов')
        .max(30, 'Фамилия не может содержать больше 30 символов')
        .notRequired(),
    }),
    onSubmit: ({ email, name, number, lastName }) => {
      const data: FormProps = { email, name, number, lastName };
      if (number === '') {
        delete data.number;
      } else {
        const res = number.match(/[0-9]/g);
        data.number = res?.join('');
      }
      if (name === '') {
        delete data.name;
      }
      if (lastName === '') {
        delete data.lastName;
      }
      patchUser(data);
    },
  });

  function patchUser(data: FormProps): void {
    console.log(data);
  }

  return (
    <ProfileLayout>
      <div className='profile__account'>
        <form
          noValidate
          onSubmit={formik.handleSubmit}
          className='profile__account-form'
        >
          <fieldset className='profile__account-fieldset'>
            <label className='profile__account-label'>Email</label>
            <input
              value={formik.values.email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              name='email'
              readOnly
              className='profile__account-input'
            />
          </fieldset>
          <fieldset className='profile__account-fieldset'>
            <label className='profile__account-label'>Номер телефона</label>
            <InputMask
              value={formik.values.number}
              minLength={16}
              alwaysShowMask={true}
              name='number'
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              className='profile__account-input'
              mask={'+7(999)999-99-99'}
              placeholder='+7(___)___-__-__'
            />
            {formik.touched.number != null && formik.errors.number != null && (
              <span className='profile__account-error'>
                {formik.errors.number}
              </span>
            )}
          </fieldset>
          <fieldset className='profile__account-fieldset'>
            <label className='profile__account-label'>Имя</label>
            <input
              value={formik.values.name}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              name='name'
              minLength={2}
              maxLength={30}
              type='text'
              className='profile__account-input'
            />
            {formik.touched.name != null && formik.errors.name != null && (
              <span className='profile__account-error'>
                {formik.errors.name}
              </span>
            )}
          </fieldset>
          <fieldset className='profile__account-fieldset'>
            <label className='profile__account-label'>Фамилия</label>
            <input
              value={formik.values.lastName}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              name='lastName'
              minLength={2}
              maxLength={30}
              type='text'
              className='profile__account-input'
            />
            {formik.touched.lastName != null &&
              formik.errors.lastName != null && (
                <span className='profile__account-error'>
                  {formik.errors.lastName}
                </span>
              )}
          </fieldset>
          <button type='submit' className='profile__account-button'>
            Сохранить
          </button>
        </form>
      </div>
    </ProfileLayout>
  );
};

export default Profile;
