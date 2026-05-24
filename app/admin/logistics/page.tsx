// app/admin/logistics/page.tsx
"use client";
import React from 'react';

export default function AdminLogisticsPage() {
  
  // Hàm giả lập Webhook (để demo cho giảng viên)
  const simulateWebhook = async (orderId: string, status: string) => {
    await fetch('/api/webhook', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ orderId, status, trackingCode: "GHTK12345678" })
    });
    alert(`Đã giả lập đơn ${orderId} sang trạng thái: ${status}`);
    // Sau khi nhấn, bạn có thể reload trang để thấy sự thay đổi nếu cần
    window.location.reload(); 
  };

  return (
    <div className="p-8 text-white min-h-screen bg-[#0d0e15]">
      <h1 className="text-2xl font-bold mb-6">Quản trị Tracking & Bằng chứng số</h1>
      
      {/* Bảng quản lý đơn hàng */}
      <div className="bg-[#131520] p-6 rounded-2xl border border-gray-800 mb-8">
        <h2 className="text-lg font-semibold mb-4 text-gray-300">Danh sách đơn hàng cần cập nhật</h2>
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-400 text-sm border-b border-gray-800">
              <th className="pb-4">Mã đơn</th>
              <th className="pb-4">Trạng thái</th>
              <th className="pb-4">Cập nhật bằng chứng (Link/Ảnh)</th>
              <th className="pb-4">Giả lập Webhook (Demo)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-800">
              <td className="py-4 font-mono">ORD-001</td>
              <td className="py-4 text-amber-500">Đang đặt hàng</td>
              <td className="py-4">
                <input type="text" placeholder="Dán link ảnh hóa đơn..." className="bg-gray-900 border border-gray-700 rounded px-3 py-1 text-sm w-48" />
              </td>
              <td className="py-4 flex gap-2">
                <button 
                  onClick={() => simulateWebhook("ORD-001", "ARRIVED_VN")}
                  className="bg-purple-600 px-3 py-1 rounded text-xs hover:bg-purple-500"
                >
                  Hàng về VN
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}