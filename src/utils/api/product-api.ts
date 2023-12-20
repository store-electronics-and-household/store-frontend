import { request } from './user-api';

export const getProductDataById = async (
  modelId: number
): Promise<any> => {
  return await request(`/models/${modelId}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};

export const getFavouritesList = async (): Promise<any> => {
  return await request('/favourite/get', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`
    },
  });
};

export const addCardToFavoritesList = async (
  modelId: number,
): Promise<any> => {
  return await request(`/favourite/add?modelId=${modelId}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`
    },
  });
};

export const removeCardFromFavoritesList = async (
  modelId: number
): Promise<any> => {
  return await request(`/favourite/delete?modelId=${modelId}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`
    },
  });
};
