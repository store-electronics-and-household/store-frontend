import React from 'react';
import './Main.css';
import Slider from '../Slider/Slider';
import Discount from '../Discount/Discount';

const Main: React.FC = () => {
  return (
    <section className='main'>
      <Slider />
      <Discount />
    </section>
  );
};

export default Main;
