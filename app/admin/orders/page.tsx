// app/orders/page.tsx
"use client";
import React from 'react';
import Link from 'next/link';

export default function OrdersTrackingPage() {
  // Logic và các thành phần khác giữ nguyên hoàn toàn
  return (
    <div className="pt-24 px-4 max-w-4xl mx-auto text-white min-h-screen">
      <div className="flex justify-between items-end mb-8 border-b border-gray-800 pb-4">
        <div>
          <h1 className="text-2xl font-black">Chi tiết đơn hàng</h1>
          <p className="text-gray-400 mt-1">Mã đơn: <span className="font-bold text-purple-400">KB-2024-04-16-12345</span></p>
        </div>
        
        {/* Đã cập nhật nhãn tại đây */}
        <span className="bg-emerald-900/30 text-emerald-400 px-4 py-2 rounded-full text-sm font-bold border border-emerald-500/50">
          <i className="fa-solid fa-shield-check mr-2"></i>Đã kích hoạt Bảo hộ
        </span>
      </div>

      <div className="bg-[#131520] p-8 rounded-2xl border border-gray-800">
        <h2 className="text-lg font-bold mb-8">Lộ trình Logistics xuyên biên giới</h2>
        {/* Phần hiển thị lộ trình giữ nguyên không thay đổi */}
        <div className="relative border-l border-gray-700 ml-2 space-y-8">
          <div className="relative pl-8">
            <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 bg-emerald-500 rounded-full"></div>
            <p className="text-sm font-bold text-emerald-500">Đã xác nhận thanh toán</p>
            <p className="text-xs text-gray-400">16/04/2026 - 10:30</p>
          </div>
          <div className="relative pl-8">
            <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 bg-gray-600 rounded-full"></div>
            <p className="text-sm font-bold text-white">Đang xử lý đơn hàng</p>
            <p className="text-xs text-gray-400">Đang chờ xác nhận từ đối tác</p>
          </div>
          <div className="relative pl-8">
            <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 bg-gray-600 rounded-full"></div>
            <p className="text-sm font-bold text-gray-500">Đang vận chuyển</p>
          </div>
        </div>
      </div>
    </div>
  );
}