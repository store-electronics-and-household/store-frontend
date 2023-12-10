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

import { CartProvider } from '../../context/CartContext';
import { productData, productAttributes } from '../../utils/constants';
import { authorize, register, changePassword } from '../../utils/api/user-api';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';

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

  const handleChangePassword = (email: string, password: string): void => {
    changePassword(email, password)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const CustomPropsBreadcrumb = ({ someProp }: { someProp: string }): JSX.Element => <span>{someProp}</span>;
  // const DynamicUserBreadcrumb = ({ match }) => (
  //   <span>{userNamesById[match.params.userId]}</span>
  // );

  const crumbs = [
    { path: '/about-company', breadcrumb: 'О нас' },
    { path: '/faq', breadcrumb: 'Часто задаваемые вопросы' },
    { path: '/favourites', breadcrumb: 'Избранное' },
    { path: '/delivery', breadcrumb: 'Доставка' },
    { path: '/cart', breadcrumb: 'Корзина' },
    { path: '/search-results', breadcrumb: 'Результаты поиска' },
    // { path: '/favourites', breadcrumb: CustomPropsBreadcrumb, props: { someProp: 'Избранное' } },
    // { path: '/categories/:id', breadcrumb: DynamicUserBreadcrumb },
  ];

  return (
    <div className='App'>
      <CartProvider>
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
                    onChangePassword={handleChangePassword}
                  />
                  <Footer />
                </>
              }
            >
              <Route path='/main' element={<Main />} />
              <Route
                path='/about-company'
                element={
                  <>
                    <Breadcrumbs crumbs={crumbs} />
                    <AboutCompany />
                  </>
                }
              />
              <Route
                path='/faq'
                element={
                  <>
                    <Breadcrumbs crumbs={crumbs} />
                    <Faq />
                  </>
                }
              />
              <Route
                path='/categories'
                element={
                  <>
                    <Breadcrumbs crumbs={crumbs} />
                    <Categories subCategoriesList={[]} product={[]} />
                  </>
                }
              />
              <Route
                path='/categories/catalog'
                element={
                  <>
                    <Breadcrumbs crumbs={crumbs} />
                    <Catalog />
                  </>
                }
              />
              <Route
                path='/categories/catalog/product'
                element={
                  <>
                    <Breadcrumbs crumbs={crumbs} />
                    <ProductPage
                      product={productData}
                      attributes={productAttributes}
                    />
                  </>
                }
              />
              <Route
                path='/delivery'
                element={
                  <>
                    <Breadcrumbs crumbs={crumbs} />
                    <Delivery />
                  </>
                }
              />
              <Route
                path='/favourites'
                element={
                  <>
                    <Breadcrumbs crumbs={crumbs} />
                    <Favourites />
                  </>
                }
              />
              <Route
                path='/cart'
                element={
                  <>
                    <Breadcrumbs crumbs={crumbs} />
                    <Cart onCheckoutClick={setGoodsForPayment} />
                  </>
                }
              />
              <Route
                path='/payment'
                element={<PaymentsPage GoodsList={goodsList ?? []} />}
              />
              <Route
                path='/search-results'
                element={
                  <>
                    <Breadcrumbs crumbs={crumbs} />
                    <SearchResults />
                  </>
                }
              />
              <Route path='/' element={<Navigate to='/main' replace />} />
            </Route>
            <Route path='*' element={<NotFound />} />
          </Routes>
        </ScrollToTop>
      </CartProvider>
    </div>
  );
};

export default App;
