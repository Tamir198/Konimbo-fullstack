import Layout from '@/components/ui/components/Layout';
import Typography from '@/components/ui/atoms/Typography/Typography';
import Card from '@/components/ui/atoms/Card/Card';
import Button from '@/components/ui/atoms/Button/Button';

export default function AnimalDetail() {
  return (
    <Layout>
      <div
        style={{
          backgroundColor: 'var(--color-background)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-md)',
          padding: 'var(--spacing-2xl)',
          maxWidth: '800px',
          margin: '0 auto',
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 'var(--spacing-xl)',
          }}
        >
          <Typography variant='title' size='large' weight='bold'>
            🦁 Leo the Lion
          </Typography>
          <div style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
            <Button variant='outline' size='small'>
              Edit
            </Button>
            <Button variant='ghost' size='small' color='error'>
              Delete
            </Button>
          </div>
        </div>

        {/* Animal Details */}
        <Card
          padding='large'
          shadow='medium'
          style={{ marginBottom: 'var(--spacing-lg)' }}
        >
          <Typography
            variant='subtitle'
            size='medium'
            weight='semibold'
            style={{ marginBottom: 'var(--spacing-lg)' }}
          >
            Animal Information
          </Typography>

          <div style={{ display: 'grid', gap: 'var(--spacing-md)' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '120px 1fr',
                alignItems: 'center',
              }}
            >
              <Typography variant='body' weight='medium'>
                Name:
              </Typography>
              <Typography variant='body'>Leo</Typography>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '120px 1fr',
                alignItems: 'center',
              }}
            >
              <Typography variant='body' weight='medium'>
                Species:
              </Typography>
              <Typography variant='body'>Lion (Panthera leo)</Typography>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '120px 1fr',
                alignItems: 'center',
              }}
            >
              <Typography variant='body' weight='medium'>
                Age:
              </Typography>
              <Typography variant='body'>5 years old</Typography>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '120px 1fr',
                alignItems: 'center',
              }}
            >
              <Typography variant='body' weight='medium'>
                Weight:
              </Typography>
              <Typography variant='body'>180 kg</Typography>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '120px 1fr',
                alignItems: 'center',
              }}
            >
              <Typography variant='body' weight='medium'>
                Color:
              </Typography>
              <Typography variant='body'>Golden Brown</Typography>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '120px 1fr',
                alignItems: 'center',
              }}
            >
              <Typography variant='body' weight='medium'>
                Added:
              </Typography>
              <Typography variant='body'>January 15, 2024</Typography>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '120px 1fr',
                alignItems: 'center',
              }}
            >
              <Typography variant='body' weight='medium'>
                Last Updated:
              </Typography>
              <Typography variant='body'>March 22, 2024</Typography>
            </div>
          </div>
        </Card>

        {/* Additional Notes */}
        <Card padding='large' shadow='medium'>
          <Typography
            variant='subtitle'
            size='medium'
            weight='semibold'
            style={{ marginBottom: 'var(--spacing-md)' }}
          >
            Notes
          </Typography>
          <Typography variant='body' color='secondary'>
            Leo is a healthy adult male lion. He enjoys playing with enrichment
            toys and has a calm temperament. His favorite food is beef and he
            loves to sunbathe in the morning hours.
          </Typography>
        </Card>

        {/* Back Button */}
        <div style={{ marginTop: 'var(--spacing-xl)', textAlign: 'center' }}>
          <Button variant='outline' size='medium'>
            ← Back to Animals List
          </Button>
        </div>
      </div>
    </Layout>
  );
}
