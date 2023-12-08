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

export interface SpecifyType {
  productName: string;
  article: number;
  price?: number;
  oldPrice?: number;
  color?: string;
  diagonal?: string | number;
  brend?: string;
  country?: string;
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
  aboutProduct?: string;
}

export interface GoodsListProps {
  id: number;
  quantity: number;
  salesPrice: number;
  imgUrl: string;
  discount: number;
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
