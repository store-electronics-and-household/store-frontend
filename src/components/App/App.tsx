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
import type { MediumCardProps, ProductDataType } from '../../utils/types';
import { CartProvider } from '../../context/CartContext';
import { productData, productAttributes, subCategoriesList } from '../../utils/constants';
import { changePassword } from '../../utils/api/user-api';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import { getProductDataById } from '../../utils/api/product-api';

const App: React.FC = () => {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [isWarningPopupOpen, setWarningPopupOpen] = useState<boolean>(false);
  const [isSignInPopupOpen, setSignInPopupOpen] = useState<boolean>(false);
  const [isSignUpPopupOpen, setSignUpPopupOpen] = useState<boolean>(false);
  const [productById, setProductById] = useState<ProductDataType>();
  const [searchRequest, setSearchRequest] = useState<string>('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchResults, setSearchResults] = useState<MediumCardProps[]>([]);

  const [isPasswordRecoveryPopupOpen, setPasswordRecoveryPopupOpen] =
    useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [goodsList, setGoodsList] = React.useState<MediumCardProps[]>();
  const toggleWarningPopup = (): void => {
    setWarningPopupOpen(!isWarningPopupOpen);
  };

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

  const handleChangePassword = (email: string, password: string): void => {
    changePassword(email, password)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getProductById = (productId: number): void => {
    getProductDataById(productId)
      .then((data) => {
        console.log(data);
        setProductById(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getProductById(1);
  }, []);

  console.log(productById);

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
    { path: 'categories/catalog/product', breadcrumb: productData.name },
    { path: '/payment', breadcrumb: 'Корзина' },
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
                  <Header
                    toggleWarningPopup={toggleWarningPopup}
                    onOpenAuth={toggleSignInPopup}
                    isLogged={isLogged}
                    handleSearch={handleSearch}
                    passSearchResults={handleSearchCards}
                  />
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
                    setIsLogged={setIsLogged}
                  />
                  <SignUp
                    onOpenSignUp={toggleSignUpPopup}
                    isOpenSignUp={isSignUpPopupOpen}
                    setIsLogged={setIsLogged}
                  />
                  <PasswordRecovery
                    isOpenPasswordRecovery={isPasswordRecoveryPopupOpen}
                    onOpenRecoveryPopup={PasswordRecoveryPopup}
                    onChangePassword={handleChangePassword}
                  />
                  <Footer/>
                </>
              }
            >
              <Route
                path='/main'
                element={
                  <Main
                    passSearchResults={handleSearchCards}
                    handleSearch={handleSearch}
                  />
                }
              />
              <Route
                path='/about-company'
                element={
                  <>
                    <Breadcrumbs crumbs={crumbs}/>
                    <AboutCompany/>
                  </>
                }
              />
              <Route
                path='/faq'
                element={
                  <>
                    <Breadcrumbs crumbs={crumbs}/>
                    <Faq/>
                  </>
                }
              />
              <Route
                path='/categories'
                element={
                  <>
                    <Breadcrumbs crumbs={crumbs}/>
                    <Categories subCategoriesList={subCategoriesList} product={[]}/>
                  </>
                }
              />
              <Route
                path='/categories/catalog'
                element={
                  <>
                    <Breadcrumbs crumbs={crumbs}/>
                    <Catalog/>
                  </>
                }
              />
              <Route
                path='/categories/catalog/product'
                element={
                  <>
                    <Breadcrumbs crumbs={crumbs}/>
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
                    <Breadcrumbs crumbs={crumbs}/>
                    <Delivery/>
                  </>
                }
              />
              <Route
                path='/favourites'
                element={
                  <>
                    <Breadcrumbs crumbs={crumbs}/>
                    <Favourites/>
                  </>
                }
              />
              <Route
                path='/cart'
                element={
                  <>
                    <Breadcrumbs crumbs={crumbs}/>
                    <Cart onCheckoutClick={setGoodsForPayment}/>
                  </>
                }
              />
              <Route
                path='/payment'
                element={
                  <>
                    <Breadcrumbs crumbs={crumbs} />
                    <PaymentsPage GoodsList={goodsList ?? []} />
                  </>
                }
              />
              <Route
                path='/search-results'
                element={
                  <>
                    <Breadcrumbs crumbs={crumbs}/>
                    <SearchResults
                      searchRequest={searchRequest}
                      searchResults={searchResults}
                    />
                  </>
                }
              />
              <Route path='/' element={<Navigate to='/main' replace/>}/>
              <Route path='*' element={<NotFound/>}/>
            </Route>
          </Routes>
        </ScrollToTop>
      </CartProvider>
    </div>
  );
};

export default App;
