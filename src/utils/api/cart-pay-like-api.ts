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

export const addFavouriteTest = async (token: string, id: number): Promise<any> => {
  return await request('/basket/user', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...!!token && { Authorization: `Bearer ${token}` }
    },
  });
};
