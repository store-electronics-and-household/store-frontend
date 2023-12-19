import { request } from './user-api';

export const getPromoResults = async (id: number): Promise<any> => {
  return await request(`/collections/${id}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};

export const getSearchResults = async (text: string): Promise<any> => {
  return await request(`/search?text=${text}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};
