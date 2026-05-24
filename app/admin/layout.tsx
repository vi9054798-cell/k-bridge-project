// app/layout.tsx
import { Toaster } from 'react-hot-toast'; // Import thư viện
import Navbar from '@/components/Navbar';
import CartDrawer from '@/components/CartDrawer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>
        <Toaster position="bottom-right" reverseOrder={false} /> {/* Thêm dòng này */}
        <Navbar />
        <CartDrawer />
        {children}
      </body>
    </html>
  );
}