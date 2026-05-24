// app/admin/legal/seal-manager.tsx
"use client";
import React from 'react';

export default function SealManager() {
  return (
    <div className="p-8 text-white">
      <h1 className="text-2xl font-bold mb-6">Quản trị Dấu mộc Pháp lý (Seal Manager)</h1>
      <div className="bg-[#131520] p-6 rounded-2xl border border-gray-800">
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-400 text-sm border-b border-gray-800">
              <th className="pb-4">Mã Hợp đồng</th>
              <th className="pb-4">Trạng thái dấu mộc</th>
              <th className="pb-4">Hành động</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-800">
              <td className="py-4 font-mono">CT-2026-001</td>
              <td className="py-4 text-green-400 flex items-center gap-2">
                <i className="fa-solid fa-stamp"></i> Đã đóng dấu (Verified)
              </td>
              <td className="py-4">
                <button className="text-purple-400 hover:underline">Xem Hợp đồng số</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}