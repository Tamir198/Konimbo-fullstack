'use client';

import React, { useEffect, useState } from 'react';
import Typography from '@/components/ui/atoms/Typography/Typography';
import Button from '@/components/ui/atoms/Button/Button';
import { animalService, Animal } from '@/services/animalService';
import AnimalCard from './AnimalCard';

const AnimalsGrid: React.FC = () => {
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
    <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-12'>
      {animals.map((animal) => (
        <AnimalCard key={animal.id} animal={animal} />
      ))}
    </div>
  );
};

export default AnimalsGrid;
