// components/CartDrawer.tsx
"use client";
import { useCartStore } from '@/store/useCartStore';

export default function CartDrawer() {
  const { items, isOpen, toggleCart, removeItem } = useCartStore();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      <div className="fixed inset-0 bg-black/50" onClick={toggleCart}></div>
      <div className="w-80 bg-[#131520] h-full p-6 shadow-2xl border-l border-gray-800">
        <h2 className="text-xl font-bold mb-4 text-white">Giỏ hàng</h2>
        {items.map((item) => (
          <div key={item.id} className="flex justify-between mb-4 text-white">
            <span>{item.name}</span>
            <button onClick={() => removeItem(item.id)} className="text-red-400">Xóa</button>
          </div>
        ))}
        <button onClick={toggleCart} className="w-full bg-purple-600 py-3 rounded-lg text-white font-bold">Thanh toán</button>
      </div>
    </div>
  );
}