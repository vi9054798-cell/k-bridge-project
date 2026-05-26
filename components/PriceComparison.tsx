// components/PriceComparison.tsx
import React from 'react';

export default function PriceComparison() {
  const comparisonData = [
    { label: "Giá album", le: "420.000 VNĐ", kbridge: "420.000 VNĐ" },
    { label: "Phí dịch vụ (Service fee)", le: "0 VNĐ", kbridge: "20.000 VNĐ" },
    { label: "Ship quốc tế", le: "220.000 VNĐ", kbridge: "60.000 VNĐ" },
    { label: "Nội địa HQ", le: "40.000 VNĐ", kbridge: "10.000 VNĐ" },
    { label: "Tổng (Final Price)", le: "680.000 VNĐ", kbridge: "510.000 VNĐ" },
  ];

  return (
    <div className="bg-[#131520] p-8 rounded-2xl border border-gray-800 my-10">
      {/* Tiêu đề mới theo yêu cầu */}
      <h2 className="text-2xl font-bold text-white mb-8">
        Tại sao Gom đơn (GO) tại k-Bridge tối ưu hơn? Ví dụ: Album How Sweet - NewJeans
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-gray-400 border-b border-gray-800">
              <th className="py-4 font-normal">Thành phần chi phí</th>
              <th className="py-4 font-normal">Mua lẻ tự túc</th>
              <th className="py-4 font-normal text-purple-400">GO tại K-Bridge</th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((row, index) => (
              <tr key={index} className="border-b border-gray-800/50">
                <td className="py-4 font-bold text-gray-200">{row.label}</td>
                <td className="py-4 text-gray-400">{row.le}</td>
                <td className="py-4 font-bold text-purple-400">{row.kbridge}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 p-6 bg-[#0d0e15] rounded-xl border border-gray-800 italic text-gray-400 text-sm leading-relaxed">
        "K-Bridge áp dụng mô hình Gom đơn số lượng lớn (Bulk Buying) để tối ưu chi phí vận chuyển theo tuyến chính ngạch. Khác với việc mua lẻ chịu phí sàn và cước phí hàng không riêng lẻ cao, chúng tôi cắt giảm mọi chi phí trung gian để mang lại mức giá tốt nhất cho cộng đồng."
      </div>
    </div>
  );
}