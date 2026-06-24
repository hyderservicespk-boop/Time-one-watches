export interface WatchModel {
  id: string;
  name: string;
  basePrice: number;
  description: string;
  image: string;
  collection: string;
}

export interface StrapMaterial {
  id: string;
  name: string;
  price: number;
}

export interface StrapColor {
  id: string;
  name: string;
  hex: string;
}

export interface BuckleType {
  id: string;
  name: string;
  price: number;
}

export type Page = 'home' | 'shop' | 'bespoke' | 'heritage' | 'contact' | 'cart' | 'login' | 'admin';
