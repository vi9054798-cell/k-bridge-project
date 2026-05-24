"use client";
import TrackingTimeline from '@/components/TrackingTimeline';

export default function OrderPage() {
  const mockEvents = [
    { step: 1, label: "Grouping", status: 'completed' },
    { step: 2, label: "Ordered (Hóa đơn)", status: 'completed', evidence: { type: 'image', value: '/invoice-demo.jpg', label: 'Xem Hóa Đơn Hàn Quốc' } },
    { step: 3, label: "Arriving at VN", status: 'active', evidence: { type: 'link', value: '#', label: 'Xem mã vận đơn hàng không' } }
  ];

  return (
    <div className="pt-24 px-4 max-w-4xl mx-auto text-white">
      <h1 className="text-xl font-bold mb-6">Chi tiết Đơn hàng ORD-001</h1>
      <TrackingTimeline events={mockEvents as any} />
    </div>
  );
}