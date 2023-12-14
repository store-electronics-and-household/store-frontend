/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { useState, useEffect, useRef } from 'react';
import type { FC } from 'react';

import { NavLink, Outlet, Link, useLocation } from 'react-router-dom';

import deliveryIcon from '../../image/icons/delivery_icon.svg';
import busketIcon from '../../image/icons/busket_icon.svg';
import favouriteIcon from '../../image/icons/favourite_icon.svg';
// import profileIcon from '../../image/icons/profile_icon.svg';

import headerLogoWhite from '../../image/icons/header_logo_white.svg';
import headerLogoColor from '../../image/icons/header_logo_color.svg';

import deliveryIconWhite from '../../image/icons/delivery_icon-white.svg';
import busketIconWhite from '../../image/icons/cart_icon-white.svg';
import favouriteIconWhite from '../../image/icons/favourite_icon-white.svg';

import CatalogMenu from '../CatalogMenu/CatalogMenu';

import SearchBar from '../SearchBar/SearchBar';

import { useSlideContext } from '../../context/SlideContext';
import { useCartContext } from '../../context';

interface HeaderProps {
  toggleWarningPopup: () => void;
  isLogged: boolean;
}

const Header: FC<HeaderProps> = ({ toggleWarningPopup, isLogged }) => {
  const [isVisible, setIsVisible] = useState<null | boolean>(null);
  // console.log(isLogged);

  const context = useSlideContext();
  const { totalCount } = useCartContext();

  const { isLight } = context ?? { isLight: false };

  const handleClick = (): void => {
    setIsVisible(!isVisible);
  };

  const catalogRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent): void => {
      if (catalogRef?.current && !catalogRef.current.contains(e.target as Node)) {
        setIsVisible(false);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  const handleNavLinkClick =
    (): void => {
      // event.preventDefault();
      toggleWarningPopup();
    };

  const location = useLocation();

  const logoSrc =
    location.pathname === '/main'
      ? isLight
        ? headerLogoColor
        : headerLogoWhite
      : headerLogoColor;
  const busketSrc =
    location.pathname === '/main'
      ? isLight
        ? busketIcon
        : busketIconWhite
      : busketIcon;
  const deliverySrc =
    location.pathname === '/main'
      ? isLight
        ? deliveryIcon
        : deliveryIconWhite
      : deliveryIcon;
  const favouriteSrc =
    location.pathname === '/main'
      ? isLight
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

          <CatalogMenu visible={isVisible} catalogRef={catalogRef}/>

          <SearchBar />

          <button
            onClick={() => {
              handleClick();
            }}
            className={`header__catalog-button ${
              location.pathname === '/main'
                ? isLight
                  ? ''
                  : 'header__catalog-button_white'
                : ''
            }`}
          >
            Каталог
          </button>

          <nav className='header__navbar'>
            <NavLink className='header__navbar-link' to='/delivery'>
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
              <div className='header__navbar-icon-count'>{totalCount}</div>
            </NavLink>
            {/* for Auth
            <NavLink className='header__navbar-link' to='/'>
              <img
                className='header__navbar-icon'
                src={profileIcon}
                alt="Перейти в раздел 'Профиль'"
              />
            </NavLink>
            */}
          </nav>
          <button
            onClick={() => {
              handleNavLinkClick();
            }}
            className={`header__auth-button ${
              location.pathname === '/main'
                ? isLight
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
