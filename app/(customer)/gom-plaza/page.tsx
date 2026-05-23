"use client";
import React from 'react';
import Link from 'next/link';

// Dữ liệu mẫu chiến dịch GOM
const gomCampaigns = [
  { id: "newjeans-getup", name: "NewJeans - Get Up (Pre-order)", price: "490.000₫", progress: 64 },
  { id: "ive-mine", name: "IVE - I'VE MINE (Limited)", price: "520.000₫", progress: 85 },
];

export default function GomPlazaPage() {
  return (
    <div className="p-8 bg-[#0d0e15] min-h-screen text-white">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-black mb-2">GOM Plaza</h1>
        <p className="text-gray-400">Tham gia gom đơn (Bulk Buying) để tối ưu chi phí vận chuyển quốc tế.</p>
      </div>

      {/* Grid danh sách chiến dịch */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gomCampaigns.map((camp) => (
          <div key={camp.id} className="bg-[#131520] p-6 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition">
            <h2 className="text-lg font-bold mb-4">{camp.name}</h2>
            <div className="flex justify-between items-center mb-6">
              <span className="text-purple-400 font-bold">{camp.price}</span>
              <span className="text-xs bg-gray-800 px-2 py-1 rounded">Pre-order</span>
            </div>

            {/* Tiến độ */}
            <div className="w-full bg-gray-900 h-2 rounded-full mb-4">
              <div 
                className="bg-purple-600 h-full rounded-full" 
                style={{ width: `${camp.progress}%` }}
              ></div>
            </div>

            <Link 
              href={`/checkout`} 
              className="block text-center bg-white text-black font-bold py-3 rounded-xl hover:bg-gray-200 transition"
            >
              Join Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}