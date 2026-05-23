"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function CheckoutPage() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="min-h-screen bg-[#0d0e15] text-white py-12">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-black mb-8">Xác nhận đơn hàng & Bảo hộ</h1>

        {/* 1. Tóm tắt đơn hàng */}
        <div className="bg-[#131520] p-6 rounded-2xl border border-gray-800 mb-6">
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Sản phẩm: NewJeans - Get Up</span>
            <span className="font-bold">580.000₫</span>
          </div>
        </div>

        {/* 2. Cam kết pháp lý (Phần quan trọng nhất) */}
        <div className="bg-amber-950/10 p-6 rounded-2xl border border-amber-900/40 mb-6">
          <div className="flex gap-4">
            <div className="text-amber-500 text-2xl">
              <i className="fa-solid fa-shield-halved"></i>
            </div>
            <div>
              <h3 className="font-bold text-amber-500">Chính sách Pending Protection</h3>
              <p className="text-sm text-gray-400 mt-1">
                Tiền của bạn sẽ được giữ trong ví ký quỹ (Escrow) của k-Bridge. 
                Chúng tôi chỉ giải ngân sau khi đơn hàng được xác thực vận chuyển.
                Nếu chiến dịch gom đơn thất bại, hoàn tiền 100% tự động.
              </p>
            </div>
          </div>
        </div>

        {/* 3. Checkbox Cam kết */}
        <div className="flex items-start gap-3 mb-8">
          <input 
            type="checkbox" 
            className="mt-1 w-4 h-4 rounded border-gray-700 bg-gray-900"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
          />
          <label className="text-sm text-gray-300">
            Tôi đồng ý với <span className="text-purple-400 underline cursor-pointer">Điều khoản Cam kết Bảo hộ</span> 
            và xác nhận đây là giao dịch an toàn được đóng dấu mộc kỹ thuật số bởi k-Bridge.
          </label>
        </div>

        {/* 4. Nút thanh toán */}
        <button 
          disabled={!agreed}
          className={`w-full py-4 rounded-xl font-bold transition flex items-center justify-center gap-2 ${
            agreed 
            ? 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500' 
            : 'bg-gray-800 text-gray-500 cursor-not-allowed'
          }`}
        >
          <i className="fa-solid fa-lock"></i> THANH TOÁN KÝ QUỸ (ESCROW)
        </button>
      </div>
    </div>
  );
}