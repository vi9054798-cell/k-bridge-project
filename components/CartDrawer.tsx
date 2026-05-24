// components/CartDrawer.tsx
"use client";
import { useCartStore } from '@/store/useCartStore';
import Link from 'next/link';

export default function CartDrawer() {
  const { items, isOpen, toggleCart } = useCartStore();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Lớp nền mờ, bấm vào đây sẽ đóng giỏ hàng */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={toggleCart}></div>
      
      {/* Khung giỏ hàng */}
      <div className="w-80 bg-[#131520] h-full p-6 shadow-2xl border-l border-gray-800 text-white z-[101] flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Giỏ hàng của bạn</h2>
          <button onClick={toggleCart} className="text-gray-400 hover:text-white transition">
            <i className="fa-solid fa-xmark text-xl"></i>
          </button>
        </div>
        
        {/* Danh sách sản phẩm */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <p className="text-gray-500 text-center mt-10">Giỏ hàng đang trống.</p>
          ) : (
            items.map((item, index) => (
              <div key={index} className="flex flex-col gap-2 mb-4 border-b border-gray-800 pb-4">
                <span className="text-sm font-medium">{item.name}</span>
                <span className="text-purple-400 font-bold">{item.price}</span>
              </div>
            ))
          )}
        </div>

        {/* Các nút hành động (Chỉ hiện khi có sản phẩm) */}
        {items.length > 0 && (
          <div className="mt-6 border-t border-gray-800 pt-6">
            <Link 
              href="/checkout" 
              onClick={toggleCart} 
              className="w-full bg-purple-600 py-3 rounded-lg font-bold flex justify-center hover:bg-purple-500 transition mb-3 shadow-lg shadow-purple-900/20"
            >
              Tiến hành Thanh toán
            </Link>
            <button 
              onClick={toggleCart} 
              className="w-full bg-transparent border border-gray-600 text-gray-300 py-3 rounded-lg font-medium hover:bg-gray-800 transition"
            >
              Tiếp tục mua sắm
            </button>
          </div>
        )}
      </div>
    </div>
  );
}