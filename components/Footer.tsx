// components/Footer.tsx
import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0a0b10] border-t border-gray-800 text-gray-400 text-sm mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* CỘT 1: THÔNG TIN DOANH NGHIỆP */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-black text-white block mb-4">
              k-Bridge<span className="text-purple-500">.</span>
            </Link>
            <p className="font-bold text-gray-300">Công ty TNHH k-Bridge Việt Nam</p>
            <p><i className="fa-solid fa-hashtag w-5"></i> MST: 0312345678</p>
            <p><i className="fa-solid fa-location-dot w-5"></i> Tầng lửng, Tòa nhà k-Bridge, 19 Nguyễn Hữu Thọ, Tân Phong, Quận 7, TP.HCM</p>
            <p><i className="fa-solid fa-phone w-5"></i> Hotline (24/7): 1900-9999</p>
            <p><i className="fa-solid fa-envelope w-5"></i> cs@kbridge.vn</p>
            
            {/* Giả lập Logo Bộ Công Thương */}
            <Link href="#" className="inline-block mt-4">
              <div className="border-2 border-blue-500 rounded-lg p-2 flex items-center gap-2 bg-blue-900/20 hover:bg-blue-900/40 transition">
                <i className="fa-solid fa-check-circle text-blue-500 text-xl"></i>
                <div className="leading-tight">
                  <p className="text-[10px] font-bold text-blue-400 uppercase">Đã thông báo</p>
                  <p className="text-[10px] font-bold text-white uppercase">Bộ Công Thương</p>
                </div>
              </div>
            </Link>
          </div>

          {/* CỘT 2: HƯỚNG DẪN VÀ VẬN HÀNH */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Hướng Dẫn & Vận Hành</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="hover:text-purple-400 transition">Quy trình GOM & Trợ giá</Link></li>
              <li><Link href="#" className="hover:text-purple-400 transition">Hướng dẫn đặt hàng (Newbies)</Link></li>
              <li><Link href="#" className="hover:text-purple-400 transition">Tracking Lộ trình Logistics (Kaddy)</Link></li>
              <li><Link href="#" className="hover:text-purple-400 transition">Câu hỏi thường gặp (FAQ)</Link></li>
            </ul>
          </div>

          {/* CỘT 3: CHỨNG CHỈ & CAM KẾT FANDOM */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Cam Kết Fandom</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-chart-line text-purple-500 mt-1"></i>
                <div>
                  <p className="font-bold text-gray-300">Tính điểm Hanteo/Circle Chart</p>
                  <p className="text-xs mt-1">100% Album mua tại k-Bridge có Giấy xác nhận doanh số chuẩn.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-shield-halved text-emerald-500 mt-1"></i>
                <div>
                  <p className="font-bold text-gray-300">Authentic 100%</p>
                  <p className="text-xs mt-1">Hoàn tiền 200% nếu phát hiện hàng giả, hàng unofficial.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-leaf text-green-500 mt-1"></i>
                <div>
                  <p className="font-bold text-gray-300">Dự án Bao bì xanh (ECO)</p>
                  <p className="text-xs mt-1">Sử dụng 100% carton tái chế & xốp bong bóng sinh học.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* CỘT 4: PHÁP LÝ & CHÍNH SÁCH */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Pháp Lý & Chính Sách</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="hover:text-emerald-400 transition">Chính sách bảo mật (NĐ 13/2023)</Link></li>
              <li><Link href="#" className="hover:text-emerald-400 transition">Điều khoản sử dụng dịch vụ</Link></li>
              <li>
                <Link href="#" className="hover:text-emerald-400 transition block">
                  Chính sách Đổi trả & Hoàn tiền
                  <span className="block text-xs text-amber-500 mt-1">*Yêu cầu Video Unboxing nguyên vẹn</span>
                </Link>
              </li>
              <li><Link href="#" className="hover:text-emerald-400 transition">Chính sách hủy đơn (Bảo vệ MOQ)</Link></li>
            </ul>
          </div>

        </div>

        {/* BẢN QUYỀN */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© 2026 k-Bridge Vietnam. Đồ án Kinh doanh số.</p>
          <div className="flex gap-4 mt-4 md:mt-0 text-lg">
            <Link href="#" className="hover:text-white transition"><i className="fa-brands fa-facebook"></i></Link>
            <Link href="#" className="hover:text-white transition"><i className="fa-brands fa-instagram"></i></Link>
            <Link href="#" className="hover:text-white transition"><i className="fa-brands fa-tiktok"></i></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}