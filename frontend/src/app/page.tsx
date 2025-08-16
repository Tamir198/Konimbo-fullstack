import Layout from '@/components/ui/components/Layout';
import Typography from '@/components/ui/atoms/Typography/Typography';
import Card from '@/components/ui/atoms/Card/Card';
import Button from '@/components/ui/atoms/Button/Button';
import Input from '@/components/ui/atoms/Input/Input';
import AnimalsGrid from '@/components/ui/components/AnimalsGrid';

export default function Home() {
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

        {/* Search and Filter Section */}
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
            />
            <Button variant='primary'>Search</Button>
            <Button variant='outline'>Clear</Button>
          </div>
        </Card>

        <AnimalsGrid />
      </div>
    </Layout>
  );
}
