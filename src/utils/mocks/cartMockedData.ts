import type { ProductInfo } from '../types';

export const mockedCartProducts: ProductInfo[] = [
  {
    id: 1,
    name: 'Apple iPhone 15 Pro Max 512GB',
    description: 'корпус – Титан, ремешок – Trail Loop синий',
    article: 1234983,
    quantity: 1,
    originPrice: 300000,
    salesPrice: 200000,
    imgUrl: '../../image/item.jpg',
  },
  {
    id: 2,
    name: 'Apple Watch Ultra 2 GPS + Cellular 49mm',
    description: 'Натуральный титан',
    article: 1234980,
    quantity: 2,
    originPrice: 30000,
    salesPrice: 20000,
    imgUrl: '../../image/item.jpg',
  },
  {
    id: 3,
    name: 'Apple Watch Ultra 2 GPS + Cellular 49mm',
    description: 'Натуральный титан',
    article: 1234980,
    quantity: 2,
    originPrice: 60000,
    salesPrice: 20000,
    imgUrl: '../../image/item.jpg',
  },
];
