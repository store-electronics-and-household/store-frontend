import React, {
  createContext,
  type ReactNode,
  useContext,
  useState,
  useEffect
} from 'react';
import type { ProductFullDataType, MediumCardProps } from '../utils/types';
import {
  addCardToFavoritesList,
  getFavouritesList,
  getProductDataById,
  removeCardFromFavoritesList
} from '../utils/api/product-api';

interface FavouritesProviderProps {
  children: ReactNode;
}

interface FavouritesContextType {
  getFavouriteList: () => void;
  updateFavouritesList: () => void;
  handleAddProductToFavourites: (product: MediumCardProps | ProductFullDataType) => void;
  handleDeleteProductFromFavourites: (product: MediumCardProps | ProductFullDataType) => void;
  updateProductLikeStatus: (product: MediumCardProps | ProductFullDataType) => void;
  isCardLiked: (id: number) => boolean;
  favouritesList: Array<MediumCardProps | ProductFullDataType>;
  getProductById: (productId: number) => void; // получение полной карточки
  productFull: ProductFullDataType; // полная картока передается для заполнения страницы товара
}

const FavoritesContext = createContext<FavouritesContextType>({
  getFavouriteList: () => null,
  updateFavouritesList: () => null,
  handleAddProductToFavourites: (product: MediumCardProps | ProductFullDataType) => null,
  handleDeleteProductFromFavourites: (product: MediumCardProps | ProductFullDataType) => null,
  updateProductLikeStatus: (product: MediumCardProps | ProductFullDataType) => null,
  isCardLiked: (id: number) => false,
  favouritesList: [],
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
      imageLink: ''
    },
    images: [],
    attributes: []
  },
});

export function useFavouritesContext (): FavouritesContextType {
  const context = useContext(FavoritesContext);
  return context;
}

export function FavoritesProvider ({ children }: FavouritesProviderProps): JSX.Element {
  const [favouritesList, setFavouritesList] = useState<Array<MediumCardProps | ProductFullDataType>>([]);
  const [productById, setProductById] = useState<ProductFullDataType>({
    id: 0,
    name: '',
    description: '',
    price: 0,
    oldPrice: null,
    category: {
      id: 0,
      name: '',
      imageLink: ''
    },
    images: [],
    attributes: []
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
      imageLink: ''
    },
    images: [],
    attributes: []
  });

  // получение modelId из productCardMedium и запрос на сервер fullProductDto
  const getProductById = (productId: number): void => {
    console.log(productId);
    getProductDataById(productId)
      .then((data) => {
        setProductById(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // для очистки стейта после ухода со страницы товара...
  const setFullProductState = (): void => {
    location.pathname === '/product'
      ? setProductFull(productById)
      : setProductFull({
        id: 0,
        name: '',
        description: '',
        price: 0,
        oldPrice: null,
        category: {
          id: 0,
          name: '',
          imageLink: ''
        },
        images: [],
        attributes: []
      });
  };

  useEffect(() => {
    setFullProductState();
  }, [location.pathname]);
  // ...для очистки стейта после ухода со страницы товара

  // favourites: получение, добавление, удаление.
  useEffect(() => { // обновление массива избранных в локалСторадж при лайке/дизлайке
    updateFavouritesList();
    console.log('useEffect', favouritesList);
  }, [favouritesList]);

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

  const handleAddProductToFavourites = (product: MediumCardProps | ProductFullDataType): void => {
    console.log(product.id);
    addCardToFavoritesList(product.id)
      .then()
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setFavouritesList([...favouritesList, product]);
      });
  };

  const handleDeleteProductFromFavourites = (product: MediumCardProps | ProductFullDataType): void => {
    removeCardFromFavoritesList(product.id)
      .then()
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setFavouritesList((state) =>
          state.filter((favoutiteProduct) => favoutiteProduct.id !== product.id)
        );
      });
  };

  const isCardLiked = (modelId: number): boolean => {
    console.log('isCardLiked', favouritesList);
    return favouritesList.some(
      (favoriteProduct) => favoriteProduct.id === modelId
    );
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

  const updateProductLikeStatus = (product: MediumCardProps | ProductFullDataType): void => {
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
        productFull,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
