import React from 'react';
import { Zap } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Zap className="w-8 h-8 text-[#1E90FF] animate-pulse" />
            <h1 className="text-2xl font-bold text-gray-800">Electric Solver</h1>
          </div>
        </div>
      </div>
    </header>
  );
}