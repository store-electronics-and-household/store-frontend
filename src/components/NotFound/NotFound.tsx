import React, { type ReactElement } from 'react';

const NotFound = (): ReactElement => {
  return (
    <section className='not-found'>
      <div className='not-found__container-text'>
        <h1 className='not-found__title'>404</h1>
        <p className='not-found__subtitle'>
          Кажется, что-то пошло не так
        </p>
        <p className='not-found__info'>
          Такой страницы у нас нет, зато есть много крутой техники
        </p>
        <a className='not-found__btn' href='/main'>
          На главную
        </a>
      </div>
    </section>
  );
};

export default NotFound;
