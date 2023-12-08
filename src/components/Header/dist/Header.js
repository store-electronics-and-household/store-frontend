'use strict';
exports.__esModule = true;
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
var react_1 = require('react');
var react_router_dom_1 = require('react-router-dom');
var logo_black_svg_1 = require('../../image/icons/logo_black.svg');
var delivery_icon_svg_1 = require('../../image/icons/delivery_icon.svg');
var busket_icon_svg_1 = require('../../image/icons/busket_icon.svg');
var favourite_icon_svg_1 = require('../../image/icons/favourite_icon.svg');
var logo_white_svg_1 = require('../../image/icons/logo_white.svg');
var delivery_icon_white_svg_1 = require('../../image/icons/delivery_icon-white.svg');
var cart_icon_white_svg_1 = require('../../image/icons/cart_icon-white.svg');
var favourite_icon_white_svg_1 = require('../../image/icons/favourite_icon-white.svg');
var CatalogMenu_1 = require('../CatalogMenu/CatalogMenu');
var SearchBar_1 = require('../SearchBar/SearchBar');
var SlideContext_1 = require('../../context/SlideContext');
var Header = function (_a) {
  var toggleWarningPopup = _a.toggleWarningPopup;
  var _b = react_1.useState(false),
    isVisible = _b[0],
    setIsVisible = _b[1];
  var context = SlideContext_1.useSlideContext();
  var isLight = (
    context !== null && context !== void 0 ? context : { isLight: false }
  ).isLight;
  var handleClick = function () {
    setIsVisible(function (current) {
      return !current;
    });
  };
  var handleNavLinkClick = function (event) {
    event.preventDefault();
    toggleWarningPopup();
  };
  var location = react_router_dom_1.useLocation();
  var logoSrc =
    location.pathname === '/main'
      ? isLight
        ? logo_black_svg_1['default']
        : logo_white_svg_1['default']
      : logo_black_svg_1['default'];
  var busketSrc =
    location.pathname === '/main'
      ? isLight
        ? busket_icon_svg_1['default']
        : cart_icon_white_svg_1['default']
      : busket_icon_svg_1['default'];
  var deliverySrc =
    location.pathname === '/main'
      ? isLight
        ? delivery_icon_svg_1['default']
        : delivery_icon_white_svg_1['default']
      : delivery_icon_svg_1['default'];
  var favouriteSrc =
    location.pathname === '/main'
      ? isLight
        ? favourite_icon_svg_1['default']
        : favourite_icon_white_svg_1['default']
      : favourite_icon_svg_1['default'];
  return react_1['default'].createElement(
    react_1['default'].Fragment,
    null,
    react_1['default'].createElement(
      'header',
      { className: 'header' },
      react_1['default'].createElement(
        'div',
        { className: 'header__container' },
        react_1['default'].createElement(
          react_router_dom_1.Link,
          { to: '/' },
          react_1['default'].createElement('img', {
            className: 'header__logo',
            src: logoSrc,
            alt: '\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E',
          })
        ),
        isVisible &&
          react_1['default'].createElement(CatalogMenu_1['default'], null),
        react_1['default'].createElement(SearchBar_1['default'], null),
        react_1['default'].createElement(
          'button',
          {
            onClick: handleClick,
            className:
              'header__catalog-button ' +
              (location.pathname === '/main'
                ? isLight
                  ? ''
                  : 'header__catalog-button_white'
                : ''),
          },
          '\u041A\u0430\u0442\u0430\u043B\u043E\u0433'
        ),
        react_1['default'].createElement(
          'nav',
          { className: 'header__navbar' },
          react_1['default'].createElement(
            react_router_dom_1.NavLink,
            {
              className: 'header__navbar-link',
              to: '/',
              onClick: handleNavLinkClick,
            },
            react_1['default'].createElement('img', {
              className: 'header__navbar-icon',
              src: deliverySrc,
              alt: "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u0440\u0430\u0437\u0434\u0435\u043B '\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430'",
            })
          ),
          react_1['default'].createElement(
            react_router_dom_1.NavLink,
            { className: 'header__navbar-link', to: '/favourites' },
            react_1['default'].createElement('img', {
              className: 'header__navbar-icon',
              src: favouriteSrc,
              alt: "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u0440\u0430\u0437\u0434\u0435\u043B '\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435'",
            })
          ),
          react_1['default'].createElement(
            react_router_dom_1.NavLink,
            { className: 'header__navbar-link', to: '/cart' },
            react_1['default'].createElement('img', {
              className: 'header__navbar-icon',
              src: busketSrc,
              alt: "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u0440\u0430\u0437\u0434\u0435\u043B '\u041A\u043E\u0440\u0437\u0438\u043D\u0430'",
            })
          )
        ),
        react_1['default'].createElement(
          'button',
          {
            className:
              'header__auth-button ' +
              (location.pathname === '/main'
                ? isLight
                  ? ''
                  : 'header__auth-button_white'
                : ''),
          },
          '\u0412\u043E\u0439\u0442\u0438'
        )
      )
    ),
    react_1['default'].createElement(react_router_dom_1.Outlet, null)
  );
};
exports['default'] = Header;
