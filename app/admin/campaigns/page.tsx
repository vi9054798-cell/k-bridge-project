"use client";
import React from 'react';
import Link from 'next/link'; // 1. NHỚ PHẢI CÓ DÒNG NÀY

export default function CampaignsPage() {
  // Giả lập dữ liệu danh sách chiến dịch
  const campaigns = [
    { id: 'newjeans-getup', name: 'NewJeans Comeback' },
    { id: 'seventeen-fml', name: 'SEVENTEEN FML' }
  ];

  return (
    <div className="p-8 text-white">
      <h1 className="text-2xl font-bold mb-6">Quản lý Chiến dịch (Campaigns)</h1>
      
      {/* Danh sách chiến dịch */}
      <div className="space-y-4">
        {campaigns.map((c) => (
          <div key={c.id} className="bg-[#131520] p-4 rounded-xl border border-gray-800 flex justify-between items-center">
            <span>{c.name}</span>
            {/* 2. ĐÂY LÀ PHẦN LIÊN KẾT BẠN CẦN */}
            <Link 
              href={`/admin/campaigns/${c.id}/edit`} 
              className="text-emerald-400 hover:underline font-bold"
            >
              Chỉnh sửa chi tiết
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}