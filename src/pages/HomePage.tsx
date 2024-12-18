import React from 'react';
import { units } from '../data/units';
import { SearchBar } from '../components/SearchBar';
import { UnitCard } from '../components/UnitCard';
import { useSearch } from '../hooks/useSearch';
import { searchUnits } from '../utils/search';
import { ErrorBoundary } from '../utils/errorBoundary';
import type { Unit } from '../types';

interface HomePageProps {
  onUnitSelect: (unit: Unit) => void;
}

export function HomePage({ onUnitSelect }: HomePageProps) {
  const { query, setQuery, filteredItems: filteredUnits } = useSearch({
    items: units,
    searchFn: searchUnits
  });

  return (
    <ErrorBoundary>
      <div className="flex justify-center mb-8">
        <SearchBar onSearch={setQuery} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredUnits.map(unit => (
          <UnitCard 
            key={unit.id} 
            unit={unit} 
            onClick={() => onUnitSelect(unit)} 
          />
        ))}
      </div>
    </ErrorBoundary>
  );
}