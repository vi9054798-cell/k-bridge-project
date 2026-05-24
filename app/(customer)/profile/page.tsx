// app/(customer)/profile/page.tsx
"use client";
import React from 'react';

export default function ProfilePage() {
  // Dữ liệu cá nhân hóa (được lấy từ thông tin của bạn)
  const userData = {
    name: "Trần Khánh Vi",
    email: "khanhvi.tdt@gmail.com",
    studentId: "2024.123.456",
    status: "Thành viên k-Bridge"
  };

  return (
    <div className="pt-24 px-4 max-w-lg mx-auto text-white">
      <h1 className="text-2xl font-bold mb-8">Thông tin cá nhân</h1>
      
      <div className="bg-[#131520] p-8 rounded-2xl border border-gray-800 text-center">
        <div className="w-24 h-24 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl font-bold">
          {userData.name.charAt(0)}
        </div>
        <h2 className="text-xl font-bold">{userData.name}</h2>
        <p className="text-gray-400 text-sm mb-6">{userData.status}</p>
        
        <div className="text-left space-y-4 border-t border-gray-800 pt-6">
          <div className="flex justify-between">
            <span className="text-gray-500">Email:</span>
            <span>{userData.email}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Mã sinh viên:</span>
            <span>{userData.studentId}</span>
          </div>
        </div>

        <button className="mt-8 w-full py-3 bg-gray-800 rounded-lg hover:bg-red-900 transition text-red-400">
          Đăng xuất
        </button>
      </div>
    </div>
  );
}