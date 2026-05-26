// store/useCartStore.ts
import { create } from 'zustand';

interface CartItem { id: string; name: string; price: string; quantity: number; }

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  toggleCart: () => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
}

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  isOpen: false,
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
  addItem: (item) => set((state) => {
    const existing = state.items.find((i) => i.id === item.id);
    if (existing) {
      return { items: state.items.map((i) => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i) };
    }
    return { items: [...state.items, { ...item, quantity: 1 }] };
  }),
  increaseQuantity: (id) => set((state) => ({
    items: state.items.map((i) => i.id === id ? { ...i, quantity: i.quantity + 1 } : i)
  })),
  decreaseQuantity: (id) => set((state) => ({
    items: state.items
      .map((i) => i.id === id ? { ...i, quantity: Math.max(0, i.quantity - 1) } : i)
      .filter((i) => i.quantity > 0)
  })),
}));