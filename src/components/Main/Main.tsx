import React from 'react';
import './Main.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Slider from '../Slider/Slider';
import Discount from '../Discount/Discount';
import CategoriesMain from '../CategoriesMain/CategoriesMain';

const Main: React.FC = () => {
  return (
    <>
      <Header />
      <section className='main'>
        <Slider />
        <Discount />
        <CategoriesMain />
      </section>
      <Footer />
    </>
  );
};

export default Main;
