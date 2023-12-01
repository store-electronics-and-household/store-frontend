import React from 'react';

import carIcon from '../../image/icons/car_icon.svg';
import deliveryIcon from '../../image/icons/delivery_icon.svg';
import globalIcon from '../../image/icons/global_icon.svg';

const Delivery: React.FC = () => {
  return (
    <>
      <section className='delivery'>
        <div className='delivery__container'>
            <h2 className='delivery__header'>Доставка</h2>
            <div className='delivery__content'>
              <div className='delivery__info'>
                  <img
                    className='delivery__info-icon'
                    src={carIcon}
                    alt="Самовывоз"
                  />
                  <div className='delivery__info-wrapper'>
                    <h3 className='delivery__info-title'>Самовывоз из магазина</h3>
                    <span className='delivery__info-description'>Заказ можно забрать в нашем магазине в Санкт-Петербурге. Перед приездом необходимо зарезервировать товар.</span>
                    <span className='delivery__info-highlight'>Самовывоз из магазина: бесплатно</span>
                  </div>
              </div>
              <div className='delivery__info'>
                 <img
                    className='delivery__info-icon'
                    src={deliveryIcon}
                    alt="Самовывоз"
                  />
                  <div className='delivery__info-wrapper'>
                    <h3 className='delivery__info-title'>Доставка курьером</h3>
                    <span className='delivery__info-description'>По Санкт-Петербургу и пригородам курьер доставит заказ в удобное для вас время. Возможна экспресс доставка в течении 3х часов.</span>
                    <span className='delivery__info-highlight'>Доставка по Петербургу стандартная: 300 ₽</span>
                    <span className='delivery__info-highlight'>Экспресс доставка по Петербургу: 500 ₽</span>
                  </div>
              </div>
              <div className='delivery__info'>
                  <img
                    className='delivery__info-icon'
                    src={globalIcon}
                    alt="Самовывоз"
                  />
                <div className='delivery__info-wrapper'>
                  <h3 className='delivery__info-title'>Доставка в пункт выдачи</h3>
                  <span className='delivery__info-description'>Вы можете забрать свой заказ в одном из пунктов выдачи СДЭК в вашем городе или оформить доставку до двери.</span>
                  <span className='delivery__info-highlight'>Доставка до пункта выдачи: 200 ₽</span>
                </div>
              </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default Delivery;
