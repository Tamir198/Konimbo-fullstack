import Layout from '@/components/ui/sharedComponents/Layout';
import Typography from '@/components/ui/atoms/Typography/Typography';
import Card from '@/components/ui/atoms/Card/Card';
import Button from '@/components/ui/atoms/Button/Button';
import Link from 'next/link';
import { animalService } from '@/services/animalService';

interface AnimalDetailsPageProps {
  params: {
    id: string;
  };
}

export default async function AnimalDetailsPage({
  params,
}: AnimalDetailsPageProps) {
  const animal = await animalService.getAnimalById(params.id);

  if (!animal) {
    return (
      <Layout>
        <div className='max-w-4xl mx-auto bg-gray-900 rounded-lg shadow-md p-8'>
          <Typography
            variant='title'
            size='large'
            weight='bold'
            className='mb-8'
          >
            Animal Not Found
          </Typography>
          <Typography variant='body' color='secondary' className='mb-6'>
            The animal you're looking for doesn't exist.
          </Typography>
          <Link href='/'>
            <Button variant='primary' size='medium'>
              ← Back to Animals List
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className='max-w-4xl mx-auto bg-gray-900 rounded-lg shadow-md p-8'>
        <div className='flex justify-between items-center mb-8'>
          <Typography variant='title' size='large' weight='bold'>
            {animal.name}
          </Typography>
          <div className='flex gap-3'>
            <Link href={`/animals/${animal.id}/edit`}>
              <Button variant='outline' size='medium'>
                Edit
              </Button>
            </Link>
          </div>
        </div>

        <Card padding='large' shadow='medium' className='mb-6'>
          <Typography
            variant='subtitle'
            size='medium'
            weight='semibold'
            className='mb-6'
          >
            Animal Information
          </Typography>

          <div className='grid gap-4'>
            <div className='grid grid-cols-[120px_1fr] items-center'>
              <Typography variant='body' weight='medium'>
                Name:
              </Typography>
              <Typography variant='body'>{animal.name}</Typography>
            </div>

            <div className='grid grid-cols-[120px_1fr] items-center'>
              <Typography variant='body' weight='medium'>
                Species:
              </Typography>
              <Typography variant='body'>{animal.species}</Typography>
            </div>

            <div className='grid grid-cols-[120px_1fr] items-center'>
              <Typography variant='body' weight='medium'>
                Age:
              </Typography>
              <Typography variant='body'>{animal.age} years old</Typography>
            </div>

            <div className='grid grid-cols-[120px_1fr] items-center'>
              <Typography variant='body' weight='medium'>
                Weight:
              </Typography>
              <Typography variant='body'>{animal.weight} kg</Typography>
            </div>

            <div className='grid grid-cols-[120px_1fr] items-center'>
              <Typography variant='body' weight='medium'>
                Color:
              </Typography>
              <Typography variant='body'>{animal.color}</Typography>
            </div>

            <div className='grid grid-cols-[120px_1fr] items-center'>
              <Typography variant='body' weight='medium'>
                ID:
              </Typography>
              <Typography variant='body' color='secondary'>
                {animal.id}
              </Typography>
            </div>
          </div>
        </Card>

        <Card padding='large' shadow='medium' className='mb-6'>
          <Typography
            variant='subtitle'
            size='medium'
            weight='semibold'
            className='mb-4'
          >
            Additional Details
          </Typography>
          <Typography variant='body' color='secondary'>
            This is a {animal.age}-year-old {animal.species.toLowerCase()} with
            a beautiful {animal.color} coat.
            {animal.name} is a healthy animal that enjoys their time in our
            care.
          </Typography>
        </Card>

        <div className='text-center'>
          <Link href='/'>
            <Button variant='outline' size='medium'>
              ← Back to Animals List
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
