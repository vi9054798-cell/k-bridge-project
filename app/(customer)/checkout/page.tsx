// app/(customer)/checkout/page.tsx
"use client";
import { useState, useEffect } from 'react';
import { useCartStore } from '@/store/useCartStore';
import LegalContractPopup from '@/components/LegalContractPopup';
import Link from 'next/link';
import toast from 'react-hot-toast';

export default function CheckoutPage() {
  const { items } = useCartStore();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isProtected, setIsProtected] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Fix hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Tính toán tổng tiền (Lọc bỏ các ký tự không phải số)
  const calculateTotal = () => {
    const subtotal = items.reduce((total, item) => {
      const priceNumber = parseInt(item.price.replace(/[^\d]/g, ''), 10) || 0;
      return total + priceNumber;
    }, 0);
    const shipping = items.length > 0 ? 60000 : 0;
    return {
      subtotal,
      shipping,
      total: subtotal + shipping
    };
  };

  const { subtotal, shipping, total } = calculateTotal();
  const formatCurrency = (num: number) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(num);

  const handleAcceptContract = () => {
    setIsProtected(true);
    toast.success("Thanh toán thành công! Chế độ bảo hộ đã kích hoạt.", {
      style: { background: '#10b981', color: '#fff' }
    });
  };

  if (!mounted) return null;

  return (
    <div className="pt-24 pb-12 px-4 max-w-7xl mx-auto text-white min-h-screen">
      <h1 className="text-3xl font-black mb-8 border-b border-gray-800 pb-4">Thanh Toán & Ký Quỹ</h1>

      {items.length === 0 ? (
        <div className="text-center py-20 bg-[#131520] rounded-2xl border border-gray-800">
          <i className="fa-solid fa-cart-shopping text-4xl text-gray-600 mb-4"></i>
          <h2 className="text-xl font-bold text-gray-400 mb-4">Giỏ hàng của bạn đang trống</h2>
          <Link href="/" className="bg-purple-600 px-6 py-3 rounded-lg font-bold hover:bg-purple-500 transition">
            Quay lại GOM Plaza
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Cột trái: Form thông tin */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Box 1: Thông tin giao hàng */}
            <div className="bg-[#131520] p-6 rounded-2xl border border-gray-800">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <i className="fa-solid fa-location-dot text-purple-500"></i> Thông tin giao hàng
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm text-gray-400">Họ và tên</label>
                  <input type="text" placeholder="Nhập họ tên đầy đủ" className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:border-purple-500 focus:outline-none" defaultValue="Trần Khánh Vi" />
                </div>
                <div className="space-y-1">
                  <label className="text-sm text-gray-400">Số điện thoại</label>
                  <input type="text" placeholder="Nhập số điện thoại" className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:border-purple-500 focus:outline-none" defaultValue="0987654321" />
                </div>
                <div className="md:col-span-2 space-y-1">
                  <label className="text-sm text-gray-400">Địa chỉ nhận hàng (Việt Nam)</label>
                  <input type="text" placeholder="Số nhà, đường, phường/xã, quận/huyện, tỉnh/thành phố" className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:border-purple-500 focus:outline-none" defaultValue="19 Nguyễn Hữu Thọ, Tân Phong, Quận 7, TP.HCM" />
                </div>
              </div>
            </div>

            {/* Box 2: Phương thức thanh toán */}
            <div className="bg-[#131520] p-6 rounded-2xl border border-gray-800">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <i className="fa-solid fa-credit-card text-purple-500"></i> Phương thức thanh toán
              </h2>
              <div className="space-y-3">
                <label className="flex items-center justify-between p-4 border border-purple-600 bg-purple-900/20 rounded-xl cursor-pointer">
                  <div className="flex items-center gap-3">
                    <input type="radio" name="payment" defaultChecked className="accent-purple-600 w-5 h-5" />
                    <span className="font-medium">Chuyển khoản Ngân hàng (Ví Ký Quỹ k-Bridge)</span>
                  </div>
                  <i className="fa-solid fa-shield-halved text-emerald-400"></i>
                </label>
                <label className="flex items-center justify-between p-4 border border-gray-700 hover:border-gray-500 rounded-xl cursor-pointer transition">
                  <div className="flex items-center gap-3">
                    <input type="radio" name="payment" disabled className="accent-purple-600 w-5 h-5" />
                    <span className="font-medium text-gray-500">Thẻ Visa/Mastercard (Bảo trì)</span>
                  </div>
                </label>
              </div>
            </div>

          </div>

          {/* Cột phải: Hóa đơn & Đặt hàng */}
          <div className="space-y-6">
            <div className="bg-[#131520] p-6 rounded-2xl border border-gray-800 sticky top-24">
              <h2 className="text-xl font-bold mb-4">Tổng quan đơn hàng</h2>
              
              {/* Danh sách items */}
              <div className="space-y-3 mb-6 max-h-40 overflow-y-auto pr-2">
                {items.map((item, idx) => (
                  <div key={idx} className="flex justify-between text-sm">
                    <span className="text-gray-300 truncate w-2/3">{item.name}</span>
                    <span className="font-medium">{item.price}</span>
                  </div>
                ))}
              </div>

              {/* Tính toán */}
              <div className="space-y-3 border-t border-gray-800 pt-4 mb-6">
                <div className="flex justify-between text-gray-400 text-sm">
                  <span>Tạm tính</span>
                  <span>{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex justify-between text-gray-400 text-sm">
                  <span>Phí ship nội địa & Quốc tế</span>
                  <span>{formatCurrency(shipping)}</span>
                </div>
                <div className="flex justify-between text-lg font-bold border-t border-gray-800 pt-3 text-purple-400">
                  <span>Tổng cộng</span>
                  <span>{formatCurrency(total)}</span>
                </div>
              </div>

              {/* Nút thanh toán */}
              {isProtected ? (
                <div className="bg-emerald-900/30 border border-emerald-500/50 p-4 rounded-xl text-center">
                  <i className="fa-solid fa-circle-check text-emerald-400 text-3xl mb-2"></i>
                  <p className="text-emerald-400 font-bold">Đã Ký Quỹ & Bảo Hộ</p>
                  <Link href="/orders" className="text-sm text-gray-300 underline mt-2 block hover:text-white">
                    Theo dõi đơn hàng (Tracking)
                  </Link>
                </div>
              ) : (
                <button 
                  onClick={() => setIsPopupOpen(true)}
                  className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-4 rounded-xl transition shadow-lg shadow-purple-900/20 flex items-center justify-center gap-2"
                >
                  <i className="fa-solid fa-lock"></i> Xác nhận & Ký Quỹ
                </button>
              )}
            </div>
          </div>

        </div>
      )}

      {/* Popup Pháp lý */}
      <LegalContractPopup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
        onAccept={handleAcceptContract}
      />
    </div>
  );
}