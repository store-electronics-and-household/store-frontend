import React, { useEffect } from 'react';
import { createContext, type ReactNode, useContext, useState } from 'react';
import { mockedCartProducts } from '../utils/mocks';
import { type ProductInfo } from '../utils/types';

interface CartProviderProps {
  children: ReactNode;
}

interface CartContextType {
  getItemQuantity: (id: number) => number | undefined;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartQuantity: number;
  cartItems: ProductInfo[];
  totalCount: number;
  totalDiscount: number;
  sumValue: number;
  totalSumValue: number;
}

const CartContext = createContext<CartContextType>({
  getItemQuantity: () => 0,
  increaseCartQuantity: () => null,
  decreaseCartQuantity: () => null,
  removeFromCart: () => null,
  cartQuantity: 0,
  cartItems: [],
  totalCount: 0,
  totalDiscount: 0,
  sumValue: 0,
  totalSumValue: 0,
});

export function useCartContext(): CartContextType {
  const context = useContext(CartContext);
  return context;
}

const getTotalCartItemQuantities = (cartItems: ProductInfo[]): number =>
  cartItems.reduce((acc, currentValue) => acc + currentValue.quantity, 0);
const getTotalDiscountItem = (cartItems: ProductInfo[]): number =>
  cartItems.reduce(
    (acc, currentValue) =>
      acc +
      (currentValue.originPrice - currentValue.salesPrice) *
        currentValue.quantity,
    0
  );
const getSumValue = (cartItems: ProductInfo[]): number =>
  cartItems.reduce(
    (acc, currentValue) =>
      acc + currentValue.quantity * currentValue.salesPrice,
    0
  );
const getTotalSumValue = (cartItems: ProductInfo[]): number =>
  cartItems.reduce(
    (acc, currentValue) =>
      acc + currentValue.quantity * currentValue.salesPrice,
    0
  );

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const [cartQuantity] = useState<number>(0);
  const [cartItems, setCartItems] = useState<ProductInfo[]>(mockedCartProducts);
  const [totalCount, setTotalCount] = useState<number>(
    getTotalCartItemQuantities(mockedCartProducts)
  );
  const [totalDiscount, setTotalDiscount] = useState<number>(
    getTotalDiscountItem(mockedCartProducts)
  );
  const [sumValue, setSumValue] = useState<number>(
    getSumValue(mockedCartProducts)
  );
  const [totalSumValue, setTotalSumValue] = useState<number>(
    getTotalDiscountItem(mockedCartProducts)
  );

  function getItemQuantity(id: number): number | undefined {
    return cartItems.find((item) => item.id === id)?.quantity ?? 0;
  }

  const increaseCartQuantity = (id: number): void => {
    const foundItemIndex = cartItems.findIndex((item) => item.id === id);

    if (foundItemIndex !== -1) {
      const updatedArray = [...cartItems];
      updatedArray[foundItemIndex].quantity += 1;

      setCartItems(updatedArray);
    }
  };

  function decreaseCartQuantity(id: number): void {
    const foundItemIndex = cartItems.findIndex((item) => item.id === id);

    if (foundItemIndex !== -1 && cartItems[foundItemIndex].quantity !== 1) {
      const updatedArray = [...cartItems];
      updatedArray[foundItemIndex].quantity -= 1;

      setCartItems(updatedArray);
    }
  }

  function removeFromCart(id: number): void {
    const updatedArray = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedArray);
  }

  useEffect(() => {
    const newTotalCountValue = getTotalCartItemQuantities(cartItems);

    if (newTotalCountValue !== totalCount) {
      setTotalCount(newTotalCountValue);
    }
  }, [cartItems]);

  useEffect(() => {
    const newTotalDiscountValue = getTotalDiscountItem(cartItems);

    if (newTotalDiscountValue !== totalDiscount) {
      setTotalDiscount(newTotalDiscountValue);
    }
  }, [cartItems]);

  useEffect(() => {
    const newSumValue = getSumValue(cartItems);

    if (newSumValue !== sumValue) {
      setSumValue(newSumValue);
    }
  }, [cartItems]);

  useEffect(() => {
    const newTotalSumValue = getTotalSumValue(cartItems);

    if (newTotalSumValue !== totalSumValue) {
      setTotalSumValue(newTotalSumValue);
    }
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartQuantity,
        cartItems,
        totalCount,
        totalDiscount,
        sumValue,
        totalSumValue,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
