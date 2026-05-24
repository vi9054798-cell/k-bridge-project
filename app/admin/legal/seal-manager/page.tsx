// app/admin/legal/seal-manager/page.tsx
"use client";
import React from 'react';

export default function SealManagerPage() {
  const contracts = [
    { id: "KB-2024-04-16-12345", buyer: "Trần Khánh Vi", amount: "570,000đ", hash: "0x8f...2a9c", status: "Verified" },
    { id: "KB-2024-04-16-12346", buyer: "Nguyễn Văn A", amount: "1,200,000đ", hash: "Pending Gen...", status: "Pending" }
  ];

  return (
    <div className="text-white">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold">Pháp lý & Mộc đỏ (Digital Seal)</h1>
          <p className="text-sm text-gray-400 mt-2">Hệ thống quản lý hợp đồng thông minh và mã băm (Hash ID) cho Ví Ký Quỹ.</p>
        </div>
        <button className="bg-purple-600 px-4 py-2 rounded-lg font-bold flex items-center gap-2">
          <i className="fa-solid fa-file-signature"></i> Đóng mộc hàng loạt
        </button>
      </div>

      <div className="bg-[#131520] rounded-2xl border border-gray-800 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-900 text-xs uppercase text-gray-500">
            <tr>
              <th className="p-4">Mã Hợp Đồng (Đơn)</th>
              <th className="p-4">Khách hàng</th>
              <th className="p-4">Giá trị Ký quỹ</th>
              <th className="p-4">Mã Băm (Hash ID)</th>
              <th className="p-4">Trạng thái Pháp lý</th>
              <th className="p-4">Hành động</th>
            </tr>
          </thead>
          <tbody className="text-sm divide-y divide-gray-800">
            {contracts.map((c, i) => (
              <tr key={i} className="hover:bg-gray-900/50 transition">
                <td className="p-4 font-bold text-purple-400">{c.id}</td>
                <td className="p-4">{c.buyer}</td>
                <td className="p-4">{c.amount}</td>
                <td className="p-4 font-mono text-xs text-gray-400">{c.hash}</td>
                <td className="p-4">
                  {c.status === "Verified" ? (
                    <span className="text-emerald-400 bg-emerald-900/30 px-2 py-1 rounded text-xs border border-emerald-500/30"><i className="fa-solid fa-check-circle mr-1"></i> Đã cấp mộc</span>
                  ) : (
                    <span className="text-amber-400 bg-amber-900/30 px-2 py-1 rounded text-xs border border-amber-500/30"><i className="fa-solid fa-clock mr-1"></i> Chờ cấp mộc</span>
                  )}
                </td>
                <td className="p-4">
                  <button className="text-purple-400 hover:text-white underline text-xs">Xem hợp đồng</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}