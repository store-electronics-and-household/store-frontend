import React, { useContext } from 'react';
import ProfileLayout from '../ProfileLayout/ProfileLayout';
import InputMask from 'react-input-mask';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { patchUser } from '../../utils/api/user-api';
import { UserContext } from '../../context/UserContext';
import type { IContext } from '../../context/UserContext';
import type { FormProps } from '../../utils/types';

const Profile = ({
  setGeneralContext,
}: {
  setGeneralContext: (args: IContext) => void;
}): JSX.Element => {
  const context = useContext(UserContext);
  const { email, userName, userPhone, userLastName }: IContext = context;
  const token = localStorage.getItem('token') ?? '';

  const formik = useFormik({
    initialValues: {
      email,
      phone: userPhone,
      firstName: userName,
      lastName: userLastName,
    },
    validationSchema: Yup.object({
      phone: Yup.string()
        .matches(
          /\+7\(\d\d\d\)\d\d\d-\d\d-\d\d/i,
          'Номер не соответствует схеме'
        )
        .required('Поле необходимо заполнить'),
      firstName: Yup.string()
        .min(2, 'Имя должно быть длиннее 2 символов')
        .max(30, 'Имя не может содержать больше 30 символов')
        .required('Поле необходимо заполнить'),
      lastName: Yup.string()
        .min(2, 'Фамилия должна быть длиннее 2 символов')
        .max(30, 'Фамилия не может содержать больше 30 символов')
        .required('Поле необходимо заполнить'),
    }),
    onSubmit: ({ firstName, phone, lastName }) => {
      const data: FormProps = { firstName, phone, lastName };
      const res = phone?.match(/[0-9]/g);
      data.phone = res?.join('');

      patchUser(data, token)
        .then((res) => {
          const { phone } = res;
          const phoneWPlus = '+'.concat(phone);
          setGeneralContext({
            ...context,
            userName: res.firstName,
            userPhone: phoneWPlus,
            userLastName: res.lastName,
          });
        })
        .catch((e) => {
          console.log(e);
        });
    },
  });

  return (
    <ProfileLayout setGeneralContext={setGeneralContext}>
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
              name='email'
              readOnly
              className='profile__account-input'
            />
          </fieldset>
          <fieldset className='profile__account-fieldset'>
            <label className='profile__account-label'>Номер телефона</label>
            <InputMask
              minLength={16}
              alwaysShowMask={true}
              name='phone'
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              className='profile__account-input'
              mask={'+7(999)999-99-99'}
              placeholder='+7(___)___-__-__'
            />
            {formik.touched.phone != null && formik.errors.phone != null && (
              <span className='profile__account-error'>
                {formik.errors.phone}
              </span>
            )}
          </fieldset>
          <fieldset className='profile__account-fieldset'>
            <label className='profile__account-label'>Имя</label>
            <input
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              name='firstName'
              minLength={2}
              maxLength={30}
              type='text'
              className='profile__account-input'
            />
            {formik.touched.firstName != null &&
              formik.errors.firstName != null && (
                <span className='profile__account-error'>
                  {formik.errors.firstName}
                </span>
            )}
          </fieldset>
          <fieldset className='profile__account-fieldset'>
            <label className='profile__account-label'>Фамилия</label>
            <input
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
