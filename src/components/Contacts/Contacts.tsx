import React from 'react';
import './Contacts.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import mapImg from '../../image/map.png';
import { contactsData } from '../../utils/constants';

const Contacts: React.FC = () => {
  return (
    <>
      <Header />
      <section className='contacts'>
        <h1 className='contacts__header'>Контакты</h1>
        <div className='contacts__container'>
          <p className='contacts__info'>{contactsData.phoneNumber}</p>
          <p className='contacts__phone-time'>
            для заказов с доставкой по территории РФ принимаем звонки с 9:00 до
            22:00 по Мск
          </p>
        </div>
        <div className='contacts__container'>
          <p className='contacts__info'>{contactsData.email}</p>
          <p className='contacts__phone-time'>
            для заказов с доставкой по территории РФ принимаем звонки с 9:00 до
            22:00 по Мск
          </p>
        </div>
        <div className='contacts__map-block'>
          <p className='contacts__adress'>{contactsData.adress}</p>
          <img
            className='contacts__map'
            src={mapImg}
            alt='карта проезда, адрес'
          />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contacts;
