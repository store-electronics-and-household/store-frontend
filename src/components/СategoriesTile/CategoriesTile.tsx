import React from 'react';
import './CategoriesTile.css';
import watch from '../../images/watch.jpg';
import play from '../../images/play.jpg';
import ears from '../../images/ears.jpg';
import phone from '../../images/phone.jpg';
import comp from '../../images/comp.jpg';

const CategoriesTile: React.FC = () => {
  return (
    <section className='tile'>
      <div className='tile__text'>
        <h2 className='tile__title'>Категории</h2>
        <button className='tile__button'>Все категории</button>
      </div>
      <ul className='tile__list'>
        <li className='tile__item tile__computer'>
          <a className='tile__content' href='/'>
            <span className='tile__category-name'>
              Компьютеры и&nbsp;комплектующие
            </span>
            <img className='tile__image' alt='что-то' src={comp}></img>
          </a>
        </li>
        <li className='tile__item tile__phone'>
          <a className='tile__content' href='/'>
            <span className='tile__category-name'>
              Телефоны и&nbsp;аксессуары
            </span>
            <img className='tile__image' alt='что-то' src={phone}></img>
          </a>
        </li>
        <li className='tile__item tile__ears'>
          <a className='tile__content' href='/'>
            <span className='tile__category-name'>
              Наушники <br /> и аксессуары
            </span>
            <img className='tile__image' alt='что-то' src={ears}></img>
          </a>
        </li>
        <li className='tile__item tile__watch'>
          <a className='tile__content' href='/'>
            <span className='tile__category-name'>
              Умные часы и&nbsp;браслеты
            </span>
            <img className='tile__image' alt='что-то' src={watch}></img>
          </a>
        </li>

        <li className='tile__item tile__play'>
          <a className='tile__content' href='/'>
            <span className='tile__category-name'>Игровые приставки</span>
            <img className='tile__image' alt='что-то' src={play}></img>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default CategoriesTile;
