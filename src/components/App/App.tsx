import React from 'react';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Main from '../Main/Main';
import AboutCompany from '../AboutCompany/AboutCompany';
import Contacts from '../Contacts/Contacts';
import Faq from '../Faq/Faq';
import Categories from '../Categories/Categories';
import Catalog from '../Catalog/Catalog';
import Delivery from '../Delivery/Delivery';
import Favourites from '../Favourites/Favourites';
import ProductPage from '../ProductPage/ProductPage';
import Basket from '../Basket/Basket';
import PaymentsPage from '../PaymentsPage/PaymentsPage';

import NotFound from '../NotFound/NotFound';

const App: React.FC = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/main' element={<Main />} />
        <Route path='/about-company' element={<AboutCompany />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/delivery' element={<Delivery />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/favourites' element={<Favourites />} />
        <Route path='/product' element={<ProductPage />} />
        <Route path='/basket' element={<Basket />} />
        <Route path='/payment' element={<PaymentsPage />} />
        <Route path='/' element={<Navigate to='/main' replace />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
