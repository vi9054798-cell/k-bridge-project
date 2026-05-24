"use client";
import { useState } from 'react';
import LegalContractPopup from '@/components/LegalContractPopup';

export default function CheckoutPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePayment = () => {
    // Mở popup khi bấm thanh toán
    setIsPopupOpen(true); 
  };

  const handleAcceptContract = () => {
    // Xử lý khi user chấp nhận (ví dụ: chuyển trạng thái đơn hàng thành Protected)
    alert("Thanh toán thành công & Chế độ Pending Protection được kích hoạt!");
  };

  return (
    <div className="pt-24 px-4 max-w-2xl mx-auto text-white">
      {/* ... nội dung trang thanh toán của bạn ... */}
      <button onClick={handlePayment} className="w-full bg-purple-600 py-3 rounded-lg">
        Thanh toán
      </button>

      {/* Tích hợp Popup */}
      <LegalContractPopup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
        onAccept={handleAcceptContract}
      />
    </div>
  );
}