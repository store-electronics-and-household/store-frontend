import React, {
  createContext,
  type ReactNode,
  useContext,
  useState,
  useEffect,
} from 'react';
import type { ProductFullDataType, MediumCardProps } from '../utils/types';
import {
  addCardToFavoritesList,
  getFavouritesList,
  getProductDataById,
  removeCardFromFavoritesList,
} from '../utils/api/product-api';

interface FavouritesProviderProps {
  children: ReactNode;
}

interface FavouritesContextType {
  getFavouriteList: () => void;
  handleAddProductToFavourites: (productId: number) => void;
  handleDeleteProductFromFavourites: (productId: number) => void;
  updateProductLikeStatus: (productId: number) => void;
  isCardLiked: (id: number) => boolean;
  favouritesIdList: number[];
  favouritesProductsList: MediumCardProps[];
  getProductById: (productId: number) => void; // получение полной карточки
  productFull: ProductFullDataType; // полная картока передается для заполнения страницы товара
}

const FavoritesContext = createContext<FavouritesContextType>({
  getFavouriteList: () => null,
  handleAddProductToFavourites: (productId: number) => null,
  handleDeleteProductFromFavourites: (productId: number) => null,
  updateProductLikeStatus: (productId: number) => null,
  isCardLiked: (id: number) => false,
  favouritesIdList: [],
  favouritesProductsList: [],
  getProductById: (productId: number) => null,
  productFull: {
    id: 0,
    name: '',
    description: '',
    price: 0,
    oldPrice: null,
    category: {
      id: 0,
      name: '',
      imageLink: '',
    },
    images: [],
    attributes: [],
  },
});

export function useFavouritesContext (): FavouritesContextType {
  const context = useContext(FavoritesContext);
  return context;
}

export function FavoritesProvider ({
  children,
}: FavouritesProviderProps): JSX.Element {
  const [favouritesIdList, setFavouritesIdList] = useState<number[]>([]);
  const [favouritesProductsList, setFavouritesProductsList] = useState<
  MediumCardProps[]
  >([]);
  const [productById, setProductById] = useState<ProductFullDataType>({
    id: 0,
    name: '',
    description: '',
    price: 0,
    oldPrice: null,
    category: {
      id: 0,
      name: '',
      imageLink: '',
    },
    images: [],
    attributes: [],
  });
  const [productFull, setProductFull] = useState<ProductFullDataType>({
    id: 0,
    name: '',
    description: '',
    price: 0,
    oldPrice: null,
    category: {
      id: 0,
      name: '',
      imageLink: '',
    },
    images: [],
    attributes: [],
  });

  // получение modelId из productCardMedium и запрос на сервер fullProductDto
  const getProductById = (productId: number): void => {
    getProductDataById(productId)
      .then((data) => {
        setProductById(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    setProductFull(productById);
    getFavouriteList();
    isCardLiked(productById.id);
  }, [productById]);

  // favourites: получение, добавление, удаление.
  const getFavouriteList = (): void => {
    getFavouritesList()
      .then((res) => {
        setFavouritesProductsList(res.modelShortDtos);
        setFavouritesIdList(
          res.modelShortDtos.map(
            (modelShortDto: { id: number }) => modelShortDto.id
          )
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleAddProductToFavourites = (productId: number): void => {
    addCardToFavoritesList(productId)
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setFavouritesIdList([...favouritesIdList, productId]);
      });
  };

  const handleDeleteProductFromFavourites = (productId: number): void => {
    removeCardFromFavoritesList(productId)
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setFavouritesIdList((state) =>
          state.filter((favoutiteProductId) => favoutiteProductId !== productId)
        );
        getFavouriteList();
      });
  };

  const isCardLiked = (modelId: number): boolean => {
    // проверка есть ли id в массиве избранных
    return favouritesIdList.some(
      (favoriteProductId) => favoriteProductId === modelId
    );
  };

  const updateProductLikeStatus = (productId: number): void => {
    if (!isCardLiked(productId)) {
      handleAddProductToFavourites(productId);
    } else {
      handleDeleteProductFromFavourites(productId);
    }
  };

  return (
    <FavoritesContext.Provider
      value={{
        getFavouriteList,
        handleAddProductToFavourites,
        handleDeleteProductFromFavourites,
        updateProductLikeStatus,
        isCardLiked,
        getProductById,
        favouritesIdList,
        favouritesProductsList,
        productFull,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
