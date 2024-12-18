import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-2xl">
      <input
        type="text"
        placeholder="Search topics..."
        className="w-full px-4 py-3 pl-12 rounded-lg border-2 border-gray-200 focus:border-[#1E90FF] focus:outline-none transition-colors"
        onChange={(e) => onSearch(e.target.value)}
      />
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
    </div>
  );
}