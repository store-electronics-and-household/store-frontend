import React, { createContext, type ReactNode, useContext, useState } from 'react';
import type { ProductFullDataType, MediumCardProps } from '../utils/types';
import { addCardToFavoritesList, getFavouritesList, getProductDataById, removeCardFromFavoritesList } from '../utils/api/product-api';
import { any } from 'prop-types';

interface FavouritesProviderProps {
  children: ReactNode;
}

interface FavouritesContextType {
  getFavouriteList: () => void;
  updateFavouritesList: () => void;
  handleAddProductToFavourites: (product: MediumCardProps) => void;
  handleDeleteProductFromFavourites: (product: MediumCardProps) => void;
  updateProductLikeStatus: (product: MediumCardProps) => void;
  isCardLiked: (id: number) => boolean;
  getProductById: (productId: number) => void;
  favouritesList: MediumCardProps[];
  productById: any;
}

const FavoritesContext = createContext<FavouritesContextType>({
  getFavouriteList: () => null,
  updateFavouritesList: () => null,
  handleAddProductToFavourites: (product: MediumCardProps) => null,
  handleDeleteProductFromFavourites: (product: MediumCardProps) => null,
  updateProductLikeStatus: (product: MediumCardProps) => null,
  isCardLiked: (id: number) => false,
  favouritesList: [],
  getProductById: (productId: number) => null,
  productById: any,
});

export function useFavouritesContext (): FavouritesContextType {
  const context = useContext(FavoritesContext);
  return context;
}

export function FavoritesProvider ({ children }: FavouritesProviderProps): JSX.Element {
  const [favouritesList, setFavouritesList] = useState<MediumCardProps[]>([]);
  const [productById, setProductById] = useState<ProductFullDataType>();

  // favourites: получение, добавление, удаление.
  // useEffect(() => { // обновление массива избранных в локалСторадж при лайке/дизлайке
  //   updateFavouritesList();
  // }, [favouritesList]);

  const getProductById = (productId: number): void => {
    getProductDataById(productId)
      .then((data) => {
        setProductById(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getFavouriteList = (): void => {
    getFavouritesList()
      .then((res) => {
        console.log(res.modelShortDtos);
        setFavouritesList(res.modelShortDtos);
        localStorage.setItem('likedProducts', JSON.stringify(res.modelShortDtos));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateFavouritesList = (): void => {
    localStorage.setItem('likedProducts', JSON.stringify(favouritesList));
  };

  const handleAddProductToFavourites = (product: MediumCardProps): void => {
    console.log(product.id);
    addCardToFavoritesList(product.id)
      .then((res) => {
        console.log(res);
        setFavouritesList([...favouritesList, product]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDeleteProductFromFavourites = (product: MediumCardProps): void => {
    removeCardFromFavoritesList(product.id)
      .then((res) => {
        setFavouritesList((state) =>
          state.filter((favoutiteProduct) => favoutiteProduct.id !== product.id)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const isCardLiked = (modelId: number): boolean => {
    return favouritesList.some((favoriteProduct) => favoriteProduct.id === modelId);
  };

  // const getProductToDeleteId = (modelId: number): number => {
  //   const localLikedProducts: ProductDataType[] | undefined = JSON.parse(localStorage.getItem('favouritesList'));
  //   if (localLikedProducts !== null && localLikedProducts !== undefined) {
  //     const unLikedProduct = localLikedProducts.find(
  //       (productItem: ProductDataType) => productItem.id === modelId);
  //     return unLikedProduct.id;
  //   };
  //   return unLikedProduct.id;
  // };

  const updateProductLikeStatus = (product: MediumCardProps): void => {
    console.log(favouritesList);
    if (!isCardLiked(product.id)) {
      handleAddProductToFavourites(product);
    } else {
      // handleDeleteProductFromFavourites(getProductToDeleteId(productId));
      handleDeleteProductFromFavourites(product);
    };
  };

  return (
    <FavoritesContext.Provider
      value={{
        getFavouriteList,
        updateFavouritesList,
        handleAddProductToFavourites,
        handleDeleteProductFromFavourites,
        updateProductLikeStatus,
        isCardLiked,
        getProductById,
        favouritesList,
        productById,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
