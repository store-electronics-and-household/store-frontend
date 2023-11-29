import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../image/logo.svg';
import { contactsData } from '../../utils/constants';

const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <div className='footer__content'>
        <div className='footer__logo-area'>
          <img
            className='footer__logo'
            src={logo}
            alt='Логотип, магазин электроники'
          />
          <span className='footer__copyright'>
            © 2023 «Магазин электроники»
          </span>
        </div>
        <ul className='footer__contacts-list'>
          <li className='footer__contacts-item'>{ contactsData.phoneNumber }</li>
          <li className='footer__contacts-item'>{ contactsData.email }</li>
          <li className='footer__contacts-item'>{ contactsData.adress }</li>
        </ul>
        <nav className='footer__nav'>
          <NavLink className='footer__nav-link' to='/about-company'>
            О нас
          </NavLink>
          <NavLink className='footer__nav-link' to='/faq'>
            Часто задаваемые вопросы
          </NavLink>
          <NavLink
            className='footer__nav-link'
            to={require('../../utils/user-agreement.pdf')}
            target='_blank'
          >
            Пользовательское соглашение
          </NavLink>
          <NavLink
            className='footer__nav-link'
            to={require('../../utils/privacy-policy.pdf')}
            target='_blank'
          >
            Политика конфиденциальности
          </NavLink>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
