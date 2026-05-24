// app/api/webhook/route.ts
import { NextResponse } from 'next/server';

// Đây là endpoint nhận "tín hiệu" từ hệ thống giả lập của bạn
export async function POST(request: Request) {
  const body = await request.json();
  const { orderId, status, trackingCode } = body;

  // GIẢ LẬP: Cập nhật Database dựa trên orderId
  // Trong thực tế, đây là nơi bạn lưu data vào MongoDB/PostgreSQL
  console.log(`[Webhook Recieved] Đơn hàng ${orderId} cập nhật trạng thái: ${status}`);
  
  return NextResponse.json({ success: true, message: "Tracking updated via Webhook" });
}