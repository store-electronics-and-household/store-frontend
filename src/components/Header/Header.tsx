import React, { useState } from 'react';
import type { FC } from 'react';

import { NavLink, Outlet, Link } from 'react-router-dom';

import headerLogo from '../../image/icons/logo.svg';
import deliveryIcon from '../../image/icons/delivery_icon.svg';
import busketIcon from '../../image/icons/busket_icon.svg';
import favouriteIcon from '../../image/icons/favourite_icon.svg';

import CatalogMenu from '../CatalogMenu/CatalogMenu';

import SearchBar from '../SearchBar/SearchBar';

interface HeaderProps {
  toggleWarningPopup: () => void;
}

const Header: FC<HeaderProps> = ({ toggleWarningPopup }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = (): void => {
    setIsVisible((current) => !current);
  };

  const handleNavLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ): void => {
    event.preventDefault();
    toggleWarningPopup();
  };

  return (
    <>
      <header className='header'>
        <div className='header__container'>
          <Link to='/'>
            <img
              className='header__logo'
              src={headerLogo}
              alt='Перейти на главную'
            />
          </Link>

          {isVisible && <CatalogMenu />}

          <button onClick={handleClick} className='header__catalog-button'>
            Каталог
          </button>

          <SearchBar />

          <nav className='header__navbar'>
            <NavLink
              className='header__navbar-link'
              to='/'
              onClick={handleNavLinkClick}
            >
              <img
                className='header__navbar-icon'
                src={deliveryIcon}
                alt="Перейти в раздел 'Доставка'"
              />
            </NavLink>

            <NavLink className='header__navbar-link' to='/favourites'>
              <img
                className='header__navbar-icon'
                src={favouriteIcon}
                alt="Перейти в раздел 'Избранное'"
              />
            </NavLink>

            <NavLink className='header__navbar-link' to='/cart'>
              <img
                className='header__navbar-icon'
                src={busketIcon}
                alt="Перейти в раздел 'Корзина'"
              />
            </NavLink>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
