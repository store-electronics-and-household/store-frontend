import React, { type ReactNode, createContext, useState } from 'react';

interface IFullOrder {
  orderData: any;
  setOrderData: React.Dispatch<any>;
}
// @ts-expect-error - context created in Order
export const FullOrderContext = createContext<IFullOrder>();

export const FullOrderContextProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [orderData, setOrderData] = useState(undefined);
  return (
    <FullOrderContext.Provider value={{ orderData, setOrderData }}>
      {children}
    </FullOrderContext.Provider>
  );
};
