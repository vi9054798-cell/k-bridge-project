// store/useCartStore.ts
import { create } from 'zustand';

interface CartItem {
  id: string;
  name: string;
  price: string;
}

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  toggleCart: () => void;
}

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  isOpen: false,
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  removeItem: (id) => set((state) => ({ items: state.items.filter(i => i.id !== id) })),
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
}));