import Button from '@/components/ui/atoms/Button/Button';
import Card from '@/components/ui/atoms/Card/Card';
import Input from '@/components/ui/atoms/Input/Input';
import Typography from '@/components/ui/atoms/Typography/Typography';

export default function Home() {
  return (
    <div
      style={{
        padding: '2rem',
        maxWidth: '800px',
        margin: '0 auto',
        backgroundColor: 'var(--color-background)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-md)',
        minHeight: 'calc(100vh - 4rem)',
        marginTop: '2rem',
        marginBottom: '2rem',
      }}
    >
      <Typography variant='title' size='large' weight='bold'>
        Konimbo Frontend
      </Typography>

      <div style={{ marginBottom: '2rem' }}>
        <Typography
          variant='subtitle'
          size='medium'
          weight='semibold'
          style={{ marginBottom: '1rem' }}
        >
          Typography Examples
        </Typography>

        <div style={{ marginBottom: '1rem' }}>
          <Typography variant='title' size='large'>
            Title - Large
          </Typography>
          <Typography variant='subtitle' size='medium'>
            Subtitle - Medium
          </Typography>
          <Typography variant='body' size='medium'>
            Body text with medium size
          </Typography>
          <Typography variant='bodySmall' size='small'>
            Small body text
          </Typography>
          <Typography variant='caption' color='secondary'>
            Caption text in secondary color
          </Typography>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <Typography variant='body' weight='bold' color='primary'>
            Bold primary text
          </Typography>
          <Typography variant='body' weight='medium' color='secondary'>
            Medium secondary text
          </Typography>
          <Typography variant='body' weight='normal' color='success'>
            Normal success text
          </Typography>
          <Typography variant='body' weight='semibold' color='warning'>
            Semibold warning text
          </Typography>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <Typography
          variant='subtitle'
          size='medium'
          weight='semibold'
          style={{ marginBottom: '1rem' }}
        >
          Button Examples
        </Typography>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
          <Button variant='primary'>Primary Button</Button>
          <Button variant='secondary'>Secondary</Button>
          <Button variant='outline'>Outline</Button>
        </div>

        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
          <Button size='small'>Small</Button>
          <Button size='medium'>Medium</Button>
          <Button size='large'>Large</Button>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <Typography
          variant='subtitle'
          size='medium'
          weight='semibold'
          style={{ marginBottom: '1rem' }}
        >
          Input Examples
        </Typography>
        <Input
          label='Name'
          placeholder='Enter your name'
          style={{ marginBottom: '1rem' }}
        />
        <Input label='Email' placeholder='Enter your email' type='email' />
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <Typography
          variant='subtitle'
          size='medium'
          weight='semibold'
          style={{ marginBottom: '1rem' }}
        >
          Card Examples
        </Typography>
        <Card padding='large' shadow='medium' style={{ marginBottom: '1rem' }}>
          <Typography variant='subtitle' size='medium' weight='semibold'>
            Card with Large Padding
          </Typography>
          <Typography variant='bodySmall' size='small' color='secondary'>
            This card has large padding and medium shadow.
          </Typography>
        </Card>

        <Card padding='small' shadow='none'>
          <Typography variant='subtitle' size='small' weight='medium'>
            Card with Small Padding
          </Typography>
          <Typography variant='bodySmall' size='small' color='secondary'>
            This card has small padding and no shadow.
          </Typography>
        </Card>
      </div>
    </div>
  );
}
