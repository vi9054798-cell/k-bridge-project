// components/CartDrawer.tsx
"use client";
import { useCartStore } from '@/store/useCartStore';

export default function CartDrawer() {
  const { items, isOpen, toggleCart } = useCartStore();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      <div className="fixed inset-0 bg-black/50" onClick={toggleCart}></div>
      <div className="w-80 bg-[#131520] h-full p-6 shadow-2xl border-l border-gray-800 text-white z-[101]">
        <h2 className="text-xl font-bold mb-4">Giỏ hàng của bạn</h2>
        {items.length === 0 ? (
          <p className="text-gray-400">Giỏ hàng trống.</p>
        ) : (
          items.map((item, index) => (
            <div key={index} className="flex justify-between mb-4 border-b border-gray-800 pb-2">
              <span>{item.name}</span>
              <span className="text-purple-400">{item.price}</span>
            </div>
          ))
        )}
        <button onClick={toggleCart} className="w-full mt-6 bg-purple-600 py-3 rounded-lg font-bold">
          Tiếp tục mua sắm
        </button>
      </div>
    </div>
  );
}