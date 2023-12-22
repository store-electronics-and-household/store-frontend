/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useEffect } from 'react';
import { createContext, type ReactNode, useContext, useState } from 'react';
import { type ProductInfo } from '../utils/types';
import * as cartApi from '../utils/api/cart-api';

const getMappedProductList = (productList: any[]): ProductInfo[] => {
  return productList?.map((product) => {
    const { modelShortDto: data, count, id: modelSetId } = product;
    const { id, name, description, price, images, oldPrice } = data;

    return {
      id,
      name,
      description,
      price,
      images,
      article: id,
      count,
      oldPrice: oldPrice ?? 0,
      modelSetId,
    };
  }) ?? [];
};

interface CartProviderProps {
  children: ReactNode;
}
interface CartContextType {
  getProductList: () => Promise<void> | null;
  increaseCartQuantity: (modelId: number) => Promise<void> | null;
  decreaseCartQuantity: (modelId: number) => Promise<void> | null;
  cartQuantity: number;
  cartItems: ProductInfo[];
  totalCount: number;
  totalDiscount: number;
  sumValue: number;
  totalSumValue: number;
  addProductToCart: (modelId: number) => Promise<void> | null;
  decreaseQuantityInCart: (modelSetId: number) => Promise<void> | null;
  increaseQuantityInCart: (modelSetId: number) => Promise<void> | null;
  deleteProductFromCart: (modelSetId: number) => Promise<void> | null;
}

const CartContext = createContext<CartContextType>({
  getProductList: () => null,
  increaseCartQuantity: (modelId: number) => null,
  decreaseCartQuantity: (modelId: number) => null,
  cartQuantity: 0,
  cartItems: [],
  totalCount: 0,
  totalDiscount: 0,
  sumValue: 0,
  totalSumValue: 0,
  addProductToCart: (modelId: number) => null,
  decreaseQuantityInCart: (modelSetId: number) => null,
  increaseQuantityInCart: (modelSetId: number) => null,
  deleteProductFromCart: (modelSetId: number) => null,
});

export function useCartContext (): CartContextType {
  const context = useContext(CartContext);
  return context;
}

const getTotalCartItemQuantities = (cartItems: ProductInfo[]): number =>
  cartItems.reduce((acc, currentValue) => acc + currentValue.count, 0);

const getTotalDiscountItem = (cartItems: ProductInfo[]): number =>

  cartItems.reduce(
    (acc, currentValue) =>
      acc +
      (currentValue.oldPrice - currentValue.price) *
        currentValue.count,
    0,
  );
const getSumValue = (cartItems: ProductInfo[]): number =>
  cartItems.reduce(
    (acc, currentValue) =>
      acc + currentValue.count * currentValue.price,
    0
  );
const getTotalSumValue = (cartItems: ProductInfo[]): number =>
  cartItems.reduce(
    (acc, currentValue) =>
      acc + currentValue.count * currentValue.price,
    0
  );

export function CartProvider ({ children }: CartProviderProps): JSX.Element {
  const [cartQuantity] = useState<number>(0);

  const [cartItems, setCartItems] = useState<ProductInfo[]>([]);

  const [totalCount, setTotalCount] = useState<number>(
    getTotalCartItemQuantities(cartItems)
  );
  const [totalDiscount, setTotalDiscount] = useState<number>(
    getTotalDiscountItem(cartItems)
  );
  const [sumValue, setSumValue] = useState<number>(
    getSumValue(cartItems)
  );
  const [totalSumValue, setTotalSumValue] = useState<number>(
    getTotalDiscountItem(cartItems)
  );

  // Получение массива товаров по GET
  async function getProductList (): Promise<void> {
    await cartApi.getUserProductListInCart()
      .then((res: any) => {
        const mappedData = getMappedProductList(res?.modelSetResponseDtos);
        setCartItems(mappedData);

        return res;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  async function addProductToCart (modelId: number): Promise<void> {
    await cartApi.addProductToCart(modelId)
      .then()
      .catch((err) => {
        console.log(err);
      });
    await getProductList();
  }

  async function increaseCartQuantity (modelId: number): Promise<void> {
    await cartApi.increaseQuantityInProductCard(modelId)
      .catch((err) => {
        console.log(err);
      });
    await getProductList();
  };

  async function decreaseCartQuantity (modelId: number): Promise<void> {
    await cartApi.decreaseQuantityInProductCard(modelId)
      .catch((err) => {
        console.log(err);
      });
    await getProductList();
  };

  async function decreaseQuantityInCart (modelSetId: number): Promise<void> {
    await cartApi.decreaseQuantityInCart(modelSetId)
      .catch((err) => {
        console.log(err);
      });
    await getProductList();
  };

  async function increaseQuantityInCart (modelSetId: number): Promise<void> {
    await cartApi.increaseQuantityInCart(modelSetId)
      .catch((err) => {
        console.log(err);
      });
    await getProductList();
  };

  async function deleteProductFromCart (modelSetId: number): Promise<void> {
    await cartApi.deleteProductFromCart(modelSetId)
      .catch((err) => {
        console.log(err);
      });
    await getProductList();
  }

  useEffect(() => {
    getProductList();
  }, []);

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
        increaseCartQuantity,
        decreaseCartQuantity,
        cartQuantity,
        cartItems,
        totalCount,
        totalDiscount,
        sumValue,
        totalSumValue,
        getProductList,
        decreaseQuantityInCart,
        increaseQuantityInCart,
        deleteProductFromCart,
        addProductToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
