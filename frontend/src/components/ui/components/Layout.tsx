import React from 'react';
import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='min-h-screen bg-gray-800'>
      <Navigation />
      <main className='p-8 max-w-7xl mx-auto'>{children}</main>
    </div>
  );
};

export default Layout;
