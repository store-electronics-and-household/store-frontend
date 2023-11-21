import React from 'react';
import './Main.css';
import Slider from '../Slider/Slider';
import Discount from '../Discount/Discount';
import CategoriesMain from '../CategoriesMain/CategoriesMain';
import WarningPopup from '../WarningPopup/WarningPopup';

const Main: React.FC = () => {
  return (
    <>
      <section className='main'>
        <Slider />
        <Discount />
        <CategoriesMain />
        <WarningPopup />
      </section>
    </>
  );
};

export default Main;
