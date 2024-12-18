import type { Unit } from '../types';

export function searchUnits(units: Unit[], query: string): Unit[] {
  const searchTerm = query.toLowerCase().trim();
  
  if (!searchTerm) return units;
  
  return units.filter(unit => 
    unit.title.toLowerCase().includes(searchTerm) ||
    unit.description.toLowerCase().includes(searchTerm) ||
    unit.topics.some(topic => 
      topic.toLowerCase().includes(searchTerm)
    )
  );
}

export function searchTopics(topics: string[], query: string): string[] {
  const searchTerm = query.toLowerCase().trim();
  
  if (!searchTerm) return topics;
  
  return topics.filter(topic => 
    topic.toLowerCase().includes(searchTerm)
  );
}