import iconSmile from '../image/icons/smile_icon.svg';
import iconDelivery from '../image/icons/delivery_icon.svg';
import iconMedal from '../image/icons/medal-original_icon.svg';

// export const API_URL: string = 'http://45.12.236.120:8080/api/v1';
export const API_URL: string = 'https://cyberplace.online/api/v1';

export const API_CAT_IMG: string = 'http://45.12.236.120/images/categories';
export const popularCardsToShow = 6;
export const productCharacteristicsShortListLength = 10;

export const products = [
  {
    id: 1,
    name: 'Ноутбук Apple MacBook Air 15 M2 8/256Gb Starlight (MQKU3)',
    oldPrice: 155990,
    price: 164990,
    modelsImages: [
      {
        id: 1,
        imageLink:
          'https://images.unsplash.com/photo-1581795669633-91ef7c9699a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D',
      },
      {
        id: 2,
        imageLink:
          'https://images.unsplash.com/photo-1499686934070-fde9d797e48c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ],
    quantity: 0,
    percent: 9,
    // isLiked: true
  },
  {
    id: 2,
    name: 'Смартфон Apple iPhone 15 Pro 128GB (Black Titanium)',
    oldPrice: 119700,
    modelsImages: [
      {
        id: 1,
        imageLink:
          'https://images.unsplash.com/photo-1499686934070-fde9d797e48c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 2,
        imageLink:
          'https://images.unsplash.com/photo-1581795669633-91ef7c9699a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D',
      },
    ],
    // isLiked: false,
    quantity: 0,
  },
  {
    id: 3,
    name: 'Смартфон Apple iPhone 15 Pro 128GB (Black Titanium)',
    oldPrice: 119700,
    price: 430800,
    discount: 20,
    modelsImages: [
      {
        id: 1,
        imageLink:
          'https://images.unsplash.com/photo-1581795669633-91ef7c9699a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D',
      },
      {
        id: 2,
        imageLink:
          'https://images.unsplash.com/photo-1499686934070-fde9d797e48c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ],
    // isLiked: true,
    quantity: 1,
  },
  {
    id: 4,
    name: 'Смартфон Apple iPhone 15 Pro 128GB (Black Titanium)',
    oldPrice: 119700,
    price: 430800,
    percent: 30,
    modelsImages: [
      {
        id: 1,
        imageLink:
          'https://images.unsplash.com/photo-1499686934070-fde9d797e48c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 2,
        imageLink:
          'https://images.unsplash.com/photo-1581795669633-91ef7c9699a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D',
      },
    ],
    // isLiked: false,
    quantity: 2,
  },
  {
    id: 5,
    name: 'Ноутбук Apple MacBook Air 15 M2 8/256Gb Starlight (MQKU3)',
    oldPrice: 155990,
    price: 164990,
    modelsImages: [
      {
        id: 1,
        imageLink:
          'https://images.unsplash.com/photo-1581795669633-91ef7c9699a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D',
      },
      {
        id: 2,
        imageLink:
          'https://images.unsplash.com/photo-1499686934070-fde9d797e48c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ],
    quantity: 0,
    percent: 9,
    // isLiked: true
  },
  {
    id: 6,
    name: 'Смартфон Apple iPhone 15 Pro 128GB (Black Titanium)',
    oldPrice: 119700,
    modelsImages: [
      {
        id: 1,
        imageLink:
          'https://images.unsplash.com/photo-1499686934070-fde9d797e48c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 2,
        imageLink:
          'https://images.unsplash.com/photo-1581795669633-91ef7c9699a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D',
      },
    ],
    // isLiked: false,
    quantity: 0,
  },
  {
    id: 7,
    name: 'Смартфон Apple iPhone 15 Pro 128GB (Black Titanium)',
    oldPrice: 155990,
    price: 164990,
    discount: 20,
    modelsImages: [
      {
        id: 1,
        imageLink:
          'https://images.unsplash.com/photo-1581795669633-91ef7c9699a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D',
      },
      {
        id: 2,
        imageLink:
          'https://images.unsplash.com/photo-1499686934070-fde9d797e48c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ],
    // isLiked: true,
    quantity: 1,
  },
  {
    id: 8,
    name: 'Смартфон Apple iPhone 15 Pro 128GB (Black Titanium)',
    oldPrice: 155990,
    price: 164990,
    percent: 30,
    modelsImages: [
      {
        id: 1,
        imageLink:
          'https://images.unsplash.com/photo-1499686934070-fde9d797e48c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 2,
        imageLink:
          'https://images.unsplash.com/photo-1581795669633-91ef7c9699a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D',
      },
    ],
    // isLiked: false,
    quantity: 2,
  },
  {
    id: 9,
    name: 'Ноутбук Apple MacBook Air 15 M2 8/256Gb Starlight (MQKU3)',
    oldPrice: 155990,
    price: 164990,
    modelsImages: [
      {
        id: 1,
        imageLink:
          'https://images.unsplash.com/photo-1581795669633-91ef7c9699a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D',
      },
      {
        id: 2,
        imageLink:
          'https://images.unsplash.com/photo-1499686934070-fde9d797e48c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ],
    quantity: 0,
    percent: 9,
    // isLiked: true
  },
  {
    id: 10,
    name: 'Смартфон Apple iPhone 15 Pro 128GB (Black Titanium)',
    oldPrice: 119700,
    modelsImages: [
      {
        id: 1,
        imageLink:
          'https://images.unsplash.com/photo-1499686934070-fde9d797e48c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 2,
        imageLink:
          'https://images.unsplash.com/photo-1581795669633-91ef7c9699a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D',
      },
    ],
    // isLiked: false,
    quantity: 0,
  },
  {
    id: 11,
    name: 'Смартфон Apple iPhone 15 Pro 128GB (Black Titanium)',
    oldPrice: 155990,
    price: 164990,
    discount: 20,
    modelsImages: [
      {
        id: 1,
        imageLink:
          'https://images.unsplash.com/photo-1499686934070-fde9d797e48c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 2,
        imageLink:
          'https://images.unsplash.com/photo-1581795669633-91ef7c9699a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D',
      },
    ],
    // isLiked: true,
    quantity: 1,
  },
  {
    id: 12,
    name: 'Смартфон Apple iPhone 15 Pro 128GB (Black Titanium)',
    oldPrice: 155990,
    price: 164990,
    percent: 30,
    modelsImages: [
      {
        id: 1,
        imageLink:
          'https://images.unsplash.com/photo-1499686934070-fde9d797e48c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 2,
        imageLink:
          'https://images.unsplash.com/photo-1581795669633-91ef7c9699a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D',
      },
    ],
    // isLiked: false,
    quantity: 2,
  },
  {
    id: 13,
    name: 'Ноутбук Apple MacBook Air 15 M2 8/256Gb Starlight (MQKU3)',
    oldPrice: 155990,
    price: 164990,
    modelsImages: [
      {
        id: 1,
        imageLink:
          'https://images.unsplash.com/photo-1499686934070-fde9d797e48c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 2,
        imageLink:
          'https://images.unsplash.com/photo-1581795669633-91ef7c9699a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D',
      },
    ],
    quantity: 0,
    percent: 9,
    // isLiked: true
  },
  {
    id: 14,
    name: 'Смартфон Apple iPhone 15 Pro 128GB (Black Titanium)',
    oldPrice: 119700,
    modelsImages: [
      {
        id: 1,
        imageLink:
          'https://images.unsplash.com/photo-1499686934070-fde9d797e48c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 2,
        imageLink:
          'https://images.unsplash.com/photo-1581795669633-91ef7c9699a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D',
      },
    ],
    // isLiked: false,
    quantity: 0,
  },
  {
    id: 15,
    name: 'Смартфон Apple iPhone 15 Pro 128GB (Black Titanium)',
    oldPrice: 155990,
    price: 164990,
    discount: 20,
    modelsImages: [
      {
        id: 1,
        imageLink:
          'https://images.unsplash.com/photo-1499686934070-fde9d797e48c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 2,
        imageLink:
          'https://images.unsplash.com/photo-1581795669633-91ef7c9699a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D',
      },
    ],
    // isLiked: true,
    quantity: 1,
  },
  {
    id: 16,
    name: 'Смартфон Apple iPhone 15 Pro 128GB (Black Titanium)',
    oldPrice: 155990,
    price: 164990,
    percent: 30,
    modelsImages: [
      {
        id: 1,
        imageLink:
          'https://images.unsplash.com/photo-1499686934070-fde9d797e48c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 2,
        imageLink:
          'https://images.unsplash.com/photo-1581795669633-91ef7c9699a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D',
      },
    ],
    // isLiked: false,
    quantity: 2,
  },
];

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
      a: 'Для получения товара Покупатель должен предъявить шестизначный код на каждый заказ. Мы отправили их посредством СМС на номер мобильного телефона, указанного Покупателем при создании заказа. В\u00A0случае отсутствия кода подтверждения, при Вас будет заполнен Акт выдачи Товара без смс-верификации и /или в отсутствии связи на адресе выдачи',
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
      q: 'Могу ли я поменять или вернуть технику, купленную в интернет-магазине?',
      a: 'Возможно Ваш товар относится к категории не подлежащей обмену или возврату. Если у Вас возникли трудности при использовании товара, советуем обратиться в сервисный центр или к представителю производителя.',
    },
    {
      q: 'Почему у меня не получается сделать обмен или возврат на сайте?',
      a: 'Да, в соответствии со ст. 25 закона «О защите прав потребителей» возврат товара надлежащего качества возможен в течение 14 дней с момента его покупки при условии, что Ваш товар не входит в список не подлежащих возврату.',
    },
  ],
};

export const subCategoriesList = {
  id: 1,
  name: 'Ноутбуки',
  categoryAttributes: [
    {
      id: 0,
      priority: 0,
      attributeName: 'Apple Macbook',
    },
    {
      id: 1,
      priority: 0,
      attributeName: 'Игровые ноутбуки',
    },
    {
      id: 2,
      priority: 0,
      attributeName: 'Ультрабуки',
    },
    {
      id: 3,
      priority: 0,
      attributeName: 'Ноутбуки-трансформеры',
    },
    {
      id: 4,
      priority: 0,
      attributeName: 'Нетбуки',
    },
  ],
};

export const productData = {
  id: 68898484,
  name: 'Apple MacBook Air 15" (M2, 8C CPU/10C GPU, 2023), 8 ГБ, 512 ГБ SSD, «сияющая звезда»',
  price: 155990,
  oldPrice: 164990,
  description: [
    'Ноутбук Apple MacBook Air 15 M2 Space Gray (MQKP3) c macOS — модель в алюминиевом корпусе, снабженная восьмиядерным чипом Apple M2. Последний превосходит по скорости вычисления все другие процессоры компании. Высокая производительность позволяет выполнять на ноутбуке ресурсоемкие задачи, в том числе профессиональное редактирование фото и видео в 4К. Чип способствует равномерному распределению задач между ядрами эффективности и производительности. Объем SSD составляет 256 Гб, оперативной памяти — 8 Гб (частота 5600 МГц).',
    'Восьмиядерный графический процессор позволяет запускать игры последних лет на максимальных настройках. 15,3-дюймовый дисплей Retina обладает разрешением 2880х1864 пикселей, что обеспечивает высокую детализацию. Реалистичная цветопередача делает картинку более насыщенной. Яркости в 500 нит хватит для комфортной работы при любых условиях. Встроенная аудиосистема с поддержкой Dolby Atmos состоит из шести динамиков, которые формируют объемный и направленный звук.',
    'Встроенная веб-камера идеально подходит для общения с удаленными пользователями. Микрофон с функцией шумоподавления обеспечивает качественную передачу голоса собеседнику. Touch ID избавляет от необходимости вводить пароли, позволяя оперативно входить в систему владельцу ноутбука. Время автономной работы от аккумулятора — до 18 часов. Набор интерфейсов состоит из USB-C, Thunderbolt 3, разъема для наушников 3,5 мм и MagSafe 3.',
  ],
  images: [
    'https://images.unsplash.com/photo-1505156868547-9b49f4df4e04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aXBob25lfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1581795669633-91ef7c9699a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1611472173362-3f53dbd65d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D',
  ],
  quantityInCart: 0,
  isLiked: true,
};

export const productSpecifyName = {
  brend: 'Бренд:',
  color: 'Цвет:',
  diagonal: 'Диагональ экрана, в дюймах:',
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

export const productAttributes = {
  brend: 'Apple',
  color: 'титановый черный',
  diagonal: 6.1,
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

export const paymentPageData = [
  {
    id: 100,
    name: 'хороший товар',
    quantity: 1,
    oldPrice: 10000,
    imgUrl:
      'https://images.unsplash.com/photo-1499686934070-fde9d797e48c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    discount: 5000,
  },
  {
    id: 101,
    name: 'очень хороший товар',
    quantity: 2,
    oldPrice: 10000,
    imgUrl:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    discount: 7000,
  },
  {
    id: 103,
    name: 'вашпе хороший товар',
    quantity: 3,
    oldPrice: 10000,
    imgUrl:
      'https://images.unsplash.com/photo-1499686934070-fde9d797e48c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    // imgUrl: '../../image/good_2.svg',
    discount: 2000,
  },
  // {
  //   id: 104,
  //   quantity: 2,
  //   salesPrice: 10000,
  //   imgUrl:
  //     'https://images.unsplash.com/photo-1511499271651-073325718d90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8',
  //   discount: 3000,
  // },
  // {
  //   id: 105,
  //   quantity: 1,
  //   salesPrice: 10000,
  //   imgUrl:
  //     'https://images.unsplash.com/photo-1573739022854-abceaeb585dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvbmUlMjBhY2Nlc3Nvcmllc3xlbnwwfHwwfHx8MA%3D%3D',
  //   discount: 500,
  // },
];

export const aboutCompanyInfo = [
  {
    head: 'Наша цель',
    iconSrc: iconSmile,
    altText: 'смайл, улыбка, цель компании',
    text: [
      'У нас есть офлайновая торговая точка и интернет-магазин. Продаем смартфоны, компьютеры, «умные» часы и браслеты, кофемашины и др.',
      'Цель, к которой мы стремимся — сделать так, чтобы люди пользовались классными гаджетами и\u00A0электроникой за приемлемую стоимость. Потому что крутая техника облегчает жизнь и доставляет удовольствие — пусть ее у всех будет больше.',
    ],
  },
  {
    head: 'Супер-доставка',
    iconSrc: iconDelivery,
    altText: 'Супер быстрая доставка, транспорт',
    text: [
      'У нас работает доставка до двери и\u00A0самовывоз. Большинство заказов доставляем в день оформления либо на следующий день. Возможна оплата на сайте или при получении.',
      'Срок и стоимость доставки в регионы рассчитывается автоматически, когда вы оформляете заказ, но в этом случае мы просим сразу внести оплату.',
      'Мы гарантируем, что заказ будет доставлен вовремя и без повреждений, даже если вокруг новогодние праздники или упал метеорит. Остальные условия читайте в разделе Доставка.',
    ],
  },
  {
    head: 'Только оригинальная техника и\u00A0новинки',
    iconSrc: iconMedal,
    altText: 'Супер быстрая доставка, транспорт',
    text: [
      'У нас вы не встретите подделок и устаревших моделей товаров. Продаем только оригинальную технику. Выбираем проверенные бренды и новинки.',
    ],
  },
];

export const contactsData = {
  phoneNumber: '8 800 555-35-35',
  email: 'cyberplace@gmail.ru',
  adress:
    'г. Москва, ул. Нижняя Красносельская, д. 40/12, корпус 20, этаж 5, помещение\u00A0II, комната 3;',
};

export const pickUpPoints = [
{
  address: 'Садовая улица, 32/1',
  metro: 'м. Сенная',
  deliverypice: 'бесплатно'
},
{
  address: 'Кирочная улица, 10',
  metro: 'м. Чернышевская',
  deliverypice: 'бесплатно'
},
{
  address: 'Обводного канала, 199-201',
  metro: 'м. Балтийская',
  deliverypice: 'бесплатно'
},

{
  address: 'Невский проспект, 10',
  metro: 'м. Адмиралтейская',
  deliverypice: 'бесплатно'
},
{
  address: 'Набережная Фонтанки, 130',
  metro: 'м. Техноложка',
  deliverypice: 'бесплатно'
},

{
  address: 'Беринга, 1',
  metro: 'м. Приморская',
  deliverypice: 'бесплатно'
},
{
  address: 'Лесной проспект, 13',
  metro: 'м. Выборгская',
  deliverypice: 'бесплатно'
},
{
  address: 'Марата, 2',
  metro: 'м. Маяковская',
  deliverypice: 'бесплатно'
},
{
  address: 'Большой проспект ПС, 10',
  metro: 'м. Спортивная',
  deliverypice: 'бесплатно'
},
];

export const productsForPay = [
  {
    id: 1,
    name: 'Ноутбук Apple MacBook Air 15 M2 8/256Gb Starlight (MQKU3)',
    oldPrice: 200,
    price: 180,
    modelsImages: [
      {
        id: 1,
        imageLink: 'https://images.unsplash.com/photo-1581795669633-91ef7c9699a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D',
      },
      {
        id: 2,
        imageLink: 'https://images.unsplash.com/photo-1499686934070-fde9d797e48c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      }
    ],
    quantity: 2,
    percent: 10,
    // isLiked: true
  },
  {
    id: 2,
    name: 'Смартфон Apple iPhone 15 Pro 128GB (Black Titanium)',
    oldPrice: 300,
    modelsImages: [
      {
        id: 1,
        imageLink: 'https://images.unsplash.com/photo-1499686934070-fde9d797e48c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        id: 2,
        imageLink: 'https://images.unsplash.com/photo-1581795669633-91ef7c9699a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D'
      }
    ],
    // isLiked: false,
    quantity: 1,
  },
  {
    id: 3,
    name: 'Смартфон Apple iPhone 15 Pro 128GB (Black Titanium)',
    oldPrice: 100,
    price: 85,
    discount: 20,
    modelsImages: [
      {
        id: 1,
        imageLink: 'https://images.unsplash.com/photo-1581795669633-91ef7c9699a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D',
      },
      {
        id: 2,
        imageLink: 'https://images.unsplash.com/photo-1499686934070-fde9d797e48c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      }
    ],
    // isLiked: true,
    quantity: 1,
    percent: 15,
  }
];

export const mapUrl = 'https://yandex.ru/map-widget/v1/?scroll=false&um=constructor%3A4d7dc517a7705d82f9f3997088086ea9ac858b0a0b26eb729b89805f01497a84&amp;source=constructor "width="552" height="700" frameborder="0"';
