// import { type CategoriesTileProps } from '../../utils/types';
import { API_URL } from '../constants';

const baseHeaders = {
  'Content-Type': 'application/json',
};

type TcheckResponse<T> = {
  json: () => Promise<any>;
} & T;

const checkResponse = async <T>(res: Response): Promise<TcheckResponse<T>> => {
  if (res.ok) {
    return await res.json();
  } else {
    const err = await res.json();
    return await Promise.reject(err);
  }
};

const request = async <T>(
  endpoint: string,
  method: string,
  headers?: Record<string, string>,
  body?: string
): Promise<T> => {
  const res = await fetch(`${API_URL}${endpoint}`, {
    method,
    headers: { ...baseHeaders, ...headers },
    body,
  });
  return await checkResponse<T>(res);
};

export interface IgetMainCategories {
  id: number;
  name: string;
  imageLink: string;
}

export const getMainCategories = async (): Promise<IgetMainCategories[]> => await request<IgetMainCategories[]>('/categories/roots', 'GET');
