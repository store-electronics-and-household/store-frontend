import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Accordion from '../Accordion/Accordion';
import { faqList } from '../../utils/constants';
import Breadcrumb from '../Breadcrumb/Breadcrumb';

const Faq: React.FC = () => {
  return (
    <>
      <Header />
      <section className='faq'>
        <Breadcrumb currentPlace='Часто задаваемые вопросы' />
        <div className='faq__container'>
          <h1 className='faq__header'>Частые вопросы</h1>
          <Accordion faqList={faqList.deliveryFaq} headText='Доставка:' />
          <Accordion
            faqList={faqList.characteristicFaq}
            headText='Наличие и характеристики товара:'
          />
          <Accordion
            faqList={faqList.returnsFaq}
            headText='Обмен и возврат товара:'
          />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Faq;
