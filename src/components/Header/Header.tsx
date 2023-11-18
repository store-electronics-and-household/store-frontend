import React from 'react';
import type { FC } from 'react';

import headerLogo from '../../image/icons/logo.svg';
import searchIcon from '../../image/icons/search_icon.svg';
import deliveryIcon from '../../image/icons/delivery_icon.svg';
import busketIcon from '../../image/icons/busket_icon.svg';
import favouriteIcon from '../../image/icons/favourite_icon.svg';

import './Header.css';
import { Link } from 'react-router-dom';

const Header: FC = () => (
  <header className='header'>
    <div className='header__container'>
      <Link to="/">
        <img className='header__logo' src={headerLogo} alt="Перейти на главную"/>
      </Link>

      <button className='header__catalog-button'>Каталог</button>

      <div className='header__searchbar-container'>
          <div className='header__searchbar-wrapper'>
            <button className='header__searchbar-button'>
              <img className='header__searchbar-button-icon' src={searchIcon} alt="Строка поиска" />
            </button>

            <input
              className='header__searchbar-input'
              placeholder='Поиск'
              autoComplete='off'
              onChange={() => null}
              value=''
            />
          </div>
      </div>

        <nav className='header__navbar'>
          <Link className='header__navbar-link' to="/">
            <img className='header__navbar-icon' src={deliveryIcon} alt="Перейти в раздел 'Доставка'"/>
          </Link>

          <Link className='header__navbar-link' to="/">
            <img className='header__navbar-icon' src={favouriteIcon} alt="Перейти в раздел 'Избранное'"/>
          </Link>

          <Link className='header__navbar-link' to="/">
            <img className='header__navbar-icon' src={busketIcon} alt="Перейти в раздел 'Корзина'"/>
          </Link>
        </nav>
    </div>
  </header>
);

export default Header;
