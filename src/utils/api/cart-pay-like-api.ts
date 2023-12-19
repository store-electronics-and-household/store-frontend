import { request } from './user-api';


export const getBusket = async (token: string): Promise<any> => {
  return await request(`/search?text=${text}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...!!token && {"Authorization": `Bearer ${token}`}
    },
  });
};
