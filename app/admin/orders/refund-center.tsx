"use client";
import React from 'react';

// Giả lập danh sách đơn hàng cần hoàn tiền
const refundRequests = [
  { id: "REF-9921", customer: "Nguyễn Văn A", amount: "580.000₫", reason: "GO Failed" },
  { id: "REF-9922", customer: "Trần Thị B", amount: "1.200.000₫", reason: "Out of Stock" },
];

export default function RefundCenter() {
  const handleRefund = (id: string) => {
    alert(`Đã hoàn tiền thành công cho đơn: ${id}`);
  };

  return (
    <div className="bg-[#131520] p-6 rounded-xl border border-red-900/30">
      <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
        <i className="fa-solid fa-money-bill-wave text-red-500"></i> Trung tâm Hoàn tiền (Refund Center)
      </h2>
      
      <div className="space-y-4">
        {refundRequests.map((req) => (
          <div key={req.id} className="flex justify-between items-center p-4 bg-[#0a0b10] border border-gray-800 rounded-lg">
            <div>
              <p className="text-sm font-bold text-white">{req.customer}</p>
              <p className="text-xs text-gray-400">Mã: {req.id} | Lý do: {req.reason}</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-bold text-red-400">{req.amount}</span>
              <button 
                onClick={() => handleRefund(req.id)}
                className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-lg text-sm transition"
              >
                Hoàn tiền ngay
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}