import React from 'react';
import Slider from '../Slider/Slider';
import Discount from '../Discount/Discount';
import CategoriesMain from '../CategoriesMain/CategoriesMain';

const Main: React.FC = (_categoriesMain) => {
  return (
    <>
      <section className='main'>
        <Slider />
        <Discount />
        <CategoriesMain categoriesMain={[]} />
      </section>
    </>
  );
};

export default Main;
