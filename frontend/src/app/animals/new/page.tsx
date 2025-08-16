import Layout from '@/components/ui/sharedComponents/Layout';
import Typography from '@/components/ui/atoms/Typography/Typography';
import Card from '@/components/ui/atoms/Card/Card';
import Button from '@/components/ui/atoms/Button/Button';
import Input from '@/components/ui/atoms/Input/Input';
import Link from 'next/link';

export default function AddAnimal() {
  return (
    <Layout>
      <div className='max-w-2xl mx-auto bg-gray-900 rounded-lg shadow-md p-8'>
        <Typography variant='title' size='large' weight='bold' className='mb-8'>
          🐾 Add New Animal
        </Typography>

        <Card padding='large' shadow='medium'>
          <form>
            <div className='space-y-6'>
              <Input
                label='Animal Name'
                placeholder='Enter animal name'
                required
              />

              <Input
                label='Species'
                placeholder='Enter species (e.g., Lion, Elephant)'
                required
              />

              <div className='grid grid-cols-2 gap-4'>
                <Input
                  label='Age (years)'
                  type='number'
                  placeholder='0'
                  required
                />

                <Input
                  label='Weight (kg)'
                  type='number'
                  placeholder='0'
                  step='0.1'
                  required
                />
              </div>

              <Input
                label='Color'
                placeholder='Enter color description'
                required
              />
            </div>

            <div className='flex gap-4 mt-8 justify-end'>
              <Link href='/'>
                <Button variant='outline' type='button'>
                  Cancel
                </Button>
              </Link>
              <Button variant='primary' type='submit'>
                Add Animal
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </Layout>
  );
}
