'use client';

import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useRouter } from 'next/navigation';
import Layout from '@/components/ui/sharedComponents/Layout';
import Typography from '@/components/ui/atoms/Typography/Typography';
import Card from '@/components/ui/atoms/Card/Card';
import Button from '@/components/ui/atoms/Button/Button';
import Input from '@/components/ui/atoms/Input/Input';
import Link from 'next/link';
import { animalService } from '@/services/animalService';
import { FORM_VALIDATION, ERROR_MESSAGES, TEXT } from '@/constants';

const addAnimalSchema = z.object({
  name: z
    .string()
    .min(1, ERROR_MESSAGES.NAME_REQUIRED)
    .min(FORM_VALIDATION.MIN_NAME_LENGTH, ERROR_MESSAGES.NAME_MIN_LENGTH),
  species: z
    .string()
    .min(1, ERROR_MESSAGES.SPECIES_REQUIRED)
    .min(FORM_VALIDATION.MIN_SPECIES_LENGTH, ERROR_MESSAGES.SPECIES_MIN_LENGTH),
  age: z
    .number()
    .min(FORM_VALIDATION.MIN_AGE, ERROR_MESSAGES.AGE_MIN)
    .max(FORM_VALIDATION.MAX_AGE, ERROR_MESSAGES.AGE_MAX),
  weight: z
    .number()
    .min(FORM_VALIDATION.MIN_WEIGHT, ERROR_MESSAGES.WEIGHT_MIN)
    .max(FORM_VALIDATION.MAX_WEIGHT, ERROR_MESSAGES.WEIGHT_MAX),
  color: z
    .string()
    .min(1, ERROR_MESSAGES.COLOR_REQUIRED)
    .min(FORM_VALIDATION.MIN_COLOR_LENGTH, ERROR_MESSAGES.COLOR_MIN_LENGTH),
});

type AddAnimalFormData = z.infer<typeof addAnimalSchema>;

export default function AddAnimal() {
  const router = useRouter();
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
      await animalService.createAnimal(data);
      reset();
      router.push('/');
    } catch (error) {
      alert(ERROR_MESSAGES.ANIMAL_CREATE_FAILED);
    }
  };

  return (
    <Layout>
      <div className='max-w-2xl mx-auto bg-gray-900 rounded-lg shadow-md p-8'>
        <Typography variant='title' size='large' weight='bold' className='mb-8'>
          {TEXT.ADD_NEW_ANIMAL}
        </Typography>

        <Card padding='large' shadow='medium'>
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
            <Controller
              name='name'
              control={control}
              render={({ field }) => (
                <Input
                  label={TEXT.ANIMAL_NAME}
                  placeholder={TEXT.ANIMAL_NAME_PLACEHOLDER}
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
                  label={TEXT.SPECIES}
                  placeholder={TEXT.SPECIES_PLACEHOLDER}
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
                    label={TEXT.AGE_YEARS}
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
                    label={TEXT.WEIGHT_KG}
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
                  label={TEXT.COLOR}
                  placeholder={TEXT.COLOR_PLACEHOLDER}
                  value={field.value}
                  onChange={field.onChange}
                  error={errors.color?.message}
                />
              )}
            />

            <div className='flex gap-4 mt-8 justify-end'>
              <Link href='/'>
                <Button variant='outline' size='medium'>
                  {TEXT.CANCEL}
                </Button>
              </Link>
              <Button
                variant='primary'
                size='medium'
                type='submit'
                disabled={isSubmitting}
              >
                {isSubmitting ? TEXT.CREATING : TEXT.CREATE_ANIMAL}
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </Layout>
  );
}
