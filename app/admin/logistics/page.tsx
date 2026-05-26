"use client";
import { useOrderStore } from '@/store/useOrderStore';
import PackingManager from '@/components/admin/PackingManager';
import ShipmentManager from '@/components/admin/ShipmentManager';

export default function LogisticsPage() {
  const { orders } = useOrderStore();

  return (
    <div className="p-8 text-white min-h-screen bg-[#0d0e15]">
      <h1 className="text-2xl font-bold mb-6">Quản trị Logistics & Pháp lý</h1>

      {/* Bảng Logistics cũ */}
      <div className="bg-[#131520] p-6 rounded-xl border border-gray-800 mb-8">
        <table className="w-full text-left">
          <thead><tr className="text-gray-400 text-sm"><th className="p-4">Mã Đơn</th><th className="p-4">Link Bằng Chứng</th></tr></thead>
          <tbody><tr className="border-t border-gray-800"><td className="p-4">ORD-001</td><td className="p-4"><input className="bg-gray-900 border rounded p-2 w-full" /></td></tr></tbody>
        </table>
      </div>

      {/* Danh sách Đóng gói & Lô hàng */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-4">Đóng gói từng đơn</h2>
          {orders.map((o) => (
            <div key={o.id} className="border border-gray-800 p-6 rounded-lg bg-[#131520] mb-4">
              <p className="font-bold">Đơn hàng: {o.id}</p>
              <PackingManager orderId={o.id} />
            </div>
          ))}
        </div>
        <ShipmentManager />
      </div>
    </div>
  );
}