// app/orders/page.tsx
"use client";
import React from 'react';
import Link from 'next/link';

export default function OrdersTrackingPage() {
  const steps = [
    { id: 1, title: "Gom nhóm", time: "16/04/2026 - 08:30", status: "completed", desc: "Đạt đủ số lượng mở GOM." },
    { id: 2, title: "Đã đặt hàng", time: "18/04/2026 - 14:00", status: "completed", desc: "Thanh toán hóa đơn sỉ với Weverse Shop.", link: "#" },
    { id: 3, title: "Về kho Việt Nam", time: "20/04/2026 - 10:15", status: "active", desc: "Đang vận chuyển qua đường hàng không (Mã AWB: KRA-99812).", link: "#" },
    { id: 4, title: "Phân loại", time: "Dự kiến 22/04", status: "pending", desc: "Xử lý tại kho tổng k-Bridge (TP.HCM)." },
    { id: 5, title: "Giao hàng nội địa", time: "Dự kiến 24/04", status: "pending", desc: "Giao cho đơn vị vận chuyển nội địa." }
  ];

  return (
    <div className="pt-24 px-4 max-w-4xl mx-auto text-white min-h-screen">
      <div className="flex justify-between items-end mb-8 border-b border-gray-800 pb-4">
        <div>
          <h1 className="text-2xl font-black">Chi tiết đơn hàng</h1>
          <p className="text-gray-400 mt-1">Mã đơn: <span className="font-bold text-purple-400">KB-2024-04-16-12345</span></p>
        </div>
        <span className="bg-emerald-900/30 text-emerald-400 px-4 py-2 rounded-full text-sm font-bold border border-emerald-500/50">
          <i className="fa-solid fa-shield-check mr-2"></i>Đã kích hoạt Bảo hộ
        </span>
      </div>

      <div className="bg-[#131520] p-8 rounded-2xl border border-gray-800">
        <h2 className="text-lg font-bold mb-8">Lộ trình Logistics xuyên biên giới</h2>
        
        <div className="relative border-l-2 border-gray-800 ml-4 space-y-10">
          {steps.map((step, index) => (
            <div key={index} className="relative pl-8">
              {/* Vòng tròn trạng thái */}
              <div className={`absolute -left-[11px] top-1 w-5 h-5 rounded-full border-4 border-[#131520] ${
                step.status === 'completed' ? 'bg-emerald-500' : step.status === 'active' ? 'bg-purple-500 animate-pulse' : 'bg-gray-700'
              }`}></div>
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <h3 className={`font-bold text-lg ${step.status === 'pending' ? 'text-gray-500' : 'text-white'}`}>{step.title}</h3>
                  <p className="text-sm text-gray-400 mt-1">{step.desc}</p>
                  
                  {/* Bằng chứng số (Chỉ hiện khi có link) */}
                  {step.link && step.status !== 'pending' && (
                    <Link href={step.link} className="inline-flex items-center gap-2 mt-3 text-xs bg-gray-900 px-3 py-1.5 rounded border border-gray-700 hover:border-purple-500 transition text-purple-300">
                      <i className="fa-solid fa-file-invoice"></i> Xem chứng từ số
                    </Link>
                  )}
                </div>
                <span className="text-xs text-gray-500 bg-gray-900 px-3 py-1 rounded-full whitespace-nowrap">{step.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}