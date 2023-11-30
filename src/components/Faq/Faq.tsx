import React from 'react';
import Accordion from '../Accordion/Accordion';
import { faqList } from '../../utils/constants';
import Breadcrumb from '../Breadcrumb/Breadcrumb';

const Faq: React.FC = () => {
  return (
    <>
      <Breadcrumb currentPlace='Часто задаваемые вопросы' />
      <section className='faq'>
        <h1 className='faq__header'>Часто задаваемые вопросы</h1>
        <Accordion faqList={faqList.deliveryFaq} headText='Доставка' />
        <Accordion
          faqList={faqList.characteristicFaq}
          headText='Наличие и характеристики товара'
        />
        <Accordion
          faqList={faqList.returnsFaq}
          headText='Обмен и возврат товара'
        />
      </section>
    </>
  );
};

export default Faq;
