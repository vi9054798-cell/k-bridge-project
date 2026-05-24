// app/(customer)/products/[id]/page.tsx
"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import toast from 'react-hot-toast'; // Import toast
import { useCartStore } from '@/store/useCartStore';
import CostBreakdownWidget from '@/components/CostBreakdownWidget';
import PriceComparison from '@/components/PriceComparison';

const productDatabase: Record<string, any> = {
  "nj-how-sweet": { name: "NewJeans 'How Sweet'", price: "510.000₫", pricing: { total: "510.000₫", price: "420.000₫", serviceFee: "20.000₫", shipping: "60.000₫", domestic: "10.000₫" } }
};

export default function ProductDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  const product = productDatabase[id] || { name: "Sản phẩm", price: "0₫", pricing: { total: "0₫", price: "0₫", serviceFee: "0₫", shipping: "0₫", domestic: "0₫" } };
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({ id, name: product.name, price: product.price });
    toast.success(`Đã thêm ${product.name} vào giỏ hàng!`, {
      style: { background: '#131520', color: '#fff', border: '1px solid #333' },
    });
  };

  return (
    <div className="min-h-screen bg-[#0d0e15] pt-24 pb-12 px-4 text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-black mb-6">{product.name}</h1>
        <CostBreakdownWidget data={product.pricing} />
        
        <button 
          onClick={handleAddToCart}
          className="mt-6 w-full bg-purple-600 py-4 rounded-xl font-bold hover:bg-purple-500 transition shadow-lg shadow-purple-900/20"
        >
          Thêm vào giỏ hàng
        </button>

        <PriceComparison />
      </div>
    </div>
  );
}