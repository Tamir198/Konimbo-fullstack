'use client';

import React from 'react';
import Typography from '@/components/ui/atoms/Typography/Typography';
import Button from '@/components/ui/atoms/Button/Button';
import Card from '@/components/ui/atoms/Card/Card';
import Input from '@/components/ui/atoms/Input/Input';
import SelectInput from '@/components/ui/atoms/SelectInput/SelectInput';
import AnimalCard from './AnimalCard';
import { useAnimals } from '@/hooks/useAnimals';
import { useAnimalFilters } from '@/hooks/useAnimalFilters';
import { Animal } from '@/services/animalService';

interface AnimalsGridProps {
  initialAnimals?: Animal[];
}

const AnimalsGrid: React.FC<AnimalsGridProps> = ({ initialAnimals = [] }) => {
  const { animals, loading, error } = useAnimals();
  const {
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
  } = useAnimalFilters(initialAnimals.length > 0 ? initialAnimals : animals);

  if (loading && initialAnimals.length === 0) {
    return (
      <div className='text-center py-8'>
        <Typography variant='body' color='secondary'>
          Loading...
        </Typography>
      </div>
    );
  }

  if (error && initialAnimals.length === 0) {
    return (
      <div className='text-center py-8'>
        <Typography variant='body' className='mb-4'>
          {error}
        </Typography>
        <Button variant='primary' onClick={() => window.location.reload()}>
          Try Again
        </Button>
      </div>
    );
  }

  const hasActiveFilters =
    searchQuery.trim() || filters.species || filters.color || filters.ageRange;

  return (
    <>
      <Card padding='large' shadow='medium' className='mb-12'>
        <Typography
          variant='subtitle'
          size='medium'
          weight='semibold'
          className='mb-6'
        >
          Search & Filter
        </Typography>

        <div className='space-y-4'>
          <div className='flex gap-4 items-end'>
            <Input
              label='Search Animals'
              placeholder='Search by name, species, color, or age...'
              className='flex-1'
              value={searchQuery}
              onChange={setSearchQuery}
            />
            <Button variant='outline' onClick={() => setSearchQuery('')}>
              Clear Search
            </Button>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
            <SelectInput
              label='Species'
              value={filters.species}
              onChange={(value) =>
                setFilters((prev) => ({ ...prev, species: value }))
              }
              options={uniqueSpecies.map((species) => ({
                value: species,
                label: species,
              }))}
              placeholder='All Species'
            />

            <SelectInput
              label='Color'
              value={filters.color}
              onChange={(value) =>
                setFilters((prev) => ({ ...prev, color: value }))
              }
              options={uniqueColors.map((color) => ({
                value: color,
                label: color,
              }))}
              placeholder='All Colors'
            />

            <SelectInput
              label='Age Range'
              value={filters.ageRange}
              onChange={(value) =>
                setFilters((prev) => ({ ...prev, ageRange: value }))
              }
              options={[
                { value: '0-5', label: '0-5 years' },
                { value: '6-10', label: '6-10 years' },
                { value: '11-15', label: '11-15 years' },
                { value: '16-', label: '16+ years' },
              ]}
              placeholder='All Ages'
            />

            <div>
              <label className='block text-sm font-medium text-gray-300 mb-2'>
                Sort By
              </label>
              <div className='flex gap-2'>
                <select
                  value={sortBy}
                  onChange={(e) =>
                    setSortBy(e.target.value as 'name' | 'age' | 'weight')
                  }
                  className='flex-1 px-3 py-2 border border-gray-600 rounded-md bg-gray-900 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                >
                  <option value='name'>Name</option>
                  <option value='age'>Age</option>
                  <option value='weight'>Weight</option>
                </select>
                <Button
                  variant='outline'
                  size='small'
                  onClick={() =>
                    setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'))
                  }
                  className='px-3'
                >
                  {sortOrder === 'asc' ? '↑' : '↓'}
                </Button>
              </div>
            </div>
          </div>

          {hasActiveFilters && (
            <div className='flex justify-end'>
              <Button variant='secondary' onClick={clearAllFilters}>
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </Card>

      {sortedAnimals.length === 0 ? (
        <div className='text-center py-8'>
          <Typography variant='body' color='secondary'>
            No animals found.
          </Typography>
        </div>
      ) : (
        <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-12'>
          {sortedAnimals.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>
      )}
    </>
  );
};

export default AnimalsGrid;
