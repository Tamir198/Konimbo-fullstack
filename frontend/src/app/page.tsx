import Button from '@/components/ui/atoms/Button/Button';
import Card from '@/components/ui/atoms/Card/Card';
import Input from '@/components/ui/atoms/Input/Input';

export default function Home() {
  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Konimbo Frontend</h1>

      <div style={{ marginBottom: '2rem' }}>
        <h2>Button Examples:</h2>
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
        <h2>Input Examples:</h2>
        <Input
          label='Name'
          placeholder='Enter your name'
          style={{ marginBottom: '1rem' }}
        />
        <Input label='Email' placeholder='Enter your email' type='email' />
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2>Card Examples:</h2>
        <Card padding='large' shadow='medium' style={{ marginBottom: '1rem' }}>
          <h3>Card with Large Padding</h3>
          <p>This card has large padding and medium shadow.</p>
        </Card>

        <Card padding='small' shadow='none'>
          <h3>Card with Small Padding</h3>
          <p>This card has small padding and no shadow.</p>
        </Card>
      </div>
    </div>
  );
}
