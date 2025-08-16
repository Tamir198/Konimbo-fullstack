import { useState, useMemo } from 'react';
import { Animal } from '@/services/animalService';

export const useAnimalFilters = (animals: Animal[]) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    species: '',
    color: '',
    ageRange: '',
  });
  const [sortBy, setSortBy] = useState<'name' | 'age' | 'weight'>('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const filteredAnimals = useMemo(() => {
    return animals.filter(({ name, species, color, age }) => {
      if (
        !searchQuery.trim() &&
        !filters.species &&
        !filters.color &&
        !filters.ageRange
      )
        return true;

      const query = searchQuery.toLowerCase();
      const matchesSearch =
        !searchQuery.trim() ||
        name.toLowerCase().includes(query) ||
        species.toLowerCase().includes(query) ||
        color.toLowerCase().includes(query) ||
        age.toString().includes(query);

      const matchesSpecies = !filters.species || species === filters.species;
      const matchesColor = !filters.color || color === filters.color;

      let matchesAge = true;
      if (filters.ageRange) {
        const [min, max] = filters.ageRange.split('-').map(Number);
        if (max) {
          matchesAge = age >= min && age <= max;
        } else {
          matchesAge = age >= min;
        }
      }

      return matchesSearch && matchesSpecies && matchesColor && matchesAge;
    });
  }, [animals, searchQuery, filters]);

  const sortedAnimals = useMemo(() => {
    return [...filteredAnimals].sort((a, b) => {
      let aValue: string | number;
      let bValue: string | number;

      switch (sortBy) {
        case 'name':
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
          break;
        case 'age':
          aValue = a.age;
          bValue = b.age;
          break;
        case 'weight':
          aValue = a.weight;
          bValue = b.weight;
          break;
        default:
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
      }

      if (sortOrder === 'asc') {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
      } else {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
      }
    });
  }, [filteredAnimals, sortBy, sortOrder]);

  const uniqueSpecies = useMemo(() => {
    return [...new Set(animals.map((animal) => animal.species))];
  }, [animals]);

  const uniqueColors = useMemo(() => {
    return [...new Set(animals.map((animal) => animal.color))];
  }, [animals]);

  const clearAllFilters = () => {
    setSearchQuery('');
    setFilters({ species: '', color: '', ageRange: '' });
    setSortBy('name');
    setSortOrder('asc');
  };

  return {
    searchQuery,
    setSearchQuery,
    filters,
    setFilters,
    sortBy,
    setSortBy,
    sortOrder,
    setSortOrder,
    sortedAnimals,
    uniqueSpecies,
    uniqueColors,
    clearAllFilters,
  };
};
