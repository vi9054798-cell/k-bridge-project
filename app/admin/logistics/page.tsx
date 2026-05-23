"use client";
import React from 'react';
import SealManager from '../legal/seal-manager'; // 1. Import component

export default function LogisticsPage() {
  return (
    <div className="p-8 text-white">
      <h1 className="text-2xl font-bold mb-6">Logistics & Tracking</h1>
      
      {/* Ví dụ một hóa đơn đã đóng dấu */}
      <div className="bg-[#131520] p-6 rounded-xl border border-gray-800 relative">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold">Vận đơn: KE-AWB-88291</h3>
            <p className="text-gray-400">Trạng thái: Thông quan thành công</p>
          </div>
          {/* 2. Gọi component SealManager vào đây */}
          <SealManager text="ĐÃ THÔNG QUAN" />
        </div>
      </div>
    </div>
  );
}
