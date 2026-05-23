"use client";
import React from 'react';
import Link from 'next/link';

export default function CustomerHome() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 text-center space-y-12">
      
      {/* Hero Section quảng cáo hoành tráng */}
      <div className="space-y-6 max-w-3xl mx-auto">
        <span className="bg-purple-950/60 text-purple-300 text-xs font-bold px-4 py-1.5 rounded-full border border-purple-800/40 uppercase tracking-widest">
          Official Comeback & Group Buying
        </span>
        <h1 className="text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
          New Album Drops & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Secure Fan-Economy
          </span>
        </h1>
        <p className="text-gray-400 text-lg">
          Sở hữu album K-Pop độc quyền, photocard bo góc giới hạn với mức giá sỉ tối ưu thông qua giải pháp gom đơn minh bạch và bảo hộ dòng tiền tuyệt đối.
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <Link href="/gom-plaza" className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-purple-900/30 flex items-center gap-2 transition">
            <i className="fa-solid fa-fire"></i> Tham Gia GOM Plaza
          </Link>
          <Link href="/card-lab" className="bg-gray-800 hover:bg-gray-700 text-gray-200 font-bold py-3.5 px-6 rounded-xl flex items-center gap-2 transition border border-gray-700">
            <i className="fa-solid fa-wand-magic-sparkles"></i> Thử Nghiệm Card Lab
          </Link>
        </div>
      </div>

      {/* Khối giới thiệu 3 tính năng công nghệ làm điểm nhấn cho bài nghiên cứu */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-purple-950/20">
        
        <div className="bg-[#131520] border border-purple-900/20 p-6 rounded-2xl text-left space-y-3">
          <div className="text-purple-400 text-2xl bg-purple-950/60 w-12 h-12 rounded-xl flex items-center justify-center border border-purple-800/30">
            <i className="fa-solid fa-users-viewfinder"></i>
          </div>
          <h3 className="text-xl font-bold text-white">Active GOMs Real-time</h3>
          <p className="text-sm text-gray-400">Theo dõi tiến độ số lượng thành viên đặt đơn cập nhật tức thời theo thời gian thực để tạo hiệu ứng đám đông.</p>
        </div>

        <div className="bg-[#131520] border border-purple-900/20 p-6 rounded-2xl text-left space-y-3">
          <div className="text-pink-400 text-2xl bg-pink-950/60 w-12 h-12 rounded-xl flex items-center justify-center border border-pink-800/30">
            <i className="fa-solid fa-chart-line"></i>
          </div>
          <h3 className="text-xl font-bold text-white">Market Price Trends</h3>
          <p className="text-sm text-gray-400">Hệ thống phân tích và cập nhật biến động giá thị trường của các thẻ photocard hiếm một cách khách quan.</p>
        </div>

        <div className="bg-[#131520] border border-purple-900/20 p-6 rounded-2xl text-left space-y-3">
          <div className="text-emerald-400 text-2xl bg-emerald-950/60 w-12 h-12 rounded-xl flex items-center justify-center border border-emerald-800/30">
            <i className="fa-solid fa-fingerprint"></i>
          </div>
          <h3 className="text-xl font-bold text-white">AI Scan Quick-Check</h3>
          <p className="text-sm text-gray-400">Quét và chấm điểm chất lượng vật lý của thẻ bo góc trên thang điểm từ 1-10 để phát hiện lỗi trầy xước bằng AI.</p>
        </div>

      </div>

    </div>
  );
}