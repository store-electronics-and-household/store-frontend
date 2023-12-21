import React from 'react';
import DeliveryContent from './DeliveryContent';
import { mockedDeliveryData } from '../../utils/mocks/deliveryMockedData';

const Delivery: React.FC = () => {
  return (
    <>
      <section className='delivery'>
        <div className='delivery__container'>
          <h2 className='delivery__header'>Доставка</h2>
          <div className='delivery__content'>
            {mockedDeliveryData.map((content, key) => {
              return (
                <div key={key} className='delivery__info'>
                  <DeliveryContent
                    title={content.title}
                    icon={content.icon}
                    alt={content.alt}
                    description={content.description}
                    highlight={content.highlight}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Delivery;
