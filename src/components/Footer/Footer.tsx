import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <div className='footer__content'>
        <div className='footer__logo-area'>
          <Link className='footer__logo-link' to='/'>
            ЛОГОТИП
            {/* <img src='#' alt='Логотип, магазин электроники' /> */}
          </Link>
          <span className='footer__copyright'>
            © 2023 «Магазин электроники»
          </span>
        </div>
        <nav className='footer__nav'>
          <NavLink className='footer__nav-link' to='/about-company'>
            О нас
          </NavLink>
          <NavLink className='footer__nav-link' to='/contacts'>
            Контакты
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
