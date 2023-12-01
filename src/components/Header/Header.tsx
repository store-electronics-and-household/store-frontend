/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { useState } from 'react';
import type { FC } from 'react';

import { NavLink, Outlet, Link, useLocation } from 'react-router-dom';

import headerLogo from '../../image/icons/logo_black.svg';
import deliveryIcon from '../../image/icons/delivery_icon.svg';
import busketIcon from '../../image/icons/busket_icon.svg';
import favouriteIcon from '../../image/icons/favourite_icon.svg';
import headerLogoWhite from '../../image/icons/logo_white.svg';
import deliveryIconWhite from '../../image/icons/delivery_icon-white.svg';
import busketIconWhite from '../../image/icons/cart_icon-white.svg';
import favouriteIconWhite from '../../image/icons/favourite_icon-white.svg';

import CatalogMenu from '../CatalogMenu/CatalogMenu';

import SearchBar from '../SearchBar/SearchBar';

import { useSlideContext } from '../../context/SlideContext';

interface HeaderProps {
  toggleWarningPopup: () => void;
}

const Header: FC<HeaderProps> = ({ toggleWarningPopup }) => {
  const [isVisible, setIsVisible] = useState(false);
  const context = useSlideContext();
  const { isLight } = context ?? { isLight: false };

  const handleClick = (): void => {
    setIsVisible((current) => !current);
  };

  const handleNavLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ): void => {
    event.preventDefault();
    toggleWarningPopup();
  };

  const location = useLocation();

  const logoSrc =
    location.pathname === '/main'
      ? !isLight
        ? headerLogo
        : headerLogoWhite
      : headerLogo;
  const busketSrc =
    location.pathname === '/main'
      ? !isLight
        ? busketIcon
        : busketIconWhite
      : busketIcon;
  const deliverySrc =
    location.pathname === '/main'
      ? !isLight
        ? deliveryIcon
        : deliveryIconWhite
      : deliveryIcon;
  const favouriteSrc =
    location.pathname === '/main'
      ? !isLight
        ? favouriteIcon
        : favouriteIconWhite
      : favouriteIcon;

  return (
    <>
      <header className='header'>
        <div className='header__container'>
          <Link to='/'>
            <img
              className='header__logo'
              src={logoSrc}
              alt='Перейти на главную'
            />
          </Link>

          {isVisible && <CatalogMenu />}

          <SearchBar />

          <button
            onClick={handleClick}
            className={`header__catalog-button ${
              location.pathname === '/main'
                ? !isLight
                  ? ''
                  : 'header__catalog-button_white'
                : ''
            }`}
          >
            Каталог
          </button>

          <nav className='header__navbar'>
            <NavLink
              className='header__navbar-link'
              to='/'
              onClick={handleNavLinkClick}
            >
              <img
                className='header__navbar-icon'
                src={deliverySrc}
                alt="Перейти в раздел 'Доставка'"
              />
            </NavLink>

            <NavLink className='header__navbar-link' to='/favourites'>
              <img
                className='header__navbar-icon'
                src={favouriteSrc}
                alt="Перейти в раздел 'Избранное'"
              />
            </NavLink>

            <NavLink className='header__navbar-link' to='/cart'>
              <img
                className='header__navbar-icon'
                src={busketSrc}
                alt="Перейти в раздел 'Корзина'"
              />
            </NavLink>
          </nav>
          <button
            className={`header__auth-button ${
              location.pathname === '/main'
                ? !isLight
                  ? ''
                  : 'header__auth-button_white'
                : ''
            }`}
          >
            Войти
          </button>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
