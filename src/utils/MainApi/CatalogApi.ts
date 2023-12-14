import { baseUrl } from '../constants';

const baseHeaders = {
  'Content-Type': 'application/json',
};

type TcheckResponse<T> = {
  json: () => Promise<any>
} & T;

const checkResponse = async <T>(res: Response): Promise<TcheckResponse<T>> => {
  if (res.ok) {
    return await res.json();
  } else {
    const err = await res.json();
    return await Promise.reject(err);
  }
};

// interface IcheckResponse {
//   success: boolean,
// }

const request = async <T>(
  endpoint: string,
  method: string,
  headers?: Record<string, string>,
  body?: string
): Promise<T> => {
  const res = await fetch(`${baseUrl}${endpoint}`, {
    method,
    headers: { ...baseHeaders, ...headers },
    body,
  });
  return await checkResponse<T>(res);
};

export interface IgetMainCategories {
  id: number
  name: string
}

export const getMainCategories = async (): Promise<IgetMainCategories[]> => await request<IgetMainCategories[]>('/categories/roots', 'GET');
