import './globals.css';
import Navbar from '@/components/Navbar';
import CartDrawer from '@/components/CartDrawer';
import Footer from '@/components/Footer';
import { Toaster } from 'react-hot-toast';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <head>
        {/* FontAwesome CDN */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className="bg-[#0d0e15] text-white antialiased">
        {/* Các component chức năng cũ giữ nguyên */}
        <Toaster position="bottom-right" reverseOrder={false} />
        <Navbar />
        <CartDrawer />
        
        {/* Nội dung chính của trang */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Chân trang mới thêm vào */}
        <Footer />
      </body>
    </html>
  );
}