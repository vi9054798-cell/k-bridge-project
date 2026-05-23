"use client";
export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-black text-white mb-8">Tổng quan hệ thống</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card dữ liệu đồng bộ từ Customer */}
        <div className="bg-[#131520] p-6 rounded-xl border border-gray-800">
          <p className="text-gray-400 text-sm">Đơn hàng mới (Khách)</p>
          <h3 className="text-3xl font-bold text-white mt-2">12</h3>
        </div>
        <div className="bg-[#131520] p-6 rounded-xl border border-gray-800">
          <p className="text-gray-400 text-sm">Doanh thu tạm tính</p>
          <h3 className="text-3xl font-bold text-white mt-2">15.4M₫</h3>
        </div>
        <div className="bg-[#131520] p-6 rounded-xl border border-gray-800">
          <p className="text-gray-400 text-sm">Tình trạng Server</p>
          <h3 className="text-3xl font-bold text-emerald-500 mt-2">Stable</h3>
        </div>
      </div>
    </div>
  );
}