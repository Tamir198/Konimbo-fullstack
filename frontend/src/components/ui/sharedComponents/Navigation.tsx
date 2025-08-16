'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className='bg-gray-900 border-b border-gray-700 shadow-sm sticky top-0 z-50'>
      <div className='max-w-6xl mx-auto px-6 flex items-center justify-between h-16'>
        <Link
          href='/'
          className='text-xl font-bold text-gray-100 hover:opacity-80 transition-opacity'
        >
          🐾 Konimbo
        </Link>

        <div className='flex gap-6 items-center'>
          <Link
            href='/'
            className={`px-4 py-2 rounded-md transition-colors ${
              isActive('/')
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'text-gray-300 hover:bg-gray-800'
            }`}
          >
            Animals
          </Link>
          <Link
            href='/animals/new'
            className={`px-4 py-2 rounded-md transition-colors ${
              isActive('/animals/new')
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'text-gray-300 hover:bg-gray-800'
            }`}
          >
            Add Animal
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
