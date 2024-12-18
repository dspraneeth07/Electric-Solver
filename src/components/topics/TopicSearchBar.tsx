import React from 'react';
import { Search } from 'lucide-react';

interface TopicSearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function TopicSearchBar({ value, onChange }: TopicSearchBarProps) {
  return (
    <div className="relative w-full max-w-md mb-6">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search topics..."
        className="w-full px-4 py-2 pl-10 rounded-lg border-2 border-gray-200 focus:border-[#1E90FF] focus:outline-none transition-colors"
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
    </div>
  );
}