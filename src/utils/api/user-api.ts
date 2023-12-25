/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { API_URL } from '../constants';
import type { FormProps } from '../types';

interface ErrorResponse {
  message?: string;
}

const checkResponse = async (res: Response): Promise<any> => {
  if (res.ok) {
    return await res.json();
  } else {
    const errorData: ErrorResponse = await res.json();
    const errorMessage = errorData.message || 'Ошибка сервера';
    throw new Error(`Ошибка: ${res.status}. ${errorMessage}`);
  }
};

export const request = async (
  endpoint: string,
  options: RequestInit
): Promise<any> => {
  const url = `${API_URL}${endpoint}`;
  return await fetch(url, options).then(checkResponse);
};

export const requestWithToken = async (
  endpoint: string,
  options: RequestInit
): Promise<any> => {
  const url = `${API_URL}${endpoint}`;

  const token = localStorage.getItem('token');

  return await fetch(url, {
    ...options,
    headers: {
      ...!!token && { Authorization: `Bearer ${token}` },
      ...options.headers
    }
  }).then(checkResponse);
};

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

export const authorize = async (
  email: string,
  password: string
): Promise<any> => {
  return await request('/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      // Authorization: `Basic ${base64Credentials}`
    },
    body: JSON.stringify({ email, password }),
  });
};

export const getBanners = async (): Promise<any> => {
  return await request('/collections', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};

export const changePassword = async (
  email: string,
  password: string
): Promise<any> => {
  return await request('/auth/change', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
};

export const authUserByToken = async (token: string): Promise<any> => {
  return await request('/user/check', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};

export const checkUserEmail = async (email: string): Promise<any> => {
  return await request('/auth/check', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      name: email,
    }),
  });
};

export const patchUser = async (
  data: FormProps,
  token: string
): Promise<any> => {
  return await request('/user', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
};

export const deleteUser = async (token: string): Promise<any> => {
  return await request('/auth/delete', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};
