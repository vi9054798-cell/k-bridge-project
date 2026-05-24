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

  // Hàm hỗ trợ để làm nổi bật (active) tab đang được chọn
  const isActive = (path: string) => {
    return pathname?.includes(path) 
      ? 'bg-[#1e2136] text-white font-bold' 
      : 'text-gray-400 hover:bg-[#131520] hover:text-white transition';
  };

  return (
    // Thêm padding-top (pt-20) để không bị Navbar tổng đè lên
    <div className="flex min-h-screen bg-[#0d0e15] pt-20"> 
      
      {/* Thanh Sidebar bên trái */}
      <aside className="w-64 border-r border-gray-800 bg-[#0d0e15] hidden md:block flex-shrink-0">
        <div className="p-6 sticky top-20">
          
          <div className="mb-8">
            <p className="text-xs font-bold text-gray-500 mb-4 tracking-wider">QUẢN TRỊ CỐT LÕI</p>
            <nav className="flex flex-col gap-2">
              {/* Trang chủ Admin */}
              <Link 
                href="/admin" 
                className={`px-4 py-3 rounded-lg ${pathname === '/admin' ? 'bg-[#1e2136] text-white font-bold' : 'text-gray-400 hover:bg-[#131520] hover:text-white transition'}`}
              >
                Dashboard
              </Link>
              {/* Quản lý đơn hàng / Logistics */}
              <Link 
                href="/admin/logistics" 
                className={`px-4 py-3 rounded-lg ${isActive('/admin/logistics')}`}
              >
                Đơn hàng (Escrow)
              </Link>
            </nav>
          </div>

          <div>
            <p className="text-xs font-bold text-gray-500 mb-4 tracking-wider">MODULE NÂNG CAO</p>
            <nav className="flex flex-col gap-2">
              {/* Quản lý Pháp lý & Mộc đỏ */}
              <Link 
                href="/admin/legal/seal-manager" 
                className={`px-4 py-3 rounded-lg ${isActive('/admin/legal')}`}
              >
                Pháp lý & Mộc đỏ
              </Link>
              {/* AI Dashboard */}
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

      {/* Nội dung chính của Admin (Hiển thị các bảng biểu ở đây) */}
      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}