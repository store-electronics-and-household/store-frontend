/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
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
  const url = `http://45.12.236.120:8080${endpoint}`;
  return await fetch(url, options).then(checkResponse);
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

export const getSearchResults = async (id: number): Promise<any> => {
  return await request(`/collections/${id}`, {
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
