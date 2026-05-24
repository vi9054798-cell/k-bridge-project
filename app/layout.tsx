// app/layout.tsx
import CartDrawer from '@/components/CartDrawer';
import Navbar from '@/components/Navbar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>
        <Navbar />
        <CartDrawer /> {/* Bắt buộc phải có cái này thì mới mở ra được */}
        {children}
      </body>
    </html>
  );
}