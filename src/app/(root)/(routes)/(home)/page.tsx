'use client';
import data, { type Category } from '@/data';

import {
  Card,
  CardContent,
} from "@/components/ui/card";
import Image from 'next/image';
import Link from 'next/link';
function CategoryCard({ id, title, description, image, products }: Category) {
  return (
    <Link href={`/c/${id}`}>
      <Card className="h-full">
        <CardContent className="flex items-center justify-between flex-col h-full text-center">
          <Image
            src={image}
            alt={title}
            width={80}
            height={80}
            loading="lazy"
            className="rounded-full"
          />
          {
            description && <p className="mt-2 text-xs text-gray-400">{description}</p>
          }
          <p className="mt-2 text-sm font-semibold">
            {title} ({products.length})
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}

export default function HomePage() {
  return (
    <div className="p-4">
      <h4 className="mb-6 text-2xl font-semibold">
        Kategoriler
      </h4>
      <section className="grid grid-cols-card gap-2">
        {
          data.map(category => <CategoryCard key={category.id} {...category} />)
        }
      </section>
    </div>
  );
}
