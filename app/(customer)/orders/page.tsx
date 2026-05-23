"use client";
import React from 'react';

// Giả lập trạng thái đơn hàng của khách hàng
const myOrders = [
  { id: "ORD-001", name: "NewJeans - Get Up", status: "PENDING_PROTECTION", progress: "32/50" },
  { id: "ORD-002", name: "IVE - I'VE MINE", status: "PROTECTED_CONFIRMED", progress: "50/50" },
];

export default function CustomerOrdersPage() {
  return (
    <div className="p-8 bg-[#0d0e15] min-h-screen text-white">
      <h1 className="text-3xl font-black mb-8">Đơn hàng của tôi</h1>
      
      <div className="space-y-6">
        {myOrders.map((order) => (
          <div key={order.id} className="bg-[#131520] p-6 rounded-2xl border border-gray-800">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-bold">{order.name}</h2>
                <p className="text-gray-400 text-sm">Mã đơn: {order.id}</p>
              </div>
              
              {/* VỊ TRÍ CẬP NHẬT TRẠNG THÁI THEO MÔ HÌNH */}
              <div className="text-right">
                {order.status === 'PENDING_PROTECTION' && (
                  <span className="px-3 py-1 bg-amber-900/30 text-amber-500 rounded-full text-xs font-bold border border-amber-900/50">
                    <i className="fa-solid fa-shield-halved mr-1"></i> PENDING PROTECTION
                  </span>
                )}
                {order.status === 'PROTECTED_CONFIRMED' && (
                  <span className="px-3 py-1 bg-emerald-900/30 text-emerald-400 rounded-full text-xs font-bold border border-emerald-900/50">
                    <i className="fa-solid fa-check-circle mr-1"></i> PROTECTED & CONFIRMED
                  </span>
                )}
              </div>
            </div>

            {/* Thanh tiến độ gom đơn */}
            <div className="mt-6">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">Tiến độ gom đơn</span>
                <span className="font-bold">{order.progress} members</span>
              </div>
              <div className="w-full bg-gray-900 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-purple-600 h-full transition-all duration-500" 
                  style={{ width: order.status === 'PENDING_PROTECTION' ? '64%' : '100%' }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}