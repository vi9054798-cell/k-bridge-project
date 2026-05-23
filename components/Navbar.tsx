"use client";
import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="border-b border-purple-900/40 bg-[#131520] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo thương hiệu k-Bridge */}
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-2 rounded-lg">
            <i className="fa-solid fa-bridge text-white text-xl"></i>
          </div>
          <span className="text-2xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
            k-Bridge
          </span>
        </div>

        {/* Các nút chuyển trang (Menu) */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-400">
          <Link href="/" className="hover:text-purple-400 transition">Trang Chủ</Link>
          <Link href="/gom-plaza" className="hover:text-purple-400 transition">GOM Plaza</Link>
          <Link href="/card-lab" className="hover:text-purple-400 transition">Card Lab</Link>
          <Link href="/checkout" className="hover:text-purple-400 transition">Giỏ Hàng</Link>
          <Link href="/orders" className="hover:text-purple-400 transition">Lịch Sử Đơn</Link>
          <Link href="/admin" className="text-amber-400 font-bold hover:text-amber-300 transition">
            <i className="fa-solid fa-user-gear mr-1"></i> Admin Dashboard
          </Link>
        </nav>

        {/* Profile người dùng giả lập */}
        <div className="flex items-center space-x-4">
          <div className="relative cursor-pointer">
            <i className="fa-solid fa-basket-shopping text-purple-400 text-lg"></i>
            <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">1</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center font-bold text-xs text-white">
            KV
          </div>
        </div>

      </div>
    </header>
  );
}