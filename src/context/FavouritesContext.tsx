import React, {
  createContext,
  type ReactNode,
  useContext,
  useState,
  useEffect,
} from 'react';
import type { ProductDataType } from '../utils/types';
import {
  addCardToFavoritesList,
  getFavouritesList,
  removeCardFromFavoritesList,
} from '../utils/api/product-api';

interface FavouritesProviderProps {
  children: ReactNode;
}

interface FavouritesContextType {
  getFavouriteList: () => void;
  updateFavouritesList: () => void;
  handleAddProductToFavourites: (id: number) => void;
  handleDeleteProductFromFavourites: (id: number) => void;
  updateProductLikeStatus: (id: number) => void;
  isLiked: (id: number) => boolean;
  favouritesList: ProductDataType[];
}

const FavoritesContext = createContext<FavouritesContextType>({
  getFavouriteList: () => [],
  updateFavouritesList: () => null,
  handleAddProductToFavourites: (id: number) => null,
  handleDeleteProductFromFavourites: (id: number) => null,
  updateProductLikeStatus: (id: number) => null,
  isLiked: (id: number) => false,
  favouritesList: [],
});

export function useFavouritesContext (): FavouritesContextType {
  const context = useContext(FavoritesContext);
  return context;
}

export function FavoritesProvider ({
  children,
}: FavouritesProviderProps): JSX.Element {
  const [favouritesList, setFavouritesList] = useState<ProductDataType[]>([]);

  // favourites: получение, добавление, удаление.
  useEffect(() => {
    // обновление массива избранных в локалСторадж при лайке/дизлайке
    updateFavouritesList();
  }, [favouritesList]);

  const getFavouriteList = (): void => {
    getFavouritesList()
      .then((res) => {
        console.log(res);
        setFavouritesList(res);
        localStorage.setItem('likedProducts', JSON.stringify(res));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateFavouritesList = (): void => {
    localStorage.setItem('likedProducts', JSON.stringify(favouritesList));
  };

  const handleAddProductToFavourites = (productId: number): void => {
    addCardToFavoritesList(productId)
      .then((res) => {
        setFavouritesList([...favouritesList, res]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDeleteProductFromFavourites = (productId: number): void => {
    removeCardFromFavoritesList(productId)
      .then((res) => {
        setFavouritesList((state) =>
          state.filter((favoutiteProduct) => favoutiteProduct.id !== productId)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const isLiked = (productId: number): boolean => {
    return favouritesList.some(
      (favoriteProduct) => favoriteProduct.id === productId
    );
  };

  // const getProductToDeleteId = (productId: number): number => {
  //   const localLikedProducts: ProductDataType[] | undefined = JSON.parse(localStorage.getItem('favouritesList'));
  //   if (localLikedProducts !== null && localLikedProducts !== undefined) {
  //     const unLikedProduct = localLikedProducts.find(
  //       (productItem: ProductDataType) => productItem.id === productId);
  //     return unLikedProduct.id;
  //   };
  //   return unLikedProduct.id;
  // };

  const updateProductLikeStatus = (productId: number): void => {
    if (!isLiked(productId)) {
      handleAddProductToFavourites(productId);
    } else {
      // handleDeleteProductFromFavourites(getProductToDeleteId(productId));
      handleDeleteProductFromFavourites(productId);
    }
  };

  return (
    <FavoritesContext.Provider
      value={{
        getFavouriteList,
        updateFavouritesList,
        handleAddProductToFavourites,
        handleDeleteProductFromFavourites,
        updateProductLikeStatus,
        isLiked,
        favouritesList,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
