import React from 'react';

interface MarkSizeSelectorProps {
  value: 2 | 4 | 8;
  onChange: (value: 2 | 4 | 8) => void;
}

export function MarkSizeSelector({ value, onChange }: MarkSizeSelectorProps) {
  return (
    <div className="flex items-center space-x-4 mt-2">
      <span className="text-sm text-gray-600">Mark Size:</span>
      {[2, 4, 8].map((size) => (
        <button
          key={size}
          onClick={() => onChange(size as 2 | 4 | 8)}
          className={`px-3 py-1 rounded-md text-sm ${
            value === size
              ? 'bg-[#1E90FF] text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {size} Marks
        </button>
      ))}
    </div>
  );
}