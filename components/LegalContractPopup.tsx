// components/LegalContractPopup.tsx
"use client";
import React from 'react';

interface LegalContractPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onAccept: () => void;
}

export default function LegalContractPopup({ isOpen, onClose, onAccept }: LegalContractPopupProps) {
  if (!isOpen) return null;

  const handleAccept = () => {
    onAccept();
    onClose(); // Đóng popup sau khi chấp nhận
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center">
      {/* Lớp nền mờ */}
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose}></div>
      
      {/* Nội dung Popup */}
      <div className="relative bg-[#131520] w-full max-w-2xl mx-4 p-8 rounded-2xl border border-gray-800 shadow-2xl z-[201] text-white">
        <h2 className="text-2xl font-bold mb-6 text-purple-400">Cam kết bảo hộ 100% k-Bridge</h2>
        
        <div className="space-y-4 text-gray-300 text-sm h-80 overflow-y-auto pr-4 font-light">
          <p>Dưới đây là các điều khoản cam kết bảo hộ giao dịch của bạn tại k-Bridge:</p>
          
          <ol className="list-decimal list-inside space-y-3">
            <li>
              <b>Chế độ Pending Protection:</b> Khi bạn thanh toán, tiền của bạn sẽ được giữ an toàn trong ví ký quỹ. Chúng tôi cam kết 100% hoàn trả nếu đơn hàng không được giao thành công .
            </li>
            <li>
              <b>Dấu mộc kỹ thuật số:</b> Mỗi hợp đồng sau khi bạn xác nhận sẽ được hệ thống k-Bridge gán một mã băm (Hash ID) độc nhất, đảm bảo tính pháp lý và không thể thay đổi dữ liệu. Bạn có thể kiểm tra mã này trong mục Lịch sử đơn hàng.
            </li>
            <li>
              <b>Quy trình xử lý sự cố:</b> Trong trường hợp đơn hàng bị thất lạc hoặc lỗi do đối tác, k-Bridge sẽ tự động kích hoạt lệnh hoàn tiền hoặc gửi sản phẩm thay thế trong vòng 7 ngày làm việc kể từ ngày xác nhận sự cố.
            </li>
            <li>
              <b>Trách nhiệm của người dùng:</b> Người dùng có trách nhiệm kiểm tra thông tin vận chuyển chính xác và thanh toán đúng hạn để đảm bảo quyền lợi bảo hộ.
            </li>
          </ol>
          
          <p className="mt-4 text-xs text-gray-500 italic">
            Bằng việc nhấn "Tôi đồng ý", bạn xác nhận đã đọc và chấp nhận các điều khoản trên. Hợp đồng số này có giá trị pháp lý tương đương hợp đồng giấy giữa k-Bridge và bạn.
          </p>
        </div>

        <div className="mt-8 flex gap-4">
          <button 
            onClick={onClose}
            className="flex-1 py-3 bg-gray-800 rounded-xl font-medium text-gray-400 hover:bg-gray-700 transition"
          >
            Đóng
          </button>
          <button 
            onClick={handleAccept}
            className="flex-1 py-3 bg-purple-600 rounded-xl font-bold hover:bg-purple-500 transition"
          >
            Tôi đồng ý
          </button>
        </div>
      </div>
    </div>
  );
}