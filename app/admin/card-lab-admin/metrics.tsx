"use client";
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'T2', accuracy: 85 },
  { name: 'T3', accuracy: 88 },
  { name: 'T4', accuracy: 92 },
  { name: 'T5', accuracy: 95 },
  { name: 'T6', accuracy: 98 },
];

export default function AIStatsChart() {
  return (
    <div className="bg-[#131520] p-6 rounded-xl border border-gray-800">
      <h3 className="text-lg font-bold text-white mb-6">Độ chính xác AI (Card Scan)</h3>
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="name" stroke="#888" />
            <YAxis stroke="#888" />
            <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #444' }} />
            <Line type="monotone" dataKey="accuracy" stroke="#8b5cf6" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}