// components/Navbar.tsx
"use client";
import Link from 'next/link';
import { useCartStore } from '@/store/useCartStore';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const { items, toggleCart } = useCartStore();
  const [mounted, setMounted] = useState(false);

  // Khắc phục hydration mismatch cho việc đồng bộ giỏ hàng từ client-side
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0d0e15] border-b border-gray-800">
      {/* Top Banner (Giữ nguyên cấu trúc) */}
      <div className="bg-[#1a0b2e] text-purple-300 text-[10px] md:text-xs text-center py-1.5 font-medium">
        k-Bridge: Gom đơn sỉ - Giá tận gốc
      </div>
      
      <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo dự án (Giữ nguyên) */}
        <Link href="/" className="text-xl font-bold text-white">
          k-Bridge
        </Link>

        {/* Menu điều hướng giữa (Đã bổ sung liên kết Pre-GOM Hub) */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <Link href="/" className="hover:text-white transition">Trang Chủ</Link>
          <Link href="#" className="hover:text-white transition">Card Lab</Link>
          <Link href="/pre-gom" className="hover:text-white transition text-purple-400 font-bold">Pre-GOM Hub</Link>
          <Link href="/orders" className="hover:text-white transition">Đơn Hàng</Link>
          <Link href="/profile" className="flex items-center gap-2 hover:text-white transition">
            <i className="fa-solid fa-circle-user"></i> Profile
          </Link>
        </div>

        {/* Cụm tương tác bên phải (Giữ nguyên 100% tính năng) */}
        <div className="flex items-center gap-6">
          
          {/* Nút Đăng ký tài khoản */}
          <Link 
            href="/register" 
            className="text-sm font-bold text-purple-400 hover:text-purple-300 transition"
          >
            Đăng ký
          </Link>

          {/* Biểu tượng Giỏ hàng và badge đếm số lượng */}
          <button onClick={toggleCart} className="relative text-gray-300 hover:text-white transition">
            <i className="fa-solid fa-cart-shopping text-xl"></i>
            {mounted && items.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {items.length}
              </span>
            )}
          </button>

          {/* Nút Dashboard Admin */}
          <Link href="/admin" className="bg-yellow-500 hover:bg-yellow-400 text-black text-xs font-bold px-4 py-2 rounded transition">
            Admin
          </Link>
        </div>
      </nav>
    </header>
  );
}