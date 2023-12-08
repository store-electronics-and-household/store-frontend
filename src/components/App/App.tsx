import React, { useState } from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import AboutCompany from '../AboutCompany/AboutCompany';
import Faq from '../Faq/Faq';
import Categories from '../Categories/Categories';
import Catalog from '../Catalog/Catalog';
import Delivery from '../Delivery/Delivery';
import Favourites from '../Favourites/Favourites';
import ProductPage from '../ProductPage/ProductPage';
import Cart from '../Cart/Cart';
import PaymentsPage from '../PaymentsPage/PaymentsPage';
import NotFound from '../NotFound/NotFound';
import Footer from '../Footer/Footer';
import WarningPopup from '../WarningPopup/WarningPopup';
import SignIn from '../SignIn/SignIn';
import SignUp from '../signup/SignUp';
import PasswordRecovery from '../PasswordRecovery/PasswordRecovery';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import SearchResults from '../SearchResults/SearchResults';
// import { paymentPageData } from '../../utils/constants';
import { type GoodsListProps } from '../../utils/types';
import { productData, productAttributes } from '../../utils/constants';
import { authorize, register } from '../../utils/api/user-api';

const App: React.FC = () => {
  // const [isLogged, setIsLogged] = useState<boolean>(false);
  const [isWarningPopupOpen, setWarningPopupOpen] = useState<boolean>(false);
  const [isSignInPopupOpen, setSignInPopupOpen] = useState<boolean>(false);
  const [isSignUpPopupOpen, setSignUpPopupOpen] = useState<boolean>(false);
  const [isPasswordRecoveryPopupOpen, setPasswordRecoveryPopupOpen] =
    useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [goodsList, setGoodsList] = React.useState<GoodsListProps[]>();
  const toggleWarningPopup = (): void => {
    setWarningPopupOpen(!isWarningPopupOpen);
  };

  const toggleSignInPopup = (): void => {
    setSignInPopupOpen(!isSignInPopupOpen);
  };

  const toggleSignUpPopup = (): void => {
    setSignUpPopupOpen(!isSignUpPopupOpen);
  };

  const PasswordRecoveryPopup = (): void => {
    setPasswordRecoveryPopupOpen(!isPasswordRecoveryPopupOpen);
  };

  const setGoodsForPayment = (data: GoodsListProps[]): void => {
    setGoodsList(data);
  };

  const navigate = useNavigate();

  const handleRegister = (email: string, password: string): void => {
    register(email, password)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLogin = (email: string, password: string): void => {
    authorize(email, password)
      .then((data) => {
        localStorage.setItem('token', data.token);
        console.log(data);
        // setIsLogged(true);
        navigate('/', { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='App'>
      <ScrollToTop>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Header toggleWarningPopup={toggleWarningPopup} />
                <WarningPopup
                  isOpen={isWarningPopupOpen}
                  onOpenWarningPopup={toggleWarningPopup}
                  onOpenAuth={toggleSignInPopup}
                />
                <SignIn
                  onOpenSignIn={toggleSignInPopup}
                  isOpenSignIn={isSignInPopupOpen}
                  onOpenReg={toggleSignUpPopup}
                  onOpenRecovery={PasswordRecoveryPopup}
                  onLogin={handleLogin}
                />
                <SignUp
                  onOpenSignUp={toggleSignUpPopup}
                  isOpenSignUp={isSignUpPopupOpen}
                  onRegistr={handleRegister}
                />
                <PasswordRecovery
                  isOpenPasswordRecovery={isPasswordRecoveryPopupOpen}
                  onOpenRecoveryPopup={PasswordRecoveryPopup}
                />
                <Footer />
              </>
            }
          >
            <Route path='/main' element={<Main />} />
            <Route path='/about-company' element={<AboutCompany />} />
            <Route path='/delivery' element={<Delivery />} />
            <Route path='/faq' element={<Faq />} />
            <Route path='/categories' element={<Categories />} />
            <Route path='/catalog' element={<Catalog />} />
            <Route path='/favourites' element={<Favourites />} />
            <Route
              path='/product'
              element={
                <ProductPage
                  product={productData}
                  attributes={productAttributes}
                />
              }
            />
            <Route
              path='/cart'
              element={<Cart onCheckoutClick={setGoodsForPayment} />}
            />
            <Route
              path='/payment'
              element={<PaymentsPage GoodsList={goodsList ?? []} />}
            />
            <Route path='/search-results' element={<SearchResults />} />
            <Route path='/' element={<Navigate to='/main' replace />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </ScrollToTop>
    </div>
  );
};

export default App;
