import React from 'react';
import './NotFound.css';
import logo from '../../image/logo.svg';

const NotFound: React.FC = () => {
  return (
    <section className='not-found'>
      <img className='not-found__logo' src={logo} alt='логотип магазина' />
      <h2 className='not-found__title'>Страница не найдена</h2>
      <p className='not-found__info'>
        В адресе есть ошибка или страница была удалена
      </p>
      <a className='not-found__btn' href='/main'>
        Вернуться на главную
      </a>
    </section>
  );
};

export default NotFound;
