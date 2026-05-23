import React from 'react';

export default function SealManager({ label = "ĐÃ XÁC THỰC" }: { label?: string }) {
  return (
    <div className="relative inline-flex items-center justify-center w-24 h-24 border-4 border-red-600 rounded-full text-red-600 font-black transform rotate-12 opacity-80 pointer-events-none select-none border-double">
      <div className="flex flex-col items-center justify-center p-2">
        <span className="text-[10px] tracking-widest uppercase">K-BRIDGE</span>
        <span className="text-[10px] border-t border-b border-red-600 my-1">{label}</span>
        <span className="text-[8px]">DIGITAL SEAL</span>
      </div>
    </div>
  );
}