import iconSmile from '../image/icons/smile_icon.svg';
import iconDelivery from '../image/icons/delivery_icon.svg';
import iconMedal from '../image/icons/medal-original_icon.svg';

/* это нужно будет удалить после--------------- */
export const categoriesList = [
  {
    id: 1,
    title: 'Игровые приставки',
    img: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    url: '/categories',
  },
  {
    id: 2,
    title: 'Телефоны и аксессуары',
    img: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?q=80&w=1762&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    url: '/categories',
  },
  {
    id: 3,
    title: 'Планшеты',
    img: 'https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    url: '/categories',
  },
  {
    id: 4,
    title: 'Ноутбуки',
    img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    url: '/categories',
  },
  {
    id: 5,
    title: 'Аксессуары',
    img: 'https://images.unsplash.com/photo-1573739022854-abceaeb585dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvbmUlMjBhY2Nlc3Nvcmllc3xlbnwwfHwwfHx8MA%3D%3D',
    url: '/categories',
  },
  {
    id: 6,
    title: 'Умные часы и браслеты',
    img: 'https://images.unsplash.com/photo-1499686934070-fde9d797e48c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    url: '/categories',
  },
  {
    id: 7,
    title: 'Наушники и аксессуары',
    img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    url: '/categories',
  },
  {
    id: 8,
    title: 'Квадрокоптеры',
    img: 'https://images.unsplash.com/photo-1617109224926-b69d0862ef1b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    url: '/categories',
  },
  {
    id: 9,
    title: 'Компьютеры и комплектующие',
    img: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvbXB1dGVyfGVufDB8fDB8fHww',
    url: '/categories',
  },
  {
    id: 10,
    title: 'Портативная акустика',
    img: 'https://images.unsplash.com/photo-1511499271651-073325718d90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8',
    url: '/categories',
  },
  {
    id: 11,
    title: 'Техника для дома',
    img: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?q=80&w=1805&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    url: '/categories',
  },
  {
    id: 12,
    title: 'Гаджеты',
    img: 'https://images.unsplash.com/photo-1620213391117-0d169a917221?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    url: '/categories',
  },
];
export const product = [
  {
    id: 1,
    name: 'Смартфон Apple iPhone 15 Pro 128GB (Black Titanium)',
    originPrice: 119700,
    salesPrice: 430800,
    discount: 30,
    url: '/product',
  },
  {
    id: 2,
    name: 'Смартфон Apple iPhone 15 Pro 128GB (Black Titanium)',
    originPrice: 119700,
    url: '/product',
  },
  {
    id: 3,
    name: 'Смартфон Apple iPhone 15 Pro 128GB (Black Titanium)',
    originPrice: 119700,
    salesPrice: 430800,
    discount: 20,
    url: '/product',
  },
  {
    id: 4,
    name: 'Смартфон Apple iPhone 15 Pro 128GB (Black Titanium)',
    originPrice: 119700,
    salesPrice: 430800,
    discount: 30,
    url: '/product',
  },
  {
    id: 5,
    name: 'Смартфон Apple iPhone 15 Pro 128GB (Black Titanium)',
    originPrice: 119700,
    salesPrice: 430800,
    discount: 30,
    url: '/product',
  },
  {
    id: 6,
    name: 'Смартфон Apple iPhone 15 Pro 128GB (Black Titanium)',
    originPrice: 119700,
    salesPrice: 430800,
    discount: 30,
    url: '/product',
  },
  {
    id: 7,
    name: 'Смартфон Apple iPhone 15 Pro 128GB (Black Titanium)',
    originPrice: 119700,
    salesPrice: 430800,
    discount: 30,
    url: '/product',
  },
  {
    id: 8,
    name: 'Смартфон Apple iPhone 15 Pro 128GB (Black Titanium)',
    originPrice: 119700,
    salesPrice: 430800,
    discount: 30,
    url: '/product',
  },
  {
    id: 9,
    name: 'Смартфон Apple iPhone 15 Pro 128GB (Black Titanium)',
    originPrice: 119700,
    salesPrice: 430800,
    discount: 30,
    url: '/product',
  },
  {
    id: 10,
    name: 'Смартфон Apple iPhone 15 Pro 128GB (Black Titanium)',
    originPrice: 119700,
    salesPrice: 430800,
    discount: 30,
    url: '/product',
  },
  {
    id: 11,
    name: 'Смартфон Apple iPhone 15 Pro 128GB (Black Titanium)',
    originPrice: 119700,
    salesPrice: 430800,
    discount: 30,
    url: '/product',
  },
  {
    id: 12,
    name: 'Смартфон Apple iPhone 15 Pro 128GB (Black Titanium)',
    originPrice: 119700,
    salesPrice: 430800,
    discount: 30,
    url: '/product',
  },
  {
    id: 13,
    name: 'Смартфон Apple iPhone 15 Pro 128GB (Black Titanium)',
    originPrice: 119700,
    salesPrice: 430800,
    discount: 30,
    url: '/product',
  },
  {
    id: 14,
    name: 'Смартфон Apple iPhone 15 Pro 128GB (Black Titanium)',
    originPrice: 119700,
    salesPrice: 430800,
    discount: 30,
    url: '/product',
  },
  {
    id: 15,
    name: 'Смартфон Apple iPhone 15 Pro 128GB (Black Titanium)',
    originPrice: 119700,
    salesPrice: 430800,
    discount: 30,
    url: '/product',
  },
  {
    id: 16,
    name: 'Смартфон Apple iPhone 15 Pro 128GB (Black Titanium)',
    originPrice: 119700,
    salesPrice: 430800,
    discount: 30,
    url: '/product',
  },
  {
    id: 17,
    name: 'Смартфон Apple iPhone 15 Pro 128GB (Black Titanium)',
    originPrice: 119700,
    salesPrice: 430800,
    discount: 30,
    url: '/product',
  },
  {
    id: 18,
    name: 'Смартфон Apple iPhone 15 Pro 128GB (Black Titanium)',
    originPrice: 119700,
    salesPrice: 430800,
    discount: 30,
    url: '/product',
  },
  {
    id: 19,
    name: 'Смартфон Apple iPhone 15 Pro 128GB (Black Titanium)',
    originPrice: 119700,
    salesPrice: 430800,
    discount: 30,
    url: '/product',
  },
  {
    id: 20,
    name: 'Смартфон Apple iPhone 15 Pro 128GB (Black Titanium)',
    originPrice: 119700,
    salesPrice: 430800,
    discount: 30,
    url: '/product',
  },
  {
    id: 21,
    name: 'Смартфон Apple iPhone 15 Pro 128GB (Black Titanium)',
    originPrice: 119700,
    salesPrice: 430800,
    discount: 30,
    url: '/product',
  },
  {
    id: 22,
    name: 'Смартфон Apple iPhone 15 Pro 128GB (Black Titanium)',
    originPrice: 119700,
    salesPrice: 430800,
    discount: 30,
    url: '/product',
  },
  {
    id: 23,
    name: 'Смартфон Apple iPhone 15 Pro 128GB (Black Titanium)',
    originPrice: 119700,
    salesPrice: 430800,
    discount: 30,
    url: '/product',
  },
  {
    id: 24,
    name: 'Смартфон Apple iPhone 15 Pro 128GB (Black Titanium)',
    originPrice: 119700,
    salesPrice: 430800,
    discount: 30,
    url: '/product',
  },
  {
    id: 25,
    name: 'Смартфон Apple iPhone 15 Pro 128GB (Black Titanium)',
    originPrice: 119700,
    salesPrice: 430800,
    discount: 30,
    url: '/product',
  },
  {
    id: 26,
    name: 'Смартфон Apple iPhone 15 Pro 128GB (Black Titanium)',
    originPrice: 119700,
    salesPrice: 430800,
    discount: 30,
    url: '/product',
  },
  {
    id: 27,
    name: 'Смартфон Apple iPhone 15 Pro 128GB (Black Titanium)',
    originPrice: 119700,
    salesPrice: 430800,
    discount: 30,
    url: '/product',
  },
];
/* ------------------------------------------- */
export const contactsData = {
  phoneNumber: '8 800 555-35-35',
  email: 'cyberplace@gmail.ru',
  adress:
    'г. Москва, ул. Нижняя Красносельская, д. 40/12, корпус 20, этаж 5, помещение II, комната 3;',
};

export const faqList = {
  deliveryFaq: [
    {
      q: 'Мой заказ заберет другой человек. Что мне нужно сделать?',
      a: 'Получатель должен предъявить шестизначный код на каждый заказ. Мы отправили их посредством СМС на номер мобильного телефона, указанного Покупателем при создании заказа.',
    },
    {
      q: 'Что входит в стоимость доставки?',
      a: 'Стоимость зависит от выбранных Вами условий доставки при оформлении заказа.',
    },
    {
      q: 'Получение заказа',
      a: 'Для получения товара Покупатель должен предъявить шестизначный код на каждый заказ. Мы отправили их посредством СМС на номер мобильного телефона, указанного Покупателем при создании заказа. В случае отсутствия кода подтверждения, при Вас будет заполнен Акт выдачи Товара без смс-верификации и /или в отсутствии связи на адресе выдачи',
    },
    {
      q: 'Как узнать стоимость и интервалы доставки в моём городе?',
      a: 'Стоимость и интервалы доставки указываются при оформлении заказа.',
    },
  ],
  characteristicFaq: [
    {
      q: 'Где можно посмотреть характеристики товара?',
      a: 'Характеристики товара Вы можете увидеть в карточке интересующего Вас продукта.',
    },
    {
      q: 'Где найти инструкцию к товару?',
      a: 'Инструкция входит в комлектацию товара, также Вы можете запросить ее у представителей производителя.',
    },
    {
      q: 'Почему способы заказа не для всех товаров одинаковы?',
      a: 'Это зависит от наличия товара в магазине и на складах. Например, если в данный момент недоступна услуга курьерской доставки, значит, товара нет в наличии на складе интернет-магазина',
    },
    {
      q: 'Почему на сайте сначала была одна цена, а потом она изменилась?',
      a: 'Цена могла измениться в связи с началом или окончанием акций проводимых в нашем магазине, а также в результуте изменения рыночной цены производителя',
    },
  ],
  returnsFaq: [
    {
      q: 'Я купил технику, но не пользовался ей. Могу ли я её поменять или вернуть?',
      a: 'Это зависит от категории товара. В соответствии со ст. 25 закона «О защите прав потребителей» возврат товара надлежащего качества возможен в течение 14 дней с момента его покупки при условии, что Ваш товар не входит в список не подлежащих возврату.',
    },
    {
      q: 'Почему у меня не получается сделать обмен или возврат на сайте?',
      a: 'Возможно Ваш товар относится к категории не подлежащей обмену или возврату. Если у Вас возникли трудности при использовании товара, советуем обратиться в сервисный центр или к представителю производителя.',
    },
    {
      q: 'Могу ли я поменять или вернуть технику, купленную в интернет-магазине?',
      a: 'Да, в соответствии со ст. 25 закона «О защите прав потребителей» возврат товара надлежащего качества возможен в течение 14 дней с момента его покупки при условии, что Ваш товар не входит в список не подлежащих возврату.',
    },
  ],
};

export const productPhotoArray = [
  'https://images.unsplash.com/photo-1505156868547-9b49f4df4e04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aXBob25lfGVufDB8fDB8fHww',
  'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D',
  'https://images.unsplash.com/photo-1581795669633-91ef7c9699a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D',
  'https://images.unsplash.com/photo-1611472173362-3f53dbd65d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D',
  'https://images.unsplash.com/photo-1695639526461-7244f263119c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFwcGxlJTIwaXBob25lJTIwMTUlMjBwcm98ZW58MHx8MHx8fDA%3D',
  'https://images.unsplash.com/photo-1620049185596-1f16f414c448?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA0fHxpcGhvbmV8ZW58MHx8MHx8fDA%3D',
  'https://images.unsplash.com/photo-1695822822491-d92cee704368?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBwbGUlMjBpcGhvbmUlMjAxNSUyMHByb3xlbnwwfHwwfHx8MA%3D%3D',
];

export const productSpecifyName = {
  productName: 'name',
  article: 0,
  color: 'Цвет:',
  diagonal: 'Диагональ экрана, в дюймах:',
  brend: 'Бренд:',
  country: 'Страна-производитель:',
  year: 'Год выхода модели:',
  display: 'Тип дисплея:',
  builtInMemory: 'Встроенная память, в ГБ:',
  ram: 'Оперативная память, в ГБ:',
  batteryCapacity: 'Емкость аккумулятора, в мА-ч:',
  color1: 'Цвет:',
  diagonal1: 'Диагональ экрана, в дюймах:',
  brend1: 'Бренд:',
  country1: 'Страна-производитель:',
  year1: 'Год выхода модели:',
  display1: 'Тип дисплея:',
  builtInMemory1: 'Встроенная память, в ГБ:',
  ram1: 'Оперативная память, в ГБ:',
  batteryCapacity1: 'Емкость аккумулятора, в мА-ч:',
};

export const productSpecifyValue = {
  productName: 'Смартфон Apple iPhone 15 Pro 128GB (Black Titanium)',
  article: 68898484,
  price: 119700,
  oldPrice: 430800,
  color: 'титановый черный',
  diagonal: 6.1,
  brend: 'Apple',
  country: 'Китай',
  year: 2023,
  display: 'OLED',
  builtInMemory: 128,
  ram: 8,
  batteryCapacity: 4912,
  color1: 'титановый черный',
  diagonal1: 6.1,
  brend1: 'Apple',
  country1: 'Китай',
  year1: 2023,
  display1: 'OLED',
  builtInMemory1: 128,
  ram1: 8,
  batteryCapacity1: 4912,
};

/* это нужно будет удалить после--------------- */
export const subCategoriesList = [
  {
    id: 1,
    catTitle: 'Apple IPhone',
    catImg:
      'https://images.unsplash.com/photo-1525598912003-663126343e1f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

    catUrl: '/catalog',
  },
  {
    id: 2,
    catTitle: 'Samsung Galaxy',
    catImg:
      'https://images.unsplash.com/photo-1525598912003-663126343e1f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

    catUrl: '/',
  },
  {
    id: 3,
    catTitle: 'Xiaomi',
    catImg:
      'https://images.unsplash.com/photo-1525598912003-663126343e1f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

    catUrl: '/',
  },
  {
    id: 4,
    catTitle: 'Google',
    catImg:
      'https://images.unsplash.com/photo-1525598912003-663126343e1f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

    catUrl: '/',
  },
  {
    id: 5,
    catTitle: 'Honor',
    catImg:
      'https://images.unsplash.com/photo-1525598912003-663126343e1f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

    catUrl: '/',
  },
  {
    id: 6,
    catTitle: 'Realme',
    catImg:
      'https://images.unsplash.com/photo-1525598912003-663126343e1f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

    catUrl: '/',
  },
  {
    id: 7,
    catTitle: 'HUAWEI',
    catImg:
      'https://images.unsplash.com/photo-1525598912003-663126343e1f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

    catUrl: '/',
  },
  {
    id: 8,
    catTitle: 'OnePlus',
    catImg:
      'https://images.unsplash.com/photo-1525598912003-663126343e1f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

    catUrl: '/',
  },
];

export const paymentPageData = [
  {
    id: 100,
    quantity: 1,
    salesPrice: 10000,
    imgUrl:
      'https://images.unsplash.com/photo-1499686934070-fde9d797e48c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    discount: 5000,
  },
  {
    id: 101,
    quantity: 2,
    salesPrice: 10000,
    imgUrl:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    discount: 7000,
  },
  {
    id: 103,
    quantity: 3,
    salesPrice: 10000,
    imgUrl:
      'https://images.unsplash.com/photo-1499686934070-fde9d797e48c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    // imgUrl: '../../image/good_2.svg',
    discount: 2000,
  },
  {
    id: 104,
    quantity: 2,
    salesPrice: 10000,
    imgUrl:
      'https://images.unsplash.com/photo-1511499271651-073325718d90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8',
    discount: 3000,
  },
  {
    id: 105,
    quantity: 1,
    salesPrice: 10000,
    imgUrl:
      'https://images.unsplash.com/photo-1573739022854-abceaeb585dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvbmUlMjBhY2Nlc3Nvcmllc3xlbnwwfHwwfHx8MA%3D%3D',
    discount: 500,
  },
];

export const aboutCompanyInfo = [
  {
    head: 'Наша цель',
    iconSrc: iconSmile,
    altText: 'смайл, улыбка, цель компании',
    text: [
      'У нас есть офлайновая торговая точка и&nbsp;интернет&#8209;магазин. Продаем смартфоны, компьютеры, «умные» часы и браслеты, кофемашины и др.',
      'Цель, к которой мы стремимся — сделать так, чтобы люди пользовались классными гаджетами&nbsp;и&nbsp;электроникой за приемлемую стоимость. Потому что крутая техника облегчает жизнь и доставляет удовольствие — пусть ее у всех будет больше.',
    ],
  },
  {
    head: 'Супер-доставка',
    iconSrc: iconDelivery,
    altText: 'Супер быстрая доставка, транспорт',
    text: [
      'У нас работает доставка до двери и самовывоз. Большинство заказов доставляем в день оформления либо на следующий день. Возможна оплата на сайте или при получении.',
      'Срок и стоимость доставки в регионы рассчитывается автоматически, когда вы оформляете заказ, но в этом случае мы просим сразу внести оплату.',
      'Мы гарантируем, что заказ будет доставлен вовремя и без повреждений, даже если вокруг новогодние праздники или упал метеорит. Остальные условия читайте в разделе Доставка.',
    ],
  },
  {
    head: 'Только оригинальная техника и новинки',
    iconSrc: iconMedal,
    altText: 'Супер быстрая доставка, транспорт',
    text: [
      'У нас вы не встретите подделок и устаревших моделей товаров. Продаем только оригинальную технику. Выбираем проверенные бренды и новинки.',
    ],
  },
];
