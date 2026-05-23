"use client";
import React from 'react';

export default function SealManager({ text = "ĐÃ XÁC THỰC" }: { text?: string }) {
  return (
    <div className="relative inline-flex items-center justify-center p-2 border-4 border-red-600 rounded-full w-28 h-28 transform rotate-[-10deg] opacity-80 pointer-events-none select-none">
      <div className="flex flex-col items-center justify-center text-red-600 font-black border-2 border-red-600 rounded-full w-full h-full p-1">
        <span className="text-[9px] uppercase tracking-widest leading-none">K-BRIDGE</span>
        <span className="text-[8px] my-1 border-t border-b border-red-600 w-full text-center py-0.5">
          {text}
        </span>
        <span className="text-[7px] uppercase">Official Seal</span>
      </div>
    </div>
  );
}