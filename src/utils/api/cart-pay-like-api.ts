/* eslint-disable no-lone-blocks */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { request } from './user-api';

export const getBusket = async (token: string): Promise<any> => {
  return await request('/basket/user', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...(!(token === '') && { Authorization: `Bearer ${token}` }),
    },
  });
};

/*
export const register = async (
  email: string,
  password: string
): Promise<any> => {
  return await request('/auth/registration', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
};

*/

export const postPayment = async (
  deliveryType: string,
  name: string,
  phone: string,
  deliveryAddress: string,
  deliveryDate: string,
  deliveryPrice: number,
  finalPrice: number
): Promise<any> => {
  return await request('/orders/order/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify({ deliveryType, name, phone, deliveryAddress, deliveryDate, deliveryPrice, finalPrice }),
  });
};
