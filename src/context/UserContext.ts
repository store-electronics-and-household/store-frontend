import React from 'react';

export interface IContext {
  isLoggedIn: boolean;
  userId: number | null;
  userName: string | null;
  userLastName: string | null;
  userPhone: string | null;
  email: string;
}

export const initialUserContext = {
  isLoggedIn: false,
  userId: null,
  userName: '',
  userLastName: '',
  userPhone: '',
  email: '',
};
// @ts-expect-error - context created in App
export const UserContext = React.createContext<IContext>();
