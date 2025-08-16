import Layout from '@/components/ui/components/Layout';
import Typography from '@/components/ui/atoms/Typography/Typography';
import Card from '@/components/ui/atoms/Card/Card';
import Button from '@/components/ui/atoms/Button/Button';
import Input from '@/components/ui/atoms/Input/Input';


export default function AddAnimal() {
  return (
    <Layout>
      <div
        style={{
          backgroundColor: 'var(--color-background)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-md)',
          padding: 'var(--spacing-2xl)',
          maxWidth: '600px',
          margin: '0 auto',
        }}
      >
        <Typography
          variant='title'
          size='large'
          weight='bold'
          style={{ marginBottom: 'var(--spacing-xl)' }}
        >
          🐾 Add New Animal
        </Typography>

        <Card padding='large' shadow='medium'>
          <form>
            <div style={{ display: 'grid', gap: 'var(--spacing-lg)' }}>
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

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 'var(--spacing-md)',
                }}
              >
                <Input
                  label='Age (years)'
                  type='number'
                  placeholder='0'
                  min='0'
                  required
                />

                <Input
                  label='Weight (kg)'
                  type='number'
                  placeholder='0'
                  min='0'
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

            <div
              style={{
                display: 'flex',
                gap: 'var(--spacing-md)',
                marginTop: 'var(--spacing-xl)',
                justifyContent: 'flex-end',
              }}
            >
              <Button variant='outline' type='button'>
                Cancel
              </Button>
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
