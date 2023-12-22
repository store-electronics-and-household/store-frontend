import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
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
import type { MediumCardProps } from '../../utils/types';
import { CartProvider } from '../../context/CartContext';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
  // subCategoriesList,
} from '../../utils/constants';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import { FavoritesProvider } from '../../context/FavouritesContext';
import { type IContext, initialUserContext, UserContext } from '../../context/UserContext';
import ChangePassword from '../ChangePassword/ChangePassword';
import Profile from '../Profile/Profile';
import Orders from '../Orders/Orders';
import { authUserByToken } from '../../utils/api/user-api';
import { WarningPopupProvider } from '../../context/WarningPopupContext';

const App: React.FC = () => {
  const [isSignInPopupOpen, setSignInPopupOpen] = useState<boolean>(false);
  const [isSignUpPopupOpen, setSignUpPopupOpen] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchRequest, setSearchRequest] = useState<string>('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchResults, setSearchResults] = useState<MediumCardProps[]>([]);

  // Context provider
  const [generalContext, setGeneralContext] = useState<IContext>(initialUserContext);
  // Context provider end

  const [isPasswordRecoveryPopupOpen, setPasswordRecoveryPopupOpen] =
    useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [goodsList, setGoodsList] = React.useState<MediumCardProps[]>();

  useEffect(() => {
    const token = localStorage.getItem('token') ?? '';
    authUserByToken(token)
      .then((res) => {
        setGeneralContext({
          ...generalContext,
          isLoggedIn: true,
          userId: res.id,
          email: res.email,
          userName: res.firstName,
        });
      })
      .catch((err) => {
        setGeneralContext(initialUserContext);
        localStorage.removeItem('token');
        console.error(`Токен просрочен или не найден - ${err}`);
      });
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleSearchCards = (array: MediumCardProps[]): void => {
    setSearchResults(array);
  };

  const handleSearch = (request: string): void => {
    setSearchRequest(request);
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

  const setGoodsForPayment = (data: MediumCardProps[]): void => {
    setGoodsList(data);
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
    // { path: 'categories/catalog/product', breadcrumb: productData.name },
    { path: '/payment', breadcrumb: 'Корзина' },
    // { path: '/favourites', breadcrumb: CustomPropsBreadcrumb, props: { someProp: 'Избранное' } },
    // { path: '/categories/:id', breadcrumb: DynamicUserBreadcrumb },
  ];

  return (
    <div className="App">
      <CartProvider>
        <FavoritesProvider>
          <WarningPopupProvider>
            <ScrollToTop>
              <UserContext.Provider value={generalContext}>
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Header
                        onOpenAuth={toggleSignInPopup}
                        handleSearch={handleSearch}
                        passSearchResults={handleSearchCards}
                      />
                      <WarningPopup
                        onOpenAuth={toggleSignInPopup}
                      />
                      <SignIn
                        onOpenSignIn={toggleSignInPopup}
                        isOpenSignIn={isSignInPopupOpen}
                        onOpenReg={toggleSignUpPopup}
                        onOpenRecovery={PasswordRecoveryPopup}
                        setGeneralContext={setGeneralContext}
                      />
                      <SignUp
                        onOpenSignUp={toggleSignUpPopup}
                        isOpenSignUp={isSignUpPopupOpen}
                        setGeneralContext={setGeneralContext}
                      />
                      <PasswordRecovery
                        isOpenPasswordRecovery={isPasswordRecoveryPopupOpen}
                        onOpenRecoveryPopup={PasswordRecoveryPopup}
                      />
                      <Footer/>
                    </>
                  }
                >
                  <Route
                    path="/main"
                    element={
                      <Main
                        passSearchResults={handleSearchCards}
                        handleSearch={handleSearch}
                      />
                    }
                  />
                  <Route
                    path="/about-company"
                    element={
                      <>
                        <Breadcrumbs crumbs={crumbs}/>
                        <AboutCompany/>
                      </>
                    }
                  />
                  <Route
                    path="/faq"
                    element={
                      <>
                        <Breadcrumbs crumbs={crumbs}/>
                        <Faq/>
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
                    element={
                      <>
                        <Breadcrumbs crumbs={crumbs} />
                        <PaymentsPage oldGoodsList={goodsList ?? []} />
                      </>
                    }
                  />
                  <Route
                    path="/categories/:subcategory"
                    element={
                      <>
                        <Breadcrumbs crumbs={crumbs}/>
                        <Categories/>
                      </>
                    }
                  >
                    <Route
                      path=":model"
                      element={
                        <>
                          <Catalog/>
                        </>
                      }
                    />
                  </Route>

                    <Route
                      path='/product'
                      element={
                        <>
                          <Breadcrumbs crumbs={crumbs}/>
                          <ProductPage/>
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
                      element={
                        <>
                          <Breadcrumbs crumbs={crumbs} />
                          <PaymentsPage oldGoodsList={goodsList ?? []} />
                        </>
                      }
                    />
                    <Route
                      path='/search-results'
                      element={
                        <>
                          <Breadcrumbs crumbs={crumbs} />
                          <SearchResults
                            searchRequest={searchRequest}
                            searchResults={searchResults}
                          />
                        </>
                      }
                    />
                    <Route
                      path='/profile'
                      element={<Profile setGeneralContext={setGeneralContext} />}
                    />
                    <Route
                      path='/profile/changepass'
                      element={
                        <ChangePassword setGeneralContext={setGeneralContext} />
                      }
                    />
                    <Route
                      path='/profile/orders'
                      element={<Orders setGeneralContext={setGeneralContext} />}
                    />
                    <Route path='/' element={<Navigate to='/main' replace />} />
                    <Route path='*' element={<NotFound />} />
                  </Route>
                </Routes>
              </UserContext.Provider>
            </ScrollToTop>
          </WarningPopupProvider>
        </FavoritesProvider>
      </CartProvider>
    </div>
  );
};

export default App;
