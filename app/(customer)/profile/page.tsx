// app/(customer)/profile/page.tsx
"use client";
import React from 'react';
import Link from 'next/link';

export default function ProfilePage() {
  return (
    <div className="pt-24 px-4 max-w-7xl mx-auto text-white min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Cột trái: Menu điều hướng */}
        <div className="md:col-span-1 bg-[#131520] p-6 rounded-2xl border border-gray-800 h-fit">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-2xl font-bold">V</div>
            <div>
              <h2 className="font-bold text-lg">Trần Khánh Vi</h2>
              <p className="text-xs text-gray-400">Hạng Thành Viên: Silver</p>
            </div>
          </div>
          <nav className="space-y-4 text-sm font-medium">
            <Link href="#" className="flex items-center gap-3 text-purple-400"><i className="fa-regular fa-user w-5"></i> Hồ sơ của tôi</Link>
            <Link href="/orders" className="flex items-center gap-3 text-gray-400 hover:text-white"><i className="fa-solid fa-box w-5"></i> Đơn hàng (GO)</Link>
            {/* Đã cập nhật nhãn tại đây */}
            <Link href="#" className="flex items-center gap-3 text-gray-400 hover:text-white"><i className="fa-solid fa-wallet w-5"></i> Ví Thanh toán đảm bảo</Link>
            <Link href="#" className="flex items-center gap-3 text-gray-400 hover:text-white"><i className="fa-solid fa-location-dot w-5"></i> Sổ địa chỉ</Link>
            <button className="flex items-center gap-3 text-red-400 hover:text-red-300 w-full mt-8 pt-4 border-t border-gray-800"><i className="fa-solid fa-right-from-bracket w-5"></i> Đăng xuất</button>
          </nav>
        </div>

        {/* Cột phải: Nội dung chi tiết - Giữ nguyên logic cũ */}
        <div className="md:col-span-3 space-y-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-[#131520] p-6 rounded-2xl border border-gray-800 text-center">
              <i className="fa-solid fa-boxes-packing text-2xl text-blue-400 mb-2"></i>
              <div className="text-2xl font-bold">3</div>
              <div className="text-xs text-gray-400">Đơn đang giao</div>
            </div>
            <div className="bg-[#131520] p-6 rounded-2xl border border-gray-800 text-center">
              <i className="fa-solid fa-shield-check text-2xl text-emerald-400 mb-2"></i>
              <div className="text-2xl font-bold">100%</div>
              <div className="text-xs text-gray-400">Tỷ lệ bảo hộ</div>
            </div>
            <div className="bg-[#131520] p-6 rounded-2xl border border-gray-800 text-center">
              <i className="fa-solid fa-coins text-2xl text-yellow-400 mb-2"></i>
              <div className="text-2xl font-bold">120</div>
              <div className="text-xs text-gray-400">Điểm tích lũy</div>
            </div>
          </div>
          {/* ... (Phần còn lại của file giữ nguyên) ... */}
        </div>
      </div>
    </div>
  );
}