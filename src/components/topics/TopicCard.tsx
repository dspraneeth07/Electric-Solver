import React from 'react';
import { BookOpen } from 'lucide-react';

interface TopicCardProps {
  topic: string;
  onClick: () => void;
}

export function TopicCard({ topic, onClick }: TopicCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer border-2 border-transparent hover:border-[#1E90FF]"
    >
      <div className="flex items-center space-x-3">
        <BookOpen className="w-5 h-5 text-[#1E90FF]" />
        <h3 className="text-lg font-medium text-gray-800">{topic}</h3>
      </div>
    </div>
  );
}