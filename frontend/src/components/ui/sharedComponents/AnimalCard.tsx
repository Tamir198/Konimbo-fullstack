'use client';

import React from 'react';
import Link from 'next/link';
import Card from '@/components/ui/atoms/Card/Card';
import Typography from '@/components/ui/atoms/Typography/Typography';
import Button from '@/components/ui/atoms/Button/Button';
import { Animal } from '@/services/animalService';

interface AnimalCardProps {
  animal: Animal;
}

const AnimalCard: React.FC<AnimalCardProps> = ({ animal }) => {
  return (
    <Card padding='medium' shadow='medium'>
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
        <Link href={`/animals/${animal.id}`}>
          <Button variant='primary' size='medium'>
            View Details
          </Button>
        </Link>
        <Link href='/animals/new'>
          <Button
            variant='primary'
            size='medium'
            className='w-[var(--spacing-2xl)]'
          >
            Edit
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default AnimalCard;
