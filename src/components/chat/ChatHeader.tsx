import React from 'react';
import { MarkSizeSelector } from './MarkSizeSelector';
import { isValidMarkSize } from '../../utils/validation';

interface ChatHeaderProps {
  topic: string;
  markSize: number;
  onMarkSizeChange: (size: 2 | 4 | 8) => void;
}

export function ChatHeader({ topic, markSize, onMarkSizeChange }: ChatHeaderProps) {
  const handleMarkSizeChange = (size: number) => {
    if (isValidMarkSize(size)) {
      onMarkSizeChange(size as 2 | 4 | 8);
    }
  };

  return (
    <div className="p-4 border-b">
      <h2 className="text-xl font-semibold text-gray-800">
        {topic}
      </h2>
      <MarkSizeSelector 
        value={markSize} 
        onChange={handleMarkSizeChange} 
      />
    </div>
  );
}