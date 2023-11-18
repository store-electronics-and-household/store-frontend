import React from 'react';
import './Main.css';
import Slider from '../Slider/Slider';
import CategoriesMain from '../CategoriesMain/CategoriesMain';

const Main: React.FC = () => {
  return (
    <>
      <section className='main'>
        <Slider />
        <CategoriesMain />
      </section>
    </>
  );
};

export default Main;
