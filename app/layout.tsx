import './globals.css';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'k-Bridge - K-Pop Group Buying Platform',
  description: 'Nền tảng gom đơn K-Pop an toàn và minh bạch',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <head>
        {/* Nhúng thư viện icon FontAwesome để hiển thị các biểu tượng khi chụp ảnh báo cáo */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className="bg-[#0d0e15] text-[#e4e4e7] antialiased">
        {/* Hiện Navbar cố định ở mọi trang */}
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}