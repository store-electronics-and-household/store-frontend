/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { request } from './user-api';
import { API_URL } from '../constants';

interface ErrorResponseFavour {
  message?: string;
}

const checkResponseNoReturn = async (res: Response): Promise<any> => {
  if (!res.ok) {
    const errorData: ErrorResponseFavour = await res.json();
    const errorMessage = errorData.message || 'Ошибка сервера';
    throw new Error(`Ошибка: ${res.status}. ${errorMessage}`);
  }
};

export const requestNoReturn = async (
  endpoint: string,
  options: RequestInit
): Promise<any> => {
  const url = `${API_URL}${endpoint}`;
  return await fetch(url, options).then(checkResponseNoReturn);
};

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
  return await requestNoReturn(`/favourite/add?modelId=${modelId}`, {
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
  return await requestNoReturn(`/favourite/delete?modelId=${modelId}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`
    },
  });
};
