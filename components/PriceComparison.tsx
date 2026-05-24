// components/PriceComparison.tsx
import React from 'react';

export default function PriceComparison() {
  return (
    <div className="bg-[#131520] p-6 rounded-2xl border border-gray-800 my-8">
      <h3 className="text-xl font-bold mb-6 text-white">Tại sao Gom đơn (GO) tại k-Bridge tối ưu hơn?</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Bảng so sánh */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-gray-400 border-b border-gray-700">
              <tr>
                <th className="py-3">Thành phần</th>
                <th className="py-3">Mua lẻ thông thường</th>
                <th className="py-3 text-purple-400">GO k-Bridge</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800 text-white">
              <tr><td className="py-4">Giá album</td><td>420k</td><td>420k</td></tr>
              <tr><td className="py-4">Ship quốc tế</td><td>220k</td><td>60k</td></tr>
              <tr><td className="py-4 font-bold text-lg">Tổng chi phí</td><td className="font-bold text-lg">680k</td><td className="font-bold text-lg text-purple-400">490k</td></tr>
            </tbody>
          </table>
        </div>
        
        {/* Thông điệp minh bạch */}
        <div className="bg-purple-900/10 p-5 rounded-xl border border-purple-900/30 flex flex-col justify-center">
          <p className="text-sm text-gray-300 leading-relaxed italic">
            "K-Bridge áp dụng mô hình Gom đơn số lượng lớn (Bulk Buying) để tối ưu chi phí vận chuyển theo tuyến chính ngạch. Khác với việc mua lẻ chịu phí sàn và cước phí hàng không riêng lẻ cao, chúng tôi cắt giảm mọi chi phí trung gian để mang lại mức giá tốt nhất cho cộng đồng."
          </p>
        </div>
      </div>
    </div>
  );
}