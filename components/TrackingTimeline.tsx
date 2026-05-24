// components/TrackingTimeline.tsx
"use client";
import React from 'react';

interface TimelineEvent {
  step: number;
  label: string;
  status: 'completed' | 'active' | 'pending';
  evidence?: { type: 'link' | 'image'; value: string; label: string };
}

export default function TrackingTimeline({ events }: { events: TimelineEvent[] }) {
  return (
    <div className="space-y-8 p-6 bg-[#131520] rounded-2xl border border-gray-800">
      {events.map((e) => (
        <div key={e.step} className="flex gap-4">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center border ${e.status === 'completed' ? 'bg-purple-600 border-purple-600' : 'bg-gray-800 border-gray-700'}`}>
            {e.status === 'completed' ? <i className="fa-solid fa-check text-white text-xs"></i> : <span className="text-gray-500 text-xs">{e.step}</span>}
          </div>
          <div className="flex-1">
            <h4 className={`font-bold ${e.status === 'active' ? 'text-white' : 'text-gray-400'}`}>{e.label}</h4>
            
            {/* Bằng chứng số */}
            {e.evidence && (
              <div className="mt-2 p-3 bg-gray-900 rounded-lg border border-gray-800 text-xs">
                {e.evidence.type === 'image' ? (
                  <a href={e.evidence.value} target="_blank" className="text-purple-400 underline flex items-center gap-2">
                    <i className="fa-solid fa-file-invoice"></i> {e.evidence.label}
                  </a>
                ) : (
                  <a href={e.evidence.value} target="_blank" className="text-purple-400 underline flex items-center gap-2">
                    <i className="fa-solid fa-plane-up"></i> {e.evidence.label}
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}