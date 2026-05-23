"use client";
import React from 'react';

// Sử dụng params để lấy ID chiến dịch từ URL
export default function EditCampaignPage({ params }: { params: { id: string } }) {
  const campaignId = params.id;

  return (
    <div className="p-8 bg-[#0a0b10] text-white min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Chỉnh sửa chiến dịch: <span className="text-purple-400 font-mono">{campaignId}</span></h1>
        <button className="bg-gray-800 px-4 py-2 rounded text-sm hover:bg-gray-700">Quay lại</button>
      </div>

      <div className="bg-[#131520] p-6 rounded-xl border border-gray-800 space-y-6">
        {/* Form cấu hình */}
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm text-gray-400">Trạng thái chiến dịch</label>
            <select className="w-full bg-gray-900 border border-gray-700 p-3 rounded-lg">
              <option>Đang gom đơn (Active)</option>
              <option>Đã đóng (Closed)</option>
              <option>Đã về kho (Completed)</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm text-gray-400">Đính kèm Cam kết Pháp lý</label>
            <div className="flex items-center gap-2">
              <input type="file" className="text-sm text-gray-400" />
            </div>
          </div>
        </div>

        {/* Nút lưu */}
        <div className="pt-6 border-t border-gray-800 flex justify-end">
          <button className="bg-purple-600 hover:bg-purple-500 px-8 py-3 rounded-lg font-bold transition">
            Lưu thay đổi & Đóng dấu Mộc đỏ
          </button>
        </div>
      </div>
    </div>
  );
}