import React from 'react';
import Slider from '../Slider/Slider';
import Discount from '../Discount/Discount';
import CategoriesMain from '../CategoriesMain/CategoriesMain';

const Main: React.FC = () => {
  return (
    <>
      <section className='main'>
        <Slider />
        <Discount />
        <CategoriesMain id={0} title={''} img={''} url={''} />
      </section>
    </>
  );
};

export default Main;
