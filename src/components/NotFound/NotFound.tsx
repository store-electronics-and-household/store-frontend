import React from 'react';
import './NotFound.css';
import logo from '../../image/logo.svg';
import vector from '../../image/vector1.svg';

const NotFound: React.FC = () => {
  return (
    <section className='not-found'>
      <div className='not-found__container-text'>
        <img className='not-found__logo' src={logo} alt='логотип магазина' />
        <h2 className='not-found__title'>Страница не найдена</h2>
        <p className='not-found__info'>
          В адресе есть ошибка или страница была удалена
        </p>
        <a className='not-found__btn' href='/main'>
          Вернуться на главную
        </a>
      </div>
      <div className='not-found__container'>
        <img
          className='not-found__img-l'
          src={vector}
          alt='красивая загагулина'
        />
        <img
          className='not-found__img-r'
          src={vector}
          alt='красивая загагулина'
        />
      </div>
    </section>
  );
};

export default NotFound;
