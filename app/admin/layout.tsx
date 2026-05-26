// app/admin/layout.tsx
"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Đã sửa: Dùng startsWith để bắt chính xác route gốc, tránh bị trùng lặp tên
  const isActive = (path: string) => {
    // Nếu pathname bắt đầu bằng path và ngay sau đó là dấu '/' hoặc kết thúc chuỗi
    // Cách này giúp phân biệt rõ '/admin/legal' và '/admin/legal-documents'
    const isCurrentPath = pathname === path || pathname?.startsWith(`${path}/`);
    
    return isCurrentPath 
      ? 'bg-[#1e2136] text-white font-bold' 
      : 'text-gray-400 hover:bg-[#131520] hover:text-white transition';
  };

  return (
    <div className="flex min-h-screen bg-[#0d0e15] pt-20"> 
      
      <aside className="w-64 border-r border-gray-800 bg-[#0d0e15] hidden md:block flex-shrink-0">
        <div className="p-6 sticky top-20">
          
          <div className="mb-8">
            <p className="text-xs font-bold text-gray-500 mb-4 tracking-wider">QUẢN TRỊ CỐT LÕI</p>
            <nav className="flex flex-col gap-2">
              <Link 
                href="/admin" 
                className={`px-4 py-3 rounded-lg ${pathname === '/admin' ? 'bg-[#1e2136] text-white font-bold' : 'text-gray-400 hover:bg-[#131520] hover:text-white transition'}`}
              >
                Dashboard
              </Link>
              <Link 
                href="/admin/logistics" 
                className={`px-4 py-3 rounded-lg ${isActive('/admin/logistics')}`}
              >
                Đơn hàng
              </Link>
            </nav>
          </div>

          <div>
            <p className="text-xs font-bold text-gray-500 mb-4 tracking-wider">MODULE NÂNG CAO</p>
            <nav className="flex flex-col gap-2">
              <Link 
                href="/admin/legal/seal-manager" 
                // Cập nhật đường dẫn path ngắn hơn để active đúng cả nhánh
                className={`px-4 py-3 rounded-lg ${isActive('/admin/legal')}`}
              >
                Pháp lý & Mộc đỏ
              </Link>
              <Link 
                href="/admin/card-lab-admin" 
                className={`px-4 py-3 rounded-lg ${isActive('/admin/card-lab-admin')}`}
              >
                Quản trị AI
              </Link>
            </nav>
          </div>

        </div>
      </aside>

      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}