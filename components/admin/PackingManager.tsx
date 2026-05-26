"use client";
import { useState } from 'react';
import { useOrderStore, Package } from '@/store/useOrderStore';

export default function PackingManager({ orderId }: { orderId: string }) {
  const { orders, addPackageToOrder } = useOrderStore();
  const order = orders.find(o => o.id === orderId);

  const [weight, setWeight] = useState(0);

  const handleCreatePackage = () => {
    if (weight <= 0) return alert("Vui lòng nhập trọng lượng hợp lệ!");
    
    const newPkg: Package = {
      id: `PKG-${Date.now().toString().slice(-4)}`,
      weight: weight,
      items: ["Album A", "Album B"] // Ở đây bạn có thể lấy từ danh sách sản phẩm thực tế
    };
    
    addPackageToOrder(orderId, newPkg);
    setWeight(0);
  };

  if (!order) return <p>Không tìm thấy đơn hàng.</p>;

  return (
    <div className="bg-[#131520] p-6 rounded-2xl border border-gray-800 mt-6">
      <h3 className="text-white font-bold text-lg mb-4">Module Đóng gói (Packing)</h3>
      
      {/* Form tạo kiện */}
      <div className="flex gap-4 mb-6">
        <input 
          type="number" 
          value={weight}
          onChange={(e) => setWeight(Number(e.target.value))}
          placeholder="Trọng lượng (kg)" 
          className="bg-gray-900 border border-gray-700 rounded-lg p-2 text-white w-40"
        />
        <button 
          onClick={handleCreatePackage}
          className="bg-purple-600 hover:bg-purple-500 px-6 py-2 rounded-lg font-bold text-white transition"
        >
          Tạo kiện mới
        </button>
      </div>

      {/* Danh sách kiện đã tạo */}
      <div className="space-y-3">
        {order.packages.map((pkg) => (
          <div key={pkg.id} className="flex justify-between items-center bg-gray-900 p-4 rounded-xl border border-gray-700">
            <span className="text-purple-400 font-mono font-bold">{pkg.id}</span>
            <span className="text-gray-300">{pkg.weight} kg</span>
            <span className="text-emerald-500 text-xs uppercase font-bold">Đã đóng gói</span>
          </div>
        ))}
      </div>
    </div>
  );
}