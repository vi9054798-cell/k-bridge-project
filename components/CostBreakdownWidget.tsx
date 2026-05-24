// components/CostBreakdownWidget.tsx
"use client";
import React, { useState } from 'react';

// Định nghĩa kiểu dữ liệu cho chuẩn TypeScript
export interface PricingData {
  total: string;
  price: string;
  serviceFee: string;
  shipping: string;
  domestic: string;
}

interface Props {
  data: PricingData;
}

export default function CostBreakdownWidget({ data }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border border-gray-800 rounded-xl p-5 bg-[#131520] shadow-lg">
      {/* Layer 1: Giá hiển thị cuối cùng */}
      <div className="flex justify-between items-center">
        <div>
          <span className="text-gray-400 text-sm block">Final Price — No Hidden Fees</span>
          <span className="text-2xl font-black text-white">{data.total}</span>
        </div>
        <button 
          onClick={() => setExpanded(!expanded)} 
          className="text-purple-400 hover:text-purple-300 text-sm font-bold flex items-center gap-2 bg-purple-900/20 px-3 py-1.5 rounded-lg transition"
        >
          {expanded ? "Đóng chi tiết" : "View Cost Breakdown"}
          <i className={`fa-solid fa-chevron-${expanded ? 'up' : 'down'}`}></i>
        </button>
      </div>

      {/* Layer 2: Chi tiết bóc tách giá (ẩn/hiện) */}
      {expanded && (
        <div className="mt-5 pt-4 border-t border-gray-800 space-y-3 text-sm text-gray-300 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="flex justify-between items-center">
            <span>Giá sản phẩm gốc (Web Hàn):</span>
            <span className="font-mono">{data.price}</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Phí dịch vụ (Quản lý & Checkout):</span>
            <span className="font-mono">{data.serviceFee}</span>
          </div>
          <div className="flex justify-between items-center text-purple-400 font-medium">
            <span>Ship quốc tế (Air/Sea Freight):</span>
            <span className="font-mono">{data.shipping}</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Ship nội địa (Hàn Quốc):</span>
            <span className="font-mono">{data.domestic}</span>
          </div>
          
          <div className="mt-4 p-3 bg-amber-900/20 border border-amber-900/50 rounded-lg">
            <p className="text-xs text-amber-500 italic flex items-start gap-2">
              <i className="fa-solid fa-circle-info mt-0.5"></i>
              Bao Gồm Trong Cước: Tiền ship trên đã bao trọn gói 100% chi phí hải quan và thuế nhập khẩu. K-Bridge cam kết không phát sinh phụ phí khi nhận hàng.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}