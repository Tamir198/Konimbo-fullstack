'use client';

import React from 'react';
import Card from '@/components/ui/atoms/Card/Card';
import Typography from '@/components/ui/atoms/Typography/Typography';
import Button from '@/components/ui/atoms/Button/Button';

interface Animal {
  id: string;
  name: string;
  species: string;
  age: number;
  weight: number;
  color: string;
}

interface AnimalsGridProps {
  animals?: Animal[];
  loading?: boolean;
}

const AnimalsGrid: React.FC<AnimalsGridProps> = ({
  animals = [],
  loading = false,
}) => {
  // Sample data for now - will be replaced with API data
  const sampleAnimals: Animal[] = [
    {
      id: '1',
      name: 'Leo the Lion',
      species: 'Lion',
      age: 5,
      weight: 180,
      color: 'Golden Brown',
    },
    {
      id: '2',
      name: 'Ellie the Elephant',
      species: 'African Elephant',
      age: 12,
      weight: 4500,
      color: 'Gray',
    },
    {
      id: '3',
      name: 'Zara the Zebra',
      species: 'Plains Zebra',
      age: 3,
      weight: 350,
      color: 'Black & White Stripes',
    },
  ];

  const displayAnimals = animals.length > 0 ? animals : sampleAnimals;

  if (loading) {
    return (
      <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-12'>
        {[1, 2, 3].map((i) => (
          <Card key={i} padding='medium' shadow='medium'>
            <div className='animate-pulse'>
              <div className='h-6 bg-gray-700 rounded mb-4'></div>
              <div className='h-4 bg-gray-700 rounded mb-2'></div>
              <div className='h-4 bg-gray-700 rounded mb-2'></div>
              <div className='h-4 bg-gray-700 rounded mb-4'></div>
              <div className='flex gap-2'>
                <div className='h-8 bg-gray-700 rounded w-20'></div>
                <div className='h-8 bg-gray-700 rounded w-16'></div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-12'>
      {displayAnimals.map((animal) => (
        <Card key={animal.id} padding='medium' shadow='medium'>
          <Typography variant='subtitle' size='medium' weight='semibold'>
            {animal.name}
          </Typography>
          <Typography
            variant='bodySmall'
            size='small'
            color='secondary'
            className='mb-2'
          >
            Species: {animal.species}
          </Typography>
          <Typography
            variant='bodySmall'
            size='small'
            color='secondary'
            className='mb-2'
          >
            Age: {animal.age} years • Weight: {animal.weight}kg
          </Typography>
          <Typography
            variant='bodySmall'
            size='small'
            color='secondary'
            className='mb-4'
          >
            Color: {animal.color}
          </Typography>
          <div className='flex gap-2'>
            <Button variant='outline' size='small'>
              View Details
            </Button>
            <Button variant='ghost' size='small'>
              Edit
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default AnimalsGrid;
