'use strict';
exports.__esModule = true;
var react_1 = require('react');
var react_router_dom_1 = require('react-router-dom');
var Header_1 = require('../Header/Header');
var Main_1 = require('../Main/Main');
var AboutCompany_1 = require('../AboutCompany/AboutCompany');
var Faq_1 = require('../Faq/Faq');
var Categories_1 = require('../Categories/Categories');
var Catalog_1 = require('../Catalog/Catalog');
var Delivery_1 = require('../Delivery/Delivery');
var Favourites_1 = require('../Favourites/Favourites');
var ProductPage_1 = require('../ProductPage/ProductPage');
var Cart_1 = require('../Cart/Cart');
var PaymentsPage_1 = require('../PaymentsPage/PaymentsPage');
var NotFound_1 = require('../NotFound/NotFound');
var Footer_1 = require('../Footer/Footer');
var WarningPopup_1 = require('../WarningPopup/WarningPopup');
var SignIn_1 = require('../SignIn/SignIn');
var SignUp_1 = require('../signup/SignUp');
var PasswordRecovery_1 = require('../PasswordRecovery/PasswordRecovery');
var ScrollToTop_1 = require('../ScrollToTop/ScrollToTop');
var SearchResults_1 = require('../SearchResults/SearchResults');
var constants_1 = require('../../utils/constants');
var user_api_1 = require('../../utils/api/user-api');
var App = function () {
  // const [isLogged, setIsLogged] = useState<boolean>(false);
  var _a = react_1.useState(false),
    isWarningPopupOpen = _a[0],
    setWarningPopupOpen = _a[1];
  var _b = react_1.useState(false),
    isSignInPopupOpen = _b[0],
    setSignInPopupOpen = _b[1];
  var _c = react_1.useState(false),
    isSignUpPopupOpen = _c[0],
    setSignUpPopupOpen = _c[1];
  var _d = react_1.useState(false),
    isPasswordRecoveryPopupOpen = _d[0],
    setPasswordRecoveryPopupOpen = _d[1];
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  var _e = react_1['default'].useState(),
    goodsList = _e[0],
    setGoodsList = _e[1];
  var toggleWarningPopup = function () {
    setWarningPopupOpen(!isWarningPopupOpen);
  };
  var toggleSignInPopup = function () {
    setSignInPopupOpen(!isSignInPopupOpen);
  };
  var toggleSignUpPopup = function () {
    setSignUpPopupOpen(!isSignUpPopupOpen);
  };
  var PasswordRecoveryPopup = function () {
    setPasswordRecoveryPopupOpen(!isPasswordRecoveryPopupOpen);
  };
  var setGoodsForPayment = function (data) {
    setGoodsList(data);
  };
  var navigate = react_router_dom_1.useNavigate();
  var handleRegister = function (email, password) {
    user_api_1
      .register(email, password)
      .then(function (res) {
        console.log(res);
      })
      ['catch'](function (error) {
        console.log(error);
      });
  };
  var handleLogin = function (email, password) {
    user_api_1
      .authorize(email, password)
      .then(function (data) {
        localStorage.setItem('token', data.token);
        console.log(data);
        // setIsLogged(true);
        navigate('/', { replace: true });
      })
      ['catch'](function (error) {
        console.log(error);
      });
  };
  var handleChangePassword = function (email, password) {
    user_api_1
      .changePassword(email, password)
      .then(function (data) {
        console.log(data);
      })
      ['catch'](function (error) {
        console.log(error);
      });
  };
  return react_1['default'].createElement(
    'div',
    { className: 'App' },
    react_1['default'].createElement(
      ScrollToTop_1['default'],
      null,
      react_1['default'].createElement(
        react_router_dom_1.Routes,
        null,
        react_1['default'].createElement(
          react_router_dom_1.Route,
          {
            path: '/',
            element: react_1['default'].createElement(
              react_1['default'].Fragment,
              null,
              react_1['default'].createElement(Header_1['default'], {
                toggleWarningPopup: toggleWarningPopup,
              }),
              react_1['default'].createElement(WarningPopup_1['default'], {
                isOpen: isWarningPopupOpen,
                onOpenWarningPopup: toggleWarningPopup,
                onOpenAuth: toggleSignInPopup,
              }),
              react_1['default'].createElement(SignIn_1['default'], {
                onOpenSignIn: toggleSignInPopup,
                isOpenSignIn: isSignInPopupOpen,
                onOpenReg: toggleSignUpPopup,
                onOpenRecovery: PasswordRecoveryPopup,
                onLogin: handleLogin,
              }),
              react_1['default'].createElement(SignUp_1['default'], {
                onOpenSignUp: toggleSignUpPopup,
                isOpenSignUp: isSignUpPopupOpen,
                onRegistr: handleRegister,
              }),
              react_1['default'].createElement(PasswordRecovery_1['default'], {
                isOpenPasswordRecovery: isPasswordRecoveryPopupOpen,
                onOpenRecoveryPopup: PasswordRecoveryPopup,
                onChangePassword: handleChangePassword,
              }),
              react_1['default'].createElement(Footer_1['default'], null)
            ),
          },
          react_1['default'].createElement(react_router_dom_1.Route, {
            path: '/main',
            element: react_1['default'].createElement(Main_1['default'], null),
          }),
          react_1['default'].createElement(react_router_dom_1.Route, {
            path: '/about-company',
            element: react_1['default'].createElement(
              AboutCompany_1['default'],
              null
            ),
          }),
          react_1['default'].createElement(react_router_dom_1.Route, {
            path: '/delivery',
            element: react_1['default'].createElement(
              Delivery_1['default'],
              null
            ),
          }),
          react_1['default'].createElement(react_router_dom_1.Route, {
            path: '/faq',
            element: react_1['default'].createElement(Faq_1['default'], null),
          }),
          react_1['default'].createElement(react_router_dom_1.Route, {
            path: '/categories',
            element: react_1['default'].createElement(
              Categories_1['default'],
              null
            ),
          }),
          react_1['default'].createElement(react_router_dom_1.Route, {
            path: '/catalog',
            element: react_1['default'].createElement(
              Catalog_1['default'],
              null
            ),
          }),
          react_1['default'].createElement(react_router_dom_1.Route, {
            path: '/favourites',
            element: react_1['default'].createElement(
              Favourites_1['default'],
              null
            ),
          }),
          react_1['default'].createElement(react_router_dom_1.Route, {
            path: '/product',
            element: react_1['default'].createElement(
              ProductPage_1['default'],
              {
                product: constants_1.productData,
                attributes: constants_1.productAttributes,
              }
            ),
          }),
          react_1['default'].createElement(react_router_dom_1.Route, {
            path: '/cart',
            element: react_1['default'].createElement(Cart_1['default'], {
              onCheckoutClick: setGoodsForPayment,
            }),
          }),
          react_1['default'].createElement(react_router_dom_1.Route, {
            path: '/payment',
            element: react_1['default'].createElement(
              PaymentsPage_1['default'],
              {
                GoodsList:
                  goodsList !== null && goodsList !== void 0 ? goodsList : [],
              }
            ),
          }),
          react_1['default'].createElement(react_router_dom_1.Route, {
            path: '/search-results',
            element: react_1['default'].createElement(
              SearchResults_1['default'],
              null
            ),
          }),
          react_1['default'].createElement(react_router_dom_1.Route, {
            path: '/',
            element: react_1['default'].createElement(
              react_router_dom_1.Navigate,
              { to: '/main', replace: true }
            ),
          })
        ),
        react_1['default'].createElement(react_router_dom_1.Route, {
          path: '*',
          element: react_1['default'].createElement(
            NotFound_1['default'],
            null
          ),
        })
      )
    )
  );
};
exports['default'] = App;
