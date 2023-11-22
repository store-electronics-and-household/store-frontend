import React from 'react';
import PopupTemplate from '../PopupTemplate/PopupTemplate';
import { useFormWithValidation } from '../../hooks/validation';
import './Signup.css';

interface SignUpProps {
  onOpenSignUp: () => void;
  isOpenSignUp: boolean;
}

const SignUp: React.FC<SignUpProps> = ({ onOpenSignUp, isOpenSignUp }) => {
  // const [isFallingAuth, setFallingAuth] = useState<boolean>(false); - если авторизация провалена,будем использовать,чтобы отобразить ссылку на форму восстоновления

  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  const handleResetForm = (): void => {
    resetForm();
  };

  const handleSignUp = (event: React.FormEvent): void => {
    event.preventDefault();
    if (isValid) {
      handleResetForm();
      // тут будет отправка данных на сервак,если данные валидны
      onOpenSignUp();
    }
  };

  return (
    <PopupTemplate
      isOpen={isOpenSignUp}
      OnClose={onOpenSignUp}
      popupClass='popup'
      popupClassOverlay='popup_overlay'
    >
      <div className='signup__container'>
        <button className='signup__button_cls' onClick={onOpenSignUp} />
        <form className='signup__form' onSubmit={handleSignUp} noValidate>
          <div className='signup__title-container'>
            <div className='signup__title'>Зарегистируйтесь</div>
            <p className='signup__subtitle'>Придумайте логин и пароль</p>
          </div>
          <div className='signup__inputs'>
            <input
              className='signup__input'
              placeholder='Логин'
              type='text'
              name='loginReg'
              value={values.loginReg}
              onChange={handleChange}
              minLength={6}
              required
            />
            <span className='signup__error-text'>{errors.loginReg}</span>
            <input
              className='signup__input'
              placeholder='Пароль'
              type='password'
              minLength={6}
              maxLength={8}
              name='passwordReg'
              value={values.passwordReg}
              onChange={handleChange}
              required
            />
            <span className='signup__error-text'>{errors.passwordReg}</span>
            <input
              className='signup__input'
              placeholder='Повторите пароль'
              type='password'
              minLength={6}
              maxLength={8}
              name='ConfirmPass'
              value={values.ConfirmPass}
              onChange={handleChange}
              required
            />
            <span className='signup__error-text'>{}</span>
          </div>
          <div className='signup__buttons'>
            <button
              className='signup__button signup__button_enter'
              disabled={!isValid}
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
              required
            />
            <label className='signup__checkbox-label' htmlFor='RegCheckbox'>
              <span className='signup__checkbox-text'>
                Я соглашаюсь на{' '}
                <span className='signup__checkbox-text signup__personal-data'>
                  обработку персональных данных
                </span>
              </span>
            </label>
          </div>
        </form>
      </div>
    </PopupTemplate>
  );
};

export default SignUp;
