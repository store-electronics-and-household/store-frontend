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
  article: number;
  quantity: number;
  originPrice: number;
  salesPrice: number;
  imgUrl: string;
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

export interface ProductFullDataType {
  quantity?: number;
  id: number;
  name: string;
  description: string;
  price: number;
  persent?: number;
  oldPrice: number | null;
  category: CategoriesTileProps;
  images: Array<{
    imageLink: string;
  }>;
  attributes: Array<{
    attributeName: string;
    value: string;
  }>;
}
