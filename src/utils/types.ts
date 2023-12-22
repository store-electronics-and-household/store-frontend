import { type ReactNode } from 'react';

export interface FaqItem {
  q: string;
  a: string;
}

export interface PopupProps {
  isOpen: boolean;
  OnClose: () => void;
  popupClass: string;
  popupClassOverlay: string;
  children: ReactNode;
  style?: React.CSSProperties;
}

export interface ProductDataType {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  description: string[];
  images: string[];
  quantityInCart: number;
  isLiked: boolean;
}

export interface ProductAttributesDataType {
  brend?: string;
  country?: string;
  color?: string;
  diagonal?: string | number;
  year?: string | number;
  display?: string;
  builtInMemory?: string | number;
  ram?: string | number;
  batteryCapacity?: string | number;
  color1?: string;
  diagonal1?: string | number;
  brend1?: string;
  country1?: string;
  year1?: string | number;
  display1?: string;
  builtInMemory1?: string | number;
  ram1?: string | number;
  batteryCapacity1?: string | number;
}

export interface AccordionProps {
  faqList: FaqItem[];
  headText: string;
}

export interface AccordionItemProps {
  faqItem: FaqItem;
  isQuestionOpen: boolean | null;
  btnOnClick: () => void;
}

export interface ProductInfo {
  id: number;
  name: string;
  description: string;
  price: number;
  images: string[];
  article?: number;
  count: number;
  oldPrice: number;
  modelSetId: number;
}

export interface MyTypeBanners {
  id: number;
  name: string;
  imageLink: string;
}

export interface CategoriesTileProps {
  id: number;
  name: string;
  imageLink: string;
}

interface MeyTypeCardImage {
  id: number;
  imageLink: string;
}

export interface MediumCardProps {
  id: number;
  name: string;
  description?: string;
  quantity: number; // ПОМЕНЯТЬ
  price?: number;
  // imgUrl: string;
  discount?: number; // ПОМЕНЯТЬ
  modelsImages?: MeyTypeCardImage[];
  oldPrice: number;
  percent?: number;
}
