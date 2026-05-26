// components/CartDrawer.tsx
"use client";
import { useCartStore } from '@/store/useCartStore';

export default function CartDrawer() {
  const { items, isOpen, toggleCart, increaseQuantity, decreaseQuantity } = useCartStore();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/50 flex justify-end">
      <div className="w-full max-w-sm bg-[#131520] p-6 text-white h-full border-l border-gray-800">
        <div className="flex justify-between mb-6">
          <h2 className="text-lg font-bold">Giỏ hàng của bạn</h2>
          <button onClick={toggleCart}><i className="fa-solid fa-xmark"></i></button>
        </div>

        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex justify-between items-center bg-[#0d0e15] p-3 rounded-lg">
              <span className="text-sm truncate w-1/3">{item.name}</span>
              
              {/* Nút cộng trừ */}
              <div className="flex items-center gap-3 bg-gray-800 rounded px-2 py-1">
                <button onClick={() => decreaseQuantity(item.id)} className="text-purple-400 hover:text-white">-</button>
                <span className="font-bold text-sm">{item.quantity}</span>
                <button onClick={() => increaseQuantity(item.id)} className="text-purple-400 hover:text-white">+</button>
              </div>
              
              <span className="text-sm font-bold text-purple-400">{item.price}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-gray-800">
          <button className="w-full bg-purple-600 py-3 rounded-lg font-bold hover:bg-purple-500 transition">
            Tiến hành thanh toán bảo đảm
          </button>
          <button onClick={toggleCart} className="w-full mt-3 py-3 text-gray-400 hover:text-white text-sm">
            Tiếp tục mua sắm
          </button>
        </div>
      </div>
    </div>
  );
}