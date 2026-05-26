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
  // Quản lý luồng 3 bước cốt lõi giữ nguyên: review -> qr -> success
  const [checkoutStep, setCheckoutStep] = useState<'review' | 'qr' | 'success'>('review');
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

  // Khi đồng ý điều khoản -> Chuyển sang màn quét QR đặt cọc
  const handleAcceptContract = () => {
    setCheckoutStep('qr');
    toast.success("Đã xác nhận Hợp đồng! Vui lòng quét mã QR đặt cọc.", {
      style: { background: '#10b981', color: '#fff' }
    });
  };

  // Xác nhận chuyển khoản cọc thành công
  const handleConfirmPayment = () => {
    setCheckoutStep('success');
    toast.success("Đã ghi nhận tiền đặt cọc! Đơn hàng đang được xử lý.", {
      style: { background: '#10b981', color: '#fff' }
    });
  };

  if (!mounted) return null;

  return (
    <div className="pt-24 pb-12 px-4 max-w-7xl mx-auto text-white min-h-screen">
      {/* Tiêu đề cập nhật tính pháp lý đặt cọc */}
      <h1 className="text-3xl font-black mb-8 border-b border-gray-800 pb-4">Đặt Cọc 100% & Cam Kết Bảo Hộ</h1>

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
          
          {/* Cột trái: Giữ nguyên form thông tin cũ */}
          <div className="lg:col-span-2 space-y-6">
            
            <div className="bg-[#131520] p-6 rounded-2xl border border-gray-800">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <i className="fa-solid fa-location-dot text-purple-500"></i> Thông tin giao hàng
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm text-gray-400">Họ và tên</label>
                  <input type="text" className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:border-purple-500 focus:outline-none" defaultValue="Trần Khánh Vi" readOnly={checkoutStep !== 'review'} />
                </div>
                <div className="space-y-1">
                  <label className="text-sm text-gray-400">Số điện thoại</label>
                  <input type="text" className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:border-purple-500 focus:outline-none" defaultValue="0987654321" readOnly={checkoutStep !== 'review'} />
                </div>
                <div className="md:col-span-2 space-y-1">
                  <label className="text-sm text-gray-400">Địa chỉ nhận hàng</label>
                  <input type="text" className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:border-purple-500 focus:outline-none" defaultValue="19 Nguyễn Hữu Thọ, Tân Phong, Quận 7, TP.HCM" readOnly={checkoutStep !== 'review'} />
                </div>
              </div>
            </div>

            <div className="bg-[#131520] p-6 rounded-2xl border border-gray-800">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <i className="fa-solid fa-building-columns text-purple-500"></i> Phương thức bảo đảm
              </h2>
              <div className="space-y-3">
                <label className="flex items-center justify-between p-4 border border-purple-600 bg-purple-900/20 rounded-xl cursor-pointer">
                  <div className="flex items-center gap-3">
                    <input type="radio" name="payment" defaultChecked className="accent-purple-600 w-5 h-5" />
                    {/* Đổi nhãn phương thức sang đặt cọc */}
                    <span className="font-medium">Chuyển khoản đặt cọc 100% giá trị đơn hàng (Tài khoản Doanh nghiệp)</span>
                  </div>
                  <i className="fa-solid fa-shield-halved text-emerald-400" title="Cam kết bảo hộ tiền cọc 100%"></i>
                </label>
              </div>
            </div>

          </div>

          {/* Cột phải: Quản lý 3 bước chuyển đổi nhãn đặt cọc */}
          <div className="space-y-6">
            
            {/* BƯỚC 1: XEM ĐƠN VÀ XÁC NHẬN */}
            {checkoutStep === 'review' && (
              <div className="bg-[#131520] p-6 rounded-2xl border border-gray-800 sticky top-24">
                <h2 className="text-xl font-bold mb-4">Tổng quan đơn hàng</h2>
                <div className="space-y-3 mb-6 max-h-40 overflow-y-auto pr-2">
                  {items.map((item, idx) => (
                    <div key={idx} className="flex justify-between text-sm">
                      <span className="text-gray-300 truncate w-2/3">{item.name}</span>
                      <span className="font-medium">{item.price}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-3 border-t border-gray-800 pt-4 mb-6">
                  <div className="flex justify-between text-gray-400 text-sm">
                    <span>Tạm tính</span><span>{formatCurrency(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-gray-400 text-sm">
                    <span>Phí ship nội địa & Quốc tế</span><span>{formatCurrency(shipping)}</span>
                  </div>
                  {/* Định nghĩa lại tổng số tiền thu đợt 1 là tiền đặt cọc */}
                  <div className="flex justify-between text-lg font-bold border-t border-gray-800 pt-3 text-purple-400">
                    <span>Tổng tiền đặt cọc (100%)</span><span>{formatCurrency(total)}</span>
                  </div>
                </div>
                <button 
                  onClick={() => setIsPopupOpen(true)}
                  className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-4 rounded-xl transition shadow-lg shadow-purple-900/20 flex items-center justify-center gap-2"
                >
                  <i className="fa-solid fa-file-signature"></i> Xem & Ký Hợp Đồng Bảo Hộ
                </button>
              </div>
            )}

            {/* BƯỚC 2: HIỂN THỊ MÃ QR CHUYỂN KHOẢN ĐẶT CỌC */}
            {checkoutStep === 'qr' && (
              <div className="bg-[#131520] p-6 rounded-2xl border border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.15)] sticky top-24 text-center">
                <h2 className="text-xl font-bold mb-2 text-purple-400">Chuyển khoản đặt cọc 100%</h2>
                <p className="text-sm text-gray-400 mb-6">Sử dụng App Ngân hàng để quét mã QR cọc</p>
                
                <div className="bg-white p-4 rounded-2xl inline-block mb-6 shadow-lg">
                  <img 
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=DatCoc100_kBridge_${total}`} 
                    alt="VietQR k-Bridge" 
                    className="w-48 h-48"
                  />
                </div>

                <div className="text-left bg-gray-900 p-4 rounded-xl space-y-3 mb-6 border border-gray-800 text-sm">
                  <div className="flex justify-between"><span className="text-gray-400">Ngân hàng:</span><span className="font-bold">Vietcombank</span></div>
                  <div className="flex justify-between"><span className="text-gray-400">Số tài khoản:</span><span className="font-bold text-purple-400 tracking-wider">1903 6688 9999</span></div>
                  <div className="flex justify-between"><span className="text-gray-400">Tên Pháp Nhân:</span><span className="font-bold text-right w-1/2">CÔNG TY TNHH K-BRIDGE VN</span></div>
                  <div className="flex justify-between"><span className="text-gray-400">Số tiền cọc (100%):</span><span className="font-bold text-emerald-400">{formatCurrency(total)}</span></div>
                  <div className="flex justify-between"><span className="text-gray-400">Nội dung:</span><span className="font-bold">KB COC {items.length > 0 ? "ORD001" : ""}</span></div>
                </div>

                <button 
                  onClick={handleConfirmPayment}
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 rounded-xl transition shadow-lg flex items-center justify-center gap-2"
                >
                  <i className="fa-solid fa-check"></i> Tôi đã chuyển khoản đặt cọc
                </button>
              </div>
            )}

            {/* BƯỚC 3: ĐẶT CỌC THÀNH CÔNG */}
            {checkoutStep === 'success' && (
              <div className="bg-[#131520] p-8 rounded-2xl border border-emerald-500/50 sticky top-24 text-center shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                <div className="w-20 h-20 bg-emerald-900/40 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fa-solid fa-shield-check text-emerald-400 text-4xl"></i>
                </div>
                <h2 className="text-2xl font-bold mb-2 text-white">Đặt cọc thành công!</h2>
                <p className="text-emerald-400 font-medium mb-6">Cam kết bảo hộ 100% tiền cọc đã được kích hoạt.</p>
                <Link 
                  href="/orders" 
                  className="w-full inline-block bg-gray-800 hover:bg-gray-700 text-white font-bold py-4 rounded-xl transition"
                >
                  Theo dõi Đơn hàng (Tracking)
                </Link>
              </div>
            )}

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