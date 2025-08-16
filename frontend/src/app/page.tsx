import Layout from '@/components/ui/components/Layout';
import Typography from '@/components/ui/atoms/Typography/Typography';
import Card from '@/components/ui/atoms/Card/Card';
import Button from '@/components/ui/atoms/Button/Button';
import Input from '@/components/ui/atoms/Input/Input';

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

        {/* Animals Grid */}
        <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-12'>
          {/* Sample Animal Cards */}
          <Card padding='medium' shadow='medium'>
            <Typography variant='subtitle' size='medium' weight='semibold'>
              Leo the Lion
            </Typography>
            <Typography
              variant='bodySmall'
              size='small'
              color='secondary'
              className='mb-2'
            >
              Species: Lion
            </Typography>
            <Typography
              variant='bodySmall'
              size='small'
              color='secondary'
              className='mb-2'
            >
              Age: 5 years • Weight: 180kg
            </Typography>
            <Typography
              variant='bodySmall'
              size='small'
              color='secondary'
              className='mb-4'
            >
              Color: Golden Brown
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

          <Card padding='medium' shadow='medium'>
            <Typography variant='subtitle' size='medium' weight='semibold'>
              Ellie the Elephant
            </Typography>
            <Typography
              variant='bodySmall'
              size='small'
              color='secondary'
              className='mb-2'
            >
              Species: African Elephant
            </Typography>
            <Typography
              variant='bodySmall'
              size='small'
              color='secondary'
              className='mb-2'
            >
              Age: 12 years • Weight: 4,500kg
            </Typography>
            <Typography
              variant='bodySmall'
              size='small'
              color='secondary'
              className='mb-4'
            >
              Color: Gray
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

          <Card padding='medium' shadow='medium'>
            <Typography variant='subtitle' size='medium' weight='semibold'>
              Zara the Zebra
            </Typography>
            <Typography
              variant='bodySmall'
              size='small'
              color='secondary'
              className='mb-2'
            >
              Species: Plains Zebra
            </Typography>
            <Typography
              variant='bodySmall'
              size='small'
              color='secondary'
              className='mb-2'
            >
              Age: 3 years • Weight: 350kg
            </Typography>
            <Typography
              variant='bodySmall'
              size='small'
              color='secondary'
              className='mb-4'
            >
              Color: Black & White Stripes
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
        </div>

        {/* Add New Animal Button */}
        <div className='text-center'>
          <Button variant='primary' size='large'>
            + Add New Animal
          </Button>
        </div>
      </div>
    </Layout>
  );
}
