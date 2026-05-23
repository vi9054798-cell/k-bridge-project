"use client";
import { useState } from 'react';

export default function ManageProducts() {
  const [stock, setStock] = useState(3); // Đồng bộ với dữ liệu ở trang sản phẩm khách hàng

  return (
    <div className="bg-[#131520] p-6 rounded-xl border border-gray-800">
      <h2 className="text-xl font-bold mb-4">Cập nhật kho: NewJeans Album</h2>
      <div className="flex items-center gap-4">
        <input 
          type="number" 
          value={stock} 
          onChange={(e) => setStock(Number(e.target.value))}
          className="bg-gray-900 border border-gray-700 p-2 rounded"
        />
        <button className="bg-purple-600 px-4 py-2 rounded">Cập nhật Stock khách thấy</button>
      </div>
    </div>
  );
}