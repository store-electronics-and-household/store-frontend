// import { type CategoriesTileProps } from '../../utils/types';

import { API_URL } from '../constants';
const request = async (endpoint: string, options: RequestInit): Promise<any> =>
  await fetch(endpoint, options).then(async (res) => {
    if (!res.ok) {
      await res.json().then((err) => {
        throw new Error(err.message);
      });
      return;
    }
    return await res.json();
  });
export const getCategoriesMain = async (): Promise<any> => {
  return await request(`${API_URL}/categories/roots`, {
    method: 'GET',
  });
};
