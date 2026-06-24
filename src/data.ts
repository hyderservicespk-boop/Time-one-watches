import { WatchModel, StrapMaterial, StrapColor, BuckleType } from './types';

export const WATCH_MODELS: WatchModel[] = [
  { 
    id: 'heritage-classic', 
    name: 'Heritage Classic', 
    basePrice: 18500, 
    description: 'A timeless piece featuring a clean white dial and classic proportions.',
    image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&q=80&w=1200',
    collection: 'Heritage'
  },
  { 
    id: 'ascent-chronograph', 
    name: 'Ascent Chronograph', 
    basePrice: 24200, 
    description: 'Precision engineering with intricate sub-dials and sport-luxury aesthetic.',
    image: 'https://images.unsplash.com/photo-1623998021446-45cd9b269056?auto=format&fit=crop&q=80&w=1200',
    collection: 'Sport'
  },
  { 
    id: 'horizon-tourbillon', 
    name: 'Horizon Tourbillon', 
    basePrice: 85000, 
    description: 'The pinnacle of watchmaking, featuring an exposed tourbillon escapement.',
    image: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&q=80&w=1200',
    collection: 'Complications'
  },
  {
    id: 'nocturnal-diver',
    name: 'Nocturnal Diver',
    basePrice: 12400,
    description: 'Water-resistant up to 300m, featuring luminescent markers and a unidirectional bezel.',
    image: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&q=80&w=1200',
    collection: 'Sport'
  }
];

export const STRAP_MATERIALS: StrapMaterial[] = [
  { id: 'leather', name: 'Alligator Leather', price: 0 },
  { id: 'steel', name: 'Stainless Steel', price: 850 },
  { id: 'titanium', name: 'Grade 5 Titanium', price: 1400 },
  { id: 'gold', name: '18k Rose Gold', price: 12500 },
];

export const STRAP_COLORS: StrapColor[] = [
  { id: 'black', name: 'Obsidian Black', hex: '#1A1A1A' },
  { id: 'brown', name: 'Heritage Brown', hex: '#5C4033' },
  { id: 'navy', name: 'Deep Navy', hex: '#1C2841' },
  { id: 'tan', name: 'Saddle Tan', hex: '#B87333' },
];

export const BUCKLE_TYPES: BuckleType[] = [
  { id: 'pin', name: 'Standard Pin', price: 0 },
  { id: 'deployant', name: 'Deployant Clasp', price: 450 },
  { id: 'butterfly', name: 'Butterfly Clasp', price: 600 },
];

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(price);
};
