"use client";
import React from 'react';
import PendingBadge from '@/components/admin/PendingBadge';

// 1. Định nghĩa dữ liệu mẫu (để code không bị lỗi "order is not defined")
const orders = [
  { id: "ORD-001", customer: "Nguyễn Văn A", amount: "580.000₫", status: "PENDING_PROTECTION" },
  { id: "ORD-002", customer: "Trần Thị B", amount: "1.200.000₫", status: "VERIFIED_BY_ADMIN" },
];

export default function OrdersPage() {
  return (
    <div className="p-8 text-white">
      <h1 className="text-2xl font-bold mb-8">Quản lý Đơn hàng & Escrow</h1>
      
      <div className="bg-[#131520] border border-gray-800 rounded-xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-800 text-gray-400 text-sm">
            <tr>
              <th className="p-4">Mã đơn</th>
              <th className="p-4">Khách hàng</th>
              <th className="p-4">Trạng thái bảo vệ</th>
              <th className="p-4">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-t border-gray-800">
                <td className="p-4 font-mono">{order.id}</td>
                <td className="p-4">{order.customer}</td>
                
                {/* 2. Logic Pending Protection */}
                <td className="p-4">
                  {order.status === 'PENDING_PROTECTION' ? (
                    <PendingBadge />
                  ) : (
                    <span className="text-emerald-500 font-bold text-xs">Đã xác thực</span>
                  )}
                </td>
                
                <td className="p-4">
                  {order.status === 'PENDING_PROTECTION' && (
                    <button className="bg-purple-600 px-3 py-1 rounded text-sm hover:bg-purple-500 transition">
                      Xác thực (Unlock)
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}