// app/admin/card-lab-admin/page.tsx
"use client";
import React, { useState } from 'react';

export default function CardLabAdmin() {
  const [modelStatus] = useState({ version: 'v2.4.1', accuracy: '98.2%', errorRate: '1.8%' });

  return (
    <div className="p-8 text-white min-h-screen bg-[#0d0e15]">
      <h1 className="text-2xl font-black mb-6">Quản trị AI Card Lab</h1>

      {/* Thông số hệ thống */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-[#131520] p-6 rounded-2xl border border-gray-800">
          <p className="text-gray-400 text-sm">Model Version</p>
          <p className="text-2xl font-bold text-white">{modelStatus.version}</p>
        </div>
        <div className="bg-[#131520] p-6 rounded-2xl border border-gray-800">
          <p className="text-gray-400 text-sm">Độ chính xác (Real-time)</p>
          <p className="text-2xl font-bold text-purple-400">{modelStatus.accuracy}</p>
        </div>
        <div className="bg-[#131520] p-6 rounded-2xl border border-gray-800">
          <p className="text-gray-400 text-sm">Tỷ lệ thẻ lỗi (Error Rate)</p>
          <p className="text-2xl font-bold text-amber-500">{modelStatus.errorRate}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Bộ quản lý Dataset */}
        <div className="bg-[#131520] p-6 rounded-2xl border border-gray-800">
          <h2 className="text-lg font-bold mb-4">Quản lý Dataset</h2>
          <button className="w-full py-4 border-2 border-dashed border-gray-700 rounded-xl text-gray-400 hover:border-purple-500 hover:text-purple-400 transition">
            <i className="fa-solid fa-cloud-arrow-up mr-2"></i> Tải lên Dataset mới (.zip/csv)
          </button>
        </div>

        {/* Debugger */}
        <div className="bg-[#131520] p-6 rounded-2xl border border-gray-800">
          <h2 className="text-lg font-bold mb-4">AI Debugger (Log phân tích)</h2>
          <div className="space-y-3 h-48 overflow-y-auto pr-2 text-xs font-mono">
            <p className="text-red-400">[ERROR] ID: PC-998 | Xước bề mặt 3mm</p>
            <p className="text-green-400">[SUCCESS] ID: PC-999 | Hoàn hảo</p>
            <p className="text-amber-400">[WARN] ID: PC-997 | Độ tương phản thấp</p>
          </div>
          <button className="w-full mt-4 py-2 bg-gray-900 border border-gray-700 rounded-lg hover:bg-gray-800 transition">
            Kiểm tra lỗi chuyên sâu
          </button>
        </div>
      </div>
    </div>
  );
}