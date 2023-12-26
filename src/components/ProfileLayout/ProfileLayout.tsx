import React, { useState, type ReactNode, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ReactComponent as ProfileIcon } from '../../image/icons/profile-icon.svg';
import { ReactComponent as OrdersIcon } from '../../image/icons/orders-icon.svg';
import { ReactComponent as PasswordIcon } from '../../image/icons/password-key.svg';
import { ReactComponent as DeleteIcon } from '../../image/icons/delete-icon.svg';
import { ReactComponent as ExitIcon } from '../../image/icons/exit-icon.svg';
import type { IContext } from '../../context/UserContext';
import type { IPopupOptions } from '../ProfileLayoutPopup/ProfileLayoutPopup';
import ProfileLayoutPopup from '../ProfileLayoutPopup/ProfileLayoutPopup';

const ProfileLayout = ({
  children,
  setGeneralContext,
}: {
  children: ReactNode;
  setGeneralContext?: (args: IContext) => void;
}): JSX.Element => {
  const location = useLocation();
  const path = location.pathname;
  const [isOpened, setIsOpened] = useState(false);
  const closeFunction = (): void => {
    setIsOpened(false);
  };

  const popupOptions = useRef<IPopupOptions>({
    buttonText: '',
    buttonClass: '',
    title: '',
    action: 'delete',
    closeFunction,
    setContextFunction: setGeneralContext,
  });

  const onDeleteUser = (): void => {
    setIsOpened(true);
    popupOptions.current = {
      buttonClass: 'profile-popup__submit_delete',
      buttonText: 'Удалить аккаунт',
      title: 'Вы уверены, что хотите удалить аккаунт?',
      action: 'delete',
      closeFunction,
      setContextFunction: setGeneralContext,
    };
  };

  const onUnathorize = (): void => {
    setIsOpened(true);
    popupOptions.current = {
      buttonClass: 'profile-popup__submit_exit',
      buttonText: 'Выйти из аккаунта',
      title: 'Вы уверены, что хотите выйти?',
      action: 'exit',
      closeFunction,
      setContextFunction: setGeneralContext,
    };
  };

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
            <button onClick={onDeleteUser} className='profile__sidemenu-link'>
              <DeleteIcon /> Удалить аккаунт
            </button>
            <button onClick={onUnathorize} className='profile__sidemenu-link'>
              <ExitIcon /> Выйти
            </button>
          </div>
        )}
      </div>
      {children}
      {isOpened && <ProfileLayoutPopup options={popupOptions.current} />}
    </section>
  );
};

export default ProfileLayout;
