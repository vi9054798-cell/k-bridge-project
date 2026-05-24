// components/Navbar.tsx
"use client";
import React from 'react';
import Link from 'next/link';
import { useCartStore } from '@/store/useCartStore';

export default function Navbar() {
  const { toggleCart, items } = useCartStore();

  return (
    <header className="w-full fixed top-0 z-50 bg-[#0d0e15]/90 backdrop-blur-md border-b border-gray-800">
      <div className="bg-purple-900/20 text-purple-400 text-[10px] py-1 text-center border-b border-purple-900/50">
        k-Bridge: Gom đơn sỉ - Giá tận gốc
      </div>
      
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-black text-white">k-Bridge</Link>
        
        <nav className="flex items-center gap-6 text-sm font-medium text-gray-300">
          <Link href="/" className="hover:text-white transition">Trang Chủ</Link>
          <Link href="/card-lab" className="hover:text-white transition">Card Lab</Link>
          <Link href="/orders" className="hover:text-white transition">Đơn Hàng</Link>
          <Link href="/profile" className="hover:text-white transition">
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-user-circle"></i>
              <span>Profile</span>
            </div>
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <button onClick={toggleCart} className="relative text-white hover:text-purple-400 transition">
            <i className="fa-solid fa-cart-shopping text-lg"></i>
            {items.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-purple-600 text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
                {items.length}
              </span>
            )}
          </button>
          <Link href="/admin/logistics" className="bg-amber-500 text-black px-3 py-1 rounded text-xs font-bold hover:bg-amber-400">
            Admin
          </Link>
        </div>
      </div>
    </header>
  );
}