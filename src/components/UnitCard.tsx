import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import type { Unit } from '../types';

interface UnitCardProps {
  unit: Unit;
  onClick: (unit: Unit) => void;
}

export function UnitCard({ unit, onClick }: UnitCardProps) {
  return (
    <div 
      onClick={() => onClick(unit)}
      className="bg-white rounded-xl shadow-lg p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 border-transparent hover:border-blue-400"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-800">Unit {unit.id}</h3>
        <Zap className="w-6 h-6 text-[#1E90FF]" />
      </div>
      <h4 className="text-lg font-semibold text-gray-700 mb-2">{unit.title}</h4>
      <p className="text-gray-600 mb-4 line-clamp-2">{unit.description}</p>
      <div className="flex items-center text-[#1E90FF] font-medium">
        Explore Topics <ArrowRight className="ml-2 w-4 h-4" />
      </div>
    </div>
  );
}