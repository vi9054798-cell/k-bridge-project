"use client";
import React, { useState } from 'react';

export default function CardLabPage() {
  // Quản lý trạng thái mô phỏng AI Scan
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState(false);

  // Hàm giả lập thời gian AI phân tích ảnh (chạy trong 3 giây)
  const handleScan = () => {
    setIsScanning(true);
    setScanResult(false);
    setTimeout(() => {
      setIsScanning(false);
      setScanResult(true);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#0d0e15] text-[#e4e4e7] py-10">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Tiêu đề trang */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest inline-block mb-3 shadow-[0_0_15px_rgba(6,182,212,0.4)]">
            <i className="fa-solid fa-microchip mr-1"></i> AI Powered
          </span>
          <h1 className="text-4xl font-extrabold text-white mb-3">Card Lab Scan</h1>
          <p className="text-gray-400">
            Chấm điểm chất lượng vật lý (Condition) và định giá thị trường photocard của bạn ngay lập tức bằng thuật toán AI phát hiện khuyết điểm điểm ảnh.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* CỘT TRÁI: KHU VỰC QUÉT ẢNH VÀ HIỂN THỊ KẾT QUẢ */}
          <div className="space-y-6">
            
            {/* Khung tải ảnh lên */}
            <div className={`relative bg-[#131520] border-2 border-dashed rounded-2xl p-10 text-center transition-all duration-500 ${isScanning ? 'border-cyan-500 shadow-[0_0_30px_rgba(6,182,212,0.2)]' : 'border-gray-700 hover:border-purple-500'}`}>
              
              {!isScanning && !scanResult && (
                <div className="space-y-4">
                  <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fa-solid fa-cloud-arrow-up text-3xl text-gray-400"></i>
                  </div>
                  <h3 className="text-xl font-bold text-white">Kéo thả ảnh photocard vào đây</h3>
                  <p className="text-sm text-gray-500">Hoặc nhấn để chọn file (JPG, PNG tối đa 10MB)</p>
                  <div className="flex justify-center gap-3 mt-6">
                    <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded-lg text-sm transition">
                      <i className="fa-solid fa-camera mr-2"></i> Chụp trực tiếp
                    </button>
                    {/* Nút kích hoạt hiệu ứng quét để chụp báo cáo */}
                    <button onClick={handleScan} className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold py-2 px-6 rounded-lg text-sm transition shadow-lg shadow-cyan-900/30">
                      <i className="fa-solid fa-wand-magic-sparkles mr-2"></i> Demo Scan
                    </button>
                  </div>
                </div>
              )}

              {/* Giao diện Đang quét (Hiển thị thanh cuộn laser) */}
              {isScanning && (
                <div className="py-10">
                  <div className="relative w-48 h-72 mx-auto bg-gray-800 rounded-xl overflow-hidden border border-gray-700 shadow-2xl">
                    {/* Ảnh giả lập */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                      <i className="fa-solid fa-user-astronaut text-6xl text-purple-300/50"></i>
                    </div>
                    {/* Tia laser quét */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-cyan-400 shadow-[0_0_20px_#22d3ee] animate-[scan_1.5s_ease-in-out_infinite_alternate]"></div>
                  </div>
                  <p className="mt-6 text-cyan-400 font-bold animate-pulse">
                    <i className="fa-solid fa-microchip mr-2"></i> AI đang phân tích bề mặt thẻ...
                  </p>
                </div>
              )}

              {/* Giao diện Kết quả trả về */}
              {scanResult && (
                <div className="animate-fade-in-up">
                  <div className="w-48 h-72 mx-auto bg-gray-800 rounded-xl overflow-hidden border-2 border-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.3)] relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/40 to-pink-500/40 flex items-center justify-center">
                      <i className="fa-solid fa-user-astronaut text-6xl text-purple-200"></i>
                    </div>
                    {/* Hiển thị điểm lỗi giả lập trên thẻ */}
                    <div className="absolute top-10 right-10 w-4 h-4 rounded-full border-2 border-red-500 flex items-center justify-center bg-red-500/20">
                      <span className="w-1 h-1 bg-red-500 rounded-full animate-ping"></span>
                    </div>
                  </div>
                  
                  <div className="bg-[#0a0b10] p-5 rounded-xl border border-emerald-900/50 text-left">
                    <div className="flex justify-between items-end mb-4">
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Điểm chất lượng (Condition)</p>
                        <h2 className="text-3xl font-black text-emerald-400">8.5 <span className="text-lg text-emerald-600">/ 10</span></h2>
                      </div>
                      <div className="text-right">
                        <span className="bg-emerald-950/60 text-emerald-400 text-xs font-bold px-3 py-1 rounded border border-emerald-800/40">Near Mint (NM)</span>
                      </div>
                    </div>
                    <ul className="text-sm text-gray-400 mb-4 space-y-1">
                      <li><i className="fa-solid fa-triangle-exclamation text-yellow-500 mr-2"></i> Phát hiện 1 vết xước nhỏ ở góc phải (0.2mm).</li>
                      <li><i className="fa-solid fa-check text-emerald-500 mr-2"></i> Bề mặt in ấn nguyên vẹn, không phai màu.</li>
                    </ul>
                    <div className="pt-4 border-t border-gray-800 flex justify-between items-center">
                      <span className="text-sm text-gray-400">Giá TT Ước tính:</span>
                      <span className="text-xl font-bold text-white">450.000₫ - 500.000₫</span>
                    </div>
                  </div>

                  <button onClick={() => setScanResult(false)} className="mt-6 text-sm text-gray-400 hover:text-white transition">
                    <i className="fa-solid fa-rotate-right mr-1"></i> Quét thẻ khác
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* CỘT PHẢI: BẢNG THANG ĐIỂM & THỐNG KÊ */}
          <div className="space-y-6">
            
            {/* Thang điểm chuẩn của hệ thống */}
            <div className="bg-[#131520] border border-gray-800 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4"><i className="fa-solid fa-scale-unbalanced text-purple-400 mr-2"></i> Thang điểm k-Bridge</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center p-3 rounded-lg bg-[#0a0b10] border border-gray-800">
                  <span className="font-bold text-red-400">1 - 3</span>
                  <span className="text-gray-300 font-medium">Poor (Hỏng nặng)</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-[#0a0b10] border border-gray-800">
                  <span className="font-bold text-orange-400">4 - 5</span>
                  <span className="text-gray-300 font-medium">Fair (Nhiều khuyết điểm)</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-[#0a0b10] border border-gray-800">
                  <span className="font-bold text-yellow-400">6 - 7</span>
                  <span className="text-gray-300 font-medium">Good (Chất lượng ổn)</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-emerald-950/20 border border-emerald-900/30">
                  <span className="font-bold text-emerald-400">8 - 9</span>
                  <span className="text-emerald-300 font-medium">Near Mint (Gần như mới)</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-cyan-950/20 border border-cyan-900/30">
                  <span className="font-bold text-cyan-400">10</span>
                  <span className="text-cyan-300 font-medium">Gem Mint (Hoàn hảo tuyệt đối)</span>
                </div>
              </div>
            </div>

            {/* Lịch sử cộng đồng quét */}
            <div className="bg-[#131520] border border-gray-800 rounded-2xl p-6">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Quét gần đây từ cộng đồng</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center"><i className="fa-regular fa-image text-gray-500"></i></div>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-white">Jungkook - Golden Album</h4>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                  <span className="text-emerald-400 font-bold bg-emerald-950/40 px-2 py-1 rounded text-sm">9.2</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center"><i className="fa-regular fa-image text-gray-500"></i></div>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-white">Winter - MY WORLD</h4>
                    <p className="text-xs text-gray-500">5 hours ago</p>
                  </div>
                  <span className="text-emerald-400 font-bold bg-emerald-950/40 px-2 py-1 rounded text-sm">8.5</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      
      {/* CSS tự định nghĩa ngay trong component cho hiệu ứng tia laser quét */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scan {
          0% { top: 0%; }
          100% { top: 98%; }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out forwards;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </div>
  );
}