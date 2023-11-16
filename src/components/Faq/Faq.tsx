import React from 'react';
import './Faq.css';
import Accordion from '../Accordion/Accordion';
import { faqList } from '../../utils/constants';

const Faq: React.FC = () => {
  return <section className='faq'>
    <h1 className='faq__header'>Частые вопросы</h1>
    <Accordion faqList={ faqList.deliveryFaq } headText='Доставка:' />
    <Accordion faqList={ faqList.characteristicFaq} headText='Наличие и характеристики товара:' />
    <Accordion faqList={ faqList.returnsFaq} headText='Обмен и возврат товара:' />
  </section>;
};

export default Faq;
