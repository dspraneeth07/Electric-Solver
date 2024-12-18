import { useState, useCallback } from 'react';
import { useDebounce } from './useDebounce';
import { MIN_SEARCH_LENGTH } from '../utils/constants';

interface UseSearchProps<T> {
  items: T[];
  searchFn: (items: T[], query: string) => T[];
  debounceMs?: number;
}

export function useSearch<T>({ 
  items, 
  searchFn, 
  debounceMs = 300 
}: UseSearchProps<T>) {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, debounceMs);

  const filteredItems = useCallback(() => {
    if (debouncedQuery.length < MIN_SEARCH_LENGTH) {
      return items;
    }
    return searchFn(items, debouncedQuery);
  }, [items, debouncedQuery, searchFn]);

  return {
    query,
    setQuery,
    filteredItems: filteredItems()
  };
}