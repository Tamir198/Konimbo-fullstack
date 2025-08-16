'use client';

import React, { useEffect, useState } from 'react';
import Typography from '@/components/ui/atoms/Typography/Typography';
import Button from '@/components/ui/atoms/Button/Button';
import Card from '@/components/ui/atoms/Card/Card';
import Input from '@/components/ui/atoms/Input/Input';
import { animalService, Animal } from '@/services/animalService';
import AnimalCard from './AnimalCard';

const AnimalsGrid: React.FC = () => {
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await animalService.getAllAnimals();
        setAnimals(data);
      } catch (err) {
        console.error('Failed to fetch animals:', err);
        setError('Failed to load animals. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchAnimals();
  }, []);

  const filteredAnimals = animals.filter(({ name, species, color, age }) => {
    if (!searchQuery.trim()) return true;

    const query = searchQuery.toLowerCase();
    return (
      name.toLowerCase().includes(query) ||
      species.toLowerCase().includes(query) ||
      color.toLowerCase().includes(query) ||
      age.toString().includes(query)
    );
  });

  if (loading) {
    return (
      <div className='text-center py-8'>
        <Typography variant='body' color='secondary'>
          Loading...
        </Typography>
      </div>
    );
  }

  if (error) {
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

  if (animals.length === 0) {
    return (
      <div className='text-center py-8'>
        <Typography variant='body' color='secondary'>
          No animals found.
        </Typography>
      </div>
    );
  }

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

        <div className='flex gap-4 items-end'>
          <Input
            label='Search Animals'
            placeholder='Search by name, species, or color...'
            className='flex-1'
            value={searchQuery}
            onChange={setSearchQuery}
          />
          <Button variant='outline' onClick={() => setSearchQuery('')}>
            Clear
          </Button>
        </div>
      </Card>

      <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-12'>
        {filteredAnimals.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </>
  );
};

export default AnimalsGrid;
