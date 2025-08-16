import Layout from '@/components/ui/sharedComponents/Layout';
import Typography from '@/components/ui/atoms/Typography/Typography';
import AnimalsGrid from '@/components/ui/sharedComponents/AnimalsGrid';
import { getAnimals } from './actions/animals';

export default async function Home() {
  const animalsResult = await getAnimals();

  return (
    <Layout>
      <div className='max-w-6xl mx-auto bg-gray-900 rounded-lg shadow-md p-8'>
        <Typography
          variant='title'
          size='large'
          weight='bold'
          className='mb-12'
        >
          🐾 Animals List
        </Typography>

        <AnimalsGrid
          initialAnimals={animalsResult.success ? animalsResult.data : []}
        />
      </div>
    </Layout>
  );
}
