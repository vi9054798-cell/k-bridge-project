"use client";
import React from 'react';
import AIStatsChart from './metrics'; // Nhập biểu đồ đã tạo vào

export default function CardLabAdminPage() {
  return (
    <div className="p-8 text-white min-h-screen bg-[#050505]">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-black text-white">Quản trị AI Card Lab</h1>
        <p className="text-gray-400 mt-2">Theo dõi hiệu suất quét thẻ và quản lý dataset của hệ thống.</p>
      </div>
      
      {/* Layout lưới */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Phần biểu đồ (chiếm 2/3 diện tích) */}
        <div className="lg:col-span-2">
          <AIStatsChart />
        </div>
        
        {/* Phần điều khiển (chiếm 1/3 diện tích) */}
        <div className="bg-[#131520] p-6 rounded-xl border border-gray-800 space-y-6">
          <h3 className="font-bold text-lg">Điều khiển hệ thống</h3>
          
          <div className="space-y-4">
            <button className="w-full bg-purple-600 hover:bg-purple-500 py-3 rounded-lg font-bold transition">
              Tải lên Dataset mới
            </button>
            <button className="w-full bg-gray-800 hover:bg-gray-700 py-3 rounded-lg font-bold transition">
              Kiểm tra lỗi (Debugger)
            </button>
          </div>

          <div className="pt-6 border-t border-gray-800">
            <p className="text-sm text-gray-500">Trạng thái Model:</p>
            <div className="flex items-center mt-2 text-emerald-500 font-bold">
              <span className="w-3 h-3 bg-emerald-500 rounded-full mr-2 animate-pulse"></span>
              Đang hoạt động (v2.4.1)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}