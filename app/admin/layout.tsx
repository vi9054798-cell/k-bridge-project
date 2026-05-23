import React from 'react';
import Link from 'next/link'; // BẮT BUỘC CÓ DÒNG NÀY

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#050505]">
      {/* Sidebar */}
      <aside className="w-64 border-r border-gray-800 p-6 bg-[#131520] text-white">
        <h2 className="text-xl font-bold mb-8">Admin k-Bridge</h2>
        
        {/* Navigation */}
        <nav className="space-y-6">
          <div>
            <p className="text-xs text-gray-500 uppercase px-4 mb-2">Quản trị cốt lõi</p>
            <Link href="/admin" className="block px-4 py-2 hover:bg-gray-800 rounded">Dashboard</Link>
            <Link href="/admin/orders" className="block px-4 py-2 hover:bg-gray-800 rounded">Đơn hàng (Escrow)</Link>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase px-4 mb-2">Module nâng cao</p>
            <Link href="/admin/legal" className="block px-4 py-2 hover:bg-gray-800 rounded">Pháp lý &amp; Mộc đỏ</Link>
            <Link href="/admin/card-lab-admin" className="block px-4 py-2 hover:bg-gray-800 rounded">Quản trị AI</Link>
          </div>
        </nav>
      </aside>
      
      {/* Content Area */}
      <main className="flex-1 p-8 text-white">
        {children}
      </main>
    </div>
  );
}