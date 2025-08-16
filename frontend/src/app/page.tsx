import Layout from '@/components/ui/components/Layout';
import Typography from '@/components/ui/atoms/Typography/Typography';
import Card from '@/components/ui/atoms/Card/Card';
import Button from '@/components/ui/atoms/Button/Button';
import Input from '@/components/ui/atoms/Input/Input';

export default function Home() {
  return (
    <Layout>
      <div
        style={{
          backgroundColor: 'var(--color-background)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-md)',
          padding: 'var(--spacing-2xl)',
        }}
      >
        <Typography
          variant='title'
          size='large'
          weight='bold'
          style={{ marginBottom: 'var(--spacing-xl)' }}
        >
          🐾 Animals List
        </Typography>

        {/* Search and Filter Section */}
        <Card
          padding='large'
          shadow='medium'
          style={{ marginBottom: 'var(--spacing-xl)' }}
        >
          <Typography
            variant='subtitle'
            size='medium'
            weight='semibold'
            style={{ marginBottom: 'var(--spacing-lg)' }}
          >
            Search & Filter
          </Typography>

          <div
            style={{
              display: 'flex',
              gap: 'var(--spacing-md)',
              alignItems: 'end',
            }}
          >
            <Input
              label='Search Animals'
              placeholder='Search by name, species, or color...'
              style={{ flex: 1 }}
            />
            <Button variant='primary'>Search</Button>
            <Button variant='outline'>Clear</Button>
          </div>
        </Card>

        {/* Animals Grid */}
        <div
          style={{
            display: 'grid',
            gap: 'var(--spacing-lg)',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          }}
        >
          {/* Sample Animal Cards */}
          <Card padding='medium' shadow='medium'>
            <Typography variant='subtitle' size='medium' weight='semibold'>
              Leo the Lion
            </Typography>
            <Typography
              variant='bodySmall'
              size='small'
              color='secondary'
              style={{ marginBottom: 'var(--spacing-sm)' }}
            >
              Species: Lion
            </Typography>
            <Typography
              variant='bodySmall'
              size='small'
              color='secondary'
              style={{ marginBottom: 'var(--spacing-sm)' }}
            >
              Age: 5 years • Weight: 180kg
            </Typography>
            <Typography
              variant='bodySmall'
              size='small'
              color='secondary'
              style={{ marginBottom: 'var(--spacing-md)' }}
            >
              Color: Golden Brown
            </Typography>
            <div style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
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
              style={{ marginBottom: 'var(--spacing-sm)' }}
            >
              Species: African Elephant
            </Typography>
            <Typography
              variant='bodySmall'
              size='small'
              color='secondary'
              style={{ marginBottom: 'var(--spacing-sm)' }}
            >
              Age: 12 years • Weight: 3000kg
            </Typography>
            <Typography
              variant='bodySmall'
              size='small'
              color='secondary'
              style={{ marginBottom: 'var(--spacing-md)' }}
            >
              Color: Gray
            </Typography>
            <div style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
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
              Ziggy the Zebra
            </Typography>
            <Typography
              variant='bodySmall'
              size='small'
              color='secondary'
              style={{ marginBottom: 'var(--spacing-sm)' }}
            >
              Species: Plains Zebra
            </Typography>
            <Typography
              variant='bodySmall'
              size='small'
              color='secondary'
              style={{ marginBottom: 'var(--spacing-sm)' }}
            >
              Age: 3 years • Weight: 350kg
            </Typography>
            <Typography
              variant='bodySmall'
              size='small'
              color='secondary'
              style={{ marginBottom: 'var(--spacing-md)' }}
            >
              Color: Black & White
            </Typography>
            <div style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
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
        <div style={{ marginTop: 'var(--spacing-xl)', textAlign: 'center' }}>
          <Button variant='primary' size='large'>
            + Add New Animal
          </Button>
        </div>
      </div>
    </Layout>
  );
}
