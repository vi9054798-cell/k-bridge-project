// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css"; // Sửa lại đường dẫn chuẩn để Vercel nhận diện được Tailwind CSS v4
import { Toaster } from 'react-hot-toast';
import Navbar from '@/components/Navbar';
import CartDrawer from '@/components/CartDrawer';

export const metadata: Metadata = {
  title: "k-Bridge",
  description: "Secure Fan-Economy System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        {/* Nhúng FontAwesome trực tiếp ở Layout để đảm bảo hiển thị đầy đủ icon Navbar, Profile và Giỏ hàng */}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" 
        />
      </head>
      <body className="bg-[#0d0e15] text-white antialiased">
        <Toaster position="bottom-right" reverseOrder={false} />
        <Navbar />
        <CartDrawer />
        <main>{children}</main>
      </body>
    </html>
  );
}