'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

export const Navigation = () => {
  return (
    <header className="bg-background top-0 sticky z-50">
      <nav className="container flex items-center justify-between p-2 pl-0">
        <Link href="/" className="p-4">
          <ArrowLeft />
        </Link>
        <Image
          src="https://placehold.co/100x55/png"
          alt={`${process.env.NEXT_PUBLIC_APP_NAME} logo`}
          width={100}
          height={55}
          loading="lazy"
        />
        <Image
          src="https://placehold.co/50x25/png"
          alt={`${process.env.NEXT_PUBLIC_APP_NAME} logo`}
          width={50}
          height={25}
          loading="lazy"
        />
      </nav>
    </header>
  );
};
