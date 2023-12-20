import { request } from './user-api';

export const getProductDataById = async (id: number): Promise<any> => {
  return await request(`/models/${id}/model-attributes`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id }),
  });
};

export const getFavouritesList = async (): Promise<any> => {
  return await request('/favourite/get', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};

export const addCardToFavoritesList = async (cardId: number): Promise<any> => {
  return await request('/favourite/add', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ cardId }),
  });
};

export const removeCardFromFavoritesList = async (
  cardId: number
): Promise<any> => {
  return await request('/favourite/delete', {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ cardId }),
  });
};
