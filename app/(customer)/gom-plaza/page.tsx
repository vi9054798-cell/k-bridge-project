// app/(customer)/gom-plaza/page.tsx
"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Dữ liệu bám sát file "Dữ liệu bóc tách giá.docx"
const gomCampaigns = [
  { 
    id: "nj-how-sweet", 
    name: "NewJeans 'How Sweet'", 
    price: "510.000₫", 
    progress: 32, 
    max: 50, 
    imgUrl: "https://placehold.co/600x600/1a1a2e/8a2be2?text=NewJeans+How+Sweet" 
  },
  { 
    id: "svt-17-right-here", 
    name: "SEVENTEEN '17 IS RIGHT HERE' (Dear Ver)", 
    price: "575.000₫", 
    progress: 85, 
    max: 100, 
    imgUrl: "https://placehold.co/600x600/1a1a2e/8a2be2?text=SEVENTEEN+17" 
  },
  { 
    id: "svt-lightstick-v3", 
    name: "SEVENTEEN Lightstick Ver.3", 
    price: "1.305.000₫", 
    progress: 12, 
    max: 50, 
    imgUrl: "https://placehold.co/600x600/1a1a2e/8a2be2?text=Lightstick+V3" 
  },
  { 
    id: "bts-arirang", 
    name: "BTS 'Arirang' (Living Legend)", 
    price: "500.000₫", 
    progress: 48, 
    max: 50, 
    imgUrl: "https://placehold.co/600x600/1a1a2e/8a2be2?text=BTS+Arirang" 
  },
  { 
    id: "aespa-armageddon", 
    name: "Aespa 'Armageddon' (Zine Ver)", 
    price: "420.000₫", 
    progress: 10, 
    max: 50, 
    imgUrl: "https://placehold.co/600x600/1a1a2e/8a2be2?text=Aespa+Armageddon" 
  }
];

export default function GomPlazaPage() {
  return (
    <div className="min-h-screen bg-[#0d0e15] pt-24 pb-12 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-black mb-3">GOM Plaza</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Sức mạnh của mua sỉ. Tối ưu chi phí vận chuyển quốc tế nhờ cơ chế ghép đơn tự động. 
            Cam kết hoàn tiền 100% với hệ thống Pending Protection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gomCampaigns.map((camp) => (
            <div key={camp.id} className="bg-[#131520] rounded-2xl border border-gray-800 overflow-hidden hover:border-purple-500/50 transition duration-300 flex flex-col">
              {/* Box Hình Ảnh */}
              <div className="relative w-full h-64 bg-gray-900">
                {/* Dùng thẻ img tiêu chuẩn thay vì next/image để tránh lỗi hostname khi chưa config */}
                <img 
                  src={camp.imgUrl} 
                  alt={camp.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm text-xs font-bold px-3 py-1 rounded-full border border-gray-700">
                  Pre-order
                </div>
              </div>

              {/* Thông tin sản phẩm */}
              <div className="p-6 flex-1 flex flex-col">
                <h2 className="text-xl font-bold mb-4 flex-1 line-clamp-2">{camp.name}</h2>
                <div className="text-2xl font-black text-purple-400 mb-6">{camp.price}</div>

                {/* Thanh tiến độ */}
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2 text-gray-300 font-medium">
                    <span>Tiến độ GO</span>
                    <span>{camp.progress} / {camp.max} members</span>
                  </div>
                  <div className="w-full bg-gray-900 h-2.5 rounded-full overflow-hidden border border-gray-800">
                    <div 
                      className="bg-gradient-to-r from-purple-600 to-indigo-500 h-full transition-all duration-500" 
                      style={{ width: `${(camp.progress / camp.max) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <Link 
                  href={`/products/${camp.id}`} 
                  className="w-full text-center bg-white text-black font-bold py-3.5 rounded-xl hover:bg-gray-200 transition"
                >
                  Xem bóc tách giá & Tham gia
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}