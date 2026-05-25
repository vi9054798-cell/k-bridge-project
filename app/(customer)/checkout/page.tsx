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

  useEffect(() => {
    setMounted(true);
  }, []);

  const calculateTotal = () => {
    const subtotal = items.reduce((total, item) => {
      const priceNumber = parseInt(item.price.replace(/[^\d]/g, ''), 10) || 0;
      return total + priceNumber;
    }, 0);
    const shipping = items.length > 0 ? 60000 : 0;
    return { subtotal, shipping, total: subtotal + shipping };
  };

  const { subtotal, shipping, total } = calculateTotal();
  const formatCurrency = (num: number) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(num);

  const handleAcceptContract = () => {
    setIsProtected(true);
    toast.success("Hợp đồng bảo hộ đã được xác lập. Thanh toán thành công.", {
      style: { background: '#10b981', color: '#fff' }
    });
  };

  if (!mounted) return null;

  return (
    <div className="pt-24 pb-12 px-4 max-w-7xl mx-auto text-white min-h-screen">
      <h1 className="text-3xl font-black mb-8 border-b border-gray-800 pb-4">Thanh Toán & Cam Kết Bảo Hộ</h1>

      {items.length === 0 ? (
        <div className="text-center py-20 bg-[#131520] rounded-2xl border border-gray-800">
          <h2 className="text-xl font-bold text-gray-400 mb-4">Giỏ hàng trống</h2>
          <Link href="/" className="bg-purple-600 px-6 py-3 rounded-lg font-bold hover:bg-purple-500">Quay lại GOM Plaza</Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Cột trái */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-[#131520] p-6 rounded-2xl border border-gray-800">
              <h2 className="text-xl font-bold mb-4">Thông tin giao hàng</h2>
              <input type="text" className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 mb-4 text-white focus:border-purple-500 focus:outline-none" defaultValue="Trần Khánh Vi" />
              <input type="text" className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:border-purple-500 focus:outline-none" defaultValue="19 Nguyễn Hữu Thọ, Q.7, TP.HCM" />
            </div>
            <div className="bg-[#131520] p-6 rounded-2xl border border-gray-800">
              <h2 className="text-xl font-bold mb-4">Phương thức thanh toán</h2>
              <label className="flex items-center p-4 border border-purple-600 bg-purple-900/20 rounded-xl cursor-pointer">
                <input type="radio" defaultChecked className="mr-3 accent-purple-600" />
                <span>Chuyển khoản Ngân hàng (Tài khoản doanh nghiệp - Bảo hộ 100%)</span>
              </label>
            </div>
          </div>

          {/* Cột phải: Tổng quan đơn hàng */}
          <div className="space-y-6">
            <div className="bg-[#131520] p-6 rounded-2xl border border-gray-800">
              <h2 className="text-xl font-bold mb-4">Tổng quan đơn hàng</h2>
              
              {/* Danh sách sản phẩm */}
              <div className="space-y-2 mb-4">
                {items.map((item, idx) => (
                  <div key={idx} className="flex justify-between text-sm">
                    <span className="text-gray-300">{item.name}</span>
                    <span>{item.price}</span>
                  </div>
                ))}
              </div>

              {/* Bóc tách chi phí */}
              <div className="space-y-3 border-t border-gray-800 pt-4 mb-4">
                <div className="flex justify-between text-sm text-gray-400">
                  <span>Tạm tính</span>
                  <span>{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-400">
                  <span>Phí ship (Nội địa Việt Nam)</span>
                  <span>{formatCurrency(shipping)}</span>
                </div>
              </div>

              {/* Tổng cộng */}
              <div className="border-t border-gray-800 pt-4 mb-6">
                <div className="flex justify-between font-bold text-lg text-purple-400">
                  <span>Tổng cộng</span>
                  <span>{formatCurrency(total)}</span>
                </div>
              </div>
              
              {isProtected ? (
                <div className="bg-emerald-900/30 p-4 rounded-xl text-center text-emerald-400 font-bold border border-emerald-500/50">
                  <i className="fa-solid fa-shield-check mr-2"></i> Đã kích hoạt Cam kết bảo hộ
                </div>
              ) : (
                <button 
                  onClick={() => setIsPopupOpen(true)}
                  className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-4 rounded-xl transition flex items-center justify-center gap-2 shadow-lg shadow-purple-900/20"
                >
                  <i className="fa-solid fa-lock"></i> Xác nhận & Cam kết bảo hộ
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      <LegalContractPopup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
        onAccept={handleAcceptContract}
      />
    </div>
  );
}