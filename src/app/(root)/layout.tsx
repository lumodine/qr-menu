import React from 'react';
import { Navigation } from './components/navigation';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
}
