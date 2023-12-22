import { requestWithToken } from './user-api';

// Получение массива товара конкретного пользователя
export const getUserProductListInCart = async (): Promise<any> => {
  return await requestWithToken('/basket/user', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};

//  Добавление товара в корзину
export const addProductToCart = async (
  modelId: number
): Promise<any> => {
  return await requestWithToken(`/basket/model/${modelId}/user`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};

// Удаление товара из корзины
export const deleteProductFromCart = async (
  modelSetId: number
): Promise<any> => {
  return await requestWithToken(`/basket/modelSet/${modelSetId}/user`, { // ???
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};

// Плюс в корзине
export const increaseQuantityInCart = async (
  modelSetId: number
): Promise<any> => {
  return await requestWithToken(`/basket/modelSet/${modelSetId}/count-plus/user`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};

// Минус в корзине
export const decreaseQuantityInCart = async (
  modelSetId: number
): Promise<any> => {
  return await requestWithToken(`/basket/modelSet/${modelSetId}/count-minus/user`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};

// Плюс на карточке товара
export const increaseQuantityInProductCard = async (
  modelId: number
): Promise<any> => {
  return await requestWithToken(`/basket/model/${modelId}/count-plus/user`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};

// Минус на карточке товара
export const decreaseQuantityInProductCard = async (
  modelId: number
): Promise<any> => {
  return await requestWithToken(`/basket/model/${modelId}/count-minus/user`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};
