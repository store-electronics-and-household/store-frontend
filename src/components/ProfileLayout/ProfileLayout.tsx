import React, { type ReactNode } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ReactComponent as ProfileIcon } from '../../image/icons/profile-icon.svg';
import { ReactComponent as OrdersIcon } from '../../image/icons/orders-icon.svg';
import { ReactComponent as PasswordIcon } from '../../image/icons/password-key.svg';
import { ReactComponent as DeleteIcon } from '../../image/icons/delete-icon.svg';
import { ReactComponent as ExitIcon } from '../../image/icons/exit-icon.svg';

const ProfileLayout = ({ children }: { children: ReactNode }): JSX.Element => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <section className='profile'>
      <div className='profile__sidemenu'>
        <nav className='profile__sidemenu-options'>
          <NavLink
            to={'/profile'}
            className={`profile__sidemenu-link ${
              path === '/profile' && 'profile__sidemenu-link_active'
            }`}
          >
            <ProfileIcon /> Мой аккаунт
          </NavLink>
          <NavLink
            to={'/profile/orders'}
            className={`profile__sidemenu-link ${
              path === '/profile/orders' && 'profile__sidemenu-link_active'
            }`}
          >
            <OrdersIcon /> Заказы
          </NavLink>
        </nav>

        {path !== '/profile/orders' && (
          <div className='profile__sidemenu-options'>
            <NavLink
              to='/profile/changepass'
              className={`profile__sidemenu-link ${
                path === '/profile/changepass' &&
                'profile__sidemenu-link_active'
              }`}
            >
              <PasswordIcon /> Сменить пароль
            </NavLink>
            <button className='profile__sidemenu-link'>
              <DeleteIcon /> Удалить аккаунт
            </button>
            <button className='profile__sidemenu-link'>
              <ExitIcon /> Выйти
            </button>
          </div>
        )}
      </div>
      {children}
    </section>
  );
};

export default ProfileLayout;
