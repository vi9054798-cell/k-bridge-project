// components/Footer.tsx
import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0a0b10] border-t border-gray-800 text-gray-400 text-sm mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* KHU VỰC 4 CỘT CHÍNH (Giữ nguyên cấu trúc cũ) */}
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

          {/* CỘT 4: MENU PHÁP LÝ TÓM TẮT */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Pháp Lý & Hỗ Trợ</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="hover:text-emerald-400 transition">Chính sách bảo mật (NĐ 13/2023)</Link></li>
              <li><Link href="#" className="hover:text-emerald-400 transition">Điều khoản sử dụng dịch vụ</Link></li>
              <li><Link href="#" className="hover:text-emerald-400 transition block">Trung tâm hỗ trợ khách hàng</Link></li>
              <li><Link href="#" className="hover:text-emerald-400 transition block">Liên hệ hợp tác B2B</Link></li>
            </ul>
          </div>

        </div>

        {/* =========================================================================
            TÍNH NĂNG MỚI: KHU VỰC TUYÊN BỐ PHÁP LÝ & CHÍNH SÁCH CỐT LÕI (DISCLAIMER)
            ========================================================================= */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <h4 className="text-gray-500 font-black mb-4 uppercase text-xs tracking-widest">Tuyên bố pháp lý & Chính sách cốt lõi</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-[11px] text-gray-400 leading-relaxed text-justify">
            <div>
              <p className="mb-3">
                <strong className="text-gray-300">1. Định nghĩa Tiền đặt cọc & Cơ sở pháp lý:</strong> Số tiền thu được định nghĩa là <em>"Tiền đặt cọc nhằm bảo đảm thực hiện giao dịch sỉ"</em>, hoàn toàn không phải là "tiền trả trước mua hàng" (Prepayment) hay "doanh thu nhận trước". Vì là tiền cọc bảo đảm khi chưa giao hàng hóa, k-Bridge không phải lập hóa đơn GTGT tại thời điểm nhận tiền theo Nghị định 123/2020/NĐ-CP (sửa đổi bởi Nghị định 70/2025/NĐ-CP). Hóa đơn GTGT chỉ được xuất khi thực tế bàn giao sản phẩm thành công.
              </p>
              <p>
                <strong className="text-gray-300">2. Chính sách hủy đợt GO do không đủ MOQ:</strong> Quy định rõ nếu đợt gom sỉ không đạt đủ số lượng tối thiểu trong thời gian khảo sát, k-Bridge sẽ hủy dự án và hoàn trả lại 100% tiền đặt cọc cho khách hàng.
              </p>
            </div>
            
            <div>
              <p className="mb-3">
                <strong className="text-gray-300">3. Chính sách chống gian lận (Anti-fraud Refund):</strong> Để tuân thủ luật phòng chống rửa tiền và gian lận trực tuyến, k-Bridge cam kết chỉ hoàn trả tiền về đúng tài khoản ngân hàng hoặc ví điện tử nguồn mà khách hàng đã sử dụng để chuyển khoản .
              </p>
              <p>
                <strong className="text-amber-500/80">4. Quy định về Video mở hộp (Unboxing Video Requirement):</strong> Nhằm phân định trách nhiệm pháp lý khi hàng bị móp méo/thiếu hụt do vận chuyển, quy định khách hàng BẮT BUỘC phải cung cấp video unbox 360 độ còn nguyên seal vận chuyển của k-Bridge để làm căn cứ xử lý khiếu nại.
              </p>
            </div>
          </div>
        </div>

        {/* BẢN QUYỀN (Giữ nguyên) */}
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-500">
          <p>© 2026 k-Bridge Vietnam. Đồ án Kinh doanh số.</p>
          <div className="flex gap-4 mt-4 md:mt-0 text-base">
            <Link href="#" className="hover:text-white transition"><i className="fa-brands fa-facebook"></i></Link>
            <Link href="#" className="hover:text-white transition"><i className="fa-brands fa-instagram"></i></Link>
            <Link href="#" className="hover:text-white transition"><i className="fa-brands fa-tiktok"></i></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}