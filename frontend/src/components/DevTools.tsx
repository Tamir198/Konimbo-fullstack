'use client';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export default function DevTools() {
  if (process.env.NODE_ENV === 'development') {
    return <ReactQueryDevtools initialIsOpen={false} />;
  }
  return null;
}
