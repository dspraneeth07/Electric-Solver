import React from 'react';
import { Unit } from '../../types';
import { TopicCard } from './TopicCard';
import { TopicSearchBar } from './TopicSearchBar';
import { useSearch } from '../../hooks/useSearch';
import { searchTopics } from '../../utils/search';

interface TopicListProps {
  unit: Unit;
  onSelectTopic: (topic: string) => void;
}

export function TopicList({ unit, onSelectTopic }: TopicListProps) {
  const { query, setQuery, filteredItems: filteredTopics } = useSearch({
    items: unit.topics,
    searchFn: searchTopics
  });

  return (
    <div>
      <TopicSearchBar 
        value={query}
        onChange={setQuery}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredTopics.map((topic, index) => (
          <TopicCard
            key={index}
            topic={topic}
            onClick={() => onSelectTopic(topic)}
          />
        ))}
      </div>
    </div>
  );
}