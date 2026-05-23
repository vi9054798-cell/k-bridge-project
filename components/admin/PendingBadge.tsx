import React from 'react';

export default function PendingBadge() {
  return (
    <div className="flex items-center gap-2 px-3 py-1 bg-amber-900/20 border border-amber-600 rounded-full text-amber-500 text-xs font-bold animate-pulse">
      <i className="fa-solid fa-shield-halved"></i>
      <span>PENDING PROTECTION (ESCROW ACTIVE)</span>
    </div>
  );
}