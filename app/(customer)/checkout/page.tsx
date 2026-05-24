// app/(customer)/checkout/page.tsx
"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function CheckoutPage() {
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState<'pending' | 'protected'>('pending');

  const handlePayment = () => {
    if (agreed) {
      setStatus('protected');
      alert("Thanh toán thành công! Trạng thái đơn: Pending Protection. Tiền của bạn đã được bảo vệ.");
    }
  };

  return (
    <div className="min-h-screen bg-[#0d0e15] pt-24 px-4 text-white">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-black mb-8">Xác nhận thanh toán</h1>
        
        {/* Box Trạng thái */}
        <div className="bg-[#131520] p-6 rounded-2xl border border-gray-800 mb-6">
          <div className="flex justify-between items-center">
            <span>Trạng thái giao dịch:</span>
            <span className={`px-3 py-1 rounded-full text-sm font-bold ${status === 'protected' ? 'bg-emerald-900 text-emerald-400' : 'bg-amber-900 text-amber-400'}`}>
              {status === 'protected' ? 'Pending Protection' : 'Chờ xác nhận'}
            </span>
          </div>
        </div>

        {/* Checkbox Pháp lý */}
        <div className="bg-[#131520] p-6 rounded-2xl border border-gray-800 mb-6">
          <label className="flex items-start gap-3 cursor-pointer">
            <input 
              type="checkbox" 
              checked={agreed} 
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-1 accent-purple-600"
            />
            <span className="text-sm text-gray-300">
              Tôi đồng ý với <b>Điều khoản Cam kết Bảo hộ</b> và xác nhận đây là giao dịch an toàn được đóng dấu mộc kỹ thuật số bởi k-Bridge. Tôi hiểu rằng tiền của tôi được giữ trong tài khoản đảm bảo cho đến khi đơn hàng hoàn tất.
            </span>
          </label>
        </div>

        <button 
          onClick={handlePayment}
          disabled={!agreed}
          className={`w-full py-4 rounded-xl font-bold ${agreed ? 'bg-purple-600 hover:bg-purple-500' : 'bg-gray-800 text-gray-500'}`}
        >
          {status === 'protected' ? 'Đã thanh toán (Đang bảo vệ)' : 'Thanh toán ngay'}
        </button>
      </div>
    </div>
  );
}