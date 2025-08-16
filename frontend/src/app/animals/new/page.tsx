'use client';

import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Layout from '@/components/ui/sharedComponents/Layout';
import Typography from '@/components/ui/atoms/Typography/Typography';
import Card from '@/components/ui/atoms/Card/Card';
import Button from '@/components/ui/atoms/Button/Button';
import Input from '@/components/ui/atoms/Input/Input';
import Link from 'next/link';

const addAnimalSchema = z.object({
  name: z
    .string()
    .min(1, 'Name is required')
    .min(2, 'Name must be at least 2 characters'),
  species: z
    .string()
    .min(1, 'Species is required')
    .min(2, 'Species must be at least 2 characters'),
  age: z
    .number()
    .min(0, 'Age must be 0 or greater')
    .max(100, 'Age must be 100 or less'),
  weight: z
    .number()
    .min(0.1, 'Weight must be greater than 0')
    .max(1000, 'Weight must be 1000kg or less'),
  color: z
    .string()
    .min(1, 'Color is required')
    .min(2, 'Color must be at least 2 characters'),
});

type AddAnimalFormData = z.infer<typeof addAnimalSchema>;

export default function AddAnimal() {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<AddAnimalFormData>({
    resolver: zodResolver(addAnimalSchema),
    defaultValues: {
      name: '',
      species: '',
      age: 0,
      weight: 0,
      color: '',
    },
  });

  const onSubmit = async (data: AddAnimalFormData) => {
    try {
      console.log('Form data:', data);
      // TODO: Call API to create animal
      // await animalService.createAnimal(data);

      // Reset form after successful submission
      reset();
      alert('Animal added successfully!');
    } catch (error) {
      console.error('Error adding animal:', error);
      alert('Failed to add animal. Please try again.');
    }
  };

  return (
    <Layout>
      <div className='max-w-2xl mx-auto bg-gray-900 rounded-lg shadow-md p-8'>
        <Typography variant='title' size='large' weight='bold' className='mb-8'>
          🐾 Add New Animal
        </Typography>

        <Card padding='large' shadow='medium'>
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
            <Controller
              name='name'
              control={control}
              render={({ field }) => (
                <Input
                  label='Animal Name'
                  placeholder='Enter animal name'
                  value={field.value}
                  onChange={field.onChange}
                  error={errors.name?.message}
                />
              )}
            />

            <Controller
              name='species'
              control={control}
              render={({ field }) => (
                <Input
                  label='Species'
                  placeholder='Enter species (e.g., Lion, Elephant)'
                  value={field.value}
                  onChange={field.onChange}
                  error={errors.species?.message}
                />
              )}
            />

            <div className='grid grid-cols-2 gap-4'>
              <Controller
                name='age'
                control={control}
                render={({ field }) => (
                  <Input
                    label='Age (years)'
                    type='number'
                    placeholder='0'
                    value={field.value}
                    onChange={field.onChange}
                    error={errors.age?.message}
                  />
                )}
              />

              <Controller
                name='weight'
                control={control}
                render={({ field }) => (
                  <Input
                    label='Weight (kg)'
                    type='number'
                    placeholder='0'
                    step='0.1'
                    value={field.value}
                    onChange={field.onChange}
                    error={errors.weight?.message}
                  />
                )}
              />
            </div>

            <Controller
              name='color'
              control={control}
              render={({ field }) => (
                <Input
                  label='Color'
                  placeholder='Enter color description'
                  value={field.value}
                  onChange={field.onChange}
                  error={errors.color?.message}
                />
              )}
            />

            <div className='flex gap-4 mt-8 justify-end'>
              <Link href='/'>
                <Button variant='outline' type='button'>
                  Cancel
                </Button>
              </Link>
              <Button variant='primary' type='submit' disabled={isSubmitting}>
                {isSubmitting ? 'Adding...' : 'Add Animal'}
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </Layout>
  );
}
