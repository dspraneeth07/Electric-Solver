import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Unit } from '../types';
import { TopicList } from '../components/topics/TopicList';
import { ChatInterface } from '../components/chat/ChatInterface';

interface UnitPageProps {
  unit: Unit;
  onBack: () => void;
}

export function UnitPage({ unit, onBack }: UnitPageProps) {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <button
          onClick={onBack}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-gray-600" />
        </button>
        <h2 className="text-2xl font-bold text-gray-800">
          Unit {unit.id}: {unit.title}
        </h2>
      </div>

      {selectedTopic ? (
        <ChatInterface topic={selectedTopic} />
      ) : (
        <TopicList unit={unit} onSelectTopic={setSelectedTopic} />
      )}
    </div>
  );
}