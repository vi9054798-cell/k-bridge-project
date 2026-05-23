"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function ProductDetailPage() {
  const [quantity, setQuantity] = useState(1);

  // 1. Cấu hình link ảnh tại đây
  const albumImageUrl = "LINK_ANH_ALBUM_CUA_BAN_O_DAY";

  // 2. Logic hiển thị ảnh (Tách riêng để tránh lỗi cú pháp)
  const renderProductImage = () => {
    if (albumImageUrl === "LINK_ANH_ALBUM_CUA_BAN_O_DAY") {
      return (
        <div className="w-[300px] h-[300px] bg-gray-900 border-2 border-dashed border-gray-700 rounded-2xl flex flex-col items-center justify-center text-center p-6 group-hover:scale-105 transition duration-500">
          <i className="fa-regular fa-image text-5xl text-gray-600 mb-3"></i>
          <p className="text-sm text-gray-500 font-bold">NewJeans_GetUp_Cover.jpg</p>
          <p className="text-xs text-gray-600 mt-2">Dán link ảnh vào code</p>
        </div>
      );
    }
    return (
      <img 
        src={albumImageUrl} 
        alt="NewJeans - Get Up Album Cover" 
        className="w-[320px] h-auto rounded-2xl shadow-2xl shadow-black/50 group-hover:scale-105 transition duration-500 object-cover"
      />
    );
  };

  return (
    <div className="min-h-screen bg-[#0d0e15] text-[#e4e4e7] py-10">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Breadcrumb */}
        <div className="text-sm text-gray-400 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-purple-400 transition">Trang chủ</Link>
          <i className="fa-solid fa-chevron-right text-[10px]"></i>
          <span className="text-gray-300">NewJeans - Get Up</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* CỘT TRÁI: GỌI HÀM RENDER ẢNH */}
          <div className="bg-[#131520] border border-gray-800 rounded-3xl p-6 flex items-center justify-center relative overflow-hidden group h-[500px]">
            {renderProductImage()}
            
            <div className="absolute top-6 left-6 space-y-2">
              <span className="block bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full w-max">Official</span>
            </div>
          </div>

          {/* CỘT PHẢI: THÔNG TIN */}
          <div className="space-y-6">
            <h1 className="text-3xl font-black text-white">NewJeans - Get Up (Weverse Albums Ver.)</h1>
            
            <div className="bg-[#131520] p-6 rounded-2xl border border-gray-800">
              <span className="text-4xl font-black text-white">580.000₫</span>
            </div>

            <div className="flex items-center gap-4">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 bg-gray-800 rounded">-</button>
              <span className="font-bold w-12 text-center">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 bg-gray-800 rounded">+</button>
            </div>

            <Link href="/checkout" className="block w-full text-center bg-purple-600 py-4 rounded-xl font-bold">
              MUA NGAY
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}