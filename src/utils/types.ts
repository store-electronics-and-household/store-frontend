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
  price: number;
  images: Array<{
    imageLink: string;
  }>;
  article?: number;
  count: number;
  oldPrice: number;
  modelSetId: number;
  percent: number | null;
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
  images?: MeyTypeCardImage[];
  oldPrice: number;
  percent?: number;
}

export interface ProductFullDataType {
  quantity?: number;
  id: number;
  name: string;
  description: string;
  price: number;
  percent?: number;
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

export interface FormProps {
  email?: string | null;
  phone?: string | null;
  firstName?: string | null;
  lastName?: string | null;
}

export interface MeTypePickUpPoint {
  address: string;
  metro?: string;
  deliverypice?: string;
  comment?: string;
};

export interface CatalogMenuCategory {
  id: number;
  name: string;
  leaf: boolean;
  imageLink: string;
}
