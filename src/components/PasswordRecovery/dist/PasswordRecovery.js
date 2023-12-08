'use strict';
exports.__esModule = true;
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
var react_1 = require('react');
var formik_1 = require('formik');
var Yup = require('yup');
var PopupTemplate_1 = require('../PopupTemplate/PopupTemplate');
var open_eye_svg_1 = require('../../image/icons/open-eye.svg');
var eye_closed_svg_1 = require('../../image/icons/eye-closed.svg');
var PasswordRecovery = function (_a) {
  var onOpenRecoveryPopup = _a.onOpenRecoveryPopup,
    isOpenPasswordRecovery = _a.isOpenPasswordRecovery,
    onChangePassword = _a.onChangePassword;
  var _b = react_1['default'].useState(false),
    isNext = _b[0],
    SetIsNext = _b[1];
  var _c = react_1['default'].useState(false),
    isEmailValidationEnabled = _c[0],
    setEmailValidationEnabled = _c[1];
  var _d = react_1['default'].useState(false),
    showRecPassword = _d[0],
    setShowRecPassword = _d[1];
  var _e = react_1['default'].useState(false),
    showConfRecPassword = _e[0],
    setShowConfRecPassword = _e[1];
  var formik = formik_1.useFormik({
    enableReinitialize: true,
    initialValues: {
      loginRecovery: '',
      passwordRecovery: '',
      confirmPasswordRecovery: '',
    },
    validationSchema: Yup.object({
      loginRecovery: Yup.string()
        .email('Введите корректный email')
        .matches(
          /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
          'Некорректный формат email'
        )
        .required('Введите email'),
      passwordRecovery: Yup.string()
        .min(6, 'Пароль должен содержать не менее 6 символов')
        .max(8, 'Пароль не должен превышать 8 символов')
        .required('Введите Ваш пароль'),
      confirmPasswordRecovery: Yup.string()
        .oneOf([Yup.ref('passwordRecovery')], 'Пароль не совпадает')
        .required('Подтвердите пароль'),
    }),
    onSubmit: function (values) {
      if (formik.isValid) {
        onChangePassword(values.loginRecovery, values.passwordRecovery);
        onOpenRecoveryPopup();
        SetIsNext(false);
        setEmailValidationEnabled(false);
        formik.resetForm();
      }
    },
  });
  var handleCloseRecoveryPasswordPopup = function () {
    onOpenRecoveryPopup();
    formik.resetForm();
    SetIsNext(false);
    setEmailValidationEnabled(false);
  };
  var handleClickNextBtn = function () {
    setEmailValidationEnabled(true);
    if (!formik.errors.loginRecovery) {
      SetIsNext(true);
    } else {
      console.log('');
    }
  };
  return react_1['default'].createElement(
    PopupTemplate_1['default'],
    {
      isOpen: isOpenPasswordRecovery,
      OnClose: onOpenRecoveryPopup,
      popupClass: 'popup',
      popupClassOverlay: 'popup_overlay',
    },
    react_1['default'].createElement(
      'div',
      { className: 'pass-recovery__container' },
      react_1['default'].createElement('button', {
        className: 'pass-recovery__button_cls',
        onClick: handleCloseRecoveryPasswordPopup,
      }),
      react_1['default'].createElement(
        'form',
        {
          className: 'pass-recovery__form',
          onSubmit: formik.handleSubmit,
          noValidate: true,
        },
        react_1['default'].createElement(
          'div',
          { className: 'pass-recovery__title-container' },
          react_1['default'].createElement(
            'div',
            { className: 'pass-recovery__title' },
            '\u0412\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u0430\u0440\u043E\u043B\u044F'
          ),
          !isNext &&
            react_1['default'].createElement(
              'p',
              { className: 'pass-recovery__subtitle' },
              '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u043E\u0447\u0442\u0443, \u0447\u0442\u043E\u0431\u044B \u043C\u044B \u0441\u043C\u043E\u0433\u043B\u0438 \u043D\u0430\u0439\u0442\u0438 \u0432\u0430\u0448 \u0430\u043A\u043A\u0430\u0443\u043D\u0442'
            )
        ),
        react_1['default'].createElement(
          'div',
          { className: 'pass-recovery__inputs' },
          !isNext &&
            react_1['default'].createElement(
              'div',
              { className: 'pass-recovery__input-wrapper' },
              react_1['default'].createElement(
                'label',
                { className: 'pass-recovery__label' },
                '\u041F\u043E\u0447\u0442\u0430'
              ),
              react_1['default'].createElement('input', {
                className:
                  'pass-recovery__input ' +
                  (isEmailValidationEnabled &&
                  formik.touched.loginRecovery &&
                  formik.errors.loginRecovery
                    ? 'pass-recovery__input_invalid'
                    : formik.touched.loginRecovery &&
                      !formik.errors.loginRecovery
                    ? 'pass-recovery__input_valid'
                    : ''),
                type: 'text',
                name: 'loginRecovery',
                value: formik.values.loginRecovery,
                onChange: formik.handleChange,
                onBlur: formik.handleBlur,
                minLength: 6,
                required: true,
              }),
              isEmailValidationEnabled &&
                formik.touched.loginRecovery &&
                formik.errors.loginRecovery &&
                react_1['default'].createElement(
                  'span',
                  { className: 'pass-recovery__error-text' },
                  formik.errors.loginRecovery
                )
            ),
          isNext &&
            react_1['default'].createElement(
              react_1['default'].Fragment,
              null,
              react_1['default'].createElement(
                'div',
                { className: 'pass-recovery__input-wrapper' },
                react_1['default'].createElement(
                  'label',
                  { className: 'pass-recovery__label' },
                  '\u041F\u0430\u0440\u043E\u043B\u044C'
                ),
                react_1['default'].createElement('input', {
                  className:
                    'pass-recovery__input ' +
                    (formik.touched.passwordRecovery &&
                    formik.submitCount > 0 &&
                    formik.errors.passwordRecovery
                      ? 'pass-recovery__input_invalid'
                      : formik.touched.passwordRecovery &&
                        formik.submitCount > 0
                      ? 'pass-recovery__input_valid'
                      : ''),
                  type: showRecPassword ? 'text' : 'password',
                  name: 'passwordRecovery',
                  value: formik.values.passwordRecovery,
                  onChange: formik.handleChange,
                  onBlur: formik.handleBlur,
                  required: true,
                }),
                react_1['default'].createElement(
                  'span',
                  {
                    className: 'pass-recovery__toggle-password',
                    onClick: function () {
                      setShowRecPassword(!showRecPassword);
                    },
                  },
                  react_1['default'].createElement('img', {
                    className: 'pass-recovery__toggle-password-icon',
                    src: showRecPassword
                      ? open_eye_svg_1['default']
                      : eye_closed_svg_1['default'],
                    alt: '\u043F\u043E\u043A\u0430\u0437\u0430\u0442\u044C/\u0441\u043A\u0440\u044B\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C',
                  })
                )
              ),
              formik.submitCount > 0 &&
                formik.touched.passwordRecovery &&
                formik.errors.passwordRecovery &&
                react_1['default'].createElement(
                  'span',
                  { className: 'pass-recovery__error-text' },
                  formik.errors.passwordRecovery
                ),
              react_1['default'].createElement(
                'div',
                { className: 'pass-recovery__input-wrapper' },
                react_1['default'].createElement(
                  'label',
                  { className: 'pass-recovery__label' },
                  '\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C'
                ),
                react_1['default'].createElement('input', {
                  className:
                    'pass-recovery__input ' +
                    (formik.touched.confirmPasswordRecovery &&
                    formik.submitCount > 0 &&
                    formik.errors.confirmPasswordRecovery
                      ? 'pass-recovery__input_invalid'
                      : formik.touched.confirmPasswordRecovery &&
                        formik.submitCount > 0
                      ? 'pass-recovery__input_valid'
                      : ''),
                  type: showConfRecPassword ? 'text' : 'password',
                  name: 'confirmPasswordRecovery',
                  value: formik.values.confirmPasswordRecovery,
                  onChange: formik.handleChange,
                  onBlur: formik.handleBlur,
                  required: true,
                }),
                react_1['default'].createElement(
                  'span',
                  {
                    className: 'pass-recovery__toggle-password',
                    onClick: function () {
                      setShowConfRecPassword(!showConfRecPassword);
                    },
                  },
                  react_1['default'].createElement('img', {
                    className: 'pass-recovery__toggle-password-icon',
                    src: showConfRecPassword
                      ? open_eye_svg_1['default']
                      : eye_closed_svg_1['default'],
                    alt: '\u043F\u043E\u043A\u0430\u0437\u0430\u0442\u044C/\u0441\u043A\u0440\u044B\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C',
                  })
                )
              ),
              formik.submitCount > 0 &&
                formik.touched.confirmPasswordRecovery &&
                formik.errors.confirmPasswordRecovery &&
                react_1['default'].createElement(
                  'span',
                  { className: 'pass-recovery__error-text' },
                  formik.errors.confirmPasswordRecovery
                )
            ),
          react_1['default'].createElement(
            'div',
            { className: 'pass-recovery__buttons' },
            isNext &&
              react_1['default'].createElement(
                'button',
                {
                  className: 'pass-recovery__button signin__button_enter',
                  type: 'submit',
                },
                '\u0412\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C'
              ),
            !isNext &&
              react_1['default'].createElement(
                'button',
                {
                  className: 'pass-recovery__button signin__button_enter',
                  onClick: handleClickNextBtn,
                },
                '\u0414\u0430\u043B\u0435\u0435'
              )
          )
        )
      )
    )
  );
};
exports['default'] = PasswordRecovery;
