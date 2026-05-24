"use client";
export default function AdminLogistics() {
  return (
    <div className="p-8 text-white min-h-screen bg-[#0d0e15]">
      <h1 className="text-xl font-bold mb-6">Quản trị Logistics & Pháp lý</h1>
      <div className="bg-[#131520] p-6 rounded-xl border border-gray-800">
        <table className="w-full text-left">
          <thead className="text-gray-400 text-sm">
            <tr><th className="p-4">Mã Đơn</th><th className="p-4">Link Bằng Chứng (Image/AWB)</th><th className="p-4">Hành động</th></tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-800">
              <td className="p-4">ORD-001</td>
              <td className="p-4"><input className="bg-gray-900 border rounded p-2 w-full" placeholder="Nhập link ảnh hóa đơn..." /></td>
              <td className="p-4"><button className="bg-purple-600 px-4 py-2 rounded">Cập nhật</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}