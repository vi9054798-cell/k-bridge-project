"use client";
import { useOrderStore } from '@/store/useOrderStore';

export default function ShipmentManager() {
  const { orders, shipments, createShipment } = useOrderStore();
  
  // Lấy tất cả các kiện hàng chưa nằm trong lô nào
  const allPackages = orders.flatMap(o => o.packages);

  return (
    <div className="bg-[#131520] p-6 rounded-2xl border border-gray-800 mt-8">
      <h3 className="text-white font-bold mb-4">Module Lô hàng gom (Consolidation)</h3>
      <button 
        onClick={() => createShipment(allPackages.map(p => p.id))}
        className="bg-emerald-600 px-6 py-2 rounded-lg font-bold text-white mb-4"
      >
        Gộp tất cả kiện thành Lô hàng mới
      </button>
      <div className="space-y-2">
        {shipments.map(s => (
          <div key={s.id} className="text-emerald-400 font-mono border-l-2 border-emerald-500 pl-4">
            {s.id} - Trạng thái: {s.status}
          </div>
        ))}
      </div>
    </div>
  );
}